"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AnnouncementBar from "./AnnouncementBar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const navItems = [
    "Inicio",
    "Servicios",
    "Portafolio",
    "Contacto",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;

      setScrolled(isScrolled);

      // Mostrar solo cuando esté arriba del todo
      setShowAnnouncement(window.scrollY <= 5);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(250,250,247,0.75)] backdrop-blur-xl border-b border-[var(--cream-300)] shadow-sm"
          : "bg-[rgb(250,250,247)]"
      }`}
    >
      {/* Announcement Bar */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showAnnouncement ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <AnnouncementBar />
      </div>

      {/* Header principal */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-kulp.png"
              alt="Kulp Logo"
              className="h-12 w-auto max-w-[160px] object-contain"
            />
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Inicio" ? "#" : `#${item.toLowerCase()}`}
                className="nav-link text-sm font-normal tracking-wide text-[var(--ink)] hover:text-[var(--ink-muted)] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 text-sm font-light px-4 py-2 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream-50)] transition-all duration-200"
          >
            Conversar
          </a>

          {/* Mobile menu icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--ink-muted)]"
            aria-label={
              mobileMenuOpen ? "Cerrar menú" : "Abrir menú"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileMenuOpen ? (
                <path
                  d="M15 5L5 15M5 5l10 10"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 6.5h15M2.5 10h15M2.5 13.5h15"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[var(--cream-100)] border-t border-[var(--cream-300)]"
        >
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={item === "Inicio" ? "#" : `#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-light tracking-wide text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors duration-200"
              >
                {item}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-light px-4 py-2 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream-50)] transition-all duration-200"
            >
              Conversar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}