
import React from "react";

interface ProgressProps {
  value: number; // Porcentaje de progreso (0-100)
  className?: string;
}

export function Progress({ value, className = "" }: ProgressProps) {
  return (
    <div className={`relative w-full h-3 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div
        className="absolute top-0 left-0 h-full bg-black transition-all"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
