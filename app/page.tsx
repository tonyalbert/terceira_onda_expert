'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ConceitoSection from '@/components/ConceitoSection';
import PilaresSection from '@/components/PilaresSection';
import CtaFinalSection from '@/components/CtaFinalSection';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import InfoSection from '@/components/InfoSection';

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
      <main className="relative min-h-[100lvh] overflow-x-hidden" style={{
        background: 'radial-gradient(circle at center, rgb(38, 0, 76) 0%, rgb(0, 0, 0) 100%)'
      }}>
        {/* Background gradient fixo que cobre toda a tela */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black -z-10"></div>
        
        {/* Background adicional para mobile */}
        <div className="absolute inset-0 -z-20" style={{
          background: 'radial-gradient(circle at center, rgb(38, 0, 76) 0%, rgb(0, 0, 0) 100%)',
          minHeight: '100vh'
        }}></div>
        
        <div className="relative z-10">
          <HeroSection onOpenModal={handleOpenModal} />
          {/* Linha separadora com gradiente roxo */}
          <div className="relative w-full h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/60 via-purple-400/40 via-purple-300/20 to-transparent"></div>
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