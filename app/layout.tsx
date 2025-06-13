import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import OrbitalSystem from '@/components/OrbitalSystem';
import InteractiveBackground from '@/components/InteractiveBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Terceira Onda',
  description: 'O movimento inevitável que está transformando o mundo dos negócios',
  keywords: 'terceira onda, empreendedorismo, investimento, tecnologia, segurança, receita recorrente',
  authors: [{ name: 'Terceira Onda Expert' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'A Terceira Onda - Pré-Marketing',
    description: 'O movimento inevitável que está transformando o mundo dos negócios.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Terceira Onda - Pré-Marketing',
    description: 'O movimento inevitável que está transformando o mundo dos negócios.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark w-screen">
      <body className={`${inter.className} dark`}>
        {/* Interactive Background */}
        <InteractiveBackground />
        
        {/* Background Orbital Systems */}
        <div className="fixed inset-0 overflow-hidden -z-10">
          <OrbitalSystem 
            size={800} 
            color="purple" 
            className="absolute -top-1/4 -left-1/4 opacity-30"
          />
          <OrbitalSystem 
            size={600} 
            color="purple" 
            className="absolute -bottom-1/4 -right-1/4 opacity-20"
          />
        </div>
        
        {children}
      </body>
    </html>
  );
} 