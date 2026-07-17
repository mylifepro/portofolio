import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

import experience from "../data/experience";


export default function Experience() {


  return (

    <section
      id="experience"
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
          top-20
          right-20
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

            Mon

            <span
              className="
                text-emerald-400
              "
            >
              {" "}expérience
            </span>


          </h2>



          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-zinc-600
              dark:text-zinc-400
              text-lg
            "
          >

            Découvrez mon parcours professionnel,
            mes missions et les technologies utilisées.

          </p>


        </motion.div>






        {/* Timeline container */}


        <div
          className="
            relative
            max-w-5xl
            mx-auto
          "
        >



          {/* Timeline line */}

          <div
            className="
              hidden
              md:block
              absolute
              left-1/2
              top-0
              bottom-0
              w-px
              bg-zinc-300
              dark:bg-zinc-800
              -translate-x-1/2
            "
          />





          {
            experience.map((item,index)=>(


              <motion.div


                key={item.company}


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
                  duration:.7,
                  delay:index*.15
                }}



                className={`
                  relative
                  flex
                  mb-16

                  ${
                    index % 2 === 0
                    ?
                    "md:justify-start"
                    :
                    "md:justify-end"
                  }

                `}

              >




                {/* Icon */}

                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    -translate-x-0
                    md:-translate-x-1/2

                    w-12
                    h-12

                    rounded-full

                    bg-emerald-500

                    flex
                    items-center
                    justify-center

                    text-zinc-950

                    shadow-lg
                    shadow-emerald-500/30

                    z-10
                  "
                >

                  <Briefcase
                    size={22}
                  />

                </div>







                {/* Card */}


                <div
                  className="
                    ml-16

                    md:ml-0

                    md:w-[45%]

                    rounded-3xl

                    p-7

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





                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      justify-between
                      gap-3
                    "
                  >



                    <h3
                      className="
                        text-xl
                        font-bold
                      "
                    >

                      {item.company}

                    </h3>





                    <span
                      className="
                        flex
                        items-center
                        gap-1

                        text-sm

                        text-emerald-400
                      "
                    >

                      <Calendar
                        size={15}
                      />

                      {item.period}

                    </span>



                  </div>







                  <h4
                    className="
                      mt-3

                      font-semibold

                      text-zinc-700
                      dark:text-zinc-300
                    "
                  >

                    {item.position}


                  </h4>






                  <p
                    className="
                      mt-5

                      text-sm

                      leading-relaxed

                      text-zinc-600

                      dark:text-zinc-400
                    "
                  >

                    {item.description}

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
                      item.technologies.map((tech)=>(

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

                            hover:bg-emerald-500

                            hover:text-white

                            transition
                          "

                        >

                          {tech}

                        </span>

                      ))
                    }


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