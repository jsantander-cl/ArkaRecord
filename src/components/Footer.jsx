import { EMPRESA } from "../data/empresa.js";
import { FacebookIcon, InstagramIcon, YouTubeIcon } from "./SocialIcons.jsx";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-surface-container-lowest border-t border-secondary/20 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20 py-12 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-display text-xl text-on-surface uppercase tracking-[0.2em]">
            {EMPRESA.nombre}
          </span>
          <p className="font-body text-on-surface-variant max-w-xs">
            Producción audiovisual de alto impacto. Capturando la esencia de tu visión con
            calidad cinematográfica.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display text-lg text-white">Contacto</h4>
          
          <a
            className="font-body text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href={`mailto:${EMPRESA.email}`}
          >
            {EMPRESA.email}
          </a>
          
          <a
            className="font-body text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href={`tel:${EMPRESA.telefono.replace(/[^+\d]/g, "")}`}
          >
            {EMPRESA.telefono}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-display text-lg text-white">Síguenos</h4>
          <div className="flex gap-4">
            
            <a
              href={EMPRESA.redes.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            
            <a
              href={EMPRESA.redes.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            
            <a
              href={EMPRESA.redes.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-on-surface-variant hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              aria-label="YouTube"
            >
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 px-5">
        <p className="font-body text-on-surface-variant/50 text-sm">
          © {new Date().getFullYear()} {EMPRESA.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}