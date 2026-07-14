import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Download, AlertCircle, FileText, ChevronRight, X } from 'lucide-react';
import { deliverables } from '../data';

export default function Deliverables() {
  const [downloadNoticeOpen, setDownloadNoticeOpen] = useState(false);

  const handleDownload = () => {
    setDownloadNoticeOpen(true);
  };

  return (
    <section 
      id="growth" 
      className="py-24 md:py-32 bg-[#F7F1E7] border-t border-[#B89B5E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-3 block">
              Project Outputs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] tracking-tight">
              Final <span className="font-serif italic font-normal text-[#5C1B29]">Deliverables</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm text-[#2B2B2B]/60 font-light leading-relaxed">
              The exact tactical materials prepared for Jalashka. This digital showcase serves as the interactive core, which is backed by print-ready design templates.
            </p>
          </div>
        </div>

        {/* 2-Column layout: Checklist on Left, Download Hub on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Detailed Checklist (8 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {deliverables.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex gap-5 p-6 bg-white/20 border border-[#B89B5E]/15 rounded-2xl hover:border-[#5C1B29]/30 transition-all duration-300 shadow-xs"
              >
                {/* Custom Elegant Checkbox */}
                <div className="w-6 h-6 rounded-full bg-[#5C1B29]/10 text-[#5C1B29] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="font-serif text-lg font-medium text-[#2B2B2B] group-hover:text-[#5C1B29] transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B89B5E] bg-[#B89B5E]/10 px-2.5 py-0.5 rounded-full font-semibold">
                      {item.status}
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/70 mt-1 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Download Callout Board (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#5C1B29] to-[#2B2B2B] rounded-3xl p-8 md:p-10 text-[#F7F1E7] relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[400px]"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="90" cy="10" r="30" strokeWidth="0.5" />
                <circle cx="90" cy="10" r="45" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="100" y2="0" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="z-10">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B89B5E]">
                Atelier Downloads
              </span>
              
              <h3 className="font-serif text-3xl font-light leading-tight tracking-tight mt-3 mb-6">
                Download the <br className="hidden md:block" />
                Full Launch <span className="font-serif italic text-[#B89B5E]">Strategy</span>
              </h3>

              <p className="font-sans text-xs sm:text-sm opacity-80 font-light leading-relaxed mb-8">
                Request access to the high-resolution master document containing full typographic scales, grid templates, content brief formulas, and direct asset files in print-ready PDF format.
              </p>
            </div>

            {/* Premium Download CTA Button */}
            <div className="z-10 pt-6 border-t border-white/10 mt-6">
              <button
                onClick={handleDownload}
                className="w-full py-4 bg-[#B89B5E] hover:bg-[#F7F1E7] text-[#2B2B2B] hover:text-[#5C1B29] rounded-full font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <Download size={14} />
                Download Proposal
              </button>
              
              <span className="block text-center text-[9px] font-mono opacity-50 mt-3 uppercase tracking-widest">
                File size: 18.4 MB • PDF Format
              </span>
            </div>

          </motion.div>

        </div>

      </div>

      {/* DOWNLOAD MODAL POPUP (ANIME STATE) */}
      <AnimatePresence>
        {downloadNoticeOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2B2B2B]/80 backdrop-blur-xs z-50 flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#F7F1E7] text-[#2B2B2B] rounded-2xl p-8 max-w-md w-full shadow-2xl border border-[#B89B5E]/30 relative"
            >
              <button 
                onClick={() => setDownloadNoticeOpen(false)}
                className="absolute top-4 right-4 p-2 text-[#2B2B2B]/60 hover:text-[#2B2B2B] transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#5C1B29]/10 text-[#5C1B29] flex items-center justify-center mb-6">
                <FileText size={20} />
              </div>

              <h4 className="font-serif text-xl font-medium mb-3">
                Proposal Package Ready
              </h4>

              <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-light mb-6">
                This premium presentation is fully prepared for Jalashka. The accompanying proposal bundle (including Figma launch grids, typography guidelines, and content templates) has been pack-bundled.
              </p>

              <div className="p-4 bg-[#B89B5E]/10 rounded-xl flex gap-3 items-start mb-6 border border-[#B89B5E]/20">
                <AlertCircle size={16} className="text-[#B89B5E] mt-0.5 flex-shrink-0" />
                <span className="font-sans text-xs text-[#2B2B2B]/80 leading-normal">
                  <strong>Notice:</strong> This is a design placeholder. For production usage, please map your secure file server or cloud storage link directly in <code>Deliverables.tsx</code>.
                </span>
              </div>

              <button 
                onClick={() => setDownloadNoticeOpen(false)}
                className="w-full py-3 bg-[#5C1B29] text-[#F7F1E7] rounded-full font-sans text-xs uppercase tracking-[0.18em] hover:bg-[#2B2B2B] transition-colors cursor-pointer"
              >
                Return to presentation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
