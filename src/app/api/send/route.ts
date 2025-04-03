import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Todos los campos son requeridos' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Mi Portfolio <onboarding@resend.dev>',
    to: ['estefanobugari@gmail.com'],
    subject: `Nuevo mensaje de ${name}`,
    replyTo: email,
    html: `
        <h2>Nuevo mensaje desde el formulario Mi Portfolio</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
  });

  if (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}