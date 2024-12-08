"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="flex h-screen"> {/* Flex para layout horizontal y altura completa */}
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="DreamChain Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">DreamChain</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem href="/user-dashboard">
              <button className="w-full px-4 py-2 text-black rounded-md">
                Mis Sueños
              </button>
            </SidebarMenuItem>
            <SidebarMenuItem href="/user-profile">
              <button className="w-full px-4 py-2 text-black rounded-md">
                Cuenta
              </button>
            </SidebarMenuItem>
          </SidebarMenu>
          <div className="mt-auto p-4">
            <Link href="/">
              <button className="w-full px-4 py-2 text-white bg-black rounded-md transition">
                Volver al Inicio
              </button>
            </Link>
          </div>
        </SidebarContent>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-100"> {/* Espaciado y scroll si es necesario */}
        {/* User Info Section */}
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-2xl font-bold">John Dreamer</h1>
            <p className="text-muted-foreground">@johndreamer</p>
          </div>
        </div>

        {/* Form to Update Personal Data */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold">Actualizar Información Personal</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <Input id="name" placeholder="John Dreamer" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <Input id="email" placeholder="john.dreamer@example.com" type="email" />
            </div>
            <Button variant="default">Guardar Cambios</Button>
          </CardContent>
        </Card>

        {/* Dreams Created Section */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-bold">Gestión de Sueños</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((dream) => (
                <Card key={dream}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">Dream Title {dream}</h3>
                    <p className="text-sm text-muted-foreground">Short description...</p>
                    <div className="flex justify-between mt-4">
                      <Button variant="outline" size="sm">Editar</Button>
                      <Button variant="destructive" size="sm">Eliminar</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
