"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ServiceId = "diseno" | "rediseño" | "contenidos";

type ServiceOption = {
  id: ServiceId;
  label: string;
  title: string;
  description: string;
  prompt: string;
  buttonLabel: string;
};

const services: ServiceOption[] = [
  {
    id: "diseno",
    label: "Diseño web",
    title: "Diseño web",
    description:
      "Creamos tu sitio web, moderno y responsive ideado para transmitir confianza, ofrecer una buena experiencia de usuario y representar la identidad de tu marca. Cada proyecto se desarrolla de acuerdo con tus objetivos y necesidades.",
    prompt:
      "¿Te interesa este servicio? Cuéntanos más sobre tu proyecto completando el formulario que encontrarás más abajo.",
    buttonLabel: "↓ Ir al formulario",
  },
  {
    id: "rediseño",
    label: "Rediseño web",
    title: "Rediseño web",
    description:
      "Si tu sitio web necesita una imagen más actual, una mejor organización o una experiencia de navegación más clara, podemos renovarlo manteniendo lo que funciona y mejorando lo que aporta mayor valor a tus visitantes.",
    prompt:
      "¿Te interesa este servicio? Cuéntanos más sobre tu proyecto completando el formulario que encontrarás más abajo.",
    buttonLabel: "↓ Ir al formulario",
  },
  {
    id: "contenidos",
    label: "Actualización de contenidos",
    title: "Actualización de contenidos",
    description:
      "Mantenemos tu sitio web al día mediante la actualización de textos, imágenes, documentos, enlaces y otros contenidos, asegurando que la información de tu empresa permanezca vigente y correctamente presentada.",
    prompt:
      "¿Necesitas este servicio? Cuéntanos qué cambios quieres realizar completando el formulario que encontrarás más abajo.",
    buttonLabel: "↓ Ir al formulario",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-4 z-50 w-[min(92vw,24rem)] rounded-2xl border border-[var(--cream-300)] bg-[var(--cream-50)] p-4 shadow-[0_24px_80px_rgba(26,25,23,0.14)] sm:right-6"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-[var(--ink)]">Asistente Kulp</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {selectedService ? selectedService.title : "¡Hola!👋"}
                </p>
                {!selectedService && (
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                    ¿En qué podemos ayudarte?
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar chatbot"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--cream-300)] text-[var(--ink-muted)] transition hover:border-[var(--ink)] hover:text-[var(--ink)]"
              >
                ×
              </button>
            </div>

            {!selectedService ? (
              <div className="space-y-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="flex w-full items-center justify-between rounded-full border border-[var(--cream-300)] bg-white/70 px-4 py-3 text-left transition hover:border-[var(--ink)] hover:bg-white"
                  >
                    <span className="text-sm font-medium text-[var(--ink)]">
                      {service.label}
                    </span>
                    <span className="text-sm text-[var(--ink-muted)]">↗</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="rounded-2xl border border-[var(--cream-300)] bg-white/70 p-4 text-sm leading-relaxed text-[var(--ink-muted)]">
                  <p className="text-base font-medium text-[var(--ink)]">{selectedService.title}</p>
                  <p className="mt-2">{selectedService.description}</p>
                  <p className="mt-3 italic text-[var(--ink)]">{selectedService.prompt}</p>
                </div>

                <Link
                  href="/#contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center rounded-full bg-[var(--ink)] px-4 py-3 text-sm font-medium text-[var(--cream-50)] transition hover:bg-[var(--ink-muted)]"
                >
                  {selectedService.buttonLabel}
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="text-sm text-[var(--ink-muted)] transition hover:text-[var(--ink)]"
                >
                  Volver
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir chatbot"
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--ink)] text-xl text-[var(--cream-50)] shadow-[0_16px_40px_rgba(26,25,23,0.24)] transition hover:scale-105 hover:bg-[var(--ink-muted)] sm:bottom-6 sm:right-6"
      >
        💬
      </button>
    </>
  );
}
