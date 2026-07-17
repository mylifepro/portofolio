import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import projects from "../data/projects";



export default function Projects() {


  return (


    <section
      id="projects"
      className="
        relative
        overflow-hidden

        py-24

        bg-zinc-50
        dark:bg-zinc-950

        text-zinc-900
        dark:text-white
      "
    >


      {/* Background */}

      <div
        className="
          absolute
          top-20
          right-10

          w-72
          h-72

          bg-emerald-500/10

          rounded-full

          blur-3xl
        "
      />



      <div
        className="
          max-w-7xl
          mx-auto
          px-6

          relative
          z-10
        "
      >




        {/* Header */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.8
          }}

          className="
            text-center
            mb-20
          "

        >



          <h2
            className="
              text-4xl
              md:text-5xl

              font-black
            "
          >

            Mes


            <span
              className="
                text-emerald-400
              "
            >

              {" "}projets

            </span>


          </h2>




          <p
            className="
              mt-5

              max-w-2xl

              mx-auto

              text-lg

              text-zinc-600
              dark:text-zinc-400
            "
          >

            Découvrez mes réalisations,
            applications web et solutions full-stack.

          </p>



        </motion.div>






        {/* Cards */}


        <div
          className="
            grid

            sm:grid-cols-2

            lg:grid-cols-3

            gap-8
          "
        >




        {
          projects.map((project,index)=>(



            <motion.article


              key={project.title}



              initial={{
                opacity:0,
                y:60
              }}


              whileInView={{
                opacity:1,
                y:0
              }}



              viewport={{
                once:true
              }}



              transition={{
                duration:.6,
                delay:index*.15
              }}



              className="
                group

                rounded-3xl

                overflow-hidden


                bg-white/80

                dark:bg-zinc-900/80


                backdrop-blur


                border

                border-zinc-200

                dark:border-zinc-800



                hover:border-emerald-400


                hover:-translate-y-2


                transition-all

                duration-300


                shadow-lg

              "

            >






              {/* Image */}


              <div
                className="
                  relative

                  h-56

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

                    duration-700
                  "

                />





                {/* Overlay */}


                <div
                  className="
                    absolute

                    inset-0

                    bg-gradient-to-t

                    from-black/70

                    via-transparent

                    opacity-0

                    group-hover:opacity-100

                    transition
                  "
                />





                {/* Category */}


                <span

                  className="
                    absolute

                    top-4

                    left-4


                    px-4

                    py-1


                    rounded-full


                    bg-emerald-500


                    text-white


                    text-xs


                    font-semibold
                  "

                >

                  {project.category}


                </span>




              </div>









              {/* Content */}


              <div
                className="
                  p-7
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
                    text-sm

                    leading-relaxed

                    text-zinc-600

                    dark:text-zinc-400
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

                    mt-6
                  "
                >


                {
                  project.technologies.map((tech)=>(


                    <span

                      key={tech}

                      className="
                        px-3

                        py-1


                        rounded-full


                        text-xs


                        bg-emerald-500/10


                        text-emerald-500


                        border

                        border-emerald-500/20


                      "

                    >

                      {tech}


                    </span>


                  ))
                }



                </div>









                {/* Buttons */}



                <div
                  className="
                    flex

                    gap-4

                    mt-7
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


                      px-4

                      py-2


                      rounded-xl


                      bg-zinc-900

                      dark:bg-white


                      text-white

                      dark:text-zinc-900


                      hover:bg-emerald-500


                      hover:text-white


                      transition
                    "

                  >

                    <FaGithub size={18}/>

                    Github

                  </a>







                  <a

                    href={project.demo}

                    target="_blank"

                    rel="noopener noreferrer"


                    className="
                      flex

                      items-center

                      gap-2


                      px-4

                      py-2


                      rounded-xl


                      border


                      border-zinc-300

                      dark:border-zinc-700


                      hover:border-emerald-400


                      hover:text-emerald-400


                      transition
                    "

                  >

                    <ExternalLink size={18}/>


                    Demo


                  </a>



                </div>





              </div>






            </motion.article>


          ))
        }



        </div>



      </div>




    </section>


  );

}