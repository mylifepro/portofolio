import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import experience from "../data/experience";


export default function Experience() {

  return (

    <section
      id="experience"
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

            Mon
            <span className="text-emerald-400">
              {" "}expérience
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

            Découvrez mes expériences et les projets
            sur lesquels j'ai travaillé.

          </p>


        </motion.div>





        {/* Timeline */}

        <div
          className="
            relative
            max-w-4xl
            mx-auto
          "
        >


          {/* Ligne verticale */}

          <div
            className="
              absolute
              left-4
              md:left-1/2
              top-0
              h-full
              w-0.5
              bg-zinc-700
            "
          />



          {
            experience.map((item,index)=>(


              <motion.div

                key={item.company}


                initial={{
                  opacity:0,
                  y:50
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                transition={{
                  duration:0.6,
                  delay:index*0.15
                }}


                viewport={{
                  once:true
                }}


                className="
                  relative
                  mb-12
                  flex
                  md:justify-between
                  items-start
                "

              >



                {/* Point timeline */}

                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    -translate-x-1/2
                    w-9
                    h-9
                    rounded-full
                    bg-emerald-400
                    flex
                    items-center
                    justify-center
                    text-zinc-950
                    z-10
                  "
                >

                  <Briefcase
                    size={18}
                  />

                </div>





                {/* Card */}

                <div
                  className="
                    ml-14
                    md:ml-0
                    md:w-[45%]
                    bg-zinc-950
                    border
                    border-zinc-800
                    rounded-2xl
                    p-6
                    hover:border-emerald-400
                    transition
                  "
                >



                  <div
                    className="
                      flex
                      justify-between
                      items-start
                      gap-4
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
                        text-sm
                        text-emerald-400
                        whitespace-nowrap
                      "
                    >

                      {item.period}

                    </span>


                  </div>





                  <h4
                    className="
                      mt-2
                      text-zinc-300
                      font-medium
                    "
                  >

                    {item.position}

                  </h4>





                  <p
                    className="
                      mt-4
                      text-sm
                      text-zinc-400
                      leading-relaxed
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
                      mt-5
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
                          bg-zinc-800
                          text-xs
                          text-emerald-400
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