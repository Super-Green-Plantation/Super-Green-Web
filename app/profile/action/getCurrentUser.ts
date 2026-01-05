import { prisma } from "@/lib/prisma";
import { createServerClient } from "@supabase/ssr";
import { redirect } from "next/navigation";


export const getCurrentUser =async ()=>{
const supabase = createServerClient();
const { data: { user } } = await supabase.auth.getUser();

if (!user) redirect("/login");

// Fetch profile using email OR id
const profile = await prisma.user.findUnique({
  where: { email: user.email! }
});

    
}