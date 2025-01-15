import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "../../../lib/argon2";
import prisma from "@/lib/prisma";


export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json(
      { error: "Error al obtener usuarios" },
      { status: 500 }
    );
  }
}

// Register
export async function POST(req: NextRequest) {
  console.log("enterin the post function")
  try {
    const body = await req.json();
    const { name, email, pass } = body;

    if (!name || !email || !pass) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }
    console.log("all items")

    let hashedPass = await hashPassword(pass);
    console.log("hashed")

    const newUser = await prisma.user.create({
      data: { name, email, pass: hashedPass },
    });
    console.log("new user")

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json(
      { error: "Error al crear usuario" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, email, pass } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID del usuario es obligatorio" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, pass },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json(
      { error: "Error al actualizar usuario" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID del usuario es obligatorio" },
        { status: 400 }
      );
    }

    await prisma.user.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: "Usuario eliminado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json(
      { error: "Error al eliminar usuario" },
      { status: 500 }
    );
  }
}
