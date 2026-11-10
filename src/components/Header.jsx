import { useState } from "react";
import { NAV_LINKS } from "../data/navegacion";
import { EMPRESA } from "../data/empresa";
import useActiveSection from "../hooks/useActiveSection";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = Array.isArray(NAV_LINKS) ? NAV_LINKS.map((link) => link.id) : [];
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f] h-[64px] flex items-center">
        <div className="flex justify-between items-center px-6 md:px-12 w-full max-w-[1440px] mx-auto">
          {/* Brand */}
          <button onClick={() => scrollToSection("inicio")} className="flex items-center gap-3 group">
            <img alt={EMPRESA.nombre} className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity" src={EMPRESA.logo} />
            <span className="font-['Space_Grotesk'] font-bold text-lg text-[#f5f5f5] tracking-tight">
              {EMPRESA.nombre}
            </span>
            <span className="hidden lg:inline-block h-4 w-px bg-[#333]" />
            <span className="hidden lg:inline-block font-['Inter'] text-xs text-[#6a6a6a]">
              Productora Audiovisual & Estudio
            </span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`font-['Inter'] text-sm transition-colors ${
                  activeSection === id ? "text-[#d48c1a] font-semibold" : "text-[#c0c0c0] hover:text-[#f5f5f5]"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-[#d48c1a] hover:bg-[#b57512] text-[#0a0a0a] font-['Inter'] font-medium text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors"
            >
              Contactar
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            className="md:hidden text-[#f5f5f5] hover:text-[#d48c1a] transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-[#0a0a0a] border-l border-[#1f1f1f] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center pb-6 border-b border-[#1f1f1f]">
          <span className="font-['Space_Grotesk'] font-bold text-xl text-[#d48c1a]">{EMPRESA.nombre}</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">
            <span className="material-symbols-outlined text-[28px] text-[#8c8c8c]">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          {NAV_LINKS.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-4 p-3 rounded-md font-['Inter'] text-left transition-colors ${
                activeSection === id ? "bg-[#1f1f1f] text-[#d48c1a] font-semibold" : "text-[#c0c0c0] hover:bg-[#111]"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{icon}</span>
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contacto")}
            className="mt-4 w-full bg-[#d48c1a] text-[#0a0a0a] font-['Inter'] font-semibold py-3 rounded-md text-center"
          >
            Contactar
          </button>
        </div>
      </div>
      {menuOpen && <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMenuOpen(false)} />}
    </>
  );
}