import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Grid, Eye, Award, Check } from 'lucide-react';
import AestheticPlaceholder from './AestheticPlaceholder';

interface FeedPost {
  title: string;
  theme: string;
  pattern: 'waves' | 'grid' | 'circles' | 'geometric' | 'minimal' | 'lines' | 'radial';
  bg: string;
  col: string;
}

export default function LaunchFeed() {
  // Ordered from top-left (Post 1) to bottom-right (Post 9)
  // Row 1: Brand Launch | Product Launch | Packaging Reveal
  // Row 2: Fire Campaign | Air Campaign | Earth Campaign
  // Row 3: Styling Series | Coming Soon | Water Campaign
  const posts: FeedPost[] = [
    {
      title: 'Brand Launch',
      theme: 'Manifesto',
      pattern: 'waves',
      bg: 'bg-[#5C1B29]',
      col: 'text-[#F7F1E7]',
    },
    {
      title: 'Product Launch',
      theme: 'Capsule 01',
      pattern: 'circles',
      bg: 'bg-[#B89B5E]',
      col: 'text-[#2B2B2B]',
    },
    {
      title: 'Packaging Reveal',
      theme: 'Tangible Luxury',
      pattern: 'radial',
      bg: 'bg-[#F7F1E7] border border-[#2B2B2B]/10',
      col: 'text-[#2B2B2B]',
    },
    {
      title: 'Fire Campaign',
      theme: 'Confidence',
      pattern: 'geometric',
      bg: 'bg-[#5C1B29]',
      col: 'text-[#F7F1E7]',
    },
    {
      title: 'Air Campaign',
      theme: 'Lightness',
      pattern: 'minimal',
      bg: 'bg-[#D1E2EC]',
      col: 'text-[#2B2B2B]',
    },
    {
      title: 'Earth Campaign',
      theme: 'Grounded',
      pattern: 'radial',
      bg: 'bg-[#453229]',
      col: 'text-[#F7F1E7]',
    },
    {
      title: 'Styling Series',
      theme: 'The Core Five',
      pattern: 'grid',
      bg: 'bg-[#B89B5E]',
      col: 'text-[#2B2B2B]',
    },
    {
      title: 'Coming Soon',
      theme: 'The Countdown',
      pattern: 'lines',
      bg: 'bg-[#2B2B2B]',
      col: 'text-[#B89B5E]',
    },
    {
      title: 'Water Campaign',
      theme: 'Fluidity',
      pattern: 'circles',
      bg: 'bg-[#1e293b]',
      col: 'text-[#F7F1E7]',
    },
  ];

  const highlights = [
    { title: 'Capsule 01', bg: 'bg-[#5C1B29]' },
    { title: 'The Atelier', bg: 'bg-[#2B2B2B]' },
    { title: 'Sourcing', bg: 'bg-[#B89B5E]' },
    { title: 'Philosophy', bg: 'bg-[#F7F1E7] border border-[#2B2B2B]/20' },
  ];

  const insights = [
    {
      title: 'Visual Consistency',
      description: 'A strict, unified warm tone pairing deep burgundy with gold to elevate aesthetic memory instantly.',
    },
    {
      title: 'Story-Driven Layout',
      description: 'Alternating detailed garment close-ups, environmental architecture, and textual manifestos to balance pacing.',
    },
    {
      title: 'Premium First Impression',
      description: 'Designed as a curated editorial exhibition. It establishes Jalashka as an artistic authority from the first view.',
    },
  ];

  return (
    <section 
      id="launch-feed" 
      className="py-24 md:py-32 bg-[#F7F1E7] border-t border-[#B89B5E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-3 block">
            Digital Exhibition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] tracking-tight">
            The Launch <span className="font-serif italic font-normal text-[#5C1B29]">Feed</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#2B2B2B]/60 max-w-xl mx-auto mt-4 font-light">
            A precise visualization of Jalashka\'s initial grid presentation. Crafted to present a harmonious, high-luxury rhythm that builds brand credit and tells a continuous story.
          </p>
        </div>

        {/* Core Grid Layout (Phone Mockup Left, Insights Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Realistic Phone Mockup (Takes 6 cols) */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone Outer Shell */}
            <div className="relative w-full max-w-[370px] bg-[#1e1e1e] rounded-[52px] p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] border-4 border-[#333333] overflow-hidden">
              
              {/* Phone Speaker & Dynamic Island */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-7 w-28 bg-[#000000] rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-12 h-1.5 bg-[#151515] rounded-full absolute top-1" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#1c1c1e] ml-12" />
              </div>

              {/* Phone Inner Screen Screen */}
              <div className="bg-[#F7F1E7] rounded-[38px] overflow-hidden border border-[#2B2B2B]/5 text-[#2B2B2B] flex flex-col pt-7 pb-4">
                
                {/* Status Bar */}
                <div className="px-6 flex justify-between items-center text-[11px] font-medium font-sans mb-3 text-[#2B2B2B]">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    {/* Signal icon */}
                    <div className="flex gap-0.5 items-end h-2">
                      <div className="w-[2px] h-1 bg-[#2B2B2B] rounded-xs" />
                      <div className="w-[2px] h-1.5 bg-[#2B2B2B] rounded-xs" />
                      <div className="w-[2px] h-2 bg-[#2B2B2B] rounded-xs" />
                      <div className="w-[2px] h-2.5 bg-[#2B2B2B] rounded-xs" />
                    </div>
                    {/* Battery icon */}
                    <div className="w-5 h-2.5 border border-[#2B2B2B] rounded-sm p-0.5 flex items-center">
                      <div className="w-3 h-full bg-[#2B2B2B] rounded-3xs" />
                    </div>
                  </div>
                </div>

                {/* IG Header Bar */}
                <div className="px-4 py-2 border-b border-[#2B2B2B]/5 flex items-center justify-between">
                  <span className="font-serif font-semibold text-sm tracking-widest text-[#2B2B2B]">
                    JALASHKA
                  </span>
                  <div className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#5C1B29]" />
                    <span className="w-2 h-2 rounded-full bg-[#B89B5E]" />
                  </div>
                </div>

                {/* Profile Meta Section */}
                <div className="px-4 pt-4 pb-3">
                  <div className="flex items-center gap-4">
                    {/* Profile Logo Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#B89B5E] to-[#5C1B29] p-[2px] flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-[#F7F1E7] flex items-center justify-center font-serif font-semibold text-[#5C1B29] text-lg">
                        J
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex-1 flex justify-around text-center">
                      <div>
                        <span className="block font-sans font-semibold text-sm">9</span>
                        <span className="block font-sans text-[10px] text-[#2B2B2B]/60">Posts</span>
                      </div>
                      <div>
                        <span className="block font-sans font-semibold text-sm">12.4K</span>
                        <span className="block font-sans text-[10px] text-[#2B2B2B]/60">Followers</span>
                      </div>
                      <div>
                        <span className="block font-sans font-semibold text-sm">126</span>
                        <span className="block font-sans text-[10px] text-[#2B2B2B]/60">Following</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio Description */}
                  <div className="mt-3 text-xs">
                    <span className="font-semibold block font-sans">JALASHKA</span>
                    <span className="text-[#2B2B2B]/50 block text-[10px] font-mono tracking-wider">Atelier / Modernist Design House</span>
                    <span className="block font-sans text-[11px] text-[#2B2B2B]/80 mt-1 leading-normal font-light">
                      Timeless silhouettes crafted for the modern soul. Quiet luxury in modular pieces.
                    </span>
                    <a href="#link" className="text-[#5C1B29] block text-[10px] font-semibold mt-1">
                      jalashka.com
                    </a>
                  </div>
                </div>

                {/* Highlight Story Rings */}
                <div className="px-4 flex gap-3.5 overflow-x-auto pb-3 mb-2 border-b border-[#2B2B2B]/5 scrollbar-none">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex flex-col items-center flex-shrink-0">
                      <div className={`w-11 h-11 rounded-full ${h.bg} flex items-center justify-center text-[10px] font-serif font-bold text-current`}>
                        {h.title.charAt(0)}
                      </div>
                      <span className="text-[9px] text-[#2B2B2B]/60 mt-1 font-sans font-light tracking-wide">{h.title}</span>
                    </div>
                  ))}
                </div>

                {/* Grid Header Icon */}
                <div className="grid grid-cols-3 text-center border-b border-[#2B2B2B]/5 pb-2 text-[#2B2B2B]/60">
                  <div className="flex justify-center text-[#5C1B29] border-b-2 border-[#5C1B29] pb-1.5">
                    <Grid size={14} />
                  </div>
                  <div className="flex justify-center opacity-40">
                    <div className="w-3.5 h-3.5 rounded-sm border border-current" />
                  </div>
                  <div className="flex justify-center opacity-40">
                    <div className="w-3.5 h-3.5 rounded-full border border-current" />
                  </div>
                </div>

                {/* 3x3 INSTAGRAM FEED GRID */}
                <div className="grid grid-cols-3 gap-[2px] bg-white/20 p-[2px]">
                  {posts.map((post, i) => (
                    <div 
                      key={i} 
                      className={`relative aspect-square ${post.bg} overflow-hidden group/tile flex flex-col justify-between p-2 cursor-pointer transition-all duration-300 hover:brightness-95`}
                    >
                      {/* Grid Item Vector Motif */}
                      <div className="absolute inset-0 opacity-[0.12]">
                        {post.pattern === 'waves' && (
                          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 20 C 30 30, 70 10, 100 20 L 100 100 L 0 100 Z" fill="currentColor" />
                          </svg>
                        )}
                        {post.pattern === 'grid' && (
                          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '6px 6px' }} />
                        )}
                        {post.pattern === 'circles' && (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full border border-current" />
                          </div>
                        )}
                        {post.pattern === 'geometric' && (
                          <div className="w-full h-full border border-current m-1" />
                        )}
                        {post.pattern === 'lines' && (
                          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor, currentColor 0.5px, transparent 0.5px, transparent 4px)' }} />
                        )}
                        {post.pattern === 'radial' && (
                          <div className="w-full h-full bg-radial from-current to-transparent" />
                        )}
                        {post.pattern === 'minimal' && (
                          <div className="w-1.5 h-1.5 rounded-full bg-current m-auto" />
                        )}
                      </div>

                      {/* Top Label */}
                      <div className="z-10 flex justify-between items-start">
                        <span className={`text-[6px] font-mono tracking-widest uppercase opacity-75 ${post.col}`}>
                          {post.theme}
                        </span>
                        <div className="flex gap-[1px]">
                          <span className={`w-0.5 h-0.5 rounded-full bg-current opacity-30 ${post.col}`} />
                          <span className={`w-0.5 h-0.5 rounded-full bg-current ${post.col}`} />
                        </div>
                      </div>

                      {/* Main Title Center */}
                      <div className="z-10 text-center py-1 flex flex-col items-center">
                        <span className={`text-[7px] font-serif font-semibold tracking-wide ${post.col}`}>
                          {post.title}
                        </span>
                      </div>

                      {/* Footer Motif */}
                      <div className="z-10 flex justify-between items-center border-t border-current/15 pt-0.5">
                        <span className={`text-[5px] font-mono opacity-50 ${post.col}`}>0{i+1}</span>
                        <span className={`text-[5px] font-serif italic ${post.col}`}>J.A.</span>
                      </div>

                      {/* Overlay Zoom */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <span className="text-[8px] font-mono text-white tracking-widest uppercase bg-black/60 px-2 py-1 rounded">
                          PREVIEW
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT: INSIGHTS & DESCRIPTION (Takes 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-10">
            <div className="border-l-2 border-[#B89B5E] pl-6 py-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B89B5E]">Strategic Cadence</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#2B2B2B] mt-1">
                Visualizing the 3×3 Grid Narrative
              </h3>
            </div>

            <p className="font-sans text-base text-[#2B2B2B]/80 font-light leading-relaxed">
              Before launching, we must choreograph the visual architecture. In quiet luxury, the feed is treated as a unified canvas rather than individual posts. This 9-post mockup represents the primary rollout rhythm, showcasing physical packaging, the 4-elements campaigns, and styling education.
            </p>

            {/* Premium Insight Cards */}
            <div className="space-y-6 pt-4">
              {insights.map((insight, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-[#F7F1E7] border border-[#B89B5E]/15 rounded-2xl flex gap-4 items-start shadow-xs transition-transform duration-300 hover:translate-x-1"
                >
                  <div className="w-7 h-7 rounded-full bg-[#5C1B29]/10 text-[#5C1B29] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="font-serif text-md font-medium text-[#2B2B2B] mb-1">
                      {insight.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#2B2B2B]/60 leading-relaxed font-light">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
