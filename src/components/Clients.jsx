import Reveal from "./Reveal";
import { ICONOS_CLIENTES } from "../data/clientes";

export default function Clients() {
  // Duplicamos el arreglo para lograr un loop continuo y sin cortes.
  const REPETICIONES = 6;
const base = Array(REPETICIONES).fill(ICONOS_CLIENTES).flat();
const items = [...base, ...base];

  return (
    <section id="empresas" className="py-16 border-y border-white/5 bg-surface-dim overflow-hidden">
      <Reveal className="max-w-[1440px] mx-auto px-5 md:px-20 text-center">
        <p className="font-body text-on-surface-variant uppercase tracking-[0.1em] text-xs mb-8">
          Empresas que confían en nosotros
        </p>

        <div className="marquee-wrapper marquee-mask w-full overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-20">
            {items.map((icono, i) => (
              <span
                key={`${icono}-${i}`}
                className="material-symbols-outlined text-[48px] text-white opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              >
                {icono}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}