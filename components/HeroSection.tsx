'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HeroSectionProps {
  onOpenModal: () => void;
}

// Hook personalizado para animações individuais
function useIntersectionObserver(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible] as const;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [expired, setExpired] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Refs para animações individuais
  const [titleRef, titleVisible] = useIntersectionObserver(0.2);
  const [videoRef, videoVisible] = useIntersectionObserver(0.2);
  const [buttonRef, buttonVisible] = useIntersectionObserver(0.2);
  const [countdownRef, countdownVisible] = useIntersectionObserver(0.2);

  useEffect(() => {
    // Data futura: 12 de julho de 2025
    const targetDate = new Date('2025-07-12T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  // Efeito de mouse para interação com o fundo
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      {/* Background Elements com interação do mouse */}
      <div className="absolute inset-0">
        {/* Gradiente principal que segue o mouse */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.15), transparent 50%)`
          }}
        ></div>
        
        {/* Esferas flutuantes */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow transition-transform duration-1000"
          style={{
            top: '20%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow transition-transform duration-1000"
          style={{
            bottom: '20%',
            right: '20%',
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Gradiente rotativo central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-purple-400/5 rounded-full blur-3xl rotate-glow"></div>
        
        {/* Partículas que seguem o mouse */}
        <div 
          className="absolute w-4 h-4 bg-purple-400/40 rounded-full blur-sm transition-all duration-500"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        {/* Título Principal */}
        <div 
          ref={titleRef}
          className={`mb-6 md:mb-8 transition-all duration-700 ${titleVisible ? 'slide-in-left' : 'opacity-0'}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight">
            <span className="block text-purple-400">
              TERCEIRA
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl filter brightness-110 -mt-2 md:-mt-4">
              ONDA
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed font-light px-2 drop-shadow-lg">
            O movimento inevitável que está transformando o mundo dos negócios
          </p>
        </div>

        {/* Vídeo Central */}
        <div 
          ref={videoRef}
          className={`w-full mx-auto mb-6 md:mb-8 px-2 md:px-8 transition-all duration-700 ${videoVisible ? 'fade-in-up' : 'opacity-0'}`}
        >
          <div className="relative mx-auto w-full max-w-5xl flex justify-center">
            <div className="video-container mystery-glow w-full">
              <iframe
                src="https://player-vz-a9688acc-4db.tv.pandavideo.com.br/embed/?v=aac801b0-c49f-4f3b-bd9e-bd55988a6042&autoplay=1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {/* Floating decorative elements - apenas desktop */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse-slow hidden lg:block"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-purple-400/20 rounded-full animate-pulse-slow hidden lg:block" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-16 w-8 h-8 bg-purple-300/30 rounded-full animate-float hidden lg:block"></div>
          </div>
        </div>

        {/* Botão CTA logo abaixo do vídeo */}
        <div 
          ref={buttonRef}
          className={`mb-8 md:mb-12 transition-all duration-700 ${buttonVisible ? 'fade-in-up' : 'opacity-0'}`}
        >
          <Button
            onClick={onOpenModal}
            className="group relative bg-gradient-to-r from-purple-600 to-purple-400 text-white 
                     text-lg sm:text-lg md:text-xl font-bold 
                     px-8 py-6 sm:px-8 sm:py-6 md:px-12 md:py-8 
                     rounded-full shadow-2xl transition-all duration-500 animate-button-pop
                     hover:scale-105 active:scale-95"
          >
            <Play className="w-7 h-7 md:w-7 md:h-7 mr-2 md:mr-3 group-hover:scale-125 transition-transform duration-300" />
            SEGUIR O RASTRO
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10 scale-110 animate-shadow-pulse"></div>
          </Button>
          <p className="mt-3 md:mt-4 text-purple-200 text-xs sm:text-sm font-mono tracking-wider">
            [ ACESSO EXCLUSIVO - LIMITADO ]
          </p>
        </div>

        {/* Cronômetro */}
        <div 
          ref={countdownRef}
          className={`transition-all duration-700 ${countdownVisible ? 'slide-in-right' : 'opacity-0'}`}
        >
          <div className="flex items-center justify-center mb-6 md:mb-8">
            <Clock className="hidden sm:block w-6 h-6 md:w-8 md:h-8 text-purple-400 mr-2 md:mr-3 animate-pulse-slow" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-200 to-purple-300 bg-clip-text text-transparent text-center drop-shadow-lg">
              Lançamento em 12 de Julho
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-2xl mx-auto px-2">
            {[
              { value: timeLeft.days, label: 'DIAS' },
              { value: timeLeft.hours, label: 'HORAS' },
              { value: timeLeft.minutes, label: 'MIN' },
              { value: timeLeft.seconds, label: 'SEG' }
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-black/40 backdrop-blur-sm rounded-xl md:rounded-2xl 
                         p-2 sm:p-3 md:p-4 lg:p-6 
                         border border-purple-500/20 hover:border-purple-400/30 
                         transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-black bg-gradient-to-b from-purple-200 to-white bg-clip-text text-transparent">
                  {expired ? '00' : item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-purple-300 font-medium tracking-wider mt-1 md:mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating particles - reduzidos no mobile */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float hidden sm:block"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-float hidden sm:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-80 animate-float hidden md:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-float hidden md:block" style={{ animationDelay: '3s' }}></div>
    </section>
  );
} 