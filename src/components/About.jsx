import { motion } from "framer-motion";
import { EMPRESA } from "../data/empresa";

export default function About() {
  return (
    <section id="conocenos" className="bg-[#111111] py-24 border-y border-[#1f1f1f]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-['Bebas_Neue'] text-sm tracking-[0.1em] text-[#d48c1a] mb-2 block">
            CONÓCENOS
          </span>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl md:text-5xl text-[#f5f5f5] mb-6">
            Trayectoria y Pasión por la Excelencia
          </h2>
          <blockquote className="font-['Space_Grotesk'] font-light italic text-xl md:text-2xl text-[#f5f5f5] leading-relaxed border-l-4 border-[#d48c1a] pl-6 mb-8">
            "Cada proyecto tiene una meta única: dejar una marca memorable en quien lo contemple."
          </blockquote>
          <div className="inline-block bg-[#d48c1a] text-[#0a0a0a] font-['Inter'] font-semibold text-xs tracking-wider px-3 py-1 rounded-sm mb-4 uppercase">
            MARCOS GAVINO — FUNDADOR & DIRECTOR
          </div>
          <p className="font-['Inter'] text-sm md:text-base text-[#8c8c8c] leading-relaxed mb-6">
            Somos un equipo apasionado por la narrativa visual y la excelencia técnica. En Arka Record transformamos ideas en experiencias cinematográficas memorables, combinando tecnología audiovisual avanzada con visión artística.
          </p>
        </motion.div>

        {/* Right Column: Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square max-h-[500px] overflow-hidden rounded-md border border-[#222]"
        >
          <img
            src="/img/marco.jpg"
            alt="Marcos Gavino en consola de producción"
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}