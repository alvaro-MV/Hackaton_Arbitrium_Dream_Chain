"use client";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function DreamDetailsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Botón para regresar */}
      <Link href="/">
        <Button variant="outline" className="mb-6">
          Volver
        </Button>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Nombre del Sueño</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-xl font-bold">Descripción y Metas</h2>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Aquí va la descripción completa del sueño. Debería incluir todos los detalles sobre lo que el soñador espera lograr y por qué es importante para ellos.
              </p>
              <h3 className="font-semibold mb-2">Metas:</h3>
              <ul className="list-disc list-inside">
                <li>Meta 1</li>
                <li>Meta 2</li>
                <li>Meta 3</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-xl font-bold">Progreso</h2>
            </CardHeader>
            <CardContent>
              <Progress value={33} className="w-full" />
              <p className="text-center mt-2">33% Completado</p>
            </CardContent>
          </Card>

          <div className="flex space-x-4 mb-8">
            <Button size="lg">Donar</Button>
            <Button size="lg" variant="outline">
              Convertirse en Mentor
            </Button>
          </div>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Comentarios de los Mentores</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">
                      ¡Gran progreso! Sigue así.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">Jane Smith</p>
                    <p className="text-sm text-gray-500">
                      ¿Has considerado probar este enfoque?
                    </p>
                  </div>
                </div>
              </div>
              <Textarea className="mt-4" placeholder="Añade tu comentario..." />
              <Button className="mt-2">Publicar Comentario</Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card className="mb-8">
            <CardHeader>
              <h2 className="text-xl font-bold">Mentores Actuales</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>M1</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Mentor 1</p>
                    <p className="text-sm text-gray-500">
                      Especialidad: Desarrollo Web
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>M2</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Mentor 2</p>
                    <p className="text-sm text-gray-500">
                      Especialidad: Marketing
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold">Principales Donantes</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>D1</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Donante 1</p>
                    <p className="text-sm text-gray-500">Cantidad: $500</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>D2</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Donante 2</p>
                    <p className="text-sm text-gray-500">Cantidad: $350</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
