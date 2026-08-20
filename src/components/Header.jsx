import { useState } from "react";
import { NAV_LINKS } from "../data/navegacion";
import { EMPRESA } from "../data/empresa";
import useActiveSection from "../hooks/useActiveSection";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Garantizamos extraer solo los IDs como un arreglo simple
  const sectionIds = Array.isArray(NAV_LINKS) ? NAV_LINKS.map((link) => link.id) : [];
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-5 md:px-20 py-4 w-full max-w-[1440px] mx-auto">
          <button onClick={() => scrollToSection("inicio")} className="flex items-center gap-4 group">
            <img
              alt={`Logo ${EMPRESA.nombre}`}
              className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              src={EMPRESA.logo}
            />
            <span className="font-display text-xl text-on-surface uppercase tracking-[0.2em] hidden sm:block">
              {EMPRESA.nombre}
            </span>
          </button>

          <nav className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`font-body text-sm uppercase tracking-wider pb-1 border-b-2 transition-all duration-300 ${
                  activeSection === id
                    ? "text-secondary border-secondary font-bold"
                    : "text-on-surface-variant border-transparent hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-primary hover:text-secondary transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-[32px]">menu</span>
          </button>
        </div>
      </header>

      {/* Menú Mobile */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-surface-container-lowest border-l border-outline-variant/20 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-2 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/5">
          <span className="font-display text-xl text-secondary">{EMPRESA.nombre}</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
            <span className="material-symbols-outlined text-[28px] text-on-surface-variant">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4 px-2">
          {NAV_LINKS.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-4 rounded-lg p-3 font-body text-left transition-colors ${
                activeSection === id
                  ? "bg-primary-container text-on-primary-container font-semibold"
                  : "text-on-surface-variant hover:bg-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}