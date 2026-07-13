import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-lg shadow-lg border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-emerald-400 tracking-wide"
        >
          Dax<span className="text-white">.</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-300 hover:text-emerald-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-full transition-all"
          >
            <Download size={18} />
            CV
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-zinc-900 border-t border-zinc-800 px-6 py-6 flex flex-col gap-5">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-zinc-300 hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            className="bg-emerald-500 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-emerald-600"
          >
            <Download size={18} />
            Télécharger CV
          </a>

        </div>
      </div>
    </header>
  );
}