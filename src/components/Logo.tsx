import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'icon-only' | 'stacked';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  variant = 'horizontal',
}) => {
  // Dimension sizing maps
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: { top: 'text-xs', main: 'text-base', sub: 'text-xs' },
    md: { top: 'text-sm', main: 'text-xl', sub: 'text-sm' },
    lg: { top: 'text-base', main: 'text-3xl', sub: 'text-base' },
    xl: { top: 'text-xl', main: 'text-4xl', sub: 'text-xl' },
  };

  // The authentic spiral mark of Clases de Inglés Mty
  const SpiralMark = (
    <svg
      viewBox="0 0 140 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizes[size]} shrink-0`}
      aria-label="Clases de Inglés Mty Logomark"
    >
      {/* Outer prominent olive green dots */}
      <circle cx="62" cy="46" r="13" fill="#7E913C" />
      <circle cx="47" cy="72" r="11" fill="#7E913C" />
      <circle cx="18" cy="123" r="11" fill="#7E913C" />
      <circle cx="46" cy="108" r="9" fill="#7E913C" />
      <circle cx="31" cy="144" r="8.5" fill="#7E913C" />
      <circle cx="51" cy="147" r="7" fill="#7E913C" />

      {/* Outer prominent espresso brown dots */}
      <circle cx="26" cy="78" r="10" fill="#382F2A" />
      <circle cx="29" cy="102" r="9.5" fill="#382F2A" />
      <circle cx="68" cy="69" r="9" fill="#382F2A" />
      <circle cx="49" cy="132" r="8" fill="#382F2A" />
      <circle cx="63" cy="96" r="7.5" fill="#382F2A" />

      {/* Middle spiral layer */}
      <circle cx="51" cy="54" r="5" fill="#8DA244" />
      <circle cx="38" cy="63" r="4.5" fill="#7E913C" />
      <circle cx="41" cy="88" r="5" fill="#382F2A" />
      <circle cx="36" cy="118" r="5.5" fill="#7E913C" />
      <circle cx="41" cy="135" r="4.8" fill="#382F2A" />
      <circle cx="62" cy="120" r="6.5" fill="#7E913C" />
      <circle cx="70" cy="84" r="6" fill="#382F2A" />
      <circle cx="68" cy="108" r="5.5" fill="#382F2A" />
      <circle cx="69" cy="136" r="6" fill="#382F2A" />
      <circle cx="75" cy="124" r="5" fill="#7E913C" />
      <circle cx="67" cy="152" r="5" fill="#7E913C" />

      {/* Inner curling tail */}
      <circle cx="77" cy="71" r="4" fill="#382F2A" />
      <circle cx="75" cy="96" r="4.5" fill="#382F2A" />
      <circle cx="79" cy="111" r="4" fill="#7E913C" />
      <circle cx="81" cy="144" r="4.5" fill="#382F2A" />
      <circle cx="79" cy="158" r="4.5" fill="#7E913C" />
      <circle cx="85" cy="127" r="4" fill="#382F2A" />
      <circle cx="89" cy="138" r="3.6" fill="#7E913C" />
      <circle cx="89" cy="152" r="4" fill="#382F2A" />
      <circle cx="88" cy="164" r="3.8" fill="#7E913C" />
      <circle cx="95" cy="146" r="3.2" fill="#382F2A" />
      <circle cx="96" cy="158" r="3.4" fill="#382F2A" />
      <circle cx="97" cy="167" r="3.2" fill="#7E913C" />
      <circle cx="100" cy="153" r="2.6" fill="#7E913C" />
      <circle cx="103" cy="162" r="2.8" fill="#382F2A" />
      <circle cx="104" cy="170" r="2.7" fill="#7E913C" />
      <circle cx="107" cy="158" r="2.2" fill="#382F2A" />
      <circle cx="110" cy="167" r="2.2" fill="#7E913C" />
      <circle cx="113" cy="164" r="1.9" fill="#7E913C" />
      <circle cx="116" cy="160" r="1.6" fill="#7E913C" />
      <circle cx="118" cy="155" r="1.4" fill="#7E913C" />
    </svg>
  );

  if (variant === 'icon-only' || !showText) {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {SpiralMark}
      </div>
    );
  }

  const currentText = textSizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {SpiralMark}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif font-medium text-[#7E913C] tracking-normal ${currentText.top}`}
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          Clases de
        </span>
        <div className="flex items-baseline gap-1.5 -mt-0.5">
          <span
            className={`font-serif font-semibold text-[#382F2A] tracking-normal ${currentText.main}`}
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Inglés
          </span>
          <span
            className={`font-serif font-medium text-[#7E913C] ${currentText.sub}`}
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Mty
          </span>
        </div>
      </div>
    </div>
  );
};
