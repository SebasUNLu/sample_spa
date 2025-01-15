import argon2 from "argon2";

export async function hashPassword(password: string): Promise<string> {
  try {
    const hashedPassword = await argon2.hash(password, {
      // salt: Buffer.from("random_salt"), // Sal personalizada (opcional)
      // timeCost: 4, // Número de iteraciones (4 es recomendado)
      // memoryCost: 2 ** 16, // Memoria usada en KB (64 MB es recomendado)
      // parallelism: 1,
      type: argon2.argon2id, // Usa Argon2id (recomendado por ser seguro y eficiente)
    });
    return hashedPassword;
  } catch (err) {
    throw new Error("Error al hashear la contraseña");
  }
}

export async function verifyPassword(
  hashedPassword: string,
  plainPassword: string
): Promise<boolean> {
  try {
    const isMatch = await argon2.verify(hashedPassword, plainPassword);
    return isMatch;
  } catch (err) {
    throw new Error("Error al verificar la contraseña");
  }
}
