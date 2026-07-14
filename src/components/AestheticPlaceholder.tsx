import React from 'react';

interface AestheticPlaceholderProps {
  pattern?: 'waves' | 'grid' | 'circles' | 'geometric' | 'minimal' | 'lines' | 'radial';
  themeColor?: string; // bg-deep-burgundy, bg-charcoal, bg-muted-gold, etc.
  accentText?: string;
  title?: string;
  subtitle?: string;
  heightClass?: string;
}

export default function AestheticPlaceholder({
  pattern = 'minimal',
  themeColor = 'bg-[#5C1B29] text-[#F7F1E7]',
  accentText = 'JALASHKA',
  title = '',
  subtitle = '',
  heightClass = 'h-80 md:h-96'
}: AestheticPlaceholderProps) {
  
  const renderPattern = () => {
    switch (pattern) {
      case 'waves':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 C 150 150, 350 50, 500 100 C 650 150, 850 50, 1000 100 L 1000 300 L 0 300 Z" fill="currentColor" />
            <path d="M0 180 C 200 230, 400 130, 600 180 C 800 230, 900 130, 1000 180 L 1000 300 L 0 300 Z" fill="currentColor" opacity="0.6" />
            <path d="M0 240 C 300 280, 500 200, 700 240 C 900 280, 950 200, 1000 240 L 1000 300 L 0 300 Z" fill="currentColor" opacity="0.3" />
          </svg>
        );
      case 'grid':
        return (
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px), 
                              linear-gradient(to right, currentColor 1px, transparent 1px), 
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '16px 16px, 64px 64px, 64px 64px'
          }} />
        );
      case 'circles':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="20%" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="35%" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            <circle cx="50%" cy="50%" r="50%" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
            <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
          </svg>
        );
      case 'geometric':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <rect x="15%" y="15%" width="70%" height="70%" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="25%" y="25%" width="50%" height="50%" stroke="currentColor" strokeWidth="1" fill="none" />
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
          </svg>
        );
      case 'lines':
        return (
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, currentColor, currentColor 1px, transparent 1px, transparent 12px)',
          }} />
        );
      case 'radial':
        return (
          <div className="absolute inset-0 opacity-20 bg-radial from-current via-transparent to-transparent" />
        );
      case 'minimal':
      default:
        return (
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <span className="text-[12vw] font-serif font-black tracking-widest uppercase select-none">
              J
            </span>
          </div>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden w-full ${heightClass} ${themeColor} flex flex-col justify-between p-6 md:p-8 rounded-2xl transition-all duration-700 ease-out group-hover:shadow-2xl`}>
      {/* Background patterns */}
      {renderPattern()}

      {/* Aesthetic Top Details */}
      <div className="flex justify-between items-start z-10">
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
          {accentText}
        </span>
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-30" />
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
        </div>
      </div>

      {/* Middle Graphic Decorator */}
      <div className="flex flex-col items-center justify-center text-center py-4 z-10">
        {pattern === 'waves' && (
          <div className="w-24 h-[1px] bg-current opacity-40 mb-3" />
        )}
        {pattern === 'grid' && (
          <div className="w-10 h-10 border border-current opacity-30 flex items-center justify-center text-[10px] font-mono mb-2">
            +
          </div>
        )}
        {pattern === 'circles' && (
          <div className="w-8 h-8 rounded-full border border-current opacity-40 flex items-center justify-center mb-2">
            <div className="w-4 h-4 rounded-full bg-current opacity-50" />
          </div>
        )}
        {pattern === 'geometric' && (
          <div className="w-12 h-6 border-t border-b border-current opacity-40 mb-2" />
        )}
        {pattern === 'lines' && (
          <div className="flex gap-1 mb-2 opacity-40">
            <div className="w-1 h-6 bg-current" />
            <div className="w-1 h-6 bg-current" />
            <div className="w-1 h-6 bg-current" />
          </div>
        )}
        {pattern === 'radial' && (
          <div className="w-8 h-8 rounded-full border-2 border-current border-dashed animate-[spin_30s_linear_infinite] opacity-30 mb-2" />
        )}
        {pattern === 'minimal' && (
          <div className="w-1.5 h-12 bg-current opacity-30 mb-2" />
        )}
        
        {title && (
          <h4 className="font-serif text-lg md:text-xl font-medium tracking-tight mt-1">
            {title}
          </h4>
        )}
        {subtitle && (
          <p className="text-xs font-sans tracking-wide opacity-80 mt-1 uppercase">
            {subtitle}
          </p>
        )}
      </div>

      {/* Elegant Bottom Decorator */}
      <div className="flex justify-between items-end border-t border-current/10 pt-4 z-10">
        <span className="text-[9px] font-mono opacity-50">
          DESIGNED FOR LAUNCH
        </span>
        <span className="text-[10px] font-serif italic tracking-wider">
          Jalashka Atelier © 2026
        </span>
      </div>
    </div>
  );
}
