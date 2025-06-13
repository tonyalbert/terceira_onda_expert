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
      <main className="relative min-h-screen bg-black overflow-x-hidden">
        {/* Dark mysterious background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10">
          <HeroSection onOpenModal={handleOpenModal} />
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