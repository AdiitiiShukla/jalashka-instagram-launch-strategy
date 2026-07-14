import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Overview', id: 'overview' },
    { name: 'Campaign', id: 'campaign' },
    { name: 'Strategy', id: 'strategy' },
    { name: 'Research', id: 'research' },
    { name: 'Growth', id: 'growth' },
    { name: 'Conclusion', id: 'conclusion' }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky navbar
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
    <>
      {/* Top Banner Alert Badge */}
      <div className="w-full bg-[#5C1B29] text-[#F7F1E7] text-[11px] md:text-xs tracking-[0.2em] uppercase text-center py-2.5 px-4 font-sans font-medium flex items-center justify-center gap-2 border-b border-[#B89B5E]/20 z-50 relative">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B89B5E] animate-pulse" />
        Prepared for Jalashka • Instagram Launch Strategy 2026
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#F7F1E7]/90 backdrop-blur-md shadow-sm border-b border-[#2B2B2B]/5 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start cursor-pointer group text-left"
          >
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-[0.1em] text-[#2B2B2B] transition-colors duration-300 group-hover:text-[#5C1B29]">
              JALASHKA
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B89B5E]">
              Atelier Launch
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-sans text-xs uppercase tracking-[0.18em] transition-colors duration-300 py-2 cursor-pointer ${
                    isActive 
                      ? 'text-[#5C1B29] font-semibold' 
                      : 'text-[#2B2B2B]/70 hover:text-[#2B2B2B]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B89B5E]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('strategy')}
              className="px-5 py-2 border border-[#2B2B2B]/20 rounded-full font-sans text-[11px] uppercase tracking-[0.15em] hover:bg-[#5C1B29] hover:text-[#F7F1E7] hover:border-[#5C1B29] transition-all duration-300 cursor-pointer"
            >
              Get Strategy
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2B2B2B] hover:text-[#5C1B29] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-full left-0 w-full bg-[#F7F1E7] border-b border-[#2B2B2B]/10 shadow-xl py-6 px-8 flex flex-col space-y-4 md:hidden z-30"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-sans text-sm uppercase tracking-[0.15em] py-2 border-b border-[#2B2B2B]/5 cursor-pointer ${
                    activeSection === item.id ? 'text-[#5C1B29] font-medium' : 'text-[#2B2B2B]/80'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('strategy')}
                className="w-full text-center py-3 bg-[#5C1B29] text-[#F7F1E7] rounded-lg font-sans text-xs uppercase tracking-[0.15em] mt-2 cursor-pointer"
              >
                Download Proposal
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
