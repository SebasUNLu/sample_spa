/**
 * Transforma la primera letra del String en mayuscula
 * @param input 
 * @returns 
 */
export function firstUppercase(input: string) {
  const firstLetter = input[0].toUpperCase();
  const rest = input.slice(1);
  return firstLetter + rest;
}
