import React from "react";

export default function AnnouncementBar() {
  const items = [
    "💫 Sitios web diseñados a medida",
    "Adaptación a todos los dispositivos",
    "Respuesta en menos de 24 horas",
  ];

  const chunk = (
    <div className="flex items-center gap-5 px-8 text-[14px] font-light tracking-wide whitespace-nowrap italic">
      <span className="flex items-center gap-2">
        <span></span>
        <span>{items[0]}</span>
      </span>

      <span className="text-gray-500">•</span>

      <span>{items[1]}</span>

      <span className="text-gray-500">•</span>

      <span>{items[2]}</span>

      <span className="text-gray-500">•</span>

      <a
        href="#contacto"
        className="font-medium hover:underline hover:opacity-75 transition-opacity"
      >
        Contacto
      </a>
    </div>
  );

  return (
    <div className="bg-[#ebe7d9] text-black py-[11px] overflow-hidden w-full">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i}>{chunk}</div>
        ))}
      </div>
    </div>
  );
}