import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Envuelve cualquier contenido y lo anima al entrar en pantalla.
 * delay: milisegundos de retraso (para animaciones escalonadas).
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}