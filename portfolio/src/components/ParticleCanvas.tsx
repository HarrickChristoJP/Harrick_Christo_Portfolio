import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, active: false, radius: 130 };
    let isVisible = true;

    // Palette per theme
    const isDark = theme === 'dark';
    const colors = isDark
      ? ['rgba(56, 189, 248, ', 'rgba(52, 211, 153, ', 'rgba(129, 140, 248, '] // sky, emerald, indigo
      : ['rgba(37, 99, 235, ', 'rgba(5, 150, 105, ', 'rgba(99, 102, 241, ']; // blue, emerald, indigo

    const lineBaseColor = isDark
      ? 'rgba(56, 189, 248, '
      : 'rgba(37, 99, 235, ';

    const initParticles = (w: number, h: number) => {
      const count = Math.min(Math.floor((w * h) / 18000), 55); // responsive count (20-55)
      const list: Particle[] = [];

      for (let i = 0; i < count; i++) {
        const baseRadius = Math.random() * 1.5 + 1.2;
        const colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        list.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          color: colorPrefix,
          alpha: Math.random() * 0.3 + 0.35,
        });
      }
      particles = list;
    };

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles(width, height);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver((entries) => {
      isVisible = entries[0]?.isIntersecting ?? true;
    }, { threshold: 0.05 });
    intersectionObserver.observe(container);

    // Mouse interactions
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    // Attach interaction to section parent
    const parentSection = container.closest('section') || container;
    parentSection.addEventListener('mousemove', handleMouseMove as EventListener);
    parentSection.addEventListener('mouseleave', handleMouseLeave as EventListener);
    parentSection.addEventListener('touchmove', handleTouchMove as EventListener, { passive: true });
    parentSection.addEventListener('touchend', handleTouchEnd as EventListener);

    // Animation Render Loop
    const render = () => {
      if (isVisible && width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.x += p.vx;
          p.y += p.vy;

          // Wall bounce
          if (p.x < 0) { p.x = 0; p.vx *= -1; }
          else if (p.x > width) { p.x = width; p.vx *= -1; }
          if (p.y < 0) { p.y = 0; p.vy *= -1; }
          else if (p.y > height) { p.y = height; p.vy *= -1; }

          // Mouse interaction (gentle proximity push and radius swell)
          let currentRadius = p.baseRadius;
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius) {
              const force = (1 - dist / mouse.radius);
              const angle = Math.atan2(dy, dx);
              p.x += Math.cos(angle) * force * 0.8;
              p.y += Math.sin(angle) * force * 0.8;
              currentRadius = p.baseRadius + force * 1.5;

              // Draw faint interactive line to cursor
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `${p.color}${(force * 0.25).toFixed(3)})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }

          // Draw particle dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.fill();

          // Connect adjacent particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const maxDist = 95;
            if (dist < maxDist) {
              const linkAlpha = ((1 - dist / maxDist) * (isDark ? 0.16 : 0.18)).toFixed(3);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `${lineBaseColor}${linkAlpha})`;
              ctx.lineWidth = 0.65;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      parentSection.removeEventListener('mousemove', handleMouseMove as EventListener);
      parentSection.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      parentSection.removeEventListener('touchmove', handleTouchMove as EventListener);
      parentSection.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      id="hero-particle-container"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-85" />
    </div>
  );
};
