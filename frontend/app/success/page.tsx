"use client";

import { useRouter, useSearchParams  } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LocalStorageService } from "../storage/service.storage.dream";

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceData = new LocalStorageService();
  const id = searchParams.get("id");
  const formData = serviceData.findFormDreamById(id ? id : "");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ¡Sueño registrado correctamente!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Tu sueño ha sido registrado en el blockchain.
      </p>
      <p className="text-gray-600 mb-8">
        <strong>ID:</strong> {formData?.id}
        <br />
        <strong>Dirección del contrato:</strong> {formData?.contract}
      </p>
      <Button className="w-40" onClick={() => router.push("/")}>
        Volver al Inicio
      </Button>
    </div>
  );
}
