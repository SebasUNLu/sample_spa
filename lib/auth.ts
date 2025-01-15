import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

const secret = process.env.JWT_SECRET!;
const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

// Interfaz para los datos que se deben codificar dentro del token JWT
interface jwtData {
  userId: number;
}

// Función para generar un token JWT
export const generateToken = (userId: number) => {
  const decodeData: jwtData = {
    userId,
  };
  return jwt.sign(decodeData, secret, { expiresIn });
};

// Función para verificar el token JWT
export const verifyToken = (token: string) => {
  try {
    let decoded = jwt.verify(token, secret);

    return decoded as jwtData;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

export async function authenticateUser(req: NextRequest) {
  try {
    // Extraer el token del encabezado Authorization
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Authorization header missing or malformed");
    }

    const token = authHeader.split(" ")[1];

    // Verificar el token JWT
    const decoded = verifyToken(token);

    // Comprobar si el usuario existe en la base de datos
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // Devolver el usuario si todo está correcto
    return user;
  } catch (error) {
    console.error("Authentication error:", error);
    throw new Error("Unauthorized");
  }
}
