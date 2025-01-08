export async function GET() {
  return new Response(JSON.stringify({ message: 'Hola desde la API de Next.js con App Router' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}