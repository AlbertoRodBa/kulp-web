"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faUserCog,
  faPalette,
  faArrowsRotate,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Sitios web para proyectos o marcas",
    description:
      "Sitios web modernos, optimizados y adaptados a dispositivos móviles, diseñados para comunicar tu proyecto de forma clara y profesional.",
    tag: "Autoadministrable",
    icon: faDesktop,
  },
  {
    title: "Rediseño web",
    description:
      "Mejora de sitios web existentes mediante actualización visual, optimización de estructura y experiencia de navegación.",
    tag: "Diseño UI/UX",
    icon: faArrowsRotate,
  },
  {
    title: "Actualización de contenidos",
    description:
      "Actualización de textos, imágenes, documentos e información relevante para mantener el sitio vigente y organizado.",
    tag: "Redacción web",
    icon: faPenToSquare,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[var(--cream-50)] py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 md:px-10"
      >
        {/* Header */}
        <div className="flex items-end justify-between mb-10 border-b border-[var(--cream-300)] pb-4">
          <h2
            className="text-3xl md:text-4xl tracking-[-0.03em] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Servicios
          </h2>

          <p className="hidden md:block text-sm text-[var(--ink-faint)]">
            Puedo ayudarte con
          </p>
        </div>

        {/* List */}
        <div className="divide-y divide-[var(--cream-300)]">
          {services.map((s) => (
            <div
              key={s.title}
              className="group py-10 md:py-12 flex flex-row items-start gap-4 md:gap-12 hover:bg-[var(--cream-100)] -mx-6 md:-mx-10 px-6 md:px-10 transition-colors duration-200"
            >
              {/* Icon */}
              <div className="flex items-start justify-center w-8 md:w-6 shrink-0 mt-2 xl:mt-3">
                <FontAwesomeIcon
                  icon={s.icon}
                  className="text-xl md:text-lg text-[#5a5a5a] hover:text-[var(--ink)] transition-colors duration-200"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3 flex-wrap">
                  <h3
                    className="text-2xl md:text-3xl tracking-[-0.02em] text-[var(--ink)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>

                  {s.tag && (
                    <span className="text-xs tracking-[0.12em] uppercase text-[var(--ink-faint)] border border-[var(--cream-300)] px-3 py-1">
                      {s.tag}
                    </span>
                  )}
                </div>

                <p className="text-base text-[var(--ink-muted)] leading-relaxed max-w-2xl">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
