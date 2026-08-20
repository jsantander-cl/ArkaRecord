import Reveal from "./Reveal";
import { TRABAJOS } from "../data/trabajos";

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-surface-container-low">
      <Reveal className="px-5 md:px-20 max-w-[1440px] mx-auto mb-12 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-white">Trabajos Recientes</h2>
        <div className="w-12 h-px bg-secondary mx-auto mt-6" />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 px-1 md:px-20 max-w-[1440px] mx-auto">
        {TRABAJOS.map((trabajo, i) => (
          <Reveal key={trabajo.titulo} delay={i * 100} className={trabajo.span}>
            <div className={`relative group overflow-hidden ${trabajo.aspecto}`}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${trabajo.imagen}')` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h4 className="font-display text-white text-xl">{trabajo.titulo}</h4>
                  <span className="font-body text-secondary uppercase text-xs tracking-[0.15em]">
                    {trabajo.categoria}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}