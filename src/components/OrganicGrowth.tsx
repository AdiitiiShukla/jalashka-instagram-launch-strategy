import React from 'react';
import { motion } from 'motion/react';
import { Users, Sparkles, Smartphone, BookOpen, Compass, CalendarRange } from 'lucide-react';
import { growthStrategies } from '../data';

export default function OrganicGrowth() {
  // Map string icon names to Lucide elements
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="text-[#5C1B29]" size={20} />;
      case 'Sparkles':
        return <Sparkles className="text-[#5C1B29]" size={20} />;
      case 'Smartphone':
        return <Smartphone className="text-[#5C1B29]" size={20} />;
      case 'BookOpen':
        return <BookOpen className="text-[#5C1B29]" size={20} />;
      case 'Compass':
        return <Compass className="text-[#5C1B29]" size={20} />;
      case 'CalendarRange':
        return <CalendarRange className="text-[#5C1B29]" size={20} />;
      default:
        return <Sparkles className="text-[#5C1B29]" size={20} />;
    }
  };

  return (
    <section 
      id="strategy" 
      className="py-24 md:py-32 bg-[#F7F1E7] border-t border-[#B89B5E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-3 block">
              Execution Blueprints
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] tracking-tight">
              Organic <span className="font-serif italic font-normal text-[#5C1B29]">Growth</span> Strategy
            </h2>
          </div>
          <p className="font-sans text-sm text-[#2B2B2B]/60 max-w-md font-light leading-relaxed">
            Establishing brand loyalty without paid amplification. Our organic roadmap relies on curated micro-tastemakers, utility-led education, and premium client integrations.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {growthStrategies.map((strat, i) => (
            <motion.div
              key={strat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                borderColor: 'rgba(92, 27, 41, 0.35)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)'
              }}
              className="bg-white/35 backdrop-blur-xs rounded-2xl p-8 border border-[#B89B5E]/15 flex flex-col justify-between transition-all duration-300 min-h-[300px] group cursor-pointer"
            >
              <div>
                {/* Header Icon + Outline */}
                <div className="w-11 h-11 rounded-xl bg-[#5C1B29]/5 border border-[#5C1B29]/10 flex items-center justify-center mb-6 group-hover:bg-[#5C1B29] transition-all duration-300">
                  <span className="group-hover:text-[#F7F1E7] transition-colors duration-300">
                    {renderIcon(strat.iconName)}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-medium text-[#2B2B2B] mb-2 group-hover:text-[#5C1B29] transition-colors">
                  {strat.title}
                </h3>

                {/* Subtitle / Objective */}
                <p className="font-sans text-xs uppercase tracking-widest text-[#B89B5E] font-medium mb-4">
                  {strat.description}
                </p>
              </div>

              {/* Expandable-looking content reveal */}
              <div className="pt-4 border-t border-[#B89B5E]/10 mt-6">
                <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-light">
                  {strat.details}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
