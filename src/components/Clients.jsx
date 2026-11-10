import { ICONOS_CLIENTES } from "../data/clientes";

export default function Clients() {
  const base = Array(4).fill(ICONOS_CLIENTES).flat();

  return (
    <section id="empresas" className="py-12 bg-[#111111] border-y border-[#1f1f1f] overflow-hidden">
      <div className="text-center mb-6">
        <span className="font-['Inter'] text-xs tracking-[0.16em] uppercase text-[#4a4a4a]">
          MARCAS Y CLIENTES
        </span>
      </div>
      <div className="marquee-wrapper marquee-mask w-full overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16">
          {base.map((icono, i) => (
            <span
              key={`${icono}-${i}`}
              className="material-symbols-outlined text-[40px] text-[#4a4a4a] hover:text-[#d48c1a] transition-colors duration-300 shrink-0 cursor-pointer"
            >
              {icono}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}