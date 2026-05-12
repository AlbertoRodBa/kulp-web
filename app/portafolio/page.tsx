const projects = [
  {
    id: 1,
    client: "Municipalidad de Cerrillos",
    title: "PLADECO Cerrillos",
    year: "2026",
    link: "https://pladecocerrillos.participayplanifica.cl",
    description:
      "Página web para la gestión del Plan de Desarrollo Comunal (PLADECO) de Cerrillos. Permite visualizar objetivos estratégicos y actividades ciudadanas.",
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
      "Sitio institucional para la difusión del Plan Regulador Comunal, cartografía interactiva y contenidos del proceso.",
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
      "Sitio web para informar sobre el plan de inversiones de infraestructura, movilidad y espacio público.",
    image: "/project-3-piimep-penaflor.jpg",
    tags: ["Planificación Urbana", "Participación Ciudadana"],
  },
];

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-[var(--cream-100)] pt-28 pb-20">
      <section className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="border-b border-[var(--cream-300)] pb-8 mb-14">
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--ink-faint)] mb-3 font-light">
            Trabajo realizado
          </p>

          <h1
            className="text-4xl md:text-6xl tracking-[-0.04em] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portafolio
          </h1>

          <p className="mt-3 text-base md:text-lg font-light text-[var(--ink-muted)] max-w-2xl leading-relaxed">
            Proyectos desarrollados para fortalecer la presencia digital, con foco en diseño, contenido y usabilidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border-b border-[var(--cream-300)] pb-10"
            >
              {/* Imagen */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg border border-[var(--cream-300)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </a>

              {/* Info */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase tracking-[0.1em] text-[var(--ink-faint)] font-light">
                    {project.client}
                  </p>

                  <span className="text-xs text-[var(--ink-faint)] font-light">
                    {project.year}
                  </span>
                </div>

                <h2
                  className="text-2xl md:text-3xl tracking-[-0.02em] text-[var(--ink)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h2>

                <p className="mt-4 text-sm md:text-base font-light text-[var(--ink-muted)] leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-[0.08em] font-light text-[var(--ink-faint)] border border-[var(--cream-300)] px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.15em] font-medium text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors duration-200 underline underline-offset-4 decoration-[var(--cream-300)] hover:decoration-[var(--ink)]"
                  >
                    Visitar sitio →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}