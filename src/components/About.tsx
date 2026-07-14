import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 px-6 md:px-12 bg-[#F7F1E7] border-t border-[#B89B5E]/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Large Editorial Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-4 block">
              The Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] leading-tight tracking-tight">
              About This <br className="hidden md:block" />
              <span className="font-serif italic font-normal text-[#5C1B29]">Project</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#B89B5E] mt-8" />
          </motion.div>

          {/* Right Column - Conceptual Strategy Description */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <p className="font-sans text-lg sm:text-xl text-[#2B2B2B]/90 font-light leading-relaxed">
              This project presents a complete Instagram launch strategy for <strong className="font-medium text-[#5C1B29]">Jalashka</strong>, designed in the spirit of world-class design houses. It integrates meticulously structured chapters, visual identity definitions, organic expansion models, and competitive matrix analyses.
            </p>
            
            <p className="font-sans text-sm sm:text-base text-[#2B2B2B]/70 leading-relaxed font-light">
              We present a system including launch creatives, content concepts, competitor research, and an organic growth roadmap designed to establish a strong and memorable brand identity from launch. Our approach balances physical texture, minimalist architectural discipline, and interactive digital touchpoints to captivate a modern premium audience.
            </p>

            {/* Quick Metadata Block */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-[#B89B5E]/20 mt-8">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#B89B5E]">Target Audience</span>
                <span className="block font-sans text-sm font-medium mt-1">Quiet Luxury Seekers</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#B89B5E]">Aesthetic Horizon</span>
                <span className="block font-sans text-sm font-medium mt-1">Timeless, Modernist</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#B89B5E]">Timeline Pipeline</span>
                <span className="block font-sans text-sm font-medium mt-1">90-Day Launch Feed</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
