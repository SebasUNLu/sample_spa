import { hashPassword, verifyPassword } from "@/lib/argon2";
import { generateToken } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface loginParams {
  email: string;
  password: string;
}

// Login
export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as loginParams;

  try {
    // Busca al usuario en la base de datos
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Verifica la contraseña
    const isValidPassword = await verifyPassword(user.pass, password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid credentials 2" },
        { status: 401 }
      );
    }

    // Genera el token JWT
    const token = generateToken(user.id);

    return NextResponse.json({ token });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
