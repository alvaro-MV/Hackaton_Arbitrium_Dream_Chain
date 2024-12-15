"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Usa el módulo correcto
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Upload, Target, Gift, Sparkles, Loader } from "lucide-react";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";
import { LocalStorageService } from "../storage/storage.dream";
import { DeployDream } from "../service/service.deploy.dream";
import { DreamDeployed } from "../service/service.contract.dream";
import { Dream } from "../interface/interface.formdata";

export default function DreamRegistryForm() {
  const sotorage = new LocalStorageService();
  const router = useRouter(); // Hook para manejar la navegación
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [deploying, setDeploying] = useState(false);

  const [dreamForm, setDreamForm] = useState<Dream>({
    name_dream: "",
    dream_description: "",
    dream_goals: "",
    dream_reward_offered: "",
    contract: "",
    goal_amount : 1000,
    donated_amount: 2,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDreamForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const deploy = new DeployDream();
    let contractAddress = null;
    setLoading(true);
    contractAddress = await deploy.deployContractMetaMask();
    if (!contractAddress){
        setError(true);
        setLoading(false);
        console.error("Error: deploy contract");
        return ;
    }
    setLoading(false);
    setDeploying(true);

    //const data = await dreamDeployed.write(30);
    dreamForm.contract = contractAddress;
    dreamForm.goal_amount = 100;
    dreamForm.donated_amount = 0;
    dreamForm.id = sotorage.saveDream(dreamForm).id;
    console.log(sotorage.findDreamById(dreamForm.id!));
    router.push(`/success?id=${dreamForm.id}`);
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="py-6 px-4 border-b bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo de DreamChain"
              width={70}
              height={70}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">DreamChain</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-100"
            >
              Inicio
            </Link>
            <Link
              href="how-it-works"
              className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-100"
            >
              Cómo funciona
            </Link>
            <Link
              href="user-dashboard"
              className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-100"
            >
              Perfil
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <h1 className="text-3xl font-bold">Registrar tu Sueño</h1>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="dream-name" className="text-lg font-medium">
                <Sparkles className="inline-block mr-2" size={20} />
                Nombre del Sueño
              </Label>
              <Input
                id="dream-name"
                name="name_dream"
                value={dreamForm.name_dream}
                onChange={handleChange}
                placeholder="Escribe el nombre de tu sueño"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount-donation" className="text-lg font-medium">
                <Sparkles className="inline-block mr-2" size={20} />
                Monto Requerido 
              </Label>
              <Input
                id="goal-amount"
                name="goal_amount"
                value={dreamForm.goal_amount}
                onChange={handleChange}
                placeholder="Fije la cantidad de dinero que requiere"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dream-description" className="text-lg font-medium">
                <Target className="inline-block mr-2" size={20} />
                Descripción
              </Label>
              <Input
                id="dream-description"
                name="dream_description"
                placeholder="Describe tu sueño en detalle"
                value={dreamForm.dream_description}
                onChange={handleChange}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dream-goals" className="text-lg font-medium">
                <Target className="inline-block mr-2" size={20} />
                Metas
              </Label>
              <Input
                id="dream-goals"
                name="dream_goals"
                value={dreamForm.dream_goals}
                onChange={handleChange}
                placeholder="Define las metas de tu sueño"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dream-reward" className="text-lg font-medium">
                <Gift className="inline-block mr-2" size={20} />
                Recompensa Ofrecida (Opcional)
              </Label>
              <Input
                id="dream-reward"
                name="dream_reward_offered"
                value={dreamForm.dream_reward_offered}
                onChange={handleChange}
                placeholder="Especifica la recompensa por cumplir el sueño"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dream-attachments" className="text-lg font-medium">
                <Upload className="inline-block mr-2" size={20} />
                Adjuntar Imágenes o Documentos (Opcional)
              </Label>
              <Input
                id="dream-attachments"
                type="file"
                multiple
                className="cursor-pointer"
              />
            </div>

            <Button
              className="w-full text-lg py-6"
              size="lg"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
              <div className="flex items-center justify-center">
                <Loader className="animate-spin text-white" />
                <span className="ml-2">Cargando...</span>
              </div>
              ) : (
              "Registrar en Blockchain"
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
