import ProjectGallery from "@/components/ProjectGallery";

const images = [
  {
    src: "/screenshot-penaflor1.jpg",
    alt: "Página principal del proyecto PIIMEP Peñaflor",
  },
  {
    src: "/screenshot-penaflor2.jpg",
    alt: "Sección del proyecto PIIMEP Peñaflor",
  },
  {
    src: "/screenshot-penaflor3.png",
    alt: "Contenido del proyecto PIIMEP Peñaflor",
  },
  {
    src: "/screenshot-penaflor5.jpg",
    alt: "Vista adicional del proyecto PIIMEP Peñaflor",
  },
];

export default function PiimepPenaflorPage() {
  return (
    <ProjectGallery
      title="PIIMEP Peñaflor - Municipalidad de Peñaflor"
      description="Sitio web para informar sobre el Plan de Inversiones de Infraestructura, Movilidad y Espacio Público de Peñaflor, con información actualizada y un glosario."
      images={images}
      backHref="/portafolio"
    />
  );
}
