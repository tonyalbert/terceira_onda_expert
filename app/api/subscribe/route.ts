import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone } = body;

    // Validação básica
    if (!email || !phone) {
      return NextResponse.json(
        { error: 'Email e telefone são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Aqui você pode integrar com seu sistema de email marketing
    // Por exemplo: Mailchimp, ConvertKit, ActiveCampaign, etc.
    
    // Simulação de salvamento (substitua pela sua integração)
    console.log('Novo lead capturado:', {
      email,
      phone,
      timestamp: new Date().toISOString(),
      source: 'Terceira Onda Landing Page'
    });

    // Opcional: Salvar em banco de dados
    // await saveLeadToDatabase({ email, phone });

    // Opcional: Enviar para webhook de automação
    // await sendToWebhook({ email, phone });

    // Resposta de sucesso
    return NextResponse.json(
      { 
        success: true, 
        message: 'Cadastro realizado com sucesso!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao processar cadastro:', error);
    
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Função auxiliar para salvar no banco (exemplo)
async function saveLeadToDatabase(leadData: { email: string; phone: string }) {
  // Implementar conexão com banco de dados
  // Exemplo com Prisma, Supabase, MongoDB, etc.
  console.log('Salvando no banco:', leadData);
}

// Função auxiliar para webhook (exemplo)
async function sendToWebhook(leadData: { email: string; phone: string }) {
  // Enviar para webhook de automação (Zapier, Make.com, etc.)
  try {
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...leadData,
          source: 'Terceira Onda Landing Page',
          timestamp: new Date().toISOString(),
        }),
      });
    }
  } catch (error) {
    console.error('Erro ao enviar webhook:', error);
  }
} 