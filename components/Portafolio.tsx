"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import { useCarousel } from "@/hooks/useCarousel";
import Clients from "@/components/Clients";

interface Project {
  id: number;
  client: string;
  title: string;
  year: string;
  link: string;
  description: string;
  image: string;
  tags: string[];
}

function ProjectCard({ project, isMobile }: { project: Project; isMobile: boolean }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-xl border border-[var(--cream-300)] bg-white h-full flex flex-col"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-hidden flex-shrink-0 block"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </a>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-[0.12em] text-[var(--ink-faint)]">
            {project.client}
          </span>
          <span className="text-xs text-[var(--ink-faint)]">
            {project.year}
          </span>
        </div>

        <h3
          className="text-xl md:text-2xl text-[var(--ink)] mb-3 tracking-[-0.02em] line-clamp-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm text-[var(--ink-muted)] leading-relaxed mb-5 flex-grow"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: isMobile ? 4 : 6,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs tracking-[0.08em] font-light text-[var(--ink-faint)] border border-[var(--cream-300)] px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-[var(--ink-faint)] hover:text-[var(--ink)] transition-colors mt-auto"
        >
          Ver proyecto →
        </a>
      </div>
    </motion.article>
  );
}

function NavButton({
  direction,
  onClick,
  disabled,
  variant = "desktop",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  variant?: "mobile" | "desktop";
}) {
  const isMobile = variant === "mobile";
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous projects" : "Next projects"}
      className={`absolute top-1/2 -translate-y-1/2 z-20 p-${isMobile ? "3" : "2"} rounded-full transition-all ${
        disabled
          ? isMobile
            ? "opacity-20 cursor-not-allowed"
            : "opacity-50 cursor-not-allowed"
          : isMobile
            ? "opacity-60 hover:opacity-100 bg-black/30 hover:bg-black/50"
            : "hover:bg-[var(--cream-300)]"
      } ${isPrev ? (isMobile ? "left-4" : "-translate-x-20 left-0") : isMobile ? "right-4" : "translate-x-20 right-0"}`}
    >
      <svg
        className={isMobile ? "w-8 h-8 text-white" : "w-6 h-6 text-[var(--ink)]"}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={isMobile ? 3 : 2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isPrev ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );
}

export default function Portafolio() {
  const [isMobile, setIsMobile] = useState(false);

  const itemsPerPage = isMobile ? 1 : 3;
  const {
    currentIndex,
    setCurrentIndex,
    maxIndex,
    handleTouchStart,
    handleTouchEnd,
    goToPrevious,
    goToNext,
  } = useCarousel({ totalItems: projects.length, itemsPerPage });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset index when switching
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile, setCurrentIndex]);

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const showNavigation = projects.length > itemsPerPage;
  const showNavigationButtons = isMobile
    ? projects.length > 1
    : showNavigation;

  const renderCounter = () => "Conoce nuestros proyectos";

  return (
    <section
      id="portafolio"
      className="bg-[var(--cream-100)] pt-16 pb-6 md:pt-20 md:pb-[6.25rem]"
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
            Portafolio
          </h2>
          <p className="text-sm font-light text-[var(--ink-faint)]">
            {renderCounter()}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={
              isMobile
                ? "relative"
                : "grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            }
          >
            {visibleProjects.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={p} isMobile={isMobile} />
              </motion.div>
            ))}
          </div>

          {showNavigationButtons && (
            <>
              <NavButton
                direction="prev"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                variant={isMobile ? "mobile" : "desktop"}
              />
              <NavButton
                direction="next"
                onClick={goToNext}
                disabled={currentIndex === maxIndex}
                variant={isMobile ? "mobile" : "desktop"}
              />
            </>
          )}
        </div>

        <Clients />
      </motion.div>
    </section>
  );
}
