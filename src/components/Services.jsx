import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Video, Camera, Volume2, Code, Clapperboard, Megaphone, Headphones, Calendar } from "lucide-react";
import { SERVICIOS_DETALLADOS, SERVICIOS_RESUMEN } from "../data/servicios";

const ICON_MAP = {
  mic_external_on: Mic,
  movie_filter: Video,
  photo_camera: Camera,
  volume_up: Volume2,
  code: Code,
  videocam: Clapperboard,
  campaign: Megaphone,
  headphones: Headphones,
  event: Calendar,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="servicios" className="py-28 px-5 md:px-20 max-w-[1440px] mx-auto">
      {/* Encabezado con Estilo Editorial */}
      <div className="text-center mb-16">
        <span className="font-sans text-[#e9c349] uppercase tracking-[0.3em] text-xs font-bold mb-3 block">
          Nuestra Experiencia
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide">
          Servicios Audiovisuales & Producción
        </h2>
        <div className="w-16 h-[2px] bg-red-600 mx-auto mt-6" />
      </div>

      {/* Tabs Interactivos animadas con Framer Motion */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {SERVICIOS_DETALLADOS.map((servicio, index) => {
          const Icon = ICON_MAP[servicio.icon] || Video;
          const isActive = activeTab === index;
          return (
            <button
              key={servicio.title}
              onClick={() => setActiveTab(index)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full border text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                isActive
                  ? "border-[#e9c349] text-white bg-[#e9c349]/10 shadow-[0_0_20px_rgba(233,195,73,0.2)]"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-[#e9c349]" : "text-white/60"}`} />
              {servicio.title}
            </button>
          );
        })}
      </div>

      {/* Contenido animado según la pestaña activa */}
      <div className="min-h-[220px] mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 opacity-5 text-white pointer-events-none">
              {(() => {
                const Icon = ICON_MAP[SERVICIOS_DETALLADOS[activeTab].icon] || Video;
                return <Icon className="w-64 h-64" />;
              })()}
            </div>
            <h3 className="font-serif text-2xl md:text-4xl text-[#e9c349] mb-4">
              {SERVICIOS_DETALLADOS[activeTab].title}
            </h3>
            <p className="font-sans text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
              {SERVICIOS_DETALLADOS[activeTab].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Grid Resumen con Efecto Magnético/Hover */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICIOS_RESUMEN.map((servicio, idx) => {
          const IconComponent = ICON_MAP[servicio.icon] || Clapperboard;
          return (
            <motion.div
              key={servicio.title}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 flex flex-col items-center text-center group rounded-xl hover:border-[#e9c349]/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full border border-[#e9c349] flex items-center justify-center mb-6 text-[#e9c349] group-hover:bg-[#e9c349] group-hover:text-black transition-all duration-300">
                <IconComponent className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl text-white mb-3">{servicio.title}</h4>
              <p className="font-sans text-white/60 text-sm leading-relaxed">{servicio.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}