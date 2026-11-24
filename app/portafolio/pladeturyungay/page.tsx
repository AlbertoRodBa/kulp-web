import ProjectGallery from "@/components/ProjectGallery";

const images = [
  {
    src: "/screenshotpladeturyungay1.jpg",
    alt: "Pantalla principal del PLADETUR Yungay",
  },
  {
    src: "/screenshotpladeturyungay2.jpg",
    alt: "Detalle del contenido del PLADETUR Yungay",
  },
];

export default function PladeturyungayPage() {
  return (
    <ProjectGallery
      title="PLADETUR Yungay - Ilustre Municipalidad de Yungay"
      description="Sitio web para el Plan de Desarrollo Turístico de la Comuna de Yungay con el fin de brindar información relevante a los vecinos. El sitio incluyó secciones sobre el PLADETUR, noticias, actividades ciudadanas y un formulario de contacto para consultas."
      images={images}
      backHref="/#portafolio"
      backLabel="Volver"
    />
  );
}
