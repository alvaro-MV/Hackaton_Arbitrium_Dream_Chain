"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { AuthService } from "../service/service.auth";
import { useEffect, useState } from "react";
import { SessionService } from "../service/service.session";
import { Loader, Router } from "lucide-react";
import { useRouter } from "next/navigation";

export interface User {
  password?: string,
  email: string,
  user: string,
}

export enum LoginError {
  INVALID_CREDENTIAL,
  NOTFOUND_USER,
  SERVER_ERROR
}
export default function UserProfile() {
  const [loading, setLoading] = useState(false);
  const [loged, setLoged] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [user, setUser] = useState<User>({
    password: "",
    email: "",
    user: ""
  });

  const handleUserChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect( () => {
    const session = SessionService.getSession();
    if (!session)
    {
      setLoged(false);
      return ;
    }
    setLoged(true);

  },[])
  const handleLogin = async ()  => {
    const authService = new AuthService();
    if (!user.password){
      console.error("Not added password");
      return;
    }
    setLoading(true);
    try {
      const token =  await authService.login(user.email, user.password);
      if (!token) {
        console.error("Credential error");
        setError("Credential error");
        setLoading(false);
        return ;
      }
      SessionService.setSession(token, user);
      router.push("/user-dashboard");
      setLoged(true);
      setLoading(false);

    } catch (erro: any) {
      if (erro.message === "Usuario no registrado" || erro.message == "Usuario no encontrado") {
          console.error("Usuario no registrado");
          setLoading(false);
          return ;
        }
        setError("Login failed. Please check your credentials.");
        setLoading(false);
      }
  };

  const handleLogout = async () => {
    setLoading(true);
    try  {
        const authService = new AuthService();
        authService.logout();
        setLoged(false);
        setLoading(false);
      }catch (err) {
        setError ("Can't logut");
        setLoading(false);
    }
  };

  return (
    <div className="flex h-screen"> {/* Flex para layout horizontal y altura completa */}
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center space-x-2"
          >
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
           { loged? (
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
                <SidebarMenuItem href="/user-profile">
                <button className="w-full px-4 py-2  text-red-500 rounded-md" onClick={handleLogout}>
                  Cerrar session
                </button>
              </SidebarMenuItem>
              
            </SidebarMenu>
            
           ) : (null)}
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
            <h1 className="text-2xl font-bold">{user.user}</h1>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>

        {/* Form to Update Personal Data */}


          { loged ? (null) : (
          <Card >
          <CardHeader>
            <h3 className="text-lg font-bold">Inicia Session</h3>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <Input id="name" name="user" value={user.user} onChange={handleUserChange} placeholder="John Dreamer" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <Input id="email" name="email" value={user.email} onChange={handleUserChange} placeholder="john.dreamer@example.com" type="email" />
            </div>
            <div>
              <label htmlFor="password"  className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input id="password" name="password" value={user.password} onChange={handleUserChange} placeholder="*****" type="password" />
            </div>
            <Button variant="default"
            onClick={handleLogin}
            disabled={loading}>
              
            {loading ? (
              <div className="flex items-center justify-center">
                <Loader className="animate-spin text-white" />
                <span className="ml-2">Cargando...</span>
              </div>
              ) : (
              "Guardar Cambios"
              )}
              </Button>
          </CardContent>
        </Card>)}
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
