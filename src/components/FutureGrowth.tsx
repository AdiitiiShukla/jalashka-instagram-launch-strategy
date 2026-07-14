import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ArrowUpRight, BarChart2 } from 'lucide-react';
import { futureGrowthIdeas } from '../data';

export default function FutureGrowth() {
  return (
    <section 
      id="future-growth" 
      className="py-24 md:py-32 bg-[#F7F1E7] border-t border-[#B89B5E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-3 block">
              Scaling Horizons
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] tracking-tight">
              Future Growth <span className="font-serif italic font-normal text-[#5C1B29]">Ideas</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-[#2B2B2B]/60 max-w-md font-light leading-relaxed">
            Advanced conceptual frameworks designed to expand Jalashka\'s footprint past the launch phase, incorporating community co-creation and seasonal campaigns.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {futureGrowthIdeas.map((idea, idx) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-white/30 backdrop-blur-xs p-8 rounded-2xl border border-[#B89B5E]/15 flex flex-col justify-between hover:border-[#5C1B29]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Header arrow */}
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B89B5E] border border-[#B89B5E]/20 rounded-full px-2.5 py-0.5">
                    Expansion 0{idx + 1}
                  </span>
                  <ArrowUpRight size={14} className="text-[#B89B5E] group-hover:text-[#5C1B29] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-serif text-xl font-medium text-[#2B2B2B] mb-3 group-hover:text-[#5C1B29] transition-colors">
                  {idea.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/70 leading-relaxed font-light mb-6">
                  {idea.description}
                </p>
              </div>

              {/* Estimated metrics label */}
              <div className="pt-4 border-t border-[#B89B5E]/10 flex gap-2.5 items-start mt-4">
                <div className="w-5 h-5 rounded bg-[#5C1B29]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BarChart2 size={10} className="text-[#5C1B29]" />
                </div>
                <div>
                  <span className="block font-mono text-[8px] uppercase tracking-widest text-[#B89B5E] font-bold">
                    Target Impact
                  </span>
                  <p className="font-sans text-xs text-[#5C1B29] font-medium leading-relaxed mt-0.5">
                    {idea.metrics}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
