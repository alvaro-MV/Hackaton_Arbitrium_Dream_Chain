import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "link" | "destructive";
}

export function Button({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  // Clases para tamaños
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Clases para variantes
  const variantClasses = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "bg-transparent border border-black text-black hover:bg-gray-200",
	link: "text-blue-500 underline hover:text-blue-600", // Estilo para "link"
	destructive: "text-red-500 underline hover:text-red-800", // Estilo para "destructive"
  };

  return (
    <button
      className={`rounded-lg transition duration-150 ease-in-out ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
