import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await prisma.user.create({
      data: body,
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error: unknown) {
    console.error(error); // log it for debugging

    // Return a proper error response
    return NextResponse.json(
      { message: "Something went wrong", error: String(error) },
      { status: 500 }
    );
  }
}
