import Reveal from "./Reveal";
import { SERVICIOS_DETALLADOS, SERVICIOS_RESUMEN } from "../data/servicios";

export default function Services() {
  return (
    <>
      <section className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16">
          <span className="font-body text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            Servicios
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white">
            Estudio de Grabación y Producción Audiovisual
          </h2>
          <div className="w-12 h-px bg-secondary mx-auto mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 gap-12">
          {SERVICIOS_DETALLADOS.map((servicio, i) => (
            <Reveal key={servicio.title} delay={i * 100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-secondary text-[32px]">
                      {servicio.icon}
                    </span>
                    <h3 className="font-display text-white text-2xl">{servicio.title}</h3>
                  </div>
                  <div className="h-px w-full bg-white/10" />
                </div>
                <div className="md:col-span-2">
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    {servicio.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="servicios" className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
        <Reveal className="text-center mb-16">
          <span className="font-body text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            Nuestra Experiencia
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white">Servicios Audiovisuales</h2>
          <div className="w-12 h-px bg-secondary mx-auto mt-6" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICIOS_RESUMEN.map((servicio, i) => (
            <Reveal key={servicio.title} delay={i * 100}>
              <div className="border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-white/30 hover:-translate-y-2 group h-full">
                <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
                  <span className="material-symbols-outlined text-[32px]">{servicio.icon}</span>
                </div>
                <h3 className="font-display text-xl text-white mb-4">{servicio.title}</h3>
                <p className="font-body text-on-surface-variant text-sm">{servicio.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}