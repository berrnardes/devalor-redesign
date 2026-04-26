"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const directors = [
  {
    name: "Rodrigo",
    role: "Diretor de Operações",
    image: "/rodrigo.png",
  },
  {
    name: "Caio",
    role: "Diretor de Novos Negócios",
    image: "/caio.png",
  },
];

export default function Directors() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">
            Liderança
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">
            Nossos <span className="text-primary">Diretores</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Conheça quem está à frente da Devalor, liderando uma equipe de mais
            de 70 colaboradores dedicados à recuperação dos seus créditos.
          </p>
        </AnimatedSection>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
          {directors.map((director, i) => (
            <motion.div
              key={director.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group w-full max-w-xs text-center"
            >
              <div className="relative mx-auto w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={director.image}
                  alt={`${director.name} — ${director.role}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 208px, 256px"
                />
              </div>
              <h3 className="text-xl font-bold text-black">{director.name}</h3>
              <p className="mt-1 text-primary font-medium text-sm">
                {director.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
