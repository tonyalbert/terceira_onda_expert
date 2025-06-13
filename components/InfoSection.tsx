'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Smartphone, Download, MonitorSmartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CountUp from 'react-countup';

const infos = [
  {
    icon: CheckCircle,
    value: 100,
    suffix: '%',
    label: 'Pagamentos Aprovados',
    color: 'from-purple-600 to-purple-400',
    delay: '0.1s',
    description: 'Taxa de aprovação garantida',
  },
  {
    icon: Download,
    value: 34,
    suffix: 'M',
    label: 'Apps Instalados',
    color: 'from-purple-600 to-purple-400',
    delay: '0.2s',
    description: 'Downloads confirmados',
  },
  {
    icon: Smartphone,
    value: 89,
    suffix: '+',
    label: 'Países Ativos',
    color: 'from-purple-600 to-purple-400',
    delay: '0.3s',
    description: 'Presença global',
  },
  {
    icon: MonitorSmartphone,
    value: 100,
    suffix: '%',
    label: 'Compatibilidade',
    color: 'from-purple-600 to-purple-400',
    delay: '0.4s',
    description: 'Todos os dispositivos',
  },
];

export default function InfoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay para iniciar a contagem após a animação de entrada
          setTimeout(() => setStartCount(true), 500);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background orbital system */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px]">
          {/* Orbital rings */}
          <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-4 border border-purple-500/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
          <div className="absolute inset-8 border border-purple-500/5 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-purple-500 rounded-full blur-sm animate-float"></div>
          <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-0 w-2 h-2 bg-purple-300 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400/30 bg-purple-400/10">
            MÉTRICAS EM TEMPO REAL
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-glow uppercase">
            Números que
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              COMPROVAM O MOVIMENTO
            </span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {infos.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={info.label}
                className={`bg-black/40 border-purple-500/20 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-500 group hover:transform hover:-translate-y-2 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: info.delay }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`text-3xl font-black mb-1 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                        {startCount ? (
                          <CountUp
                            start={0}
                            end={info.value}
                            duration={2}
                            delay={index * 0.2}
                            suffix={info.suffix}
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
            );
          })}
        </div>

        {/* System status */}
        <div className={`mt-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">DADOS EM TEMPO REAL</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Infraestrutura Global Ativa
                </h3>
                <p className="text-gray-400">
                  Nossa rede está processando transações em tempo real com 99.99% de disponibilidade
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 