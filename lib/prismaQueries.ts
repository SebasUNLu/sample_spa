import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * Retrieves a user by their unique identifier.
 *
 * @param id - The unique identifier of the user to retrieve.
 * @returns A promise that resolves to the user object if found.
 * @throws Returns a 404 JSON response if the user is not found.
 */
export async function getUser(id: Number) {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  if (!user) {
    throw NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return user;
}

export async function getImage(id: Number) {
  const image = await prisma.img.findUnique({
    where: { id: Number(id) },
  });
  if (!image)
    throw NextResponse.json({ error: "Image not found" }, { status: 404 });
  return image;
}

//get user by email
