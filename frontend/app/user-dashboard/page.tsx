"use client";

import { useState } from "react";
import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ethers } from "ethers";

export default function UserDashboard() {
  // Estado para manejar la cuenta conectada
  const [account, setAccount] = useState<string | null>(null);

  // Función para conectar MetaMask
  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Solicita acceso a las cuentas de MetaMask
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Asigna la cuenta conectada al estado
        console.log(accounts);
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error conectando con MetaMask:", error);
      }
    } else {
      alert("MetaMask no está instalada.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-xl font-semibold">Perfil</h1>
        </header>
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Mis Sueños</h2>
            <Link href="/registrar-sueno">
              <Button size="lg" variant="default">
                Registrar Nuevo Sueño
              </Button>
            </Link>
          </div>
          {/* Agregar la información de MetaMask */}
          <div className="mb-6">
            <button
              onClick={connectMetaMask}
              className={`px-6 py-2 rounded-md text-white font-medium transition-all ${
                account ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
              }`}
              style={{ minWidth: "200px", maxWidth: "100%", whiteSpace: "nowrap" }}
            >
              {account ? `Conectado: ${account.slice(0, 6)}...${account.slice(-4)}` : "Conectar MetaMask"}
            </button>
          </div>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Lista de Sueños</h3>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sueño</TableHead>
                    <TableHead>Progreso</TableHead>
                    <TableHead>Donaciones Recibidas</TableHead>
                    <TableHead>Mentores</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Aprender guitarra</TableCell>
                    <TableCell>60%</TableCell>
                    <TableCell>500 DREAM</TableCell>
                    <TableCell>2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Viajar a Japón</TableCell>
                    <TableCell>30%</TableCell>
                    <TableCell>300 DREAM</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
