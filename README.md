# A Terceira Onda - Landing Page

Landing page de pré-marketing para o projeto "A Terceira Onda" - Uma experiência imersiva e misteriosa focada em captura de leads para o lançamento de 12 de julho.

## ✨ Características

- **Design Moderno**: Interface tech com gradientes roxo e cyan
- **Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Cronômetro Regressivo**: Contagem em tempo real para 12/07
- **Modal de Captura**: Sistema completo de coleta de leads
- **API Integrada**: Endpoint para processamento de formulários
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones modernos
- **React Hooks** - Gerenciamento de estado

## 📋 Estrutura do Projeto

```
terceira-onda-expert/
├── app/
│   ├── api/subscribe/
│   │   └── route.ts          # API endpoint para leads
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout raiz
│   └── page.tsx              # Página principal
├── components/
│   ├── HeroSection.tsx       # Seção hero com vídeo
│   ├── ConceitoSection.tsx   # Seção do conceito
│   ├── PilaresSection.tsx    # Pilares da terceira onda
│   ├── CtaFinalSection.tsx   # Call-to-action final
│   ├── Footer.tsx            # Rodapé
│   └── LeadModal.tsx         # Modal de captura
└── public/                   # Arquivos estáticos
```

## 🛠️ Instalação e Execução

### 1. Instalar dependências
```bash
npm install
# ou
yarn install
```

### 2. Executar em desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

### 3. Acessar a aplicação
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎯 Funcionalidades

### Seções da Landing Page

1. **Hero Section**
   - Título impactante com gradientes
   - Vídeo do PandaVideo incorporado  
   - Cronômetro regressivo para 12/07
   - Botão CTA principal

2. **Conceito Section**
   - Cards explicativos sobre o movimento
   - Animações on-scroll
   - Citação inspiracional

3. **Pilares Section**
   - 8 pilares fundamentais com ícones
   - Grid responsivo
   - Efeitos hover interativos

4. **CTA Final Section**
   - Cronômetro destacado
   - Lista de benefícios
   - Botão de ação principal
   - Mensagem de escassez

5. **Modal de Captura**
   - Formulário de email e telefone
   - Validação em tempo real
   - Estado de sucesso
   - Integração com API

### API de Leads (`/api/subscribe`)

- Validação de dados
- Logs de captura
- Preparado para integrações:
  - Email marketing (Mailchimp, ConvertKit)
  - Webhooks (Zapier, Make.com)
  - Banco de dados

## 🎨 Design System

### Cores Principais
- **Roxo**: `#2d1b4e`, `#4c1d95`, `#6b21a8`, `#9333ea`
- **Cyan**: `#22d3ee`, `#06b6d4`
- **Acentos**: Branco, cinzas

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800

### Animações
- Fade-in ao rolar
- Hover em botões e cards
- Cronômetro pulsante
- Transições suaves

## 🔧 Personalização

### Modificar Data do Lançamento
Altere a data em `HeroSection.tsx` e `CtaFinalSection.tsx`:
```typescript
const targetDate = new Date('2024-07-12T00:00:00').getTime();
```

### Integrar Email Marketing
Modifique `app/api/subscribe/route.ts` para conectar com sua plataforma:
```typescript
// Exemplo com Mailchimp
await addToMailchimp(email, phone);
```

### Personalizar Vídeo
Substitua a URL do vídeo em `HeroSection.tsx`:
```jsx
<iframe src="SUA_URL_DO_VIDEO" />
```

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
npm run export
# Upload da pasta out/
```

## 📈 Analytics e Tracking

Para adicionar tracking, inclua em `layout.tsx`:
- Google Analytics
- Facebook Pixel
- Google Tag Manager

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto é proprietário e confidencial.

---

**A Terceira Onda** - O movimento inevitável que está transformando o mundo dos negócios.

*Desenvolvido com ❤️ para alta conversão e experiência do usuário excepcional.* 