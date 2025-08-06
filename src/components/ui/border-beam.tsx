import { cn } from "@/lib/utils";
import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 2,
  colorFrom = "#ec4899",
  colorTo = "#a855f7",
  delay = 0,
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-full",
        className
      )}
    >
      {/* SVG path that follows the rounded border */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor={colorFrom} />
            <stop offset="70%" stopColor={colorTo} />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>
        </defs>
        
        {/* Rounded rectangle path */}
        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="49"
          ry="49"
          fill="none"
          stroke="url(#beam-gradient)"
          strokeWidth={borderWidth}
          filter="url(#glow)"
          style={{
            strokeDasharray: '25 75',
            strokeDashoffset: '100',
            animation: `border-beam-path ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            filter: 'brightness(3) saturate(2) contrast(1.5) drop-shadow(0 0 20px currentColor)',
          }}
        />
      </svg>
      
      {/* Additional glow effect */}
      <div
        className="absolute inset-0 rounded-full opacity-50"
        style={{
          boxShadow: `inset 0 0 30px ${colorFrom}40, 0 0 60px ${colorFrom}30, 0 0 90px ${colorFrom}20`,
          animation: `pulse ${duration * 0.5}s ease-in-out infinite alternate`,
        }}
      />
    </div>
  );
};

export default BorderBeam;