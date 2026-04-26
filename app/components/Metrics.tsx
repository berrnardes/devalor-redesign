"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";

/* ── Animated horizontal bar ── */
function AnimatedBar({
  label,
  value,
  max = 100,
  color,
  delay = 0,
}: {
  label: string;
  value: number;
  max?: number;
  color: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const pct = (value / max) * 100;

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="font-bold" style={{ color }}>
          {inView ? (
            <CountUp target={value} suffix="%" className="inline" />
          ) : (
            "0%"
          )}
        </span>
      </div>
      <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* ── Radial / donut progress ring ── */
function RadialProgress({
  value,
  label,
  sublabel,
  delay = 0,
}: {
  value: number;
  label: string;
  sublabel: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const size = 140;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={stroke}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#2ecc71"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.6, delay, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {inView ? (
            <CountUp
              target={value}
              suffix="%"
              className="text-2xl font-bold text-black"
            />
          ) : (
            <span className="text-2xl font-bold text-black">0%</span>
          )}
        </div>
      </div>
      <div className="text-center">
        <div className="font-semibold text-black text-sm">{label}</div>
        <div className="text-xs text-gray-400">{sublabel}</div>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function Metrics() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">
            Resultados Comprovados
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">
            Números que{" "}
            <span className="text-primary">falam por si</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Acompanhe as métricas reais de desempenho da nossa operação de
            cobrança extrajudicial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Recovery bars */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="font-bold text-black mb-1">
              Taxa de Recuperação por Faixa
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Percentual médio de recuperação por tempo de vencimento
            </p>
            <div className="space-y-5">
              <AnimatedBar
                label="Até 30 dias"
                value={80}
                color="#2ecc71"
                delay={0}
              />
              <AnimatedBar
                label="31 — 60 dias"
                value={65}
                color="#27ae60"
                delay={0.15}
              />
              <AnimatedBar
                label="61 — 75 dias"
                value={48}
                color="#1a3960"
                delay={0.3}
              />
              <AnimatedBar
                label="76 — 180 dias"
                value={32}
                color="#2a5080"
                delay={0.45}
              />
              <AnimatedBar
                label="181+ dias"
                value={18}
                color="#9ca3af"
                delay={0.6}
              />
            </div>
          </div>

          {/* Radial charts */}
          <div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
          >
            <h3 className="font-bold text-black mb-1">
              Indicadores de Performance
            </h3>
            <p className="text-xs text-gray-400 mb-8">
              Métricas-chave da operação Devalor
            </p>
            <div className="grid grid-cols-2 gap-8">
              <RadialProgress
                value={80}
                label="Recuperação"
                sublabel="até 75 dias"
                delay={0}
              />
              <RadialProgress
                value={100}
                label="Repasse Capital"
                sublabel="garantido"
                delay={0.2}
              />
              <RadialProgress
                value={95}
                label="Satisfação"
                sublabel="NPS clientes"
                delay={0.4}
              />
              <RadialProgress
                value={70}
                label="Localização"
                sublabel="devedores encontrados"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
