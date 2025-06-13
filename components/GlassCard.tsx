import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}

export default function GlassCard({ 
  children, 
  className = '',
  hoverEffect = true,
  glowColor = 'purple'
}: GlassCardProps) {
  const baseClasses = `
    relative 
    bg-black/40 
    backdrop-blur-sm 
    border 
    border-${glowColor}-500/20 
    rounded-2xl 
    transition-all 
    duration-500
  `;

  const hoverClasses = hoverEffect ? `
    hover:border-${glowColor}-400/40 
    hover:transform 
    hover:-translate-y-2 
    hover:shadow-lg 
    hover:shadow-${glowColor}-500/10
  ` : '';

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-${glowColor}-500/5 to-${glowColor}-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 