"use client";

import { useAuth } from "@/app/context/AuthContext";
import UserDTO from "@/app/DTOs/user.dto";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ExpectedResponse {
  user: UserDTO;
  token: string;
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [remember, setRemember] = useState(false);
  const router = useRouter();

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en la solicitud");

      const result: ExpectedResponse = await response.json();
      // setea el usaurio en el context
      login(result.user, result.token, remember);

      router.push("/"); // Redirección
    } catch (err) {
      setError("Ocurrió un error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Iniciar Sesión
      </h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Contraseña</label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label htmlFor="remember">Mantener sesión iniciada</label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? "Cargando..." : "Iniciar sesión"}
      </button>
    </form>
  );
}
