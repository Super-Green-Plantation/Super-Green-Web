import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Inquiry {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message } = body;
    console.log(firstName, lastName, email, phone, message);

    await prisma.inquiry.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json(body, { status: 201 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
