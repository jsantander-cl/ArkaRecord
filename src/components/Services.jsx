import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICIOS_DETALLADOS, SERVICIOS_RESUMEN } from "../data/servicios";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Selecciona todos los elementos marcados para animar
      const items = gsap.utils.toArray(".gsap-reveal");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%", // Dispara cuando el elemento entra en la zona inferior de la pantalla
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      {/* Sección 1: Servicios Detallados */}
      <section className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
        <div className="gsap-reveal text-center mb-16">
          <span className="font-body text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            Servicios
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white">
            Estudio de Grabación y Producción Audiovisual
          </h2>
          <div className="w-12 h-px bg-secondary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICIOS_DETALLADOS.map((servicio) => (
            <div key={servicio.title} className="gsap-reveal grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
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
          ))}
        </div>
      </section>

      {/* Sección 2: Resumen de Servicios */}
      <section id="servicios" className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto">
        <div className="gsap-reveal text-center mb-16">
          <span className="font-body text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            Nuestra Experiencia
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white">Servicios Audiovisuales</h2>
          <div className="w-12 h-px bg-secondary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICIOS_RESUMEN.map((servicio) => (
            <div
              key={servicio.title}
              className="gsap-reveal border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-white/30 hover:-translate-y-2 group h-full"
            >
              <div className="w-16 h-16 rounded-full border border-secondary flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
                <span className="material-symbols-outlined text-[32px]">{servicio.icon}</span>
              </div>
              <h3 className="font-display text-xl text-white mb-4">{servicio.title}</h3>
              <p className="font-body text-on-surface-variant text-sm">{servicio.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}