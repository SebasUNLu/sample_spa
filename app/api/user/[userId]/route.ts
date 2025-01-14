import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

async function getUser(id: Number) {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  if (!user) {
    throw NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return user;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }
  try {
    const user = await getUser(Number(userId));
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return NextResponse.json(
      { error: "Error al obtener usuario" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;
  const body = await req.json();
  const { id, name, email, pass } = body;

  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    const user = await getUser(Number(userId));

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, pass },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return NextResponse.json(
      { error: "Error al obtener usuario" },
      { status: 500 }
    );
  }
}
