'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Smartphone, Download, MonitorSmartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';
import CountUp from 'react-countup';

const infos = [
  {
    icon: CheckCircle,
    value: 100,
    suffix: '%',
    label: 'Pagamentos Aprovados',
    color: 'from-purple-600 to-purple-400',
    description: 'Taxa de aprovação garantida',
  },
  {
    icon: Download,
    value: 34,
    suffix: 'M',
    label: 'Apps Instalados',
    color: 'from-purple-600 to-purple-400',
    description: 'Downloads confirmados',
  },
  {
    icon: Smartphone,
    value: 89,
    suffix: '+',
    label: 'Países Ativos',
    color: 'from-purple-600 to-purple-400',
    description: 'Presença global',
  },
  {
    icon: MonitorSmartphone,
    value: 100,
    suffix: '%',
    label: 'Compatibilidade',
    color: 'from-purple-600 to-purple-400',
    description: 'Todos os dispositivos',
  },
];

export default function InfoSection() {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const cardsReveal = useScrollReveal({ threshold: 0.1 });
  const statusReveal = useScrollReveal({ threshold: 0.1 });
  const [startCount, setStartCount] = useState(false);

  // Inicia o countup quando os cards ficam visíveis
  useEffect(() => {
    if (cardsReveal.isInView && !startCount) {
      setStartCount(true);
    }
  }, [cardsReveal.isInView, startCount]);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div 
          ref={titleReveal.ref}
          initial="hidden"
          animate={titleReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400/30 bg-purple-400/10">
              MÉTRICAS EM TEMPO REAL
            </Badge>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase"
          >
            Números que
            <span className="block font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              COMPROVAM O MOVIMENTO
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div 
          ref={cardsReveal.ref}
          initial="hidden"
          animate={cardsReveal.isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {infos.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className={`text-3xl font-black mb-1 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                          {startCount ? (
                            <CountUp
                              start={0}
                              end={info.value}
                              duration={2.5}
                              delay={index * 0.2}
                              suffix={info.suffix}
                              preserveValue
                              useEasing={true}
                              easingFn={(t, b, c, d) => {
                                // easeOutQuart
                                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                              }}
                            />
                          ) : (
                            `0${info.suffix}`
                          )}
                        </div>
                        <div className="text-sm text-gray-400">
                          {info.label}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* System status */}
        <motion.div 
          ref={statusReveal.ref}
          initial="hidden"
          animate={statusReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-16"
        >
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.div 
                variants={fadeInUp}
                className="flex items-center justify-center space-x-2 mb-4"
              >
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 text-sm font-mono">DADOS EM TEMPO REAL</span>
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Infraestrutura Global Ativa
                </h3>
                <p className="text-gray-400">
                  Nossa rede está processando transações em tempo real com 99.99% de disponibilidade
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 