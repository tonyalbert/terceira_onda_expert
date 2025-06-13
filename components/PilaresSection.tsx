'use client';

import { useEffect, useState } from 'react';
import { 
  Shield, 
  Building, 
  Smartphone, 
  TrendingUp, 
  Users, 
  Lock,
  Zap,
  Globe
} from 'lucide-react';

export default function PilaresSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('pilares-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const pilares = [
    {
      icon: Smartphone,
      title: 'Tecnologia',
      subtitle: 'Disruptiva',
      description: 'Inovações que estão mudando a forma como vivemos e trabalhamos',
      color: 'from-purple-600 to-purple-400',
      delay: '0.1s'
    },
    {
      icon: Shield,
      title: 'Segurança',
      subtitle: 'Avançada',
      description: 'Proteção de dados e privacidade como pilares fundamentais',
      color: 'from-purple-600 to-purple-400',
      delay: '0.2s'
    },
    {
      icon: Lock,
      title: 'Proteção',
      subtitle: 'Patrimonial',
      description: 'Estratégias inteligentes para preservar e multiplicar patrimônio',
      color: 'from-purple-600 to-purple-400',
      delay: '0.3s'
    },
    {
      icon: Building,
      title: 'Franquias',
      subtitle: 'Inovadoras',
      description: 'Novos modelos de negócio com receita recorrente',
      color: 'from-purple-600 to-purple-400',
      delay: '0.4s'
    },
    {
      icon: TrendingUp,
      title: 'Receita',
      subtitle: 'Recorrente',
      description: 'Fluxos de renda previsíveis e escaláveis',
      color: 'from-purple-600 to-purple-400',
      delay: '0.5s'
    },
    {
      icon: Users,
      title: 'Comunidade',
      subtitle: 'Conectada',
      description: 'Redes de relacionamento que geram valor',
      color: 'from-purple-600 to-purple-400',
      delay: '0.6s'
    },
    {
      icon: Zap,
      title: 'Automação',
      subtitle: 'Inteligente',
      description: 'Sistemas que trabalham 24/7 para você',
      color: 'from-purple-600 to-purple-400',
      delay: '0.7s'
    },
    {
      icon: Globe,
      title: 'Alcance',
      subtitle: 'Global',
      description: 'Oportunidades sem fronteiras geográficas',
      color: 'from-purple-600 to-purple-400',
      delay: '0.8s'
    }
  ];

  return (
    <section id="pilares-section" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-black text-3xl md:text-5xl text-white mb-6 uppercase">
            OS PILARES DA
            <span className="block font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              TERCEIRA ONDA
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oito elementos fundamentais que estão convergindo para criar a maior 
            oportunidade de geração de riqueza dos últimos 50 anos.
          </p>
        </div>

        {/* Grid de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pilares.map((pilar, index) => {
            const IconComponent = pilar.icon;
            return (
              <div
                key={index}
                className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: pilar.delay }}
              >
                <div className="group bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-2 h-full">
                  {/* Ícone */}
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pilar.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {pilar.title}
                    </h3>
                    <p className="text-sm text-purple-400 font-medium mb-3">
                      {pilar.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {pilar.description}
                    </p>
                  </div>

                  {/* Effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${pilar.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seção de Convergência */}
        <div className={`text-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase">
              A Convergência Está Acontecendo
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Pela primeira vez na história, todos esses elementos estão se alinhando 
              simultaneamente, criando uma janela única de oportunidade.
            </p>
            <div className="flex items-center justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl"></div>
    </section>
  );
} 