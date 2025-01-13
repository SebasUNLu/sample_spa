import { PrismaClient } from '@prisma/client';

declare global {
  // Previene múltiples instancias de PrismaClient en desarrollo
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'], // Opcional: para mostrar las consultas en la consola
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma; // Guarda la instancia en `global` para evitar múltiples inicializaciones
}

export default prisma;