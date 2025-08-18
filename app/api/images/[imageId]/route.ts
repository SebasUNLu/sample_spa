import { getImage } from "@/lib/prismaQueries";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { imageId: string } }
) {
  const { imageId } = params;
  if (!imageId || isNaN(Number(imageId))) {
    return NextResponse.json({ error: "Invalid image ID" }, { status: 400 });
  }

  try {
    const image = await getImage(Number(imageId));

    return NextResponse.json(image, { status: 200 });
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    return NextResponse.json(
      { error: "Error al obtener usuario" },
      { status: 500 }
    );
  }
}
