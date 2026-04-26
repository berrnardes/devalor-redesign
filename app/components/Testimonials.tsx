"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Está satisfeita com o pronto atendimento e o resultado das cobranças, sendo uma extensão da sua empresa conosco. Nota NPS: 10.",
    company: "Belinutri",
    role: "Cliente Devalor",
  },
  {
    quote:
      "Utilizamos e estamos muito contentes com os serviços da Devalor. A empresa tem nos ajudado na difícil tarefa de recuperar créditos de clientes inadimplentes. Recomendamos.",
    company: "Itapuí",
    role: "Cliente Devalor",
  },
  {
    quote:
      "No começo era muito difícil passar a cobrança para uma empresa de fora, mas com o tempo a Devalor se mostrou como uma extensão da nossa empresa.",
    company: "Dequech",
    role: "Cliente Devalor",
  },
];

export default function Testimonials() {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">
            O que nossos{" "}
            <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Mais de 600 empresas confiam na Devalor para recuperar seus créditos
            inadimplentes.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-primary/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>

              <p className="text-gray-600 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.company.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm">
                      {testimonial.company}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos */}
        <AnimatedSection delay={0.3} className="mt-16">
          <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-wide mb-8">
            Empresas que confiam na Devalor
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {[
              "Zaeli",
              "Belinutri",
              "Itapuí",
              "Dequech",
              "ProJuris",
              "Minerva",
            ].map((name) => (
              <div
                key={name}
                className="text-lg font-bold text-gray-400 tracking-wide"
              >
                {name}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
