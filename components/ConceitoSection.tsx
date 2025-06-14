'use client';

import { TrendingUp, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';

export default function ConceitoSection() {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const cardsReveal = useScrollReveal({ threshold: 0.1 });
  const quoteReveal = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Título da Seção */}
        <motion.div 
          ref={titleReveal.ref}
          initial="hidden"
          animate={titleReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-black text-3xl md:text-5xl text-white mb-6"
          >
            O MOVIMENTO 
            <span className="block font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              INEVITÁVEL
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Uma transformação silenciosa está acontecendo. Enquanto muitos ainda não perceberam, 
            uma nova era de oportunidades está surgindo para aqueles que souberem identificar os sinais.
          </motion.p>
        </motion.div>

        {/* Cards de Conceito */}
        <motion.div 
          ref={cardsReveal.ref}
          initial="hidden"
          animate={cardsReveal.isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={fadeInUp}>
            <motion.div 
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full"
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(147, 51, 234, 0.4)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                A Mudança Começou
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Os sinais estão em todos os lugares. Tecnologia, comportamento do consumidor, 
                modelos de negócio - tudo está se transformando numa velocidade sem precedentes.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <motion.div 
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full"
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(147, 51, 234, 0.4)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Disrupção Iminente
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Setores inteiros serão revolucionados. Novas oportunidades surgirão para 
                aqueles preparados, enquanto outros ficarão para trás.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <motion.div 
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 h-full"
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgba(147, 51, 234, 0.4)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Posicionamento Estratégico
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Não basta apenas observar. É preciso agir no momento certo, 
                com as informações certas, para capturar as oportunidades que estão surgindo.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Citação Central */}
        <motion.div 
          ref={quoteReveal.ref}
          initial="hidden"
          animate={quoteReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <motion.blockquote 
              className="text-2xl md:text-3xl font-light text-white italic leading-relaxed"
              variants={fadeInUp}
            >
              "A terceira onda não é apenas uma evolução.<br />
              É uma <span className="font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">revolução silenciosa</span> que está 
              redefinindo as regras do jogo."
            </motion.blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 