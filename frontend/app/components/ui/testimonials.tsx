import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "María González",
    image: "/icons.png",
    comment: "Gracias a DreamChain, pude abrir mi propio negocio. ¡Es increíble cómo una plataforma puede cambiar tu vida!",
    stars: 5,
  },
  {
    name: "Carlos Rodríguez",
    image: "/icons.png",
    comment: "DreamChain me ayudó a financiar mis estudios en el extranjero. Ahora tengo una carrera exitosa en tecnología.",
    stars: 5,
  },
  {
    name: "Ana Martínez",
    image: "/icons.png",
    comment: "Siempre soñé con viajar por el mundo. Con DreamChain, pude hacer realidad mi sueño de ser una nómada digital.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Testimonios de Éxito</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full mr-4 grayscale"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-gray-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">&quot;{testimonial.comment}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
