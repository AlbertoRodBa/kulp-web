import React from "react";

export default function AnnouncementBar() {
  const items = [
    "⭐ Sitios web modernos y optimizados",
    "Entrega rápida",
    "Respuesta en menos de 24 horas",
  ];

  const chunk = (
    <div className="flex items-center gap-5 px-8 text-sm whitespace-nowrap">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span>{item}</span>

          {i < items.length - 1 && (
            <span className="text-gray-500">•</span>
          )}
        </React.Fragment>
      ))}

      <span className="text-gray-500">•</span>

      <a
        href="#contacto"
        className="font-medium underline underline-offset-4 hover:underline hover:opacity-75 transition-opacity"
      >
        <i>Contacto</i> 
      </a>
    </div>
  );

  return (
    <div className="bg-[#dfd9cb] text-black py-[11px] overflow-hidden w-full">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i}>{chunk}</div>
        ))}
      </div>
    </div>
  );
}