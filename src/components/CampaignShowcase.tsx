import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { campaignItems } from '../data';
import { CampaignItem } from '../types';
import AestheticPlaceholder from './AestheticPlaceholder';
// @ts-expect-error - Vite handles image asset resolution
import brandLaunchPoster from '../assets/images/brand_launch_poster_1784062481690.jpg';

export default function CampaignShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignItem | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Swipe gesture hooks for the lightbox
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Track horizontal scroll progress of the gallery
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const totalScrollable = scrollWidth - clientWidth;
      const progress = totalScrollable > 0 ? (scrollLeft / totalScrollable) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  // Gallery navigation buttons
  const scrollGallery = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 360; // Approximate card width including spacing
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      // Trigger initial layout check
      handleScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Keyboard navigation inside Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCampaign) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCampaign, activeSlideIndex]);

  // Handle body scroll locking when lightbox is open
  useEffect(() => {
    if (selectedCampaign) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCampaign]);

  // Slide navigation
  const nextSlide = () => {
    if (selectedCampaign) {
      setActiveSlideIndex((prev) => 
        prev === selectedCampaign.slides.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (selectedCampaign) {
      setActiveSlideIndex((prev) => 
        prev === 0 ? selectedCampaign.slides.length - 1 : prev - 1
      );
    }
  };

  const openLightbox = (campaign: CampaignItem) => {
    setSelectedCampaign(campaign);
    setActiveSlideIndex(0);
  };

  const closeLightbox = () => {
    setSelectedCampaign(null);
  };

  // Touch Swipe detection handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      id="campaign" 
      className="py-24 md:py-32 bg-[#F7F1E7] overflow-hidden border-t border-[#B89B5E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B89B5E] mb-3 block">
            Creative Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#2B2B2B] tracking-tight">
            Campaign <span className="font-serif italic font-normal text-[#5C1B29]">Showcase</span>
          </h2>
          <p className="font-sans text-sm text-[#2B2B2B]/60 max-w-lg mt-3 font-light">
            An interactive gallery displaying our 7 high-end visual campaigns built specifically for Jalashka. Drag or scroll sideways to browse each chapter.
          </p>
        </div>

        {/* Gallery Scroll Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollGallery('left')}
            className="w-12 h-12 rounded-full border border-[#2B2B2B]/20 flex items-center justify-center text-[#2B2B2B] hover:bg-[#5C1B29] hover:text-[#F7F1E7] hover:border-[#5C1B29] transition-all duration-300 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollGallery('right')}
            className="w-12 h-12 rounded-full border border-[#2B2B2B]/20 flex items-center justify-center text-[#2B2B2B] hover:bg-[#5C1B29] hover:text-[#F7F1E7] hover:border-[#5C1B29] transition-all duration-300 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* HORIZONTAL SCROLL CONTAINER */}
      <div className="relative pl-6 md:pl-[calc((100vw-min(1280px,100vw))/2+48px)] pr-6">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 cursor-grab active:cursor-grabbing pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {campaignItems.map((campaign) => {
            const isBrandLaunch = campaign.id === 'brand-launch';
            
            return (
              <div
                key={campaign.id}
                className="flex-shrink-0 w-[290px] sm:w-[340px] md:w-[380px] snap-start group"
              >
                {/* Image Placeholder or Campaign Poster Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-sm transition-all duration-[350ms] ease-out group-hover:shadow-md group-hover:-translate-y-1 mb-5 h-[360px] md:h-[420px]">
                  {isBrandLaunch ? (
                    <>
                      {/* Brand Launch Campaign Poster */}
                      <img
                        src={brandLaunchPoster}
                        alt="Jalashka Brand Launch Poster"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-[1.03]"
                      />
                      
                      {/* Subtle dark gradient overlay from bottom to top (20–35% opacity) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                      
                      {/* Overlay Content (bottom-left) */}
                      <div className="absolute bottom-6 left-6 z-10 flex flex-col items-start text-[#F7F1E7]">
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B89B5E] font-semibold mb-1">
                          Campaign Design
                        </span>
                        <h4 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-white leading-none">
                          BRAND LAUNCH
                        </h4>
                        <span className="font-serif text-sm md:text-base font-light italic text-[#F7F1E7]/80 mt-1">
                          DROP 01
                        </span>
                      </div>
                      
                      {/* View Project Button (bottom-right / overlay hover) */}
                      <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-out">
                        <button
                          onClick={() => openLightbox(campaign)}
                          className="px-5 py-2.5 bg-[#2A1E17] text-[#F7F1E7] border border-[#2A1E17] rounded-full font-sans text-[10px] uppercase tracking-widest font-bold shadow-md transition-all duration-[350ms] ease-out hover:bg-[#F7F1E7] hover:text-[#2A1E17] hover:scale-[1.05] flex items-center gap-1.5 cursor-pointer"
                        >
                          View Project
                          <ArrowRight size={10} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <AestheticPlaceholder
                        pattern={campaign.bgPattern as any}
                        themeColor={campaign.themeColor}
                        accentText={campaign.accentText}
                        title={campaign.title}
                        subtitle={campaign.category}
                        heightClass="h-[360px] md:h-[420px]"
                      />
                      
                      {/* Overlay hover effect */}
                      <div className="absolute inset-0 bg-[#2B2B2B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <button 
                          onClick={() => openLightbox(campaign)}
                          className="px-6 py-3 bg-[#F7F1E7] text-[#5C1B29] rounded-full font-sans text-xs uppercase tracking-widest font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 cursor-pointer"
                        >
                          <Eye size={14} />
                          View Project
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Text Meta Info */}
                <div className="px-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#B89B5E]">
                    {campaign.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-medium text-[#2B2B2B] mt-1 group-hover:text-[#5C1B29] transition-colors">
                    {campaign.title}
                  </h3>
                  <p className="font-sans text-xs text-[#2B2B2B]/70 mt-1 leading-relaxed line-clamp-2 font-light">
                    {campaign.description}
                  </p>
                  <button
                    onClick={() => openLightbox(campaign)}
                    className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#5C1B29] font-semibold mt-3 flex items-center gap-1.5 hover:text-[#2B2B2B] transition-colors cursor-pointer group/btn"
                  >
                    View Presentation
                    <ArrowRight size={10} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SCROLL PROGRESS INDICATOR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-4 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase text-[#B89B5E]">
          Drag / Swipe Gallery
        </span>
        
        {/* Scroll Bar Line */}
        <div className="flex-1 max-w-[200px] md:max-w-xs mx-4 h-[2px] bg-[#2B2B2B]/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#B89B5E] transition-all duration-300 ease-out"
            style={{ width: `${Math.max(5, scrollProgress)}%` }}
          />
        </div>

        <span className="font-mono text-[9px] text-[#2B2B2B]/60">
          CH. 01 — 07
        </span>
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCampaign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#2B2B2B]/95 backdrop-blur-md z-50 flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            {/* Lightbox Header */}
            <div className="flex justify-between items-center max-w-7xl w-full mx-auto border-b border-white/10 pb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B89B5E]">
                  {selectedCampaign.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#F7F1E7]">
                  {selectedCampaign.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Body (Slide Canvas) */}
            <div 
              className="max-w-4xl w-full mx-auto my-auto flex flex-col items-center py-8"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="w-full relative min-h-[350px] md:min-h-[460px] flex items-center justify-center">
                
                {/* Active Slide Rendering */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlideIndex}
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -40, scale: 0.95 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F7F1E7] rounded-3xl overflow-hidden shadow-2xl min-h-[380px] md:min-h-[440px]">
                      
                      {/* Left: Beautiful Styled Slide Placeholder Visual */}
                      <div className="p-4 md:p-6 bg-[#2B2B2B] flex items-center justify-center">
                        <AestheticPlaceholder
                          pattern={selectedCampaign.slides[activeSlideIndex].pattern as any}
                          themeColor={selectedCampaign.slides[activeSlideIndex].slideBg}
                          accentText={`SLIDE ${activeSlideIndex + 1}`}
                          title=""
                          subtitle=""
                          heightClass="h-[240px] md:h-[360px]"
                        />
                      </div>

                      {/* Right: Slide Presentation Content */}
                      <div className="p-8 md:p-12 flex flex-col justify-between text-[#2B2B2B]">
                        <div>
                          <div className="flex justify-between items-center mb-6">
                            <span className="font-mono text-xs uppercase tracking-widest text-[#B89B5E] font-medium">
                              Slide {activeSlideIndex + 1} of {selectedCampaign.slides.length}
                            </span>
                            <span className="font-sans text-[11px] bg-[#5C1B29]/10 text-[#5C1B29] px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                              Mockup
                            </span>
                          </div>

                          <h4 className="font-serif text-2xl md:text-3xl font-light text-[#2B2B2B] leading-snug mb-4">
                            {selectedCampaign.slides[activeSlideIndex].title}
                          </h4>

                          <p className="font-sans text-sm md:text-base text-[#2B2B2B]/80 leading-relaxed font-light">
                            {selectedCampaign.slides[activeSlideIndex].description}
                          </p>
                        </div>

                        <div className="pt-8 border-t border-[#2B2B2B]/10 flex justify-between items-center text-xs font-mono text-[#2B2B2B]/50">
                          <span>JALASHKA INSTAGRAM 2026</span>
                          <span>SWIPE FOR NEXT</span>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow Button */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 md:-left-16 w-12 h-12 rounded-full bg-[#F7F1E7]/10 hover:bg-[#F7F1E7]/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-0 md:-right-16 w-12 h-12 rounded-full bg-[#F7F1E7]/10 hover:bg-[#F7F1E7]/20 border border-white/10 flex items-center justify-center text-white transition-all cursor-pointer z-10"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>

              </div>
            </div>

            {/* Lightbox Footer (Dots + Info) */}
            <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4">
              <div className="text-white/50 font-mono text-[10px] uppercase tracking-widest text-center sm:text-left">
                Use Left / Right Arrows to navigate • Esc to Close
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-2">
                {selectedCampaign.slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlideIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeSlideIndex 
                        ? 'bg-[#B89B5E] w-6' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <div className="text-[#B89B5E] font-serif italic text-sm">
                Quiet Luxury presentation concept
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
