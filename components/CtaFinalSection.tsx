'use client';

import { useState, useEffect } from 'react';
import { Clock, ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';

interface CtaFinalSectionProps {
  onOpenModal: () => void;
}

export default function CtaFinalSection({ onOpenModal }: CtaFinalSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Data futura: 12 de julho de 2025
    const targetDate = new Date('2025-07-12T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('cta-final-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-final-section" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título de Urgência */}
        <div className={`mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-black text-3xl md:text-5xl text-white mb-6 uppercase">
            Não Deixe Esta
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              OPORTUNIDADE PASSAR
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A janela está se abrindo. Os pioneiros já estão se posicionando. 
            Em 12 de julho de 2025, tudo será revelado.
          </p>
        </div>

        {/* Cronômetro Destacado */}
        <div className={`mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-purple-400 mr-3 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Tempo Restante
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto mb-8">
            {[
              { value: timeLeft.days, label: 'DIAS' },
              { value: timeLeft.hours, label: 'HORAS' },
              { value: timeLeft.minutes, label: 'MIN' },
              { value: timeLeft.seconds, label: 'SEG' }
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-3xl md:text-5xl font-black text-white bg-clip-text group-hover:animate-none">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-wider mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div className={`mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <Zap className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <span className="text-white font-medium">Acesso Exclusivo</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <Zap className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <span className="text-white font-medium">Informações Privilegiadas</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <Zap className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <span className="text-white font-medium">Posicionamento Estratégico</span>
            </div>
          </div>
        </div>

        {/* CTA Principal */}
        <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
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
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
} 