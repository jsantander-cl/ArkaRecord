import { motion } from "framer-motion";
import AudioWaveform from "./AudioWaveform";

export default function Hero() {
  const scrollToContacto = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen w-full bg-[#0e0e0e] overflow-hidden flex items-center pt-[64px]">
      {/* Fondo con imagen del estudio */}
      <img
        src="/img/comercial.webp"
        alt="Estudio de Grabación Arka Record"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/85 to-transparent z-10" />

      {/* Contenido Hero */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-16 py-16 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-['Inter'] text-xs font-bold uppercase tracking-[0.2em] text-[#d48c1a] block mb-4"
          >
            PRODUCCIÓN AUDIOVISUAL & ESTUDIO DE GRABACIÓN
          </motion.span>

          {/* Título Principal (Img 1: Sans-Serif Bold en mayúsculas) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Space_Grotesk'] font-bold text-5xl sm:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight uppercase mb-6"
          >
            CAPTURAMOS LA ESENCIA DE TU VISIÓN.
          </motion.h1>

          {/* Espectro de Audio Animado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AudioWaveform />
          </motion.div>

          {/* Bajada textual */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="font-['Inter'] font-normal text-base md:text-lg text-[#a1a1a1] leading-relaxed max-w-2xl mt-4"
          >
            Producción audiovisual de alto impacto para marcas y artistas. Elevamos tu narrativa visual con calidad cinematográfica e ingeniería de sonido profesional.
          </motion.p>
        </div>
      </div>
    </section>
  );
}