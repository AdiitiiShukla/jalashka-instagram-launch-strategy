import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Layers, Clock, Pin } from 'lucide-react';
import { weeklyContentPlan } from '../data';

export default function WeeklyPlan() {
  return (
    <section 
      id="weekly-plan" 
      className="py-24 md:py-32 bg-[#F7F1E7] border-t border-[#B89B5E]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-3 block">
              Editorial Calendars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] tracking-tight">
              Weekly Content <span className="font-serif italic font-normal text-[#5C1B29]">Plan</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm text-[#2B2B2B]/60 font-light leading-relaxed">
              Establishing a predictable publishing pulse. Each weekday is dedicated to a structured editorial column, keeping feed expectations consistent.
            </p>
          </div>
        </div>

        {/* TIMELINE VISUAL */}
        <div className="relative">
          
          {/* Horizontal Connector Line (Desktop Only) */}
          <div className="absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#B89B5E]/30 hidden lg:block z-0" />

          {/* Grid Layout (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {weeklyContentPlan.map((item, idx) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                className="flex flex-col group"
              >
                {/* Day Marker / Connection Dot */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-6">
                  {/* Timeline Node dot */}
                  <div className="w-14 h-14 rounded-full border border-[#B89B5E]/30 flex items-center justify-center bg-[#F7F1E7] relative z-10 group-hover:border-[#5C1B29] group-hover:shadow-md transition-all duration-300">
                    <span className="font-serif text-[#5C1B29] font-medium text-sm">
                      {item.day.slice(0, 3)}
                    </span>
                    {/* Animated pulse halo on active hover */}
                    <span className="absolute -inset-1 rounded-full border border-[#5C1B29]/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
                  </div>

                  {/* Connecting thread helper text */}
                  <div>
                    <span className="font-sans font-semibold text-lg text-[#2B2B2B] block lg:hidden">
                      {item.day}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#B89B5E] lg:mt-2 lg:block">
                      {item.format} Column
                    </span>
                  </div>
                </div>

                {/* Main Content Box */}
                <div className="flex-1 bg-white/30 border border-[#B89B5E]/15 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-[#5C1B29]/30 hover:shadow-lg transition-all duration-300 ml-16 lg:ml-0 min-h-[220px]">
                  
                  {/* Top segment */}
                  <div>
                    {/* Column Heading */}
                    <h3 className="font-serif text-xl font-medium text-[#2B2B2B] mb-2 group-hover:text-[#5C1B29] transition-colors">
                      {item.title}
                    </h3>

                    {/* Concept description */}
                    <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/85 font-light leading-relaxed mb-4">
                      {item.concept}
                    </p>
                  </div>

                  {/* Bottom Segment / Objective */}
                  <div className="pt-4 border-t border-[#B89B5E]/10 flex flex-col gap-2">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#B89B5E] font-bold block flex items-center gap-1">
                      <Pin size={8} />
                      STRATEGIC OBJECTIVE
                    </span>
                    <p className="font-sans text-[11px] sm:text-xs text-[#2B2B2B]/60 leading-relaxed font-light">
                      {item.objective}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
