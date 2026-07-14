import React from 'react';
import { motion } from 'motion/react';
import { Flame, Droplet, Trees, Wind } from 'lucide-react';

interface ElementCard {
  name: string;
  theme: string;
  expression: string;
  colorClasses: string;
  borderClass: string;
  description: string;
  vectorSymbol: React.ReactNode;
}

export default function CampaignPhilosophy() {
  const elements: ElementCard[] = [
    {
      name: 'Fire',
      theme: 'Confidence',
      expression: 'Bold Expression',
      colorClasses: 'bg-[#5C1B29] text-[#F7F1E7]',
      borderClass: 'border-[#B89B5E]/30',
      description: 'Structured shoulders, sharp collars, and deep crimson tailoring. This visual pillar commands attention with direct gaze compositions, representing raw confidence and self-assurance.',
      vectorSymbol: (
        <svg className="w-16 h-16 opacity-25" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <polygon points="50,10 90,85 10,85" />
          <polygon points="50,25 78,80 22,80" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      name: 'Water',
      theme: 'Grace',
      expression: 'Fluidity & Flow',
      colorClasses: 'bg-[#1e293b] text-[#F7F1E7]',
      borderClass: 'border-[#B89B5E]/20',
      description: 'Satin fabrics, biases, flowing cuffs, and cool lighting. This pillar highlights the elegant, sweeping physical motion of garments, representing effortless poise and continuous adaptation.',
      vectorSymbol: (
        <svg className="w-16 h-16 opacity-25" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50 15 C 30 40, 15 60, 15 75 A 35 35 0 0 0 85 75 C 85 60, 70 40, 50 15 Z" />
          <path d="M50 35 C 40 50, 30 63, 30 73 A 20 20 0 0 0 70 73 C 70 63, 60 50, 50 35 Z" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      name: 'Earth',
      theme: 'Grounded',
      expression: 'Timeless Presence',
      colorClasses: 'bg-[#453229] text-[#F7F1E7]',
      borderClass: 'border-[#B89B5E]/30',
      description: 'Heavy knits, oversized organic trench coats, and deep raw fibers. A palette of clays, terracottas, and olives grounding the brand in traditional craft, durability, and raw tactile touch.',
      vectorSymbol: (
        <svg className="w-16 h-16 opacity-25" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="15" y="15" width="70" height="70" />
          <rect x="25" y="25" width="50" height="50" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      name: 'Air',
      theme: 'Freedom',
      expression: 'Lightness of Being',
      colorClasses: 'bg-[#D1E2EC] text-[#2B2B2B]',
      borderClass: 'border-[#2B2B2B]/10',
      description: 'Delicate pastel hues, sheer layers, wind machines, and generous, weightless silhouette folds. It stands for comfort, breathability, and freedom from standard tailoring constrictions.',
      vectorSymbol: (
        <svg className="w-16 h-16 opacity-15" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="40" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="50" y1="10" x2="50" y2="90" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="philosophy" 
      className="py-24 md:py-32 bg-[#F7F1E7] border-t border-[#B89B5E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-3 block">
              Narrative Anchors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] tracking-tight">
              Campaign <span className="font-serif italic font-normal text-[#5C1B29]">Philosophy</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm text-[#2B2B2B]/60 font-light leading-relaxed">
              Jalashka\'s visual launch campaign centers on the four elements of the physical world. Each represents a unique silhouette posture and stylistic voice.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {elements.map((elem, i) => (
            <motion.div
              key={elem.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between min-h-[420px] shadow-sm hover:shadow-xl transition-all duration-500 border ${elem.borderClass} ${elem.colorClasses} group cursor-pointer`}
              whileHover={{ y: -6 }}
            >
              {/* Background Accent Decorative Ring */}
              <div className="absolute top-8 right-8 transition-transform duration-700 group-hover:rotate-45">
                {elem.vectorSymbol}
              </div>

              {/* Top metadata */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                  {elem.expression}
                </span>
                
                <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide mt-2">
                  {elem.name}
                </h3>
                
                <span className="inline-block px-3 py-1 bg-current/10 text-current rounded-full text-[10px] uppercase tracking-wider font-semibold mt-3">
                  {elem.theme}
                </span>
              </div>

              {/* Bottom detail text */}
              <div className="pt-12 border-t border-current/10 mt-12">
                <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-85 font-light">
                  {elem.description}
                </p>

                <div className="flex items-center gap-1.5 mt-5 font-mono text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                  <span>Explore Pillar</span>
                  <span>→</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
