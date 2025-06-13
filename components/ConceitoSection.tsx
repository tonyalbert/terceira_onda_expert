'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Zap, Target } from 'lucide-react';

export default function ConceitoSection() {
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

    const section = document.getElementById('conceito-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="conceito-section" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-black text-3xl md:text-5xl text-white mb-6">
            O MOVIMENTO 
            <span className="block font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              INEVITÁVEL
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uma transformação silenciosa está acontecendo. Enquanto muitos ainda não perceberam, 
            uma nova era de oportunidades está surgindo para aqueles que souberem identificar os sinais.
          </p>
        </div>

        {/* Cards de Conceito */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="group bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                A Mudança Começou
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Os sinais estão em todos os lugares. Tecnologia, comportamento do consumidor, 
                modelos de negócio - tudo está se transformando numa velocidade sem precedentes.
              </p>
            </div>
          </div>

          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="group bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Disrupção Iminente
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Setores inteiros serão revolucionados. Novas oportunidades surgirão para 
                aqueles preparados, enquanto outros ficarão para trás.
              </p>
            </div>
          </div>

          <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="group bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Posicionamento Estratégico
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Não basta apenas observar. É preciso agir no momento certo, 
                com as informações certas, para capturar as oportunidades que estão surgindo.
              </p>
            </div>
          </div>
        </div>

        {/* Citação Central */}
        <div className={`text-center ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <blockquote className="text-2xl md:text-3xl font-light text-white italic leading-relaxed">
              "A terceira onda não é apenas uma evolução.<br />
              É uma <span className="font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">revolução silenciosa</span> que está 
              redefinindo as regras do jogo."
            </blockquote>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      {/* <div className="absolute top-24 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div> */}
      {/* <div className="absolute bottom-24 right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div> */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
    </section>
  );
} 