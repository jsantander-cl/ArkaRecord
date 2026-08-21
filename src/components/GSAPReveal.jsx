import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registramos el plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function GSAPReveal({ children, delay = 0, y = 50 }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: y,
        opacity: 0,
        duration: 1.2,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Inicia la animación cuando la parte superior del elemento llega al 85% de la pantalla
          toggleActions: "play none none reverse", // Se reproduce al bajar y se revierte suavemente si subes
        },
      });
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}