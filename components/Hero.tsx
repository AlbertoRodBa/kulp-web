"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col bg-[var(--cream-100)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full flex-grow flex flex-col justify-center pt-24 pb-12 xl:pt-8 xl:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center w-full">

          <div className="order-2 lg:order-1 opacity-0 animate-fade-in">

            <div className="group transition-all duration-500 hover:-translate-y-1">

              <h1
                className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-[-0.03em] text-[var(--ink)] mb-4 max-w-2xl transition-all duration-500 group-hover:scale-[1.01]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Sitios web claros
                <br />
                <span className="italic font-normal text-[var(--ink-muted)] transition-colors duration-500 group-hover:text-[var(--ink)]">
                  para proyectos con propósito.
                </span>
              </h1>

              <h2 className="text-lg md:text-xl font-light text-[var(--ink-muted)] max-w-lg leading-relaxed mb-12 transition-all duration-500 group-hover:text-[var(--ink)] group-hover:translate-x-1">
                Diseño, desarrollo y comunicación digital para proyectos, organizaciones y marcas.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden px-8 py-4 bg-[var(--ink)] text-[var(--cream-50)] text-sm font-light tracking-wide"
              >
                <span className="absolute inset-0 bg-[#424242] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-3">
                  Cotizar aquí
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[var(--cream-300)] text-[var(--ink-muted)] text-sm font-light tracking-wide hover:border-[var(--ink)] hover:text-[var(--ink)] transition-all duration-300"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fade-in-delay">
           <motion.img
  src="/hero-img.png"
  alt="Hero image"
  initial={{
    filter: "grayscale(100%) brightness(0.95)",
    scale: 1,
  }}
  whileInView={{
    filter: "grayscale(0%) brightness(1)",
    scale: 1,
  }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    duration: 1.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  whileHover={{
    scale: 1.02,
    filter: "grayscale(0%) brightness(1.05)",
  }}
  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain"
/>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full"></div>
    </section>
  );
}