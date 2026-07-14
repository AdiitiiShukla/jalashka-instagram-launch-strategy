import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Briefcase, Mail, ArrowUp } from 'lucide-react';

export default function Conclusion() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      id="conclusion" 
      className="bg-[#2B2B2B] text-[#F7F1E7] relative pt-32 pb-16 overflow-hidden border-t border-[#B89B5E]/30"
    >
      {/* Structural decoration lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="10" y1="0" x2="10" y2="100" stroke="currentColor" strokeWidth="0.1" />
          <line x1="90" y1="0" x2="90" y2="100" stroke="currentColor" strokeWidth="0.1" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* CONCLUSION CONTAINER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col items-center"
          >
            {/* Minimal Brand Seal */}
            <div className="w-12 h-12 rounded-full border border-[#B89B5E]/40 flex items-center justify-center mb-10">
              <span className="font-serif italic font-normal text-[#B89B5E] text-xl">J</span>
            </div>

            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#B89B5E] mb-4">
              Atelier Conclusion
            </span>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-white mb-8">
              Thank <span className="font-serif italic text-[#B89B5E]">You</span>
            </h2>

            <p className="font-sans text-base sm:text-lg md:text-xl opacity-80 font-light leading-relaxed tracking-wide mb-10">
              Thank you for reviewing this Instagram launch strategy for Jalashka. It was designed to build a premium, story-driven and community-focused brand presence from day one.
            </p>

            <div className="w-16 h-[1px] bg-[#B89B5E]" />
          </motion.div>
        </div>

        {/* FOOTER SECTION */}
        <div className="border-t border-white/10 pt-16 mt-24 flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Prepared By credentials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B89B5E] mb-1.5">
              Launch Presentation Lead
            </span>
            <span className="font-serif text-xl font-medium tracking-wide text-white">
              Prepared by Aditi Shukla
            </span>
            <span className="text-xs opacity-40 font-mono tracking-wider mt-1 uppercase">
              Creative Agency Studio • © 2026
            </span>
          </div>

          {/* Social / Portfolio Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 hover:border-[#B89B5E] hover:text-[#B89B5E] flex items-center justify-center transition-colors cursor-pointer group"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} className="transform group-hover:scale-110 transition-transform" />
            </a>
            
            <a 
              href="https://portfolio.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-white/10 hover:border-[#B89B5E] hover:text-[#B89B5E] flex items-center justify-center transition-colors cursor-pointer group"
              title="Portfolio Website"
            >
              <Briefcase size={16} className="transform group-hover:scale-110 transition-transform" />
            </a>

            <a 
              href="mailto:aditi.vishwabharati@gmail.com" 
              className="w-11 h-11 rounded-full border border-white/10 hover:border-[#B89B5E] hover:text-[#B89B5E] flex items-center justify-center transition-colors cursor-pointer group"
              title="Send Email"
            >
              <Mail size={16} className="transform group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollUp}
            className="px-5 py-3 border border-white/10 rounded-full font-sans text-[10px] uppercase tracking-[0.25em] hover:bg-[#B89B5E] hover:text-[#2B2B2B] hover:border-[#B89B5E] transition-all duration-300 flex items-center gap-2 cursor-pointer"
            aria-label="Back to top"
          >
            Top
            <ArrowUp size={10} />
          </button>

        </div>

      </div>
    </footer>
  );
}
