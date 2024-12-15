// components/Header.js

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
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
              href="user-profile"
              className="px-4 py-2 text-lg font-medium rounded-md hover:bg-gray-100"
            >
              Perfil
            </Link>
          </nav>
        </div>
      </header>
    
  );
};

export default Header;
