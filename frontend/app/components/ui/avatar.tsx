"use client";

import React from "react";

export function Avatar({ className = "", ...props }: { className?: string; children: React.ReactNode }) {
  return <div className={`relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 ${className}`} {...props}></div>;
}

export function AvatarFallback({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`text-gray-700 font-semibold flex items-center justify-center ${className}`}>{children}</span>;
}
