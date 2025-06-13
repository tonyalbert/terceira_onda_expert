'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ConceitoSection from '@/components/ConceitoSection';
import PilaresSection from '@/components/PilaresSection';
import CtaFinalSection from '@/components/CtaFinalSection';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import InfoSection from '@/components/InfoSection';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FloatingParticles />
      <main className="relative min-h-screen overflow-x-hidden" style={{ overscrollBehavior: 'none' }}>
        {/* Gradient único e contínuo por toda a página */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/40 via-purple-900/30 to-black" style={{ height: '120vh', top: '-10vh' }}>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-violet-900/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-800/15 to-black"></div>
        </div>
        
        <div className="relative z-10">
          <HeroSection onOpenModal={handleOpenModal} />
          
          {/* Linha separadora com gradiente roxo */}
          <div className="relative w-full h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/60 via-purple-400/40 via-purple-300/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-purple-500/20 to-transparent blur-sm"></div>
          </div>
          
          <InfoSection />
          <ConceitoSection />
          <PilaresSection />
          <CtaFinalSection onOpenModal={handleOpenModal} />
          <Footer />
        </div>
        
        <LeadModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </main>
    </>
  );
} 