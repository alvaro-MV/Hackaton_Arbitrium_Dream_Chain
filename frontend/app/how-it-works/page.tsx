"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Target, Shield, Globe, Eye } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

export default function HowItWorks() {
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
            <Link href="how-it-works" className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-100">
              Cómo funciona
            </Link>
            <Link href="user-profile" className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-100">
              Perfil
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gray-100 text-center">
          <h1 className="text-4xl font-bold mb-4 text-primary">¿Cómo Funciona DreamChain?</h1>
          <p className="text-lg text-muted-foreground">Convierte tus metas en colaboraciones globales.</p>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Proceso Paso a Paso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <BookOpen className="w-12 h-12 text-primary" />, title: "Registra tu sueño", description: "Crea un sueño con detalles como metas y recompensas." },
                { icon: <Users className="w-12 h-12 text-secondary" />, title: "Encuentra apoyo", description: "Otros usuarios pueden contribuir con microdonaciones o mentoría." },
                { icon: <Target className="w-12 h-12 text-primary" />, title: "Hazlo realidad", description: "Monitorea el progreso en tiempo real, cumple tus metas y recompensa a tus colaboradores." },
              ].map((step, index) => (
                <Card key={index} className="shadow-md">
                  <CardContent className="text-center">
                    <div className="mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Preguntas Frecuentes</h2>
            <Accordion>
              <AccordionItem title="¿Qué es DreamChain?">
                DreamChain es una plataforma innovadora que utiliza blockchain para conectar soñadores con patrocinadores, permitiendo que las personas financien y hagan realidad sus sueños de manera transparente y segura.
              </AccordionItem>
              <AccordionItem title="¿Cómo funciona el proceso de financiación?">
                Los soñadores publican sus proyectos en la plataforma. Los patrocinadores pueden explorar estos sueños y decidir apoyarlos financieramente. Los fondos se liberan por etapas a medida que el soñador alcanza hitos predefinidos, asegurando la transparencia y el uso adecuado de los recursos.
              </AccordionItem>
              <AccordionItem title="¿Qué tipos de sueños se pueden publicar?">
                DreamChain acepta una amplia variedad de sueños, desde proyectos educativos y emprendimientos hasta viajes y desarrollo personal. Siempre que el sueño sea legal y ético, puede ser publicado en nuestra plataforma.
              </AccordionItem>
              <AccordionItem title="¿Cómo se garantiza la seguridad de las transacciones?">
                Utilizamos tecnología blockchain para asegurar todas las transacciones. Además, implementamos un sistema de contratos inteligentes que garantiza que los fondos se liberen solo cuando se cumplan las condiciones acordadas.
              </AccordionItem>
              <AccordionItem title="¿Puedo patrocinar sueños de forma anónima?">
                Sí, ofrecemos la opción de patrocinio anónimo para aquellos que prefieren mantener su privacidad al apoyar sueños.
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white text-black text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">¿Listo para empezar?</h2>
            <div className="flex justify-center space-x-4">
              <Link href="/registrar-sueno">
                <Button size="lg" variant="default">Registra tu Sueño Hoy</Button>
              </Link>
              <Link href="/explorar-sueno">
                <Button size="lg" variant="outline">Explorar Sueños</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
