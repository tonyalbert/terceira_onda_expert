'use client';

import { useEffect, useState } from 'react';

interface OrbitalSystemProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function OrbitalSystem({ 
  size = 600, 
  color = 'purple',
  className = ''
}: OrbitalSystemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Orbital rings */}
      <div className={`absolute inset-0 border-2 border-${color}-500/20 rounded-full animate-spin-slow opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''}`}></div>
      <div className={`absolute inset-4 border border-${color}-500/10 rounded-full animate-spin-slow opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''}`} style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
      <div className={`absolute inset-8 border border-${color}-500/5 rounded-full animate-spin-slow opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''}`} style={{ animationDuration: '25s' }}></div>
      
      {/* Floating particles */}
      <div className={`absolute top-0 left-1/2 w-4 h-4 bg-${color}-500 rounded-full blur-sm animate-float opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-60' : ''}`}></div>
      <div className={`absolute bottom-0 right-1/2 w-3 h-3 bg-${color}-400 rounded-full blur-sm animate-float opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-40' : ''}`} style={{ animationDelay: '1s' }}></div>
      <div className={`absolute top-1/2 right-0 w-2 h-2 bg-${color}-300 rounded-full blur-sm animate-float opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-30' : ''}`} style={{ animationDelay: '2s' }}></div>

      {/* Central glow */}
      <div className={`absolute inset-1/4 bg-gradient-to-r from-${color}-500/20 to-${color}-400/20 rounded-full blur-3xl opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''}`}></div>
    </div>
  );
} 