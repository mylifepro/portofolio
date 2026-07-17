import { motion } from "framer-motion";
import skills from "../data/skills";


export default function Skills() {


  return (

    <section
      id="skills"
      className="
        relative
        overflow-hidden
        min-h-screen
        py-24
        bg-zinc-50
        dark:bg-zinc-950
        text-zinc-900
        dark:text-white
      "
    >


      {/* Background decoration */}

      <div
        className="
          absolute
          left-10
          top-20
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

          transition={{
            duration:.8
          }}

          viewport={{
            once:true
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
              {" "}compétences
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

            Les technologies et outils que j'utilise
            pour créer des applications modernes,
            performantes et évolutives.

          </p>



        </motion.div>






        {/* Skills grid */}


        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
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

                  bg-white/80
                  dark:bg-zinc-900/80

                  backdrop-blur

                  border

                  border-zinc-200
                  dark:border-zinc-800

                  rounded-3xl

                  p-7

                  hover:border-emerald-400

                  hover:-translate-y-2

                  transition-all

                  duration-300

                  shadow-lg
                "

              >





                {/* Header card */}


                <div
                  className="
                    flex
                    items-center
                    gap-4
                    mb-8
                  "
                >


                  <div
                    className="
                      w-14
                      h-14

                      rounded-2xl

                      bg-emerald-500/10

                      flex
                      items-center
                      justify-center

                      group-hover:bg-emerald-500

                      transition
                    "
                  >

                    <Icon

                      size={32}

                      className="
                        text-emerald-400
                        group-hover:text-white
                        transition
                      "

                    />

                  </div>




                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >

                    {skill.category}

                  </h3>



                </div>








                {/* Technologies */}


                <div
                  className="
                    space-y-6
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
                          items-center
                          mb-2
                        "
                      >


                        <span
                          className="
                            font-medium
                          "
                        >

                          {tech.name}

                        </span>



                        <span
                          className="
                            text-sm

                            font-semibold

                            text-emerald-400
                          "
                        >

                          {tech.level}%

                        </span>



                      </div>






                      {/* Progress */}


                      <div
                        className="
                          h-2.5

                          bg-zinc-200
                          dark:bg-zinc-800

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


                          viewport={{
                            once:true
                          }}


                          transition={{
                            duration:1.2,
                            ease:"easeOut"
                          }}


                          className="
                            h-full

                            rounded-full

                            bg-gradient-to-r

                            from-emerald-400

                            to-cyan-400
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