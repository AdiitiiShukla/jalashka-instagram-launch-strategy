import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CampaignShowcase from './components/CampaignShowcase';
import LaunchFeed from './components/LaunchFeed';
import CampaignPhilosophy from './components/CampaignPhilosophy';
import CompetitorResearch from './components/CompetitorResearch';
import OrganicGrowth from './components/OrganicGrowth';
import WeeklyPlan from './components/WeeklyPlan';
import FutureGrowth from './components/FutureGrowth';
import Deliverables from './components/Deliverables';
import Conclusion from './components/Conclusion';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [globalProgress, setGlobalProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Loading animation simulation for initial premium feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Track global scroll progress and section visibility
  useEffect(() => {
    const handleGlobalScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setGlobalProgress(progress);
    };

    window.addEventListener('scroll', handleGlobalScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleGlobalScroll);
  }, []);

  // Intersection Observer to track active section highlights
  useEffect(() => {
    const sections = ['overview', 'campaign', 'strategy', 'research', 'growth', 'conclusion'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: '-30% 0px -40% 0px', // Trigger trigger point near center of screen
          threshold: 0
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div className="relative font-sans bg-[#F7F1E7] text-[#2B2B2B]">
      
      {/* INITIAL LUXURY INITIALIZER ANIMATION SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#2B2B2B] text-[#F7F1E7] z-55 flex flex-col justify-center items-center p-6"
          >
            <div className="flex flex-col items-center">
              {/* Minimalist emblem drawing loop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-16 h-16 rounded-full border border-[#B89B5E]/30 flex items-center justify-center mb-6"
              >
                <span className="font-serif italic text-2xl text-[#B89B5E] tracking-widest">J</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, letterSpacing: '0.1em' }}
                animate={{ opacity: 1, letterSpacing: '0.3em' }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-serif text-lg md:text-xl text-[#F7F1E7] tracking-[0.3em] uppercase text-center font-light"
              >
                JALASHKA
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="font-mono text-[9px] uppercase tracking-[0.2em] mt-3 text-[#B89B5E]"
              >
                INSTAGRAM LAUNCH presentation 2026
              </motion.p>

              {/* Progress bar line */}
              <div className="w-48 h-[1px] bg-white/10 mt-10 relative overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 bg-[#B89B5E]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GLOBAL TOP PROGRESS INDICATOR */}
      <div className="fixed top-0 left-0 w-full h-[2.5px] z-50 pointer-events-none">
        <div 
          className="h-full bg-[#B89B5E] transition-all duration-150 ease-out"
          style={{ width: `${globalProgress}%` }}
        />
      </div>

      {/* CORE PRESENTATION SECTIONS */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* STICKY HEADER */}
          <Navbar activeSection={activeSection} />

          {/* MAIN CANVAS */}
          <main className="w-full">
            
            {/* 1. OVERVIEW & INTRO */}
            <Hero />
            
            <About />

            {/* 2. CAMPAIGN & SAMPLES */}
            <CampaignShowcase />

            {/* 3. LAUNCH GRID PREVIEW */}
            <LaunchFeed />

            {/* 4. CAMPAIGN CORE PILLARS */}
            <CampaignPhilosophy />

            {/* 5. STRATEGY FRAMEWORK (Research & Metrics) */}
            <CompetitorResearch />

            {/* 6. GROWTH ROADMAP */}
            <OrganicGrowth />

            <WeeklyPlan />

            <FutureGrowth />

            <Deliverables />

            {/* 7. CONCLUSION & CONTACT */}
            <Conclusion />

          </main>
        </motion.div>
      )}

    </div>
  );
}

