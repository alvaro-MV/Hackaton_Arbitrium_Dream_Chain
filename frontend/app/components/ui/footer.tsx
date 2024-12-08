import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Links de Navegación */}
        <nav className="flex space-x-4 text-sm font-medium">
          <Link href="/about-us" className="text-gray-500 hover:text-black">
            Sobre Nosotros
          </Link>
          <Link href="/terms" className="text-gray-500 hover:text-black">
            Términos y Condiciones
          </Link>
          <Link href="/privacy" className="text-gray-500 hover:text-black">
            Privacidad
          </Link>
        </nav>

        {/* Redes Sociales */}
        <div className="flex space-x-4">
          <Link href="https://github.com" target="_blank" className="text-gray-500 hover:text-black">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-gray-500 hover:text-black">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-black">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
