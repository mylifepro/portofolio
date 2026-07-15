import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../data/profile";
import social from "../data/social";
import SocialIcon from "./ui/SocialIcon";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Informations */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-2xl font-bold">
              {profile.lastName}
              <span className="text-emerald-400">
                {" "}
                {profile.firstName}
              </span>
            </h2>

            <p className="mt-4 text-zinc-400 leading-relaxed">
              {profile.description}
            </p>

          </motion.div>

          {/* Navigation */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <a href="#home" className="hover:text-emerald-400 transition">
                  Accueil
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-emerald-400 transition">
                  À propos
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-emerald-400 transition">
                  Compétences
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-emerald-400 transition">
                  Projets
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-emerald-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </motion.div>

          {/* Réseaux sociaux */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold mb-4">
              Me contacter
            </h3>

            <div className="flex gap-4">

{
social.map((item)=>(

<a

key={item.name}

href={item.url}

target="_blank"

rel="noopener noreferrer"

className="
w-12
h-12
rounded-full
bg-zinc-900
border
border-zinc-800
flex
items-center
justify-center
text-zinc-400
hover:text-white
hover:bg-emerald-500
transition-all
"

>

<SocialIcon
icon={item.icon}
size={22}
/>

</a>


))
}

</div>

          </motion.div>

        </div>

        {/* Ligne de séparation */}

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-zinc-500 text-sm text-center md:text-left">
            © {year} {profile.lastName} {profile.firstName}. Tous droits réservés.
          </p>

          <a
            href="#home"
            className="
              mt-4
              md:mt-0
              w-12
              h-12
              rounded-full
              bg-emerald-500
              hover:bg-emerald-600
              flex
              items-center
              justify-center
              transition
            "
          >
            <ArrowUp size={20} />
          </a>

        </div>

      </div>

    </footer>
  );
}