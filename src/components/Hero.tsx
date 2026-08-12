import { ArrowDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import profileImage from "../assets/images/id.png";

import profile from "../data/profile";
import statistics from "../data/statistics";

import Button from "./ui/Button";
import social from "../data/social";
import SocialIcon from "./ui/SocialIcon";

/* =========================================================
   CV CANVA
========================================================= */

const resumeUrl =
  "https://canva.link/vkfiwl41d9odhym";

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        bg-white
        dark:bg-zinc-950
        text-zinc-900
        dark:text-white
        pt-24
        pb-16
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Grande lumière verte */}

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.18, 0.38, 0.18],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-0
            left-0
            w-[500px]
            h-[500px]
            rounded-full
            bg-emerald-500
            blur-[160px]
          "
        />

        {/* Grande lumière bleue */}

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-500
            blur-[160px]
          "
        />

        {/* Lumière centrale */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[700px]
            rounded-full
            bg-cyan-500
            blur-[220px]
          "
        />

      </div>


      {/* =====================================================
          CONTENU PRINCIPAL
      ====================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-16
          items-center
          w-full
        "
      >

        {/* =================================================
            PARTIE TEXTE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          {/* Disponibilité */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              mb-6
              rounded-full
              bg-emerald-100
              dark:bg-emerald-900/30
              text-emerald-600
              dark:text-emerald-400
              text-sm
              font-medium
            "
          >

            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                w-2
                h-2
                rounded-full
                bg-emerald-500
                shadow-lg
                shadow-emerald-500
              "
            />

            Disponible pour une alternance / CDI

          </motion.div>


          {/* =================================================
              NOM
          ================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              xl:text-8xl
              font-black
              leading-none
              tracking-tight
            "
          >

            {profile.firstName}

            <span
              className="
                bg-gradient-to-r
                from-emerald-400
                via-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              {profile.lastName}
            </span>

          </motion.h1>


          {/* =================================================
              TITRE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="
              mt-8
              inline-flex
              items-center
              rounded-full
              border
              border-zinc-300
              dark:border-zinc-700
              px-6
              py-3
              bg-white/70
              dark:bg-zinc-900/60
              backdrop-blur
            "
          >

            <span className="font-semibold">
              {profile.title}
            </span>

          </motion.div>


          {/* =================================================
              SUBTITLE
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              mt-8
              max-w-2xl
              leading-8
              text-lg
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {profile.subtitle}
          </motion.p>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.7,
            }}
            className="
              mt-6
              max-w-2xl
              leading-8
              text-lg
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {profile.description}
          </motion.p>


          {/* =================================================
              BOUTONS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >

            {/* Projets */}

            <Button
              href="#projects"
              primary
            >
              Découvrir mes projets
            </Button>


            {/* CV CANVA */}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-zinc-300
                dark:border-zinc-700
                bg-white
                dark:bg-zinc-900
                px-6
                py-3
                font-medium
                text-zinc-800
                dark:text-white
                hover:border-emerald-400
                hover:text-emerald-500
                dark:hover:text-emerald-400
                transition-all
                duration-300
                hover:scale-105
                shadow-lg
                hover:shadow-emerald-500/20
              "
            >
              <ExternalLink size={18} />

              Voir mon CV
            </a>

          </motion.div>


          {/* =================================================
              STATISTIQUES
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              mt-10
              flex
              flex-wrap
              gap-8
            "
          >

            {statistics.map((stat) => (
              <div key={stat.label}>

                <div
                  className="
                    text-2xl
                    font-bold
                    text-emerald-500
                  "
                >
                  {stat.value}
                </div>

                <p
                  className="
                    text-zinc-600
                    dark:text-zinc-400
                    text-sm
                  "
                >
                  {stat.label}
                </p>

              </div>
            ))}

          </motion.div>


          {/* =================================================
              RESEAUX SOCIAUX
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            className="
              mt-8
              flex
              gap-4
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
                  scale: 1.08,
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
                  border-zinc-300
                  dark:border-zinc-800
                  flex
                  items-center
                  justify-center
                  text-zinc-700
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

          </motion.div>

        </motion.div>


        {/* =================================================
            PHOTO + FEU VERT / BLEU
        ================================================== */}

        <div
          className="
            relative
            flex
            items-center
            justify-center
            min-h-[600px]
          "
        >

          {/* =================================================
              HALO PRINCIPAL
          ================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[480px]
              h-[480px]
              rounded-full
              bg-gradient-to-r
              from-emerald-400
              via-cyan-400
              to-blue-500
              blur-[85px]
            "
          />


          {/* =================================================
              FEU VERT
          ================================================== */}

          <motion.div
            animate={{
              scale: [
                1,
                1.18,
                0.95,
                1.12,
                1,
              ],
              rotate: [
                0,
                4,
                -4,
                3,
                0,
              ],
              opacity: [
                0.65,
                1,
                0.75,
                1,
                0.65,
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[410px]
              h-[410px]
              rounded-[45%]
              bg-emerald-500
              blur-[65px]
              opacity-70
            "
          />


          {/* =================================================
              FEU BLEU
          ================================================== */}

          <motion.div
            animate={{
              scale: [
                1,
                0.9,
                1.18,
                0.95,
                1,
              ],
              rotate: [
                0,
                -5,
                4,
                -3,
                0,
              ],
              opacity: [
                0.55,
                0.85,
                0.65,
                0.9,
                0.55,
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[360px]
              h-[360px]
              rounded-[40%]
              bg-blue-500
              blur-[55px]
              opacity-70
            "
          />


          {/* =================================================
              FLAMME CYAN CENTRALE
          ================================================== */}

          <motion.div
            animate={{
              scaleY: [
                1,
                1.15,
                0.9,
                1.2,
                1,
              ],
              scaleX: [
                1,
                0.92,
                1.08,
                0.95,
                1,
              ],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[330px]
              h-[330px]
              rounded-[45%]
              bg-cyan-400/50
              blur-[45px]
            "
          />


          {/* =================================================
              ANNEAU VERT / BLEU
          ================================================== */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[460px]
              h-[460px]
              rounded-full
              border-2
              border-emerald-400/60
              border-t-emerald-300
              border-r-cyan-400
              shadow-[0_0_35px_rgba(16,185,129,0.8)]
            "
          />


          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[400px]
              h-[400px]
              rounded-full
              border-2
              border-blue-500/50
              border-b-blue-400
              border-l-emerald-400
              shadow-[0_0_30px_rgba(59,130,246,0.8)]
            "
          />


          {/* =================================================
              PARTICULES
          ================================================== */}

          {[...Array(18)].map((_, index) => (
            <motion.span
              key={index}
              animate={{
                y: [
                  0,
                  -50 - index * 3,
                  0,
                ],
                x: [
                  0,
                  index % 2 === 0
                    ? 25
                    : -25,
                  0,
                ],
                opacity: [
                  0,
                  1,
                  0,
                ],
                scale: [
                  0.3,
                  1,
                  0.2,
                ],
              }}
              transition={{
                duration:
                  1.8 +
                  index * 0.15,
                repeat: Infinity,
                delay:
                  index * 0.18,
                ease: "easeOut",
              }}
              className="
                absolute
                z-10
                w-2
                h-2
                rounded-full
                bg-emerald-300
                shadow-[0_0_12px_rgba(52,211,153,1)]
              "
              style={{
                left: `${20 + (index * 7) % 60}%`,
                top: `${25 + (index * 11) % 50}%`,
              }}
            />
          ))}


          {/* =================================================
              PHOTO
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
              },
              scale: {
                duration: 0.8,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              relative
              z-20
            "
          >

            {/* Cadre lumineux */}

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(16,185,129,0.5)",
                  "0 0 50px rgba(34,211,238,0.8)",
                  "0 0 25px rgba(59,130,246,0.6)",
                  "0 0 50px rgba(16,185,129,0.8)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                w-72
                h-72
                sm:w-80
                sm:h-80
                lg:w-96
                lg:h-96
                rounded-full
                p-2
                bg-gradient-to-br
                from-emerald-400
                via-cyan-400
                to-blue-500
              "
            >

              {/* Photo sombre */}

              <div
                className="
                  w-full
                  h-full
                  rounded-full
                  overflow-hidden
                  bg-zinc-950
                  border-4
                  border-zinc-950
                  relative
                "
              >

                {/* Overlay sombre */}

                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    bg-black/35
                    pointer-events-none
                  "
                />

                <img
                  src={profileImage}
                  alt={`${profile.firstName} ${profile.lastName}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    brightness-[0.65]
                    contrast-[1.15]
                    saturate-[0.85]
                  "
                />

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          w-12
          h-12
          rounded-full
          border
          border-zinc-300
          dark:border-zinc-700
          flex
          items-center
          justify-center
          text-zinc-500
          dark:text-zinc-400
          hover:text-emerald-500
          hover:border-emerald-500
          transition
        "
      >

        <ArrowDown size={20} />

      </motion.a>

    </section>
  );
}

