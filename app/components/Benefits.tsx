"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    title: "Redução de custos",
    description:
      "Elimine custos burocráticos e financeiros com contratações diretas, passivos tributários e trabalhistas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Portal online exclusivo",
    description:
      "Acesse cobranças, relatórios e cadastre inadimplentes de forma rápida e prática pelo nosso portal.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Cobrança humanizada",
    description:
      "Abordagem amigável que preserva o relacionamento entre sua empresa e seus clientes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Equipe especializada",
    description:
      "Mais de 70 colaboradores dedicados com expertise em cobrança B2B e back office de pesquisa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Benefícios
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">
              A parceira que seu{" "}
              <span className="text-primary">negócio precisa</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              A Devalor atua como uma extensão da sua empresa, cuidando da
              recuperação de créditos com a mesma dedicação que você tem pelo seu
              negócio.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{benefit.title}</h3>
                    <p className="mt-1 text-gray-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right column — trust card */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="bg-linear-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-white">
                <div className="text-6xl md:text-7xl font-bold text-accent">
                  NPS 10
                </div>
                <p className="mt-4 text-xl font-semibold text-white/90">
                  Avaliação dos nossos clientes
                </p>
                <p className="mt-3 text-white/70 leading-relaxed">
                  Nossos clientes nos avaliam com notas máximas na Pesquisa de
                  Satisfação NPS. Somos reconhecidos pela rapidez no atendimento
                  e entrega de resultados.
                </p>

                <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-accent">B2B</div>
                    <div className="text-sm text-white/60 mt-1">
                      Expertise em cobrança
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">1800d</div>
                    <div className="text-sm text-white/60 mt-1">
                      Títulos vencidos até
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
