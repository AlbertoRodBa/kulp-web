"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-[var(--cream-50)] py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 md:px-10"
      >
        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[var(--cream-300)] pb-6">
          <h2
            className="text-3xl md:text-4xl tracking-[-0.03em] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contacto
          </h2>

          <p className="hidden md:block text-sm font-light text-[var(--ink-muted)]">
            ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left */}
          <div>
            <h3
              className="text-2xl md:text-3xl tracking-[-0.02em] text-[var(--ink)] mb-6 leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ¿Tienes un proyecto que requiera un sitio web o rediseño?
            </h3>

            <p className="text-base font-light text-[var(--ink-muted)] leading-relaxed mb-10">
              Cuéntame sobre tu proyecto y veamos cómo comunicarlo de forma
              clara y profesional.
            </p>

            <div className="flex items-center gap-3 group">
              <div className="w-8 h-8 border border-[var(--cream-300)] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 3l6 4 6-4M1 3h12v8H1V3z"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              <a
                href="mailto:hola@kulp.cl"
                className="text-sm font-light text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                hola@kulp.cl
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                  Nombre <span className="ml-1 opacity-50">*</span>
                </label>

                <input
                  name="user_name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="bg-transparent border-b border-[var(--cream-300)] py-3 text-sm text-[var(--ink)] focus:border-[var(--ink)] outline-none"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                  Tu correo <span className="ml-1 opacity-50">*</span>
                </label>

                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="correo@mail.com"
                  className="bg-transparent border-b border-[var(--cream-300)] py-3 text-sm text-[var(--ink)] focus:border-[var(--ink)] outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Proyecto / Marca */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                  Proyecto / Marca <span className="ml-1 opacity-50">*</span>
                </label>

                <input
                  name="user_company"
                  type="text"
                  required
                  placeholder="Nombre de tu proyecto o marca"
                  className="bg-transparent border-b border-[var(--cream-300)] py-3 text-sm text-[var(--ink)] focus:border-[var(--ink)] outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                  ¿Qué necesitas?
                </label>

                <select
                  name="project_type"
                  className="bg-transparent border-b border-[var(--cream-300)] py-3 text-sm text-[var(--ink)] font-light focus:border-[var(--ink)] outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="Web">Sitio web</option>
                  <option value="Rediseño">Rediseño web</option>
                  <option value="Actualización Contenidos">Actualización de contenidos</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            {/* Select */}

            {/* Mensaje */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                Mensaje <span className="ml-1 opacity-50">*</span>
              </label>

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Cuéntame qué necesitas o qué te gustaría mejorar"
                className="bg-transparent border-b border-[var(--cream-300)] py-3 text-sm text-[var(--ink)] focus:border-[var(--ink)] outline-none resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-8 py-4 bg-[var(--ink)] text-[var(--cream-50)] text-sm hover:bg-[var(--ink-muted)] transition"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-700">Mensaje enviado</p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-600">Error al enviar</p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
