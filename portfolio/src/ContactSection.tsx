import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setToastMessage(`Copied email (${text}) to clipboard!`);
      setTimeout(() => setCopiedEmail(false), 2500);
      setTimeout(() => setToastMessage(null), 3000);
    } else {
      setCopiedPhone(true);
      setToastMessage(`Copied phone number (${text}) to clipboard!`);
      setTimeout(() => setCopiedPhone(false), 2500);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-zinc-800/80 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header with Scroll Reveal */}
          <ScrollReveal className="mb-14">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-2 font-semibold">
              <span>// LET&apos;S CONNECT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Get In Touch
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Interested in building scalable systems together, discussing engineering roles, or exploring full-stack collaborations? Reach out directly.
            </p>
          </ScrollReveal>

          {/* Contact Channels */}
          <ScrollReveal delay={0.1} className="space-y-4">
          {/* Email Card with One-Click Copy */}
          <div
            id="contact-email-card"
            className="p-5 rounded-xl bg-[#111113] border border-zinc-800/80 hover:border-blue-500/30 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold">
                    Email Address
                  </span>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="block text-left text-sm font-bold text-white mt-0.5 hover:text-blue-400 transition-colors group/text"
                    title="Click to copy email address"
                  >
                    <span>{PERSONAL_INFO.email}</span>
                    <span className="ml-1.5 text-[10px] font-mono font-normal text-zinc-500 group-hover/text:text-blue-400/80">
                      (click to copy)
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  id="contact-copy-email-btn"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  aria-label="Copy Email to Clipboard"
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                    copiedEmail
                      ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-850'
                  }`}
                  title="Copy Email to Clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="hidden sm:inline font-mono text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline font-mono text-[11px]">Copy</span>
                    </>
                  )}
                </button>
                <a
                  id="contact-mailto-link"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                >
                  Send Mail
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div
            id="contact-phone-card"
            className="p-5 rounded-xl bg-[#111113] border border-zinc-800/80 hover:border-zinc-700 transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-zinc-500 font-semibold">
                    Phone Number
                  </span>
                  <div className="text-sm font-bold text-white mt-0.5 select-all">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  aria-label="Copy Phone"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 text-xs font-medium transition-colors"
                >
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Profiles Links */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#111113] border border-zinc-800/80 hover:border-zinc-700 hover:bg-[#151518] transition-all flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-zinc-900 text-zinc-300 group-hover:text-white">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">GitHub</div>
                <div className="text-[11px] text-zinc-500 font-mono">@HarrickChristoJP</div>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#111113] border border-zinc-800/80 hover:border-zinc-700 hover:bg-[#151518] transition-all flex items-center gap-3 group"
            >
              <div className="p-2 rounded-lg bg-zinc-900 text-blue-400 group-hover:text-blue-300">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">LinkedIn</div>
                <div className="text-[11px] text-zinc-500 font-mono">in/harrick-jp</div>
              </div>
            </a>
          </div>

          {/* Location Pill */}
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-850 flex items-center gap-2.5 text-xs text-zinc-400">
            <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Based in <strong className="text-zinc-200">{PERSONAL_INFO.location}</strong></span>
          </div>
        </ScrollReveal>
        </div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            id="contact-toast-notification"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900/95 border border-emerald-500/40 text-white shadow-2xl shadow-black/80 backdrop-blur-md"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div className="text-xs font-medium text-zinc-200">
              {toastMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

