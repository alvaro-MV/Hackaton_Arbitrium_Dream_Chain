import React from "react";

export function Label({
  className = "",
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={`block text-gray-700 font-medium mb-2 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

