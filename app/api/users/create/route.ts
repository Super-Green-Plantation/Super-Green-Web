import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, first_name, last_name, email, phone } = body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { id },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        id,
        first_name,
        last_name,
        email,
        phone: phone || "",
        emailVerified: false,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}