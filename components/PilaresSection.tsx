'use client';

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
import { motion } from 'framer-motion';
import { useScrollReveal, fadeInUp, staggerContainer } from '@/hooks/useScrollReveal';

export default function PilaresSection() {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const pilaresReveal = useScrollReveal({ threshold: 0.1 });
  const convergenciaReveal = useScrollReveal({ threshold: 0.1 });

  const pilares = [
    {
      icon: Smartphone,
      title: 'Tecnologia',
      subtitle: 'Disruptiva',
      description: 'Inovações que estão mudando a forma como vivemos e trabalhamos',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: Shield,
      title: 'Segurança',
      subtitle: 'Avançada',
      description: 'Proteção de dados e privacidade como pilares fundamentais',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: Lock,
      title: 'Proteção',
      subtitle: 'Patrimonial',
      description: 'Estratégias inteligentes para preservar e multiplicar patrimônio',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: Building,
      title: 'Franquias',
      subtitle: 'Inovadoras',
      description: 'Novos modelos de negócio com receita recorrente',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: TrendingUp,
      title: 'Receita',
      subtitle: 'Recorrente',
      description: 'Fluxos de renda previsíveis e escaláveis',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: Users,
      title: 'Comunidade',
      subtitle: 'Conectada',
      description: 'Redes de relacionamento que geram valor',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: Zap,
      title: 'Automação',
      subtitle: 'Inteligente',
      description: 'Sistemas que trabalham 24/7 para você',
      color: 'from-purple-600 to-purple-400',
    },
    {
      icon: Globe,
      title: 'Alcance',
      subtitle: 'Global',
      description: 'Oportunidades sem fronteiras geográficas',
      color: 'from-purple-600 to-purple-400',
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
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
            className="font-black text-3xl md:text-5xl text-white mb-6 uppercase"
          >
            OS PILARES DA
            <span className="block font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              TERCEIRA ONDA
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Oito elementos fundamentais que estão convergindo para criar a maior 
            oportunidade de geração de riqueza dos últimos 50 anos.
          </motion.p>
        </motion.div>

        {/* Grid de Pilares */}
        <motion.div 
          ref={pilaresReveal.ref}
          initial="hidden"
          animate={pilaresReveal.isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {pilares.map((pilar, index) => {
            const IconComponent = pilar.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <motion.div 
                  className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 h-full"
                  whileHover={{ 
                    borderColor: "rgba(147, 51, 234, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Ícone */}
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pilar.color} rounded-2xl mb-4 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="text-center">
                    <motion.h3 
                      className="text-lg font-bold text-white mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={pilaresReveal.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {pilar.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-purple-400 font-medium mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={pilaresReveal.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {pilar.subtitle}
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={pilaresReveal.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {pilar.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Seção de Convergência */}
        <motion.div 
          ref={convergenciaReveal.ref}
          initial="hidden"
          animate={convergenciaReveal.isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase"
            >
              A Convergência Está Acontecendo
            </motion.h3>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              Pela primeira vez na história, todos esses elementos estão se alinhando 
              simultaneamente, criando uma janela única de oportunidade.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 