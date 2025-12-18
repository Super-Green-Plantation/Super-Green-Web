import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Check if user exists
    const existUser: User | null = await prisma.user.findUnique({
      where: { email },
    });

    if (!existUser) {
      return NextResponse.json({ message: "Invalid email" }, { status: 404 });
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, existUser.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }

    const firstName = existUser.first_name;
    const femail = existUser.email;

    const token = jwt.sign(
      { firstName, femail },
      process.env.JWT_SECRET as string,
      { expiresIn: "30d" }
    );

    console.log(token);

    // Login successful
    return NextResponse.json(
      { message: "Login successful", user: existUser, token },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
