'use client';

import { useState } from 'react';
import { X, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!email || !telefone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    try {
      console.log('Dados do formulário:', { email, telefone });
      
      // Simular um pequeno delay para mostrar o loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      /* 
      // Código da API comentado para teste direto
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, telefone }),
      });

      if (response.ok) {
        // Redirecionar para a página de sucesso
        router.push('/sucesso');
        onClose();
      } else {
        alert('Erro ao realizar cadastro. Tente novamente.');
      } 
      */
      
      // Fechar o modal primeiro
      onClose();
      
      // Pequeno delay para garantir que o modal feche antes do redirecionamento
      setTimeout(() => {
        router.push('/sucesso');
      }, 100);
      
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao realizar cadastro. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-black/90 backdrop-blur-md rounded-2xl p-8 max-w-md w-full border border-purple-500/20 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            INFORME SEUS DADOS PARA
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              CONTATO
            </span>
          </h2>
          <p className="text-gray-300">
            Faça parte do grupo que terá acesso exclusivo às informações da Terceira Onda.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-4 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
              <Input
                type="tel"
                placeholder="ex: (11)99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                className="pl-14 bg-black/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400"
              />
              <p className="text-xs text-gray-400 mt-1">
                Você receberá nosso contato por WhatsApp
              </p>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full group relative bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-bold py-4 rounded-full shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-500"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando...
              </div>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
                ENVIAR
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10 scale-110"></div>
          </Button>
        </form>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            🔒 Seus dados estão seguros e protegidos. Não compartilhamos informações com terceiros.
          </p>
        </div>
      </div>
    </div>
  );
} 