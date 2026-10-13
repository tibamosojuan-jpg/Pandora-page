import { useState } from "react";

const imagenModelo = "/img/modelo.png";

const categorias = [
  { nombre: "Charms", imagen: "/img/charms.png" },
  { nombre: "Pulseras", imagen: "/img/pulseras.png" },
  { nombre: "Anillos", imagen: "/img/anillos.png" },
  { nombre: "Pendientes", imagen: "/img/pendientes.png" },
  { nombre: "Collares", imagen: "/img/collares.png" },
];

export default function MenuCategorias() {
  const [activa, setActiva] = useState(0);
  const actual = categorias[activa];

  return (
    <section className="px-6 py-12 lg:px-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr_1fr] lg:gap-3">
        {/* Menú */}
        <div>
          <p className="text-sm text-[#2a1f1f]">Consigue 10% al unirte a My Pandora</p>

          <ul className="mt-6 space-y-4">
            {categorias.map((cat, i) => (
              <li key={cat.nombre}>
                <a
                  href="#"
                  onMouseEnter={() => setActiva(i)}
                  onFocus={() => setActiva(i)}
                  className={`text-2xl text-[#2a1f1f] underline-offset-4 ${activa === i ? "underline" : "hover:underline"
                    }`}
                >
                  {cat.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={imagenModelo}
            alt="Modelo usando joyas Pandora"
            className="h-full w-full object-cover"
          />

        </div>

        {}
        <div className="hidden lg:block">
          <img
            key={actual.imagen}
            src={actual.imagen}
            alt={`Detalle de ${actual.nombre.toLowerCase()}`}
            className="aspect-[3/4] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
