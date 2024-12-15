"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import { Dream } from "../interface/interface.formdata";
import { LocalStorageService, StorageService } from "../storage/storage.dream";
import { useEffect, useState } from "react";

export default function PublicDreams() {
  const [formDreams, setFormDreams] = useState<Dream[]>([{
    id: "1",
    name_dream: "Título del Sueño",
    dream_goals: "",
    dream_description: "  Breve descripción del sueño. Este es un ejemplo de cómo se vería la descripción en la tarjeta.",
    dream_reward_offered: "",
    contract: "",
    goal_amount: 4,
    donated_amount: 1
    }]);
  const sotorage: StorageService = new LocalStorageService();

  useEffect(() => {
    const dreams = sotorage.getDreams();
    console.log(dreams);
    if (dreams.length)
      setFormDreams(dreams); // Guardamos los datos en el estado
  }, []); // El array vacío significa que solo se ejecutará una vez, al montar el componente


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
        {/* Search and Filter Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Sueños Públicos</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input className="flex-grow" placeholder="Buscar sueños..." />
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="education">Educación</SelectItem>
                <SelectItem value="technology">Tecnología</SelectItem>
                <SelectItem value="art">Arte</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Dreams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formDreams.map((dream) => (
            <Link key={dream.id} href={`/dream-details/${dream.id}`} passHref>
              <Card className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <h2 className="text-lg font-bold">{dream.name_dream}</h2>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 mb-4">
                  { dream.dream_description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progreso</span>
                      <span>{(dream.donated_amount / dream.goal_amount) * 100}%</span>
                    </div>
                    <Progress value={(dream.donated_amount / dream.goal_amount) * 100} className="w-full" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Donar</Button>
                  <Button>Mentorear</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
