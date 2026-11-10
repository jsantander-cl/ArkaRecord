import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TRABAJOS } from "../data/trabajos";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const panelsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const { isDesktop, reduceMotion } = conditions;
          if (!isDesktop || reduceMotion) return;

          const track = trackRef.current;
          const panels = panelsRef.current;

          const getTotalScroll = () => track.scrollWidth - window.innerWidth;

          const scrollTween = gsap.to(track, {
            x: () => -getTotalScroll(),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${getTotalScroll()}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          panels.forEach((panel) => {
            if (!panel) return;
            const img = panel.querySelector(".gallery-img");
            const caption = panel.querySelector(".gallery-caption");

            gsap.fromTo(
              img,
              { scale: 1.3 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: scrollTween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              }
            );

            gsap.fromTo(
              caption,
              { autoAlpha: 0, y: 40 },
              {
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: scrollTween,
                  start: "left 70%",
                  end: "center center",
                  scrub: true,
                },
              }
            );
          });

          return () => scrollTween.scrollTrigger?.kill();
        }
      );

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative bg-surface-container-low md:h-screen md:overflow-hidden"
    >
      <div className="px-5 md:px-20 max-w-[1440px] mx-auto pt-24 pb-12 text-center md:absolute md:top-12 md:left-0 md:right-0 md:z-20 md:pointer-events-none">
        <h2 className="font-display text-3xl md:text-5xl text-white">Trabajos Recientes</h2>
        <div className="w-12 h-px bg-secondary mx-auto mt-6" />
      </div>

      <div
        ref={trackRef}
        className="flex flex-col gap-1 md:flex-row md:gap-0 md:h-screen md:w-max"
      >
        {TRABAJOS.map((trabajo, i) => (
          <div
            key={trabajo.titulo}
            ref={(el) => (panelsRef.current[i] = el)}
            className="relative group overflow-hidden aspect-square md:aspect-auto md:h-screen md:w-screen shrink-0"
          >
            {/* Única modificación: inset-x-0 bottom-0 top-0 md:top-[64px] */}
            <div
              className="gallery-img absolute inset-x-0 bottom-0 top-0 md:top-[64px] bg-cover bg-center bg-no-repeat max-md:transition-transform max-md:duration-700 max-md:group-hover:scale-105"
              style={{ backgroundImage: `url('${trabajo.imagen}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40" />
            <div className="gallery-caption absolute inset-0 flex items-end p-6 md:p-16">
              <div>
                <span className="font-body text-secondary uppercase text-xs tracking-[0.15em] block mb-2">
                  {trabajo.categoria}
                </span>
                <h4 className="font-display text-white text-2xl md:text-6xl">{trabajo.titulo}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}