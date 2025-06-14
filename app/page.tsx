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
    <main className="relative min-h-[100lvh] overflow-x-hidden">
      {/* Background com gradiente fixo */}
      <div 
        className="fixed inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, rgb(38, 0, 76) 0%, rgb(0, 0, 0) 100%)',
          backgroundAttachment: 'fixed',
          zIndex: -1
        }}
      />
      
      {/* Conteúdo da página */}
      <div className="relative">
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
  );
} 