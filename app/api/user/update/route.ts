import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(req: Request) {
  const body = await req.json();

  const { first_name, last_name, email, phone } = body;

  await prisma.user.update({
    where: { email },
    data: {
      first_name,
      last_name,
      phone,
    },
  });

  return NextResponse.json({ success: true });
}
