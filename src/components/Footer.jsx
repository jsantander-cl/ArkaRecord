import { EMPRESA } from "../data/empresa";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "./SocialIcons.jsx";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Banner CTA estilo Signal (Imagen 2) */}
      <section className="bg-[#d48c1a] py-20 px-6 md:px-12 text-center text-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          {/* Headline principal en Space Grotesk 700 */}
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none mb-4">
            ¿LISTO PARA DAR VIDA A TU PROYECTO?
          </h2>

          {/* Subtítulo en Space Grotesk 300 */}
          <p className="font-['Space_Grotesk'] font-light text-base md:text-lg opacity-80 max-w-xl mx-auto mb-3">
            Escríbenos directamente a nuestro WhatsApp o correo para recibir asesoría personalizada sobre tu producción.
          </p>

          <p className="font-['Inter'] text-xs uppercase tracking-wider opacity-60 mb-8">
            Respuesta inmediata · Asesoría profesional
          </p>

          {/* Formulario / CTA estilo Newsletter Signal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={EMPRESA.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#0a0a0a] hover:bg-[#1f1f1f] text-[#f5f5f5] font-['Inter'] font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors text-center whitespace-nowrap shadow-lg"
            >
              Contactar por WhatsApp
            </a>
          </div>

          <p className="font-['Inter'] text-xs opacity-60 mt-4">
            Sin compromiso. Presupuestos a medida para marcas y artistas.
          </p>
        </div>
      </section>

      {/* Footer inferior */}
      <div className="border-t border-[#1f1f1f] py-16 px-6 md:px-16 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <span className="font-['Space_Grotesk'] font-bold text-lg text-[#d48c1a] tracking-tight uppercase block mb-2">
            {EMPRESA.nombre}
          </span>
          <p className="font-['Inter'] text-xs text-[#6a6a6a] max-w-xs leading-relaxed">
            Producción audiovisual de alto impacto y estudio de grabación profesional.
          </p>
        </div>

        {/* Contacto Directo */}
        <div>
          <h4 className="font-['Space_Grotesk'] font-bold text-sm text-[#f5f5f5] uppercase tracking-wider mb-4">
            Contacto Directo
          </h4>
          <div className="flex flex-col gap-2 font-['Inter'] text-sm">
            <a href={`mailto:${EMPRESA.email}`} className="text-[#8c8c8c] hover:text-[#d48c1a] transition-colors">
              {EMPRESA.email}
            </a>
            <a href={`tel:${EMPRESA.telefono.replace(/[^+\d]/g, "")}`} className="text-[#8c8c8c] hover:text-[#d48c1a] transition-colors">
              {EMPRESA.telefono}
            </a>
          </div>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="font-['Space_Grotesk'] font-bold text-sm text-[#f5f5f5] uppercase tracking-wider mb-4">
            Redes Sociales
          </h4>
          <div className="flex gap-4">
            <a href={EMPRESA.redes.facebook} target="_blank" rel="noreferrer" className="text-[#8c8c8c] hover:text-[#d48c1a] transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href={EMPRESA.redes.instagram} target="_blank" rel="noreferrer" className="text-[#8c8c8c] hover:text-[#d48c1a] transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href={EMPRESA.redes.youtube} target="_blank" rel="noreferrer" className="text-[#8c8c8c] hover:text-[#d48c1a] transition-colors">
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1f1f1f] py-6 text-center font-['Inter'] text-xs text-[#4a4a4a]">
        © {new Date().getFullYear()} {EMPRESA.nombre}. Todos los derechos reservados.
      </div>
    </footer>
  );
}