import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import UserDTO from "@/app/DTOs/user.dto";

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

    const dto = new UserDTO(user);

    return NextResponse.json(dto, { status: 200 });
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: Number(userId) },
    });

    const dto = new UserDTO(deletedUser);

    return NextResponse.json(dto, { status: 200 });
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return NextResponse.json(
      { error: "Error al obtener usuario" },
      { status: 500 }
    );
  }
}
