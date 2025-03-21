"use client";

import React, { useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, LineChart, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Team } from "@/components/ui/team";
import { Testimonials } from "@/components/ui/testimonials"; // Importa el componente de testimonios
import { readContract } from "viem/_types/actions/public/readContract";
import { DreamDeployed } from "./service/service.contract.dream";
import { LocalStorageService } from "./storage/storage.dream";
import ConnectButton from "./ConnectButton";

function DreamChainLanding() {


  const  readContract = async (e: React.FormEvent) => {
    const contract = new DreamDeployed();
    const storage = new LocalStorageService();
    const address = storage.getDreams()[0].contract;
    //const writeVal = await contract.write(10, );
    //console.log (" Val write: ", writeVal)´

    //let response = await contract.write(10, storage.getDreams()[0].contract);
    //console.log("val write: ",response);

    console.log("address: ",address);
    let response = await contract.read( storage.getDreams()[0].contract);
    console.log("val read: ",response);

  }

  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
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
            <Link href="/" className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-100">
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Registra tus sueños, encuentra apoyo, logra lo imposible</h1>
          <p className="text-xl text-gray-500 mb-8">
            Únete a la comunidad que hace realidad los sueños
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/registrar-sueno">
              <Button size="lg" variant="default">
                Registrar un Sueño
              </Button>
            </Link>
            <Link href="/explorar-sueno">
              <Button size="lg" variant="outline">
                Explorar Sueños
              </Button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Beneficios de DreamChain</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Gift className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-xl font-semibold mb-2">Microdonaciones</h3>
                  <p className="text-gray-500">Apoya sueños con pequeñas contribuciones</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-xl font-semibold mb-2">Mentoría</h3>
                  <p className="text-gray-500">Conecta con expertos que guiarán tu camino</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <LineChart className="w-12 h-12 mx-auto mb-4 text-black" />
                  <h3 className="text-xl font-semibold mb-2">Transparencia Blockchain</h3>
                  <p className="text-gray-500">Seguimiento claro y seguro de cada contribución</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

		{/* Testimonials Section */}
        <Testimonials />

        {/* Team Section */}
        <Team />
      </main>

      <footer className="py-6 px-4 border-t bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Sobre Nosotros
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Privacidad
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-black">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DreamChainLanding;
