import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import navigation from "../data/navigation";
import resumefile from "../assets/file/Rochel.pdf";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigation.map((item) =>
        item.href.replace("#", "")
      );

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 120;
        const bottom = top + element.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Fermer le menu mobile si la fenêtre devient desktop.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Empêcher le scroll de la page lorsque le menu mobile est ouvert.
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300

        ${
          isScrolled
            ? `
              bg-white/90
              dark:bg-zinc-950/90
              backdrop-blur-xl
              shadow-lg
              border-b
              border-zinc-200
              dark:border-zinc-800
            `
            : `
              bg-transparent
            `
        }
      `}
    >

      {/* =========================
          NAVBAR PRINCIPALE
      ========================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          h-20
          px-6
          flex
          items-center
          justify-between
        "
      >

        {/* =========================
            LOGO
        ========================== */}

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#home"
          onClick={closeMobileMenu}
          className="
            text-3xl
            font-black
            tracking-tight
          "
        >
          <span className="text-emerald-500">
            Rochel
          </span>

          <span className="text-zinc-900 dark:text-white">
            .
          </span>
        </motion.a>


        {/* =========================
            NAVIGATION DESKTOP
        ========================== */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-2
          "
        >
          {navigation.map((link) => {

            const active =
              activeSection ===
              link.href.replace("#", "");

            return (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative
                  px-4
                  py-2
                  rounded-full
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        text-emerald-500
                        bg-emerald-500/10
                      `
                      : `
                        text-zinc-700
                        dark:text-zinc-300
                        hover:text-emerald-500
                        hover:bg-zinc-100
                        dark:hover:bg-zinc-900
                      `
                  }
                `}
              >
                {link.name}
              </a>
            );
          })}
        </nav>


        {/* =========================
            PARTIE DROITE
        ========================== */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* Theme */}

          <ThemeToggle />


          {/* CV Desktop */}

          <a
            href={resumefile}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              lg:flex
              items-center
              gap-2
              px-5
              py-3
              rounded-full
              bg-emerald-500
              hover:bg-emerald-600
              text-white
              font-medium
              transition
              shadow-lg
              shadow-emerald-500/30
              hover:scale-105
            "
          >
            <Download size={18} />

            CV
          </a>


          {/* =========================
              BOUTON MENU MOBILE
          ========================== */}

          <button
            type="button"
            aria-label={
              isOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex
              lg:hidden
              items-center
              justify-center
              w-11
              h-11
              rounded-xl
              text-zinc-800
              dark:text-white
              bg-zinc-100
              dark:bg-zinc-900
              border
              border-zinc-200
              dark:border-zinc-800
              hover:text-emerald-500
              hover:border-emerald-400
              transition-all
            "
          >

            {isOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}

          </button>

        </div>

      </div>


      {/* =========================
          MENU MOBILE
      ========================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              lg:hidden
              absolute
              top-20
              left-0
              w-full
              bg-white
              dark:bg-zinc-950
              border-t
              border-zinc-200
              dark:border-zinc-800
              shadow-2xl
            "
          >

            <div
              className="
                max-w-7xl
                mx-auto
                px-6
                py-6
              "
            >

              {/* Navigation */}

              <nav
                className="
                  flex
                  flex-col
                  gap-2
                "
              >

                {navigation.map((link) => {

                  const active =
                    activeSection ===
                    link.href.replace("#", "");

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`
                        block
                        rounded-xl
                        px-4
                        py-3
                        font-medium
                        transition-all

                        ${
                          active
                            ? `
                              bg-emerald-500/10
                              text-emerald-500
                            `
                            : `
                              text-zinc-700
                              dark:text-zinc-300
                              hover:bg-zinc-100
                              dark:hover:bg-zinc-900
                              hover:text-emerald-500
                            `
                        }
                      `}
                    >
                      {link.name}
                    </a>
                  );
                })}

              </nav>


              {/* CV Mobile */}

              <a
                href={resumefile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-emerald-500
                  py-3
                  text-white
                  font-medium
                  hover:bg-emerald-600
                  transition
                  shadow-lg
                  shadow-emerald-500/20
                "
              >

                <Download size={18} />

                Télécharger le CV

              </a>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}

