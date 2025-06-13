'use client';

import { useEffect, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  blur: number;
  color: string;
  direction: number;
  scale: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const createParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    const colors = [
      '153,25,254', // Roxo
      '34,211,238', // Ciano
      '147,51,234', // Roxo mais claro
      '6,182,212',  // Ciano mais escuro
    ];

    const particleCount = isMobile ? 25 : 50;
    const baseSize = isMobile ? 20 : 40;
    const baseOpacity = isMobile ? 0.15 : 0.3;
    const baseBlur = isMobile ? 10 : 20;

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * baseSize + 10;
      const opacity = Math.random() * baseOpacity + 0.1;
      const blur = Math.random() * baseBlur + 4;
      const direction = Math.random() > 0.5 ? 1 : -1;
      const scale = Math.random() * 0.5 + 0.8;
      const color = colors[Math.floor(Math.random() * colors.length)];

      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        delay: Math.random() * 15,
        duration: Math.random() * 20 + (isMobile ? 20 : 15),
        opacity,
        blur,
        color: `rgba(${color},${opacity})`,
        direction,
        scale,
      });
    }
    setParticles(newParticles);
  }, [isMobile]);

  useEffect(() => {
    createParticles();

    const interval = setInterval(createParticles, isMobile ? 45000 : 30000);
    return () => clearInterval(interval);
  }, [createParticles, isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            '--base-opacity': particle.opacity,
            '--base-blur': `${particle.blur}px`,
            filter: `blur(${particle.blur}px)`,
            animation: `
              floatSlow ${particle.duration}s ease-in-out infinite,
              glowPulse ${particle.duration / 2}s ease-in-out infinite
            `,
            animationDelay: `${particle.delay}s`,
            transform: `scale(${particle.scale})`,
            transition: 'all 0.5s ease-in-out',
          } as React.CSSProperties}
        />
      ))}
      {/* Orbs maiores e misteriosos */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#9919FE]/30 rounded-full blur-3xl animate-pulse float-slow" />
      <div className="absolute top-2/3 right-1/5 w-96 h-96 bg-[#9919FE]/20 rounded-full blur-3xl animate-pulse float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#9919FE]/25 rounded-full blur-2xl animate-pulse float-slow" style={{ animationDelay: '4s' }} />
      <style jsx global>{`
        @keyframes particleFloat1 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-60px) scale(1.1); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes particleFloat-1 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(60px) scale(0.9); }
          100% { transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
} 