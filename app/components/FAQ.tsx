"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Nunca trabalhei com uma assessoria de cobrança. Como funciona?",
    answer:
      "Realizamos cobranças de forma amigável para títulos vencidos até 1800 dias, com ticket médio acima de R$ 100,00. Não cobramos taxa de contrato nem mensalidade — somos remunerados somente no êxito da recuperação.",
  },
  {
    question: "Perdi o contato com meu cliente. Vocês podem ajudar?",
    answer:
      "Sim. Nosso setor de back office é especializado em pesquisa e auxilia nossa equipe de cobranças na localização de clientes inadimplentes, mesmo quando os dados de contato estão desatualizados.",
  },
  {
    question: "Que tipos de cobranças vocês realizam?",
    answer:
      "Cobramos todos os tipos de títulos: boletos, notas promissórias, cheques e quebras de contrato. Nossa abordagem é sempre extrajudicial e humanizada.",
  },
  {
    question: "Como faço para contratar?",
    answer:
      "Basta nos enviar a ficha cadastral e lançar os devedores pelo nosso portal online. Você também pode preencher nossa planilha Excel ou enviar um arquivo CNAB. Não necessitamos de arquivo físico para iniciar a cobrança.",
  },
  {
    question: "Qual o custo para minha empresa?",
    answer:
      "Custo zero. Todas as despesas são cobradas diretamente do inadimplente. Não há mensalidade, taxa de contrato ou custos ocultos. Somos remunerados exclusivamente pelo êxito na recuperação.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base font-semibold text-black group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <AnimatedSection>
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Perguntas Frequentes
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-black">
              Tire suas{" "}
              <span className="text-primary">dúvidas</span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Não encontrou o que procura? Entre em contato com nossa equipe
              comercial. Estamos prontos para ajudar.
            </p>

            <div className="mt-8">
              <a
                href="https://api.whatsapp.com/send?phone=5547999384960&text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors text-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com a Equipe Comercial
              </a>
            </div>
          </AnimatedSection>

          {/* Right — FAQ accordion */}
          <AnimatedSection delay={0.15}>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
