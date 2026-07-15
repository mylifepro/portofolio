import { ExternalLink } from "lucide-react";
import { FaGithub} from "react-icons/fa";
import projects from "../data/projects";
import { motion } from "framer-motion";




export default function Projects(){


  return (

    <section
      id="projects"
      className="
        min-h-screen
        bg-zinc-900
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

          className="
            text-center
            mb-16
          "

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
              {" "}projets
            </span>

          </h2>


          <p
            className="
              mt-4
              text-zinc-400
            "
          >

            Découvrez quelques projets que j'ai réalisés.

          </p>


        </motion.div>




        {/* Projects cards */}


        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >


        {
          projects.map((project,index)=>(


            <motion.div

              key={project.title}


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
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                overflow-hidden
                group
                hover:border-emerald-400
                transition
              "

            >


              {/* Image */}

              <div
                className="
                  h-52
                  overflow-hidden
                "
              >

                <img

                  src={project.image}

                  alt={project.title}

                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                  "

                />


              </div>



              {/* Content */}

              <div
                className="
                  p-6
                "
              >


                <h3
                  className="
                    text-xl
                    font-bold
                    mb-3
                  "
                >
                  {project.title}
                </h3>



                <p
                  className="
                    text-zinc-400
                    text-sm
                    leading-relaxed
                  "
                >

                  {project.description}

                </p>




                {/* Technologies */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-5
                  "
                >

                {
                  project.technologies.map((tech)=>(

                    <span

                      key={tech}

                      className="
                        px-3
                        py-1
                        bg-zinc-800
                        rounded-full
                        text-xs
                        text-emerald-400
                      "

                    >

                      {tech}

                    </span>

                  ))
                }


                </div>




                {/* Links */}

                <div
                  className="
                    flex
                    gap-4
                    mt-6
                  "
                >

                  <a

                      href={project.github}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="
                      flex
                      items-center
                      gap-2
                      text-zinc-300
                      hover:text-emerald-400
                      "

                  >

                    <FaGithub size={18}/>

                    Github

                  </a>



                  <a

                    href={project.demo}

                    className="
                      flex
                      items-center
                      gap-2
                      text-zinc-300
                      hover:text-emerald-400
                    "

                  >

                    <ExternalLink size={18}/>

                    Demo

                  </a>


                </div>



              </div>


            </motion.div>


          ))
        }


        </div>


      </div>


    </section>


  );

}