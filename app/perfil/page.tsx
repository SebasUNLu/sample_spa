"use client";

import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import { formatDate } from "@/lib/FormatDate";

export default function UserProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-600">No se encontró información del usuario.</p>
      </div>
    );
  }

  const imageUrl = user.imgId
    ? `/api/images/${user.imgId}`
    : "/placeholder-user.png";

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-6 gap-8 max-w-xl self-center justify-self-auto m-auto">
      {/* Imagen del usuario */}
      <div className="flex-shrink-0">
        <Image
          src={"/imgs/placeholder-user.png"}
          alt="Imagen del usuario"
          width={150}
          height={150}
          className="rounded-full object-cover"
        />
      </div>

      {/* Información del usuario */}
      <div className="flex flex-col justify-center">
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-500">Nombre</label>
          <p className="text-lg text-gray-900">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="text-sm font-semibold text-gray-500">
            Correo electrónico
          </label>
          <p className="text-lg text-gray-900">{user.email}</p>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-500">
            Fecha de creación
          </label>
          <p className="text-lg text-gray-900">{formatDate(user.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}
