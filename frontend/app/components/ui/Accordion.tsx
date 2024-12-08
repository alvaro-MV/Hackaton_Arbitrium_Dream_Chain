"use client";

import React, { useState } from "react";

interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div className="border border-gray-200 rounded divide-y">{children}</div>;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center py-3 px-4 text-primary font-medium hover:bg-gray-100 focus:outline-none"
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="py-2 px-4 text-gray-700 bg-gray-50">
          {children}
        </div>
      )}
    </div>
  );
}
