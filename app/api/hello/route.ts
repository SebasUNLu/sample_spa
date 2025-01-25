import { authenticateUser, verifyToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
) {
  try {
    let user = await authenticateUser(req);

    return NextResponse.json({ text: "Hello world", user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error detected" }, { status: 400 });
  }
}
