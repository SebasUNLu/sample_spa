import { verifyToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: NextRequest
) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return NextResponse.json({ error: "Unauthorized 1" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyToken(token); // Decodifica y valida el token

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user || user.id !== decoded.userId) {
      return NextResponse.json({ error: "Unauthorized 2" }, { status: 403 });
    }

    return NextResponse.json({ text: "Hello world", user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid token 1" }, { status: 401 });
  }
}
