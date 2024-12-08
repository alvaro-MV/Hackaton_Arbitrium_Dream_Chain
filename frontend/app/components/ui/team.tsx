"use client";

import React from "react";

const teamMembers = [
  {
    name: "Alejandro Rodríguez Mora",
    role: "Back-end Programmer",
    image: "/alejandro.jpg",
  },
  {
    name: "Alex Sebastián Mejía",
    role: "Blockchain Developer Back-end",
    image: "/alex.jpg",
  },
  {
    name: "Álvaro Morales",
    role: "Blockchain Developer Back-end",
    image: "/alvaro.jpg",
  },
  {
    name: "Miguel Ángel Avilés",
    role: "Team Leader & Front-end Programmer",
    image: "/miguel.jpg",
  },
];

export function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
