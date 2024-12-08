"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";

export default function PublicDreams() {
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
          {[1, 2, 3, 4, 5, 6].map((dream) => (
            <Link key={dream} href={`/dream-details/${dream}`} passHref>
              <Card className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <h2 className="text-lg font-bold">Título del Sueño {dream}</h2>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-600 mb-4">
                    Breve descripción del sueño. Este es un ejemplo de cómo se vería la descripción en la tarjeta.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progreso</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="w-full" />
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
