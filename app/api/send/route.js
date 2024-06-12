

import { EmailTemplate } from "@/components/Emailtemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, number, subject, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      reply_to: email,
      to: `skolarsent@gmail.com`,
      subject: subject,
      react: EmailTemplate({ message, number, name, email })
    });

    if (error) {
   
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({message:'Email sent successfully'}), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
 
    return new Response(JSON.stringify({ error: 'Error sending message' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

