import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import education from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="
        min-h-screen
        bg-zinc-950
        text-white
        py-20
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
        "
      >
        {/* Titre */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Ma
            <span className="text-emerald-400">
              {" "}formation
            </span>
          </h2>

          <p className="mt-4 text-zinc-400">
            Mon parcours académique.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="space-y-8">

          {education.map((item, index) => (

            <motion.div
              key={item.diploma}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
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

              <div className="flex items-center gap-4">

                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-emerald-500/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <GraduationCap
                    size={30}
                    className="text-emerald-400"
                  />
                </div>

                <div>

                  <h3 className="text-2xl font-semibold">
                    {item.diploma}
                  </h3>

                  <p className="text-emerald-400">
                    {item.school}
                  </p>

                  <p className="text-zinc-500">
                    {item.period}
                  </p>

                </div>

              </div>

              <p className="mt-6 text-zinc-400 leading-relaxed">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}