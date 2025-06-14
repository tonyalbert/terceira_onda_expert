// Configurações otimizadas para Framer Motion
export const motionConfig = {
  // Reduz o número de re-renders
  reducedMotion: "user",
  
  // Configurações de performance
  layoutDependency: false,
  
  // Transições otimizadas
  spring: {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 0.8
  },
  
  // Easing personalizado para melhor performance
  easeOut: [0.25, 0.46, 0.45, 0.94],
  easeIn: [0.55, 0.06, 0.68, 0.19],
  easeInOut: [0.42, 0, 0.58, 1]
};

// Configurações de viewport otimizadas
export const viewportConfig = {
  once: true, // Anima apenas uma vez
  margin: "0px 0px -100px 0px", // Trigger antes do elemento aparecer
  amount: 0.1 // 10% do elemento visível para trigger
};

// Variantes de animação reutilizáveis e otimizadas
export const optimizedVariants = {
  // Fade simples e rápido
  simpleFade: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, ease: motionConfig.easeOut }
    }
  },
  
  // Slide up otimizado
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: motionConfig.easeOut }
    }
  },
  
  // Scale suave
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: motionConfig.easeOut }
    }
  },
  
  // Container com stagger otimizado
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // Reduzido para ser mais rápido
        delayChildren: 0.1
      }
    }
  }
};

// Hook personalizado para performance
export const useOptimizedMotion = () => {
  // Detecta se o usuário prefere movimento reduzido
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
    
  return {
    shouldAnimate: !prefersReducedMotion,
    config: motionConfig,
    variants: optimizedVariants
  };
}; 