import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const password = body.password;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    console.log(hash);

    const user = await prisma.user.create({
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        phone: body.phone,
        password: hash,
      },
    });

    console.log("Register API hit");
    console.log("DB URL exists:", !!process.env.DATABASE_URL);

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
