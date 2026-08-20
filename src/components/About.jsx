import Reveal from "./Reveal";
import { EMPRESA } from "../data/empresa";

export default function About() {
  return (
    <section id="conocenos" className="py-24 px-5 md:px-20 max-w-[1440px] mx-auto bg-surface-dim">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="font-body text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">
            Conócenos
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-6">
            Estudio de Grabación y Producción Audiovisual
          </h2>
          <div className="w-12 h-px bg-secondary mb-8" />
          <p className="font-body text-lg text-on-surface-variant mb-8">
            Somos un equipo apasionado por la narrativa visual y la excelencia técnica. En Arka
            Record, transformamos ideas en experiencias cinematográficas memorables, utilizando
            tecnología de vanguardia y una visión artística única para cada proyecto.
          </p>
          <div className="grid grid-cols-1 gap-8">
            <div className="border-l-2 border-primary-container pl-6">
              <h4 className="font-display text-xl text-white mb-2">Nuestra Misión</h4>
              <p className="font-body text-on-surface-variant text-sm">
                Elevar el estándar de la producción audiovisual local, brindando a marcas y
                artistas herramientas visuales de nivel internacional que conecten profundamente
                con su audiencia.
              </p>
            </div>
            <div className="border-l-2 border-secondary pl-6">
              <h4 className="font-display text-xl text-white mb-2">Nuestra Visión</h4>
              <p className="font-body text-on-surface-variant text-sm">
                Consolidarnos como el estudio referente en innovación y calidad cinematográfica,
                siendo el aliado estratégico preferido para proyectos que buscan trascender lo
                convencional.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative aspect-square overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              style={{ backgroundImage: `url('${EMPRESA.imagenes.aboutFoto}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}