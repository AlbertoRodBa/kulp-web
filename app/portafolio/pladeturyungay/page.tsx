"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const images = [
  {
    src: "/screenshotpladeturyungay1.jpg",
    alt: "Pantalla de Pladeturyungay 1",
    label: "Vista principal",
  },
  {
    src: "/screenshotpladeturyungay2.jpg",
    alt: "Pantalla de Pladeturyungay 2",
    label: "Detalle del contenido",
  },
];

export default function PladeturyungayPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [selectedIndex]);

  const openGallery = (index: number) => {
    setSelectedIndex(index);
  };

  const closeGallery = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((index) => {
      if (index === null) return null;
      return index === 0 ? images.length - 1 : index - 1;
    });
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((index) => {
      if (index === null) return null;
      return index === images.length - 1 ? 0 : index + 1;
    });
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--cream-100)] py-20 pt-32 md:pt-36">
        <section className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="border-b border-[var(--cream-300)] pb-10 mb-12">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--ink-faint)] font-light mb-3">
              Proyecto web
            </p>

<h1
  className="text-3xl md:text-4xl tracking-[-0.03em] text-[var(--ink)] mb-5 leading-tight"
  style={{ fontFamily: "var(--font-display)" }}
>
  PLADETUR Yungay - Ilustre Municipalidad de Yungay
</h1>

            <p className="max-w-3xl text-base md:text-lg font-light text-[var(--ink-muted)] leading-relaxed">
              Sitio web para el Plan de Desarrollo Turístico de la Comuna de Yungay con el fin de brindar información relevante a los vecinos. El sitio incluyó secciones sobre el PLADETUR, noticias, actividades ciudadanas y un formulario de contacto para consultas.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openGallery(index)}
              className="group relative overflow-hidden transition-transform duration-500 hover:scale-[1.01] focus:outline-none"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto max-h-[320px] sm:h-[420px] sm:max-h-[520px] object-contain sm:object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/20">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-black/40 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.65" y1="16.65" x2="21" y2="21" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de Pladeturyungay"
          onClick={closeGallery}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeGallery}
              className="absolute top-4 right-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[var(--ink)] shadow-lg transition hover:bg-white"
              aria-label="Cerrar galería"
            >
              ×
            </button>

            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full max-h-[75vh] object-contain shadow-2xl transition-transform duration-500"
            />

            <div className="mt-4 flex items-center justify-between gap-4 text-sm text-[var(--ink-muted)]">
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex items-center justify-center rounded-full border text-white border-white/30 bg-white/10 px-4 py-2 transition hover:bg-white/20"
              >
                ← Anterior
              </button>
              <span className="text-center text-xs uppercase tracking-[0.2em] text-white/80">
                {selectedIndex + 1} de {images.length}
              </span>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex items-center justify-center rounded-full border text-white border-white/30 bg-white/10 px-4 py-2 transition hover:bg-white/20"
              >
                Siguiente →
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
