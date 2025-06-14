'use client';

import { useState, useEffect } from 'react';
import { Play, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScrollReveal, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/hooks/useScrollReveal';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [expired, setExpired] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shinyActive, setShinyActive] = useState(false);

  // Hooks para animações
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const videoReveal = useScrollReveal({ threshold: 0.1 });
  const buttonReveal = useScrollReveal({ threshold: 0.1 });
  const countdownReveal = useScrollReveal({ threshold: 0.1 });

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

  // Simula carregamento do vídeo para evitar splash
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Ativa o efeito shiny quando o título fica visível
  useEffect(() => {
    if (titleReveal.isInView) {
      const timer = setTimeout(() => {
        setShinyActive(true);
      }, 800); // Delay para iniciar após a animação do título
      return () => clearTimeout(timer);
    }
  }, [titleReveal.isInView]);

  return (
    <section className="relative flex items-center justify-center px-4 py-8 md:py-12">
      <div className="max-w-8xl mx-auto text-center relative z-10 w-full">
        {/* Título Principal - Mais compacto */}
        <motion.div 
          ref={titleReveal.ref}
          initial="hidden"
          animate={titleReveal.isInView ? "visible" : "hidden"}
          variants={fadeInLeft}
          className="mb-4 md:mb-6"
        >
          <motion.p 
            variants={fadeInUp}
            className={`text-sm sm:text-base md:text-xl lg:text-xl max-w-4xl mx-auto leading-relaxed font-light px-2 shiny-text ${shinyActive ? 'animate' : ''}`}
          >
            O movimento inevitável que está transformando o mundo dos negócios
          </motion.p>
        </motion.div>

        {/* Vídeo Central - DESTAQUE PRINCIPAL */}
        <motion.div 
          ref={videoReveal.ref}
          initial="hidden"
          animate={videoReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="w-full mx-auto mb-6 md:mb-8 px-1 md:px-4"
        >
          <div className="relative mx-auto w-full max-w-7xl">
            {/* Glow effect ao redor do vídeo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-purple-400/30 to-purple-600/20 rounded-3xl blur-2xl opacity-75"></div>
            
            {/* Container do vídeo com destaque */}
            <motion.div 
              className="video-container-enhanced w-full relative"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Loading placeholder para evitar splash */}
              {!videoLoaded && (
                <div className="absolute inset-0 bg-black/95 rounded-2xl flex items-center justify-center z-10">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                    <div className="text-center">
                      <p className="text-purple-400 text-lg font-medium">Carregando vídeo...</p>
                      <p className="text-purple-300/70 text-sm mt-1">Prepare-se para descobrir a Terceira Onda</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Indicador de PLAY destacado */}
              <div className="absolute top-4 left-4 z-20 bg-purple-600/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                <Play className="w-4 h-4 text-white" />
                <span className="text-white text-xs md:text-sm font-medium">ASSISTA AGORA</span>
              </div>
              
              <iframe
                src="https://player-vz-a9688acc-4db.tv.pandavideo.com.br/embed/?v=aac801b0-c49f-4f3b-bd9e-bd55988a6042&autoplay=1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={`w-full h-full transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setVideoLoaded(true)}
              />
              
              {/* Borda brilhante animada */}
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-400/50 pointer-events-none video-glow-border"></div>
            </motion.div>
            
            {/* Call-to-action abaixo do vídeo */}
            <motion.div 
              variants={fadeInUp}
              className="mt-4 text-center"
            >
              {/* <p className="text-purple-300 text-sm md:text-base font-medium">
                👆 <span className="text-white">Descubra os segredos da Terceira Onda</span> 👆
              </p> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Botão CTA - Mais próximo do vídeo */}
        <motion.div 
          ref={buttonReveal.ref}
          initial="hidden"
          animate={buttonReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-8 md:mb-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={onOpenModal}
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white 
                       text-lg sm:text-lg md:text-xl font-bold 
                       px-8 py-6 sm:px-8 sm:py-6 md:px-12 md:py-8 
                       rounded-full shadow-2xl transition-transform duration-200 pulse-glow"
            >
              <Play className="w-7 h-7 md:w-7 md:h-7 mr-2 md:mr-3" />
              SEGUIR O RASTRO
            </Button>
          </motion.div>
          <motion.p 
            variants={fadeInUp}
            className="mt-3 md:mt-4 text-purple-200 text-xs sm:text-sm font-mono tracking-wider"
          >
            [ ACESSO EXCLUSIVO - LIMITADO ]
          </motion.p>
        </motion.div>

        {/* Cronômetro - Mais compacto */}
        <motion.div
          ref={countdownReveal.ref}
          initial="hidden"
          animate={countdownReveal.isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center mb-4 md:mb-6"
          >
            <Clock className="hidden sm:block w-5 h-5 md:w-6 md:h-6 text-purple-400 mr-2" />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Lançamento em 12 de Julho
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-xl mx-auto px-2"
          >
            {[
              { value: timeLeft.days, label: 'DIAS' },
              { value: timeLeft.hours, label: 'HORAS' },
              { value: timeLeft.minutes, label: 'MIN' },
              { value: timeLeft.seconds, label: 'SEG' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-black/40 backdrop-blur-sm rounded-lg md:rounded-xl 
                         p-2 sm:p-3 md:p-4 
                         border border-purple-500/20"
              >
                <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black bg-gradient-to-b from-purple-200 to-white bg-clip-text text-transparent">
                  {expired ? '00' : item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-xs text-purple-300 font-medium tracking-wider mt-1">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 