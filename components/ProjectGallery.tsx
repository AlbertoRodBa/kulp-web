"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  title: string;
  description: string;
  images: GalleryImage[];
  backHref: string;
  backLabel?: string;
}

export default function ProjectGallery({
  title,
  description,
  images,
  backHref,
  backLabel = "Volver al portafolio",
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedIndex]);

  const closeGallery = () => setSelectedIndex(null);

  const openGallery = (index: number) => {
    setZoomLevel(1);
    setSelectedIndex(index);
  };

  const showPrevious = () => {
    setZoomLevel(1);
    setSelectedIndex((index) =>
      index === null ? null : index === 0 ? images.length - 1 : index - 1
    );
  };

  const showNext = () => {
    setZoomLevel(1);
    setSelectedIndex((index) =>
      index === null ? null : index === images.length - 1 ? 0 : index + 1
    );
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
              {title}
            </h1>

            <p className="max-w-3xl text-base md:text-lg font-light text-[var(--ink-muted)] leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openGallery(index)}
                className="group relative overflow-hidden transition-transform duration-500 hover:scale-[1.01] focus:outline-none"
                aria-label={`Ampliar captura ${index + 1}`}
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

          <div className="mt-10 flex justify-end">
            <a
              href={backHref}
              className="inline-flex items-center gap-2 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
            >
              <span aria-hidden="true">←</span>
              {backLabel}
            </a>
          </div>
        </section>
      </main>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#101010]/95 text-white"
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de ${title}`}
          onClick={closeGallery}
        >
          <div
            className="relative flex min-h-0 flex-1 flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="z-20 flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-black/20 px-4 sm:px-6">
              <span className="text-sm tabular-nums text-white/70">
                {selectedIndex + 1} / {images.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setZoomLevel((level) => Math.min(level + 0.5, 2.5))
                  }
                  disabled={zoomLevel >= 2.5}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Acercar imagen"
                  title="Acercar imagen"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <line x1="15.5" y1="15.5" x2="21" y2="21" />
                    <line x1="10.5" y1="8" x2="10.5" y2="13" />
                    <line x1="8" y1="10.5" x2="13" y2="10.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setZoomLevel((level) => Math.max(level - 0.5, 1))
                  }
                  disabled={zoomLevel <= 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Alejar imagen"
                  title="Alejar imagen"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <line x1="15.5" y1="15.5" x2="21" y2="21" />
                    <line x1="8" y1="10.5" x2="13" y2="10.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={closeGallery}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                  aria-label="Cerrar galería"
                  title="Cerrar"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto px-14 py-4 sm:px-20">
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white/80 transition hover:bg-black/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-5 sm:h-12 sm:w-12"
                aria-label="Imagen anterior"
                title="Anterior"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-h-full max-w-full object-contain shadow-2xl transition-transform duration-300 ease-out"
                style={{ transform: `scale(${zoomLevel})` }}
              />

              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white/80 transition hover:bg-black/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-5 sm:h-12 sm:w-12"
                aria-label="Imagen siguiente"
                title="Siguiente"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
