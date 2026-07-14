import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="overview"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 text-center bg-[#F7F1E7] overflow-hidden pt-12"
    >
      {/* Decorative architectural background framing */}
      <div className="absolute top-10 left-10 w-24 h-[1px] bg-[#B89B5E]/30 hidden lg:block" />
      <div className="absolute top-10 left-10 w-[1px] h-24 bg-[#B89B5E]/30 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-24 h-[1px] bg-[#B89B5E]/30 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-[1px] h-24 bg-[#B89B5E]/30 hidden lg:block" />

      {/* Abstract background shapes mirroring quiet luxury (delicate thin lines) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg className="w-[80vw] h-[80vh] max-w-4xl max-h-[800px]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#B89B5E" strokeWidth="0.25" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="30" stroke="#5C1B29" strokeWidth="0.1" />
          <line x1="50" y1="0" x2="50" y2="100" stroke="#B89B5E" strokeWidth="0.05" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#B89B5E" strokeWidth="0.05" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Editorial Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-[#B89B5E] border-b border-[#B89B5E]/30 pb-2 inline-block">
            Instagram Launch Strategy
          </span>
        </motion.div>

        {/* Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#2B2B2B] leading-[1.1] tracking-tight mb-8"
        >
          Instagram Launch Strategy <br className="hidden md:block"/>
          <span className="font-serif italic font-normal text-[#5C1B29] pr-1">for</span> Jalashka
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#2B2B2B]/80 max-w-2xl leading-relaxed tracking-wide mb-12 font-light"
        >
          A premium social media launch strategy focused on storytelling, organic growth, and timeless fashion. Prepared specifically to establish a cohesive aesthetic universe.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('campaign')}
            className="px-8 py-4 bg-[#5C1B29] text-[#F7F1E7] rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-[#2B2B2B] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-md hover:shadow-lg"
          >
            View Campaign
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollTo('strategy')}
            className="px-8 py-4 border border-[#2B2B2B] text-[#2B2B2B] rounded-full font-sans text-xs uppercase tracking-[0.2em] hover:bg-[#2B2B2B] hover:text-[#F7F1E7] transition-all duration-300 cursor-pointer"
          >
            View Strategy
          </button>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => scrollTo('about')}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#B89B5E]">
          Scroll to explore
        </span>
        <ChevronDown size={14} className="text-[#B89B5E]" />
      </motion.div>
    </section>
  );
}
