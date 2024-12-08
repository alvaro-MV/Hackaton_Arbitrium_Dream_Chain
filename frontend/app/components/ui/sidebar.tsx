import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="w-64 bg-white text-black h-screen flex flex-col">
      {children}
    </aside>
  );
};

export const SidebarHeader = ({ children }: { children: React.ReactNode }) => {
	return (
	  <header className="p-6 flex items-center space-x-2">
		{children}
	  </header>
	);
  };  

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  return <nav className="flex-1 p-4">{children}</nav>;
};

export const SidebarMenu = ({ children }: { children: React.ReactNode }) => {
  return <ul className="space-y-2">{children}</ul>;
};

export const SidebarMenuItem = ({
	href,
	children,
  }: {
	href: string;
	children: React.ReactNode;
  }) => {
	return (
	  <li>
		<Link
		  href={href}
		  className="w-full flex items-center px-4 py-2 rounded-md text-left hover:bg-gray-100"
		>
		  {children}
		</Link>
	  </li>
	);
  };  

export const SidebarMenuButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <button
      className="w-full flex items-center px-4 py-2 rounded-md text-left hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SidebarFooter = () => {
  return (
    <footer className="p-4 border-t border-gray-700">
      <Link href="/">
        <button className="w-full bg-gray-800 hover:bg-gray-100 text-white py-2 px-4 rounded-md">
          Volver al Inicio
        </button>
      </Link>
    </footer>
  );
};
