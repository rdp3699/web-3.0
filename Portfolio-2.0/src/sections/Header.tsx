'use client';
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let foundSection = "hero"; // Default to first section

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
          foundSection = section.id;
        }
      });
      
      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 z-50 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#hero"
          className={`nav-item ${activeSection === "hero" ? "bg-white text-gray-900" : ""}`}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900" : ""}`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900" : ""}`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${activeSection === "contact" ? "bg-white text-gray-900" : ""}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
