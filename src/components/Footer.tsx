import { ArrowUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";

import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  
  SiPhp,
  SiLaravel,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  
  SiVite,
  SiFigma,
} from "react-icons/si";

import profile from "../data/profile";
import social from "../data/social";
import SocialIcon from "./ui/SocialIcon";


/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "#E0234E",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#370c5e",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646CFF",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
];


/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {

  const year = new Date().getFullYear();

  const links = [
    {
      name: "Accueil",
      href: "#home",
    },
    {
      name: "À propos",
      href: "#about",
    },
    {
      name: "Formation",
      href: "#education",
    },
    {
      name: "Compétences",
      href: "#skills",
    },
    {
      name: "Projets",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];


  return (

    <footer
      className="
        relative
        overflow-hidden
        bg-white
        dark:bg-zinc-950
        border-t
        border-zinc-200
        dark:border-zinc-800
        text-zinc-900
        dark:text-white
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >

        {/* Lumière verte */}

        <div
          className="
            absolute
            top-0
            left-1/4
            w-96
            h-96
            bg-emerald-500/5
            rounded-full
            blur-[120px]
          "
        />

        {/* Lumière bleue */}

        <div
          className="
            absolute
            bottom-0
            right-1/4
            w-96
            h-96
            bg-blue-500/5
            rounded-full
            blur-[120px]
          "
        />

      </div>


      {/* =====================================================
          CONTENU
      ====================================================== */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          py-16
        "
      >

        {/* =================================================
            COLONNES PRINCIPALES
        ================================================== */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-12
          "
        >

          {/* =================================================
              IDENTITE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            {/* Logo */}

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-emerald-500/20
                flex
                items-center
                justify-center
              "
            >

              <Code2
                size={24}
                className="text-emerald-400"
              />

            </div>


            {/* Nom */}

            <h3
              className="
                mt-5
                text-2xl
                font-black
              "
            >

              {profile.lastName}

              <span
                className="
                  text-emerald-400
                "
              >
                {" "}
                {profile.firstName}
              </span>

            </h3>


            {/* Description */}

            <p
              className="
                mt-6
                text-zinc-600
                dark:text-zinc-400
                leading-relaxed
              "
            >
              {profile.description}
            </p>

          </motion.div>


          {/* =================================================
              NAVIGATION
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >

            <h3
              className="
                text-xl
                font-bold
                mb-6
              "
            >
              Navigation
            </h3>


            <nav
              className="
                space-y-3
              "
            >

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="
                    block
                    text-zinc-600
                    dark:text-zinc-400
                    hover:text-emerald-400
                    transition
                    duration-300
                  "
                >
                  {link.name}
                </a>

              ))}

            </nav>

          </motion.div>


          {/* =================================================
              RESEAUX SOCIAUX
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >

            <h3
              className="
                text-xl
                font-bold
                mb-6
              "
            >
              Me suivre
            </h3>


            <p
              className="
                text-zinc-600
                dark:text-zinc-400
                mb-6
              "
            >
              Retrouvez-moi sur mes réseaux.
            </p>


            <div
              className="
                flex
                gap-4
                flex-wrap
              "
            >

              {social.map((item) => (

                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-zinc-100
                    dark:bg-zinc-900
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    flex
                    items-center
                    justify-center
                    text-zinc-600
                    dark:text-zinc-400
                    hover:text-emerald-400
                    hover:border-emerald-400
                    transition
                  "
                >

                  <SocialIcon
                    icon={item.icon}
                    size={22}
                  />

                </motion.a>

              ))}

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            TECHNOLOGIES 
        ====================================================== */}
        

        <div
          className="
            mt-16
            pt-10
            border-t
            border-zinc-200
            dark:border-zinc-800
          "
        >

          {/* Titre */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              mb-8
            "
          >

            <div
              className="
                h-px
                flex-1
                bg-zinc-200
                dark:bg-zinc-800
              "
            />

            <h3
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-zinc-500
                dark:text-zinc-400
                whitespace-nowrap
              "
            >
              Technologies & outils
            </h3>

            <div
              className="
                h-px
                flex-1
                bg-zinc-200
                dark:bg-zinc-800
              "
            />

          </div>


          {/* =================================================
              UNE SEULE LIGNE SUR DESKTOP
          ================================================== */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-5
              xl:gap-7
              flex-wrap
              xl:flex-nowrap
            "
          >

            {technologies.map((tech) => {

              const Icon = tech.icon;

              return (

                <div
                  key={tech.name}
                  title={tech.name}
                  className="
                    group
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-xl
                    bg-zinc-100
                    dark:bg-zinc-900
                    border
                    border-zinc-200
                    dark:border-zinc-800
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-400/50
                    hover:bg-zinc-200
                    dark:hover:bg-zinc-800
                    cursor-default
                  "
                >

                  <Icon
                    size={21}
                    color={tech.color}
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                </div>

              );

            })}

          </div>


          {/* Petit texte */}

          <p
            className="
              mt-6
              text-center
              text-xs
              text-zinc-500
              dark:text-zinc-500
            "
          >
            Technologies et outils utilisés pour concevoir mes projets
            web et logiciels.
          </p>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-12
            pt-8
            border-t
            border-zinc-200
            dark:border-zinc-800
            flex
            flex-col
            md:flex-row
            gap-6
            items-center
            justify-between
          "
        >

          {/* Copyright */}

          <p
            className="
              text-sm
              text-zinc-500
              text-center
            "
          >
            © {year} {profile.lastName} {profile.firstName}.
            Tous droits réservés.
          </p>


          {/* Retour en haut */}

          <motion.a
            href="#home"
            whileHover={{
              scale: 1.1,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Retour en haut"
            className="
              w-12
              h-12
              rounded-full
              bg-emerald-500
              flex
              items-center
              justify-center
              text-white
              shadow-lg
              shadow-emerald-500/30
              hover:bg-emerald-600
              hover:shadow-emerald-500/50
              transition
            "
          >

            <ArrowUp size={20} />

          </motion.a>

        </div>

      </div>

    </footer>
  );
}

