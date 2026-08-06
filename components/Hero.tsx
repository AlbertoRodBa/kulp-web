"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setHasAppeared(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex flex-col bg-[var(--cream-100)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full flex-grow flex flex-col justify-center pt-24 pb-12 xl:pt-8 xl:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center w-full">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in">
            <div className="group transition-all duration-500">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-[-0.03em] text-[var(--ink)] mb-4 max-w-2xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Diseño web para
                <br />
                <span className="italic font-normal text-[var(--ink-muted)] font-serif">
                  impulsar tu proyecto.
                </span>
              </h1>

              <h2 className="text-lg md:text-xl font-light text-[var(--ink-muted)] max-w-lg leading-relaxed mb-12">
                Diseño, desarrollo y contenido estratégico para potenciar tu
                proyecto o marca.
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden px-8 py-4 bg-[var(--ink)] text-[var(--cream-50)] text-sm font-light tracking-wide"
              >
                <span className="absolute inset-0 bg-[#424242] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-3">
                  Quiero cotizar
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
            <div className="w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square">
              <Image
                ref={imgRef}
                src="/hero-img.png"
                alt="Hero image"
                width={500}
                height={500}
                className={`
                  w-full h-full object-contain
                  transition-all duration-700 ease-out
                  hover:scale-[1.02] hover:brightness-105
                  ${hasAppeared ? "grayscale-0" : "grayscale"}
                `}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full"></div>
    </section>
  );
}
