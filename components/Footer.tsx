import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
<footer className="bg-neutral-950 border-t border-white/10">      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left - Logo */}
          <div>
            <Image
              src="/logo-kulp-blanco.png"
              alt="Kulp Logo"
              width={120}
              height={120}
              className="opacity-95"
            />
          </div>

          {/* Center - Menu */}
          <div className="flex items-center gap-6 md:mt-6">
            <a
              href="#servicios"
              className="text-xs font-light text-white/60 hover:text-white transition-colors duration-300"
            >
              Servicios
            </a>

            <a
              href="#proyectos"
              className="text-xs font-light text-white/60 hover:text-white transition-colors duration-300"
            >
              Proyectos
            </a>

            <a
              href="#contacto"
              className="text-xs font-light text-white/60 hover:text-white transition-colors duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="md:mt-6">
            <p className="text-xs font-light text-white/40">
              © {year} Kulp | Chile 🇨🇱
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}