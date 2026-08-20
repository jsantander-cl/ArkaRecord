import Reveal from "./Reveal";
import { ICONOS_CLIENTES } from "../data/clientes";

export default function Clients() {
  return (
    <section id="empresas" className="py-16 border-y border-white/5 bg-surface-dim overflow-hidden">
      <Reveal className="max-w-[1440px] mx-auto px-5 md:px-20 text-center">
        <p className="font-body text-on-surface-variant uppercase tracking-[0.1em] text-xs mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {ICONOS_CLIENTES.map((icono) => (
            <span key={icono} className="material-symbols-outlined text-[48px] text-white">
              {icono}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}