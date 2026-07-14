import React from 'react';
import { motion } from 'motion/react';
import { Eye, ShieldAlert, Sparkles, AlertCircle, Bookmark, Compass } from 'lucide-react';
import { competitorResearch } from '../data';

export default function CompetitorResearch() {
  const standOutInsights = [
    {
      title: 'Active Styling Education',
      subtitle: 'Addressing Toteme\'s Distance',
      desc: 'Instead of staying cold and remote, Jalashka will establish high-utility styling series. Explaining the geometry of garments and teaching capsule construction builds deep consumer utility and loyalty.',
      icon: <Sparkles className="text-[#B89B5E]" size={18} />
    },
    {
      title: 'Craft-to-Modernist Transition',
      subtitle: 'Expanding on Anavila\'s Heritage',
      desc: 'We merge the artisan-forward handmade stories of Indian weavers with sleek, Scandinavian-style architectural draping, appealing directly to global luxury buyers who appreciate organic material and modern styles.',
      icon: <Compass className="text-[#5C1B29]" size={18} />
    },
    {
      title: 'Architectural Visual Signatures',
      subtitle: 'Avoiding Nicobar\'s Dilution',
      desc: 'We maintain strict design boundaries. No generic lifestyle filler. Every background, font, color, and post must obey a clean 12-column geometry, ensuring our brand visual footprint is instantly recognizable.',
      icon: <Eye className="text-[#2B2B2B]" size={18} />
    }
  ];

  return (
    <section 
      id="research" 
      className="py-24 md:py-32 bg-[#F7F1E7] border-t border-[#B89B5E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-3 block">
            Competitive Landscapes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] tracking-tight">
            Competitor <span className="font-serif italic font-normal text-[#5C1B29]">Research</span>
          </h2>
          <p className="font-sans text-sm text-[#2B2B2B]/60 max-w-xl mt-4 font-light leading-relaxed">
            A comprehensive strategic audit of the digital landscape. We examine the structural content style, operational strengths, and visual gaps of major peer brands to find Jalashka\'s ultimate positioning hook.
          </p>
        </div>

        {/* Competitor Cards Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {competitorResearch.map((comp, idx) => {
            // Stylize logo typography to fit the brand's identity
            const renderLogoEmblem = (name: string) => {
              if (name === 'Toteme') {
                return (
                  <div className="h-14 flex items-center justify-center border-b border-[#2B2B2B]/15 pb-4">
                    <span className="font-serif text-3xl font-bold tracking-[-0.05em] text-[#2B2B2B]">totêmelike</span>
                  </div>
                );
              }
              if (name === 'Anavila') {
                return (
                  <div className="h-14 flex items-center justify-center border-b border-[#2B2B2B]/15 pb-4">
                    <span className="font-sans text-lg uppercase tracking-[0.4em] font-light text-[#B89B5E]">ANAVILA</span>
                  </div>
                );
              }
              return (
                <div className="h-14 flex items-center justify-center border-b border-[#2B2B2B]/15 pb-4">
                  <span className="font-sans text-xl tracking-tight text-[#5C1B29] font-semibold">nico / bhaane</span>
                </div>
              );
            };

            return (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="bg-[#F7F1E7] border border-[#B89B5E]/25 rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Styled Logo Placeholder */}
                  {renderLogoEmblem(comp.name)}

                  <div className="mt-6 space-y-5">
                    {/* Content Style */}
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#B89B5E] block">
                        Content Style
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/90 mt-1 font-light leading-relaxed">
                        {comp.contentStyle}
                      </p>
                    </div>

                    {/* Strengths */}
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#B89B5E] block">
                        Strengths
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/90 mt-1 font-light leading-relaxed">
                        {comp.strengths}
                      </p>
                    </div>

                    {/* Content Gap */}
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#5C1B29] block flex items-center gap-1.5">
                        <AlertCircle size={10} />
                        Content Gap
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/75 mt-1 font-light leading-relaxed">
                        {comp.contentGap}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Learning - Elevated at Bottom */}
                <div className="mt-8 pt-6 border-t border-[#B89B5E]/15 bg-white/5 p-4 rounded-xl">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#2B2B2B] font-semibold block flex items-center gap-1.5">
                    <Bookmark size={10} className="text-[#B89B5E]" />
                    Key Learning
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#5C1B29] italic mt-1.5 leading-relaxed font-light">
                    "{comp.keyLearning}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* How Jalashka Can Stand Out Insight Cards */}
        <div className="border-t border-[#B89B5E]/20 pt-16 mt-16">
          <div className="mb-10 text-center lg:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B89B5E]">Market Positioning</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#2B2B2B] mt-1">
              How Jalashka Can Stand Out
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {standOutInsights.map((insight, idx) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-white/30 backdrop-blur-xs p-6 md:p-8 rounded-2xl border border-[#B89B5E]/10 flex flex-col justify-between hover:border-[#B89B5E]/30 transition-all duration-300 shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#F7F1E7] border border-[#B89B5E]/20 flex items-center justify-center shadow-xs mb-6">
                    {insight.icon}
                  </div>
                  
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B89B5E]">
                    {insight.subtitle}
                  </span>
                  
                  <h4 className="font-serif text-lg font-medium text-[#2B2B2B] mt-1.5 mb-3">
                    {insight.title}
                  </h4>
                  
                  <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/70 leading-relaxed font-light">
                    {insight.desc}
                  </p>
                </div>

                <div className="w-8 h-[1px] bg-[#B89B5E]/50 mt-6" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
