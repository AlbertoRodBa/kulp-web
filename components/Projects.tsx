"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    client: "Municipalidad de Cerrillos",
    title: "PLADECO Cerrillos",
    year: "2026",
    link: "https://pladecocerrillos.participayplanifica.cl",
    description:
      "Página web para la gestión del Plan de Desarrollo Comunal (PLADECO) de Cerrillos. Permite la visualización de objetivos estratégicos y el seguimiento ciudadano de etapas y actividades ciudadanas, fortaleciendo la transparencia del proceso",
    image: "/project-1-pladeco-cerrillos.jpg",
    tags: ["Participación Ciudadana", "Desarrollo Local"],
  },
  {
    id: 2,
    client: "Municipalidad de Quintero",
    title: "Plan Regulador Comunal de Quintero",
    year: "2025",
    link: "https://prcquintero.participayplanifica.cl",
    description:
      "Sitio institucional para la difusión del Plan Regulador Comunal. La plataforma permite a los vecinos acceder a la normativa urbana, cartografía interactiva y noticias del proceso de actualización del PRC, fomentando igualmente la participación ciudadana en actividades.",
    image: "/project-2-prc-quintero.jpg",
    tags: ["Planificación Urbana", "Participación Ciudadana"],
  },
  {
    id: 3,
    client: "Municipalidad de Peñaflor",
    title: "PIIMEP Peñaflor",
    year: "2024",
    link: "https://piimep.penaflor.cl",
    description:
      "Plataforma para el Plan Integral de Infraestructura de Movilidad y Espacio Público (PIIMEP). El sitio centraliza la visualización de proyectos urbanos, diagnósticos territoriales y herramientas de consulta para mejorar la conectividad y calidad de vida en la comuna.",
    image: "/project-3-piimep-penaflor.jpg",
    tags: ["Infraestructura", "Movilidad Urbana"],
  },
];

function AccordionItem({ project }: { project: (typeof projects)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--cream-300)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full group flex items-start justify-between py-8 md:py-10 text-left hover:bg-[var(--cream-100)] md:-mx-10 px-6 md:px-10 transition-colors duration-200"
        aria-expanded={open}
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
          <span className="text-xs tracking-[0.15em] text-[var(--ink-faint)] font-light">
            {project.year}
          </span>

          <div>
            <p className="text-xs tracking-[0.1em] uppercase text-[var(--ink-faint)] font-light mb-1">
              {project.client}
            </p>

            <h3
              className="text-2xl md:text-3xl tracking-[-0.02em] text-[var(--ink)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
          </div>
        </div>

        <span className="mt-1 ml-4 shrink-0 text-[var(--ink-faint)] transition-transform duration-300">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <path
              d="M10 4v12M4 10h12"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        className={`accordion-content ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        <div className="pb-8 pl-0 md:pl-[calc(3rem+2rem)] pr-6 md:pr-10 md:-mx-10 px-6 md:px-10">
          <p className="text-base font-light text-[var(--ink-muted)] leading-relaxed max-w-2xl mb-6">
            {project.description}
          </p>

          {project.image && (
            <div className="mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-2xl h-auto rounded-lg shadow-sm border border-[var(--cream-300)]"
              />
            </div>
          )}

          {/* Bloque de Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-[0.08em] font-light text-[var(--ink-faint)] border border-[var(--cream-300)] px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link alineado a la derecha debajo de todo */}
          {project.link && (
            <div className="flex justify-end">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.15em] font-medium text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors duration-200 underline underline-offset-4 decoration-[var(--cream-300)] hover:decoration-[var(--ink)]"
              >
                Visitar sitio
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-[var(--cream-100)] pt-1 pb-6 md:pt-20 md:pb-[6.25rem]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 md:px-10"
      >
        <div className="flex items-end justify-between mb-6 border-b border-[var(--cream-300)] pb-6">
          <h2
            className="text-3xl md:text-4xl tracking-[-0.03em] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Proyectos
          </h2>

          <p className="hidden md:block text-sm font-light text-[var(--ink-faint)]">
            Trabajo reciente
          </p>
        </div>

        <div>
          {projects.map((p) => (
            <AccordionItem key={p.id} project={p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}