import React from 'react';

interface HRCLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  theme?: 'dark' | 'light';
}

export const HRCLogo: React.FC<HRCLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  theme = 'light'
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7 sm:w-8 sm:h-8', title: 'text-xs sm:text-sm', sub: 'text-[9px] sm:text-[10px]', gap: 'gap-1.5 sm:gap-2' },
    md: { icon: 'w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11', title: 'text-xs sm:text-base md:text-lg', sub: 'text-[9px] sm:text-xs md:text-xs', gap: 'gap-1.5 sm:gap-2 md:gap-2.5' },
    lg: { icon: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14', title: 'text-sm sm:text-lg md:text-xl', sub: 'text-[10px] sm:text-xs md:text-sm', gap: 'gap-2 sm:gap-3 md:gap-3.5' },
    xl: { icon: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20', title: 'text-lg sm:text-2xl md:text-3xl', sub: 'text-xs sm:text-base md:text-lg', gap: 'gap-2.5 sm:gap-3.5 md:gap-4' },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center ${current.gap} ${className} min-w-0`}>
      {/* Official HRC Badge Vector Matching L head hrc.png */}
      <div
        className={`${current.icon} shrink-0 relative flex items-center justify-center rounded-lg bg-[#002D72] shadow-xs border border-[#002D72]/20 overflow-hidden transition-transform duration-200 group-hover:scale-105`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="hrcLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00358E" />
              <stop offset="100%" stopColor="#002D72" />
            </linearGradient>
          </defs>

          {/* Deep Navy Blue Square Base */}
          <rect width="100" height="100" rx="14" fill="url(#hrcLogoBg)" />

          {/* White Circular Inner Base */}
          <circle cx="50" cy="50" r="41" fill="#FFFFFF" />

          {/* 3 Dynamic Blue Rising Swooshes / Waves matching letterhead */}
          <path
            d="M 12 70 Q 42 74, 88 44 Q 68 76, 22 76 Z"
            fill="#002D72"
          />
          <path
            d="M 22 79 Q 52 82, 88 56 Q 72 85, 32 84 Z"
            fill="#002D72"
          />
          <path
            d="M 36 86 Q 62 88, 88 68 Q 78 90, 46 89 Z"
            fill="#002D72"
          />

          {/* Bold Red "HRC" Typography in Center matching letterhead */}
          <text
            x="50"
            y="52"
            textAnchor="middle"
            fill="#C92323"
            fontWeight="900"
            fontSize="30"
            fontFamily="Arial, Helvetica, sans-serif"
            letterSpacing="-1"
          >
            HRC
          </text>
        </svg>
      </div>

      {/* Brand Text Matching L head hrc.png */}
      {showText && (
        <div className="flex flex-col justify-center select-none min-w-0">
          <span
            className={`font-black tracking-tight uppercase leading-tight font-sans whitespace-nowrap ${
              theme === 'dark' ? 'text-white' : 'text-[#061C3D]'
            } ${current.title}`}
          >
            HASSAN READY MIX
          </span>
          <span
            className={`font-black tracking-wider uppercase font-sans leading-none ${
              theme === 'dark' ? 'text-[#F4C400]' : 'text-[#061C3D]'
            } ${current.sub}`}
          >
            CONCRETE
          </span>
        </div>
      )}
    </div>
  );
};
