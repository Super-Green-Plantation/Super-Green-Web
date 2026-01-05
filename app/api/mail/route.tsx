import { Resend } from "resend";
import { NotionMagicLinkEmail } from "@/emails/NotionMagicLinkEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {email, username} = await request.json();

  const { data, error } = await resend.emails.send({
  from: "Acme <onboarding@resend.dev>",
  to: email,
  subject: "Login to your account",
  react: (
    <NotionMagicLinkEmail username={username} />
  ),
});

if (error) {
  return new Response(JSON.stringify({ error: error.message }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });

}

return new Response(JSON.stringify({ message: "Email sent successfully", data }), {
  status: 200,
  headers: { "Content-Type": "application/json" },
});

}