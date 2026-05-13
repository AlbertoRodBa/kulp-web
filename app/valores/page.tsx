"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const services = [
  {
    title: "Diseño Web",
    price: "Desde $350.000",
    description:
      "Sitios web modernos, autoadministrables y optimizados para comunicar tu proyecto o marca.",
  },
  {
    title: "Rediseño Web",
    price: "Desde $250.000",
    description:
      "Actualización visual, mejora de estructura y optimización de experiencia de usuario.",
  },
  {
    title: "Actualización de contenidos",
    price: "Desde $40.000",
    description:
      "Cambios de textos, imágenes, banners, noticias o secciones dentro de tu sitio web.",
  },
  {
    title: "Branding Digital",
    price: "Desde $90.000",
    description:
      "Definición de estilo visual y coherencia digital para fortalecer tu presencia online.",
  },
];

export default function Valores() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--cream-100)] pt-10 pb-20">
        <section id="valores" className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            {/* Header */}
            <div className="border-b border-[var(--cream-300)] pb-8 mb-14">
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--ink-faint)] mb-3 font-light">
                Valores referenciales
              </p>

              <h2
                className="text-3xl md:text-4xl tracking-[-0.03em] text-[var(--ink)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Servicios y valores
              </h2>

              <p className="mt-3 text-base md:text-lg font-light text-[var(--ink-muted)] max-w-2xl leading-relaxed">
                Valores estimados según tipo de proyecto. Cada sitio se cotiza
                de acuerdo al alcance, funcionalidades y necesidades
                específicas.
              </p>
            </div>

            {/* Listado */}
            <div className="divide-y divide-[var(--cream-300)]">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="py-8 md:py-10 grid md:grid-cols-[1.3fr_220px] gap-6 items-start"
                >
                  <div>
                    <h3
                      className="text-2xl md:text-3xl tracking-[-0.02em] text-[var(--ink)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm md:text-base font-light text-[var(--ink-muted)] leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  <div className="md:text-right">
                    <span className="text-lg md:text-xl text-[var(--ink)]">
                      {service.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota */}
            <div className="mt-10 border-t border-[var(--cream-300)] pt-6">
              <p className="text-sm text-[var(--ink-faint)] leading-relaxed max-w-3xl">
                Los valores son referenciales y pueden variar según cantidad de
                secciones, contenidos, funcionalidades o complejidad del
                proyecto.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Contact />

      <Footer />
    </>
  );
}
