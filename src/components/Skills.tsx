import {
  Code2,
  Server,
  Database,
  Cloud,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";


const skills = [
  {
    category: "Frontend",
    icon: Code2,
    technologies: [
      {
        name: "React.js",
        level: 90,
      },
      {
        name: "Next.js",
        level: 85,
      },
      {
        name: "Tailwind CSS",
        level: 85,
      },
      {
        name: "TypeScript",
        level: 80,
      },
    ],
  },


  {
    category: "Backend",
    icon: Server,
    technologies: [
      {
        name: "NestJS",
        level: 85,
      },
      {
        name: "Node.js",
        level: 80,
      },
      {
        name: "API REST",
        level: 90,
      },
    ],
  },


  {
    category: "Database",
    icon: Database,
    technologies: [
      {
        name: "PostgreSQL",
        level: 85,
      },
      {
        name: "SQL",
        level: 85,
      },
    ],
  },


  {
    category: "DevOps & IA",
    icon: Cloud,
    technologies: [
      {
        name: "Docker",
        level: 75,
      },
      {
        name: "Microservices",
        level: 80,
      },
      {
        name: "Intelligence Artificielle",
        level: 70,
      },
    ],
  },
];



export default function Skills() {

  return (

    <section
      id="skills"
      className="
        min-h-screen
        bg-zinc-950
        text-white
        py-20
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >


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

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >

            Mes 
            <span className="text-emerald-400">
              {" "}compétences
            </span>

          </h2>


          <p
            className="
              mt-4
              text-zinc-400
              max-w-2xl
              mx-auto
            "
          >

            Les technologies que j'utilise pour
            construire des applications modernes.

          </p>


        </motion.div>




        {/* Skills Cards */}


        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >


          {
            skills.map((skill,index)=>{

              const Icon = skill.icon;


              return (

                <motion.div

                  key={skill.category}

                  initial={{
                    opacity:0,
                    y:50
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  transition={{
                    delay:index*0.15
                  }}

                  viewport={{
                    once:true
                  }}


                  className="
                    bg-zinc-900
                    border
                    border-zinc-800
                    rounded-2xl
                    p-8
                    hover:border-emerald-400
                    transition
                  "

                >


                  {/* Category */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      mb-6
                    "
                  >

                    <Icon
                      size={32}
                      className="
                        text-emerald-400
                      "
                    />


                    <h3
                      className="
                        text-2xl
                        font-semibold
                      "
                    >
                      {skill.category}
                    </h3>


                  </div>




                  {/* Progress bars */}

                  <div
                    className="
                      space-y-5
                    "
                  >

                  {
                    skill.technologies.map((tech)=>(


                      <div
                        key={tech.name}
                      >

                        <div
                          className="
                            flex
                            justify-between
                            mb-2
                          "
                        >

                          <span>
                            {tech.name}
                          </span>


                          <span
                            className="
                              text-zinc-400
                              text-sm
                            "
                          >
                            {tech.level}%
                          </span>


                        </div>



                        <div
                          className="
                            h-2
                            bg-zinc-800
                            rounded-full
                            overflow-hidden
                          "
                        >

                          <motion.div

                            initial={{
                              width:0
                            }}

                            whileInView={{
                              width:`${tech.level}%`
                            }}

                            transition={{
                              duration:1,
                              ease:"easeOut"
                            }}

                            viewport={{
                              once:true
                            }}

                            className="
                              h-full
                              bg-emerald-400
                              rounded-full
                            "

                          />


                        </div>


                      </div>


                    ))
                  }

                  </div>


                </motion.div>

              );

            })
          }


        </div>


      </div>


    </section>

  );

}