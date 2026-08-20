import { EMPRESA } from "../data/empresa";

export default function Hero() {
  const scrollToContacto = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Agregada la clase motion-safe:animate-pulse junto con tu animacion kenburns */}
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate] motion-safe:animate-pulse"
          style={{ backgroundImage: `url('${EMPRESA.imagenes.heroFondo}')` }}
        />
      </div>

      <div className="relative z-20 text-center px-5 md:px-20 max-w-4xl">
        <h1
          className="font-display text-4xl md:text-[80px] md:leading-[90px] text-white mb-6 uppercase tracking-tight animate-[fadeSlideUp_1s_ease-out]"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
        >
          Capturamos la Esencia de tu Visión
        </h1>
        <p className="font-body text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto animate-[fadeSlideUp_1s_ease-out_0.2s_both]">
          Producción audiovisual de alto impacto para marcas y artistas. Elevamos tu narrativa
          visual con calidad cinematográfica.
        </p>
        <button
          onClick={scrollToContacto}
          className="bg-primary-container text-on-primary-container font-body font-bold px-8 py-4 uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_rgba(230,0,0,0.5)] hover:scale-[1.03] animate-[fadeSlideUp_1s_ease-out_0.4s_both]"
        >
          Empieza tu Proyecto
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <span className="material-symbols-outlined text-white/60 text-3xl">expand_more</span>
      </div>
    </section>
  );
}