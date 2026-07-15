import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import resumefile from "../assets/file/Rochel.pdf";
import navigation from "../data/navigation";
import ThemeToggle from "./ui/ThemeToggle";



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
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg shadow-lg border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-emerald-400 tracking-wide"
        >
          Rochel<span className="text-zinc-900 dark:text-white">.</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <ThemeToggle />
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className=" text-zinc-700 dark:text-zinc-300 hover:text-emerald-400 transition-colors duration-300 "
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumefile}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-full transition-all shadow-lg shadow-emerald-500/30"
          >
            <Download size={18} />
            CV
          </a>
        </nav>

        {/* Mobile button */}
       <div className="flex items-center gap-4">

<ThemeToggle />


<button
className="
md:hidden
text-zinc-900
dark:text-white
"
onClick={() => setIsOpen(!isOpen)}
>

{
isOpen
?
<X size={28}/>
:
<Menu size={28}/>
}

</button>

</div>
      </div>

      {/* Respo */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-6 py-6 flex flex-col gap-5 ">

          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumefile}
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