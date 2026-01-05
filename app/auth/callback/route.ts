import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data.user) {
      // Check if user exists in database, create if not
      const existingUser = await prisma.user.findUnique({
        where: { id: data.user.id },
      });

      if (!existingUser) {
        // Extract names from Google OAuth
        const fullName = data.user.user_metadata?.full_name || "";
        const [firstName, ...lastNameParts] = fullName.split(" ");
        const lastName = lastNameParts.join(" ");

        await prisma.user.create({
          data: {
            id: data.user.id,
            email: data.user.email || "",
            first_name: firstName || "",
            last_name: lastName || "",
            phone: data.user.user_metadata?.phone || "",
            emailVerified: data.user.email_confirmed_at ? true : false,
          },
        });
      }
    }
  }

  // Redirect to dashboard after successful login
  return NextResponse.redirect(`${origin}/profile`);
}