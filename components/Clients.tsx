import Image from "next/image";

const logos = [
  "nuestrosclientes-goresantiago.png",
  "nuestrosclientes-muebe.png",
  "nuestrosclientes-municerrillos.png",
  "nuestrosclientes-munillay.png",
  "nuestrosclientes-munipenaflor.png",
  "nuestrosclientes-munipudahuel.png",
  "nuestrosclientes-muniquintero.png",
  "nuestrosclientes-pladecocerrillos.png",
];

function cleanAlt(name: string) {
  return name
    .replace(/^nuestrosclientes-/, "")
    .replace(/[-_]/g, " ")
    .replace(/\.(png|jpg|jpeg)$/i, "")
    .toUpperCase();
}

export default function Clients() {
  const repeatedLogos = [...logos, ...logos];

  return (
    <section id="clientes" className="pt-16 pb-1">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-6 text-center">
          <h2
            className="text-3xl md:text-4xl tracking-[-0.03em] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nuestros clientes
          </h2>
        </div>

        <div className="relative overflow-hidden py-4">
          <div className="flex w-max items-center gap-6 animate-clients-marquee hover:[animation-play-state:paused]">
            {repeatedLogos.map((file, index) => (
              <div key={`${file}-${index}`} className="flex-shrink-0 min-w-[180px] flex items-center justify-center">
                <Image
                  src={`/clients-logos/${file}`}
                  alt={cleanAlt(file)}
                  width={180}
                  height={80}
                  draggable={false}
                  className="object-contain max-h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-clients-marquee {
          animation: clientsMarquee 56s linear infinite;
        }

        .animate-clients-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes clientsMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
