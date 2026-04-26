"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

/* ── Animated timeline step ── */
function TimelineStep({
  day,
  label,
  description,
  detail,
  index,
  total,
}: {
  day: string;
  label: string;
  description: string;
  detail: string;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="flex gap-5 md:gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline track */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-md shadow-primary/20"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            delay: index * 0.15 + 0.1,
          }}
        >
          {day}
        </motion.div>
        {index < total - 1 && (
          <motion.div
            className="w-0.5 bg-primary/20 flex-1 min-h-6"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
            style={{ transformOrigin: "top" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="font-bold text-black">{label}</div>
        <div className="text-sm text-gray-600 mt-1 leading-relaxed">
          {description}
        </div>
        <div className="mt-2 text-xs text-gray-400 italic">{detail}</div>
      </div>
    </motion.div>
  );
}

const phases = [
  {
    day: "D1",
    label: "Fase 1 — Contato inicial",
    description:
      "Notificação amigável via e-mail e SMS informando o inadimplente sobre o débito em aberto.",
    detail: "Canais: e-mail, SMS",
  },
  {
    day: "D7",
    label: "Fase 2 — Negociação ativa",
    description:
      "Ligações telefônicas e mensagens via WhatsApp com propostas de acordo e condições de pagamento.",
    detail: "Canais: telefone, WhatsApp",
  },
  {
    day: "D15",
    label: "Fase 3 — Intensificação",
    description:
      "Abordagem multicanal com frequência ampliada. Back office de pesquisa atua na localização de devedores.",
    detail: "Canais: telefone, WhatsApp, e-mail, pesquisa",
  },
  {
    day: "D30",
    label: "Fase 4 — Mediação",
    description:
      "Negociação de condições especiais para quitação, incluindo parcelamento e descontos progressivos.",
    detail: "Canais: todos + negociação personalizada",
  },
  {
    day: "D45",
    label: "Fase 5 — Resolução",
    description:
      "Últimas tratativas com abordagem direta. Possibilidade de cobrança presencial (in loco) quando necessário.",
    detail: "Canais: todos + visita presencial*",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading and context */}
          <div className="lg:sticky lg:top-28">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Nossa Metodologia
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">
              As 5 fases da{" "}
              <span className="text-primary">cobrança Devalor</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Nossa metodologia progressiva e humanizada maximiza a recuperação
              sem comprometer o relacionamento entre sua empresa e seus clientes.
            </p>
            <p className="mt-3 text-gray-500 leading-relaxed">
              Cada fase escala a intensidade de forma gradual, dando ao
              inadimplente múltiplas oportunidades de regularização antes de
              avançar para a próxima etapa.
            </p>

            {/* Summary card */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">45 dias</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Ciclo completo
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5 fases</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Abordagem progressiva
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">6+</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Canais de contato
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Humanizada
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — timeline */}
          <div>
            {phases.map((phase, i) => (
              <TimelineStep
                key={phase.day}
                day={phase.day}
                label={phase.label}
                description={phase.description}
                detail={phase.detail}
                index={i}
                total={phases.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
