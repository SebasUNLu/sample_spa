import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET!;
const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

// TODO DTO
interface jwtData {
  userId: number
}

// Función para generar un token JWT
export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, secret, { expiresIn });
};

// Función para verificar el token JWT
export const verifyToken = (token: string) => {
  console.log("token: " + token)
  try {
    let decoded = jwt.verify(token, secret)

    return decoded as { userId: number };
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};
