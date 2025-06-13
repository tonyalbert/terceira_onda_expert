'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SucessoPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Success Icon */}
        <div className={`mb-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-500 to-green-400 rounded-full mx-auto mb-6 shadow-2xl animate-pulse-slow">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </div>

        {/* Success Message */}
        <div className={`mb-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            <span className="block white">
              CADASTRO REALIZADO
            </span>
            <span className="block text-green-400">
              COM SUCESSO!
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Parabéns! Você agora faz parte do seleto grupo que terá acesso exclusivo às informações da Terceira Onda.
          </p>
        </div>

        {/* WhatsApp Info */}
        <div className={`mb-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">
                Fique Atento ao seu WhatsApp!
              </h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Você receberá uma mensagem no seu WhatsApp em breve com:
            </p>
            <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Instruções detalhadas sobre os próximos passos
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Acesso exclusivo ao conteúdo da Terceira Onda
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                Informações privilegiadas sobre o lançamento
              </li>
            </ul>
          </div>
        </div>

        {/* Countdown Reminder */}
        <div className={`mb-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-purple-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-bold text-white mb-2">
              🗓️ Lembre-se: 12 de Julho
            </h3>
            <p className="text-gray-300">
              Mantenha essa data marcada no seu calendário.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        {/* <div className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <Link href="/">
            <Button className="group relative bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white text-lg font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-500">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
              Voltar ao Início
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10 scale-110"></div>
            </Button>
          </Link>
        </div> */}
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-float"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-80 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
} 