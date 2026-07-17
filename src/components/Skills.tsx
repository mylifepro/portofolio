import { motion } from "framer-motion";
import skills from "../data/skills";




export default function Skills() {

  return (

    <section
      id="skills"
      className="
        min-h-screen
        bg-white dark:bg-zinc-950
        text-zinc-900 dark:text-white
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
              text-zinc-600 dark:text-zinc-400
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
                    bg-white
          dark:bg-zinc-950
          text-zinc-900
          dark:text-white
                    border
                    border-zinc-200 dark:border-zinc-800
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
                              text-zinc-600 dark:text-zinc-400
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