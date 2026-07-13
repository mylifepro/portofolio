import { Code2, Database, Server, Brain } from "lucide-react";
import { motion } from "framer-motion";


const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Création d'interfaces modernes avec React, Next.js et Tailwind CSS.",
  },

  {
    icon: Server,
    title: "Backend",
    description:
      "Développement d'API robustes avec NestJS et architectures microservices.",
  },

  {
    icon: Database,
    title: "Database",
    description:
      "Gestion des données avec PostgreSQL et conception de modèles efficaces.",
  },

  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description:
      "Intérêt pour l'automatisation et l'intégration de solutions IA.",
  },
];


export default function About() {

  return (

    <section
      id="about"
      className="
      min-h-screen
      bg-zinc-900
      text-white
      flex
      items-center
      "
    >

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        w-full
      ">


        {/* Title */}

        <motion.div
          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8
          }}

          viewport={{
            once:true
          }}

          className="text-center mb-16"
        >

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            À propos de 
            <span className="text-emerald-400">
              {" "}moi
            </span>
          </h2>


          <p className="
            mt-4
            text-zinc-400
            max-w-2xl
            mx-auto
          ">
            Découvrez mon parcours et mes domaines
            d'expertise.
          </p>


        </motion.div>



        <div className="
          grid
          md:grid-cols-2
          gap-12
          items-center
        ">


          {/* Description */}

          <motion.div

            initial={{
              opacity:0,
              x:-50
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:0.8
            }}

            viewport={{
              once:true
            }}

          >

            <h3 className="
              text-3xl
              font-semibold
              mb-6
            ">
              Développeur Full Stack
            </h3>


            <p className="
              text-zinc-400
              leading-relaxed
              text-lg
            ">

              Je suis passionné par la création
              d'applications web modernes et évolutives.

              Mon objectif est de construire des solutions
              performantes avec une architecture propre,
              une bonne expérience utilisateur et des
              technologies modernes.

            </p>


          </motion.div>




          {/* Cards */}

          <div className="
            grid
            sm:grid-cols-2
            gap-6
          ">


            {skills.map((item,index)=>{

              const Icon=item.icon;


              return (

                <motion.div

                  key={item.title}

                  initial={{
                    opacity:0,
                    y:40
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    delay:index*0.1
                  }}

                  viewport={{
                    once:true
                  }}

                  className="
                    bg-zinc-950
                    border
                    border-zinc-800
                    rounded-2xl
                    p-6
                    hover:border-emerald-400
                    transition
                  "

                >

                  <Icon
                    size={35}
                    className="text-emerald-400 mb-4"
                  />


                  <h4 className="
                    text-xl
                    font-semibold
                    mb-2
                  ">
                    {item.title}
                  </h4>


                  <p className="
                    text-zinc-400
                    text-sm
                  ">
                    {item.description}
                  </p>


                </motion.div>

              )

            })}


          </div>



        </div>


      </div>


    </section>

  );
}