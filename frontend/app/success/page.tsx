"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ¡Sueño registrado correctamente!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Tu sueño ha sido registrado en el blockchain.
      </p>
      <p className="text-gray-600 mb-8">
        <strong>ID:</strong> 1234567890
        <br />
        <strong>Dirección del contrato:</strong> 0x1234...abcd
      </p>
      <Button className="w-40" onClick={() => router.push("/")}>
        Volver al Inicio
      </Button>
    </div>
  );
}
