import { useState } from "react";

export default function PromoPulsera() {
  const [pausado, setPausado] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Imagen */}
        <div className="relative aspect-[3/4] w-full bg-[#f5f5f5]">
          <img
            src="/img/promo-pulsera.png"
            alt="Pulsera trenzada morada con charms de estrella, huella y corazón"
            className="h-full w-full object-contain"
          />

          <button
            onClick={() => setPausado(!pausado)}
            aria-label={pausado ? "Reproducir" : "Pausar"}
            className="absolute bottom-0 left-0 flex h-16 w-16 items-center justify-center bg-[#2a1f1f] text-white transition hover:bg-black"
          >
            {pausado ? (
              <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
                <path d="M0 0l14 8-14 8z" />
              </svg>
            ) : (
              <span className="flex gap-1">
                <span className="h-5 w-px bg-white" />
                <span className="h-5 w-px bg-white" />
              </span>
            )}
          </button>
        </div>

        {/* Texto */}
        <div className="max-w-xl">
          <span className="inline-block bg-pink-100 px-1.5 py-1 text-sm text-[#2a1f1f]">
            ¡Ahora también con Pandora Minis!
          </span>

          <h2 className="mt-6 text-4xl font-medium uppercase leading-tight tracking-wide text-[#2a1f1f] lg:text-5xl">
            -20 % en 1 pulsera y tantos charms como quieras
          </h2>

          <p className="mt-6 leading-relaxed text-[#2a1f1f]">
            Celebra el inicio de una nueva temporada con un -20 % a partir de
            una pulsera y 2, 3, 4 o más charms. Además ahora puedes añadir
            Charms Mini ¡Atrévete a combinarlos!{" "}
            <a href="#" className="underline underline-offset-4 hover:no-underline">
              Consulta condiciones.
            </a>
          </p>

          <a
            href="#"
            className="mt-8 inline-block text-[#2a1f1f] underline underline-offset-4 hover:no-underline"
          >
            Comprar la promoción
          </a>
        </div>
      </div>
    </section>
  );
}
