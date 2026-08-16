import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-zinc-900/30 pointer-events-none">
      <motion.div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
