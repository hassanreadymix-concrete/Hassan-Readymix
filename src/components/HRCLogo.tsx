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
    sm: { icon: 'w-9 h-9', title: 'text-base', sub: 'text-[8px]', gap: 'gap-2.5' },
    md: { icon: 'w-11 h-11', title: 'text-xl', sub: 'text-[9px]', gap: 'gap-3' },
    lg: { icon: 'w-14 h-14', title: 'text-2xl', sub: 'text-[11px]', gap: 'gap-3.5' },
    xl: { icon: 'w-20 h-20', title: 'text-3xl', sub: 'text-[13px]', gap: 'gap-4' },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center ${current.gap} ${className}`}>
      {/* Official HRC Shield / Circular Badge Vector */}
      <div
        className={`${current.icon} shrink-0 relative flex items-center justify-center rounded-sm bg-[#002D72] shadow-md border border-[#F4C400]/40 overflow-hidden group-hover:border-[#F4C400] transition-all`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="hrcBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00358E" />
              <stop offset="100%" stopColor="#001F52" />
            </linearGradient>
            <linearGradient id="hrcGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9D423" />
              <stop offset="100%" stopColor="#E5A912" />
            </linearGradient>
          </defs>

          {/* Deep Navy Blue Shield Background */}
          <rect width="100" height="100" rx="10" fill="url(#hrcBgGrad)" />

          {/* White Circular Inner Badge */}
          <circle cx="50" cy="50" r="41" fill="#FFFFFF" stroke="url(#hrcGold)" strokeWidth="2.5" />

          {/* Dynamic Blue Curved Wings/Slashes at bottom right of the circle */}
          <path
            d="M20 62 Q 50 68, 82 45 Q 65 72, 32 72 Z"
            fill="#002D72"
          />
          <path
            d="M32 74 Q 60 76, 85 58 Q 72 82, 42 80 Z"
            fill="#002D72"
          />
          <path
            d="M48 81 Q 68 83, 86 69 Q 78 86, 56 85 Z"
            fill="#F4C400"
          />

          {/* Bold Red "HRC" Typography in the Center */}
          <text
            x="48"
            y="54"
            textAnchor="middle"
            fill="#C92323"
            fontWeight="900"
            fontSize="28"
            fontFamily="Arial, Helvetica, sans-serif"
            letterSpacing="-1"
          >
            HRC
          </text>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-black font-heading tracking-tight uppercase leading-none ${
                theme === 'dark' ? 'text-white' : 'text-[#061C3D]'
              } ${current.title}`}
            >
              HASSAN READY MIX
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className={`font-black tracking-[0.25em] uppercase font-mono-tech ${
                theme === 'dark' ? 'text-[#F4C400]' : 'text-[#002D72]'
              } ${current.sub}`}
            >
              CONCRETE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C92323]" />
            <span
              className={`font-bold tracking-widest text-[8px] uppercase ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              LAHORE 8+ YRS
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
