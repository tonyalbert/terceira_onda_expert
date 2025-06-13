'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar partículas iniciais
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = Math.min(30, Math.floor(window.innerWidth / 40));
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          color: `hsl(${270 + Math.random() * 60}, 70%, 60%)` // Tons de roxo
        });
      }
      particlesRef.current = newParticles;
    };

    createParticles();

    // Animação das partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar conexões entre partículas próximas
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Atualizar e desenhar partículas
      particlesRef.current.forEach(particle => {
        // Movimento base
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Atração ao mouse (sutil)
        const mouseDistance = Math.sqrt(
          Math.pow(mousePosition.x - particle.x, 2) + 
          Math.pow(mousePosition.y - particle.y, 2)
        );

        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100 * 0.02;
          const angle = Math.atan2(mousePosition.y - particle.y, mousePosition.x - particle.x);
          particle.x += Math.cos(angle) * force;
          particle.y += Math.sin(angle) * force;
        }

        // Bordas
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Desenhar partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.fill();

        // Efeito de brilho
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity * 0.1})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // Array de dependências vazio para executar apenas uma vez

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Gradientes adicionais que seguem o mouse */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.08), transparent 70%)`
        }}
      />
      
      {/* Efeito de ondas concêntricas no mouse */}
      <div 
        className="fixed pointer-events-none z-0 w-24 h-24 border border-purple-400/10 rounded-full animate-ping"
        style={{
          left: mousePosition.x - 48,
          top: mousePosition.y - 48,
          animationDuration: '2s'
        }}
      />
      <div 
        className="fixed pointer-events-none z-0 w-12 h-12 border border-purple-300/20 rounded-full animate-ping"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
          animationDuration: '1.5s',
          animationDelay: '0.5s'
        }}
      />
    </>
  );
} 