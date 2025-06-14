'use client';

import { useState, useEffect } from 'react';
import { Clock, ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';

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

  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const countdownReveal = useScrollReveal({ threshold: 0.1 });
  const benefitsReveal = useScrollReveal({ threshold: 0.1 });
  const ctaReveal = useScrollReveal({ threshold: 0.1 });

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

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título de Urgência */}
        <motion.div 
          ref={titleReveal.ref}
          initial="hidden"
          animate={titleReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mb-12"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-black text-3xl md:text-5xl text-white mb-6 uppercase"
          >
            Não Deixe Esta
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              OPORTUNIDADE PASSAR
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A janela está se abrindo. Os pioneiros já estão se posicionando. 
            Em 12 de julho de 2025, tudo será revelado.
          </motion.p>
        </motion.div>

        {/* Cronômetro Destacado */}
        <motion.div 
          ref={countdownReveal.ref}
          initial="hidden"
          animate={countdownReveal.isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex items-center justify-center mb-6"
          >
            <Clock className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Tempo Restante
            </h3>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto mb-8"
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
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-purple-500/20"
              >
                <motion.div 
                  className="text-3xl md:text-5xl font-black text-white"
                  key={item.value} // Re-render quando valor muda
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.value.toString().padStart(2, '0')}
                </motion.div>
                <div className="text-sm text-gray-400 font-medium tracking-wider mt-2">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Benefícios */}
        <motion.div 
          ref={benefitsReveal.ref}
          initial="hidden"
          animate={benefitsReveal.isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              'Acesso Exclusivo',
              'Informações Privilegiadas', 
              'Posicionamento Estratégico'
            ].map((benefit, index) => (
              <motion.div 
                key={benefit}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20"
              >
                <Zap className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          ref={ctaReveal.ref}
          initial="hidden"
          animate={ctaReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
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
        </motion.div>
      </div>
    </section>
  );
} 