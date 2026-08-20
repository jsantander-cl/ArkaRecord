import { useState, useEffect } from "react";

export default function useActiveSection(sectionIds = []) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Aseguramos que sectionIds sea un arreglo válido y no esté vacío
    if (!Array.isArray(sectionIds) || sectionIds.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [JSON.stringify(sectionIds)]);

  return activeSection;
}