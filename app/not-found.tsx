// src/pages/NotFoundPage.tsx

import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Página no encontrada</p>
      <Link
        href="/"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
