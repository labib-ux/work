import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-auto h-16", inverted = false }) => {
  // Define colors based on inverted state
  const mainColor = inverted ? '#ffffff' : '#2e3192'; // White or Logo Blue
  const accentColor = '#ea580c'; // Orange (stays same)
  const windowBg = inverted ? '#ffffff' : '#1e3a8a'; // White or Dark Blue
  const windowLines = inverted ? '#2e3192' : '#ffffff'; // Blue or White

  return (
    <svg 
      viewBox="0 0 300 180" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dream Dale Ltd. Logo"
    >
      {/* Top Tagline */}
      <text x="20" y="45" fontSize="18" fill={accentColor} fontFamily="Arial, sans-serif" fontWeight="500">Since 2020</text>
      
      {/* Roof Structure */}
      <path 
        d="M 60 110 L 140 30 L 220 110" 
        fill="none" 
        stroke={accentColor} 
        strokeWidth="14" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Window Icon */}
      <g transform="translate(132, 65)">
        <rect width="16" height="16" fill={windowBg} rx="1" />
        <line x1="8" y1="0" x2="8" y2="16" stroke={windowLines} strokeWidth="2" />
        <line x1="0" y1="8" x2="16" y2="8" stroke={windowLines} strokeWidth="2" />
      </g>
      
      {/* Main DDL Text */}
      <text 
        x="150" 
        y="140" 
        textAnchor="middle" 
        fontSize="100" 
        fontWeight="900" 
        fontFamily="Arial, sans-serif" 
        fill={mainColor} 
        letterSpacing="-2"
      >
        DDL
      </text>
      
      {/* Bottom Tagline */}
      <text 
        x="150" 
        y="165" 
        textAnchor="middle" 
        fontSize="13" 
        fontWeight="800" 
        fill={accentColor} 
        letterSpacing="0.5" 
        fontFamily="Arial, sans-serif"
      >
        COMMITTED TO SUPERIOR QUALITY
      </text>
    </svg>
  );
};

export default Logo;