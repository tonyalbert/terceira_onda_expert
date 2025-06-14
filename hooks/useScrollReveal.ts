import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: options.threshold || 0.1,
    once: options.triggerOnce !== false, // Default true
    margin: options.rootMargin || "0px 0px -100px 0px"
  });

  return { ref, isInView };
};

// Variantes de animação otimizadas
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuart
    }
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 30,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}; 