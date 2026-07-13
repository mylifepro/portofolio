import { Mail, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "../assets/images/id.png";
import profile from "../data/profile";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-950 text-white flex items-center relative overflow-hidden"
    >

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

      </div>


      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-emerald-400 text-lg mb-4">
            Bonjour, je suis
          </p>


        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            {profile.firstName}
            <span className="text-emerald-400">
            {" "} 
            {profile.lastName}
            </span>

        </h1>


          <h2 className="mt-4 text-2xl md:text-3xl text-zinc-300">
            {profile.title            }
          </h2>


          <p className="mt-6 text-zinc-400 max-w-xl text-lg leading-relaxed">

            {profile.subtitle}

          </p>
          <p className="mt-6 text-zinc-400 max-w-xl text-lg leading-relaxed">


            {profile.description}



          </p>


          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">


            <Button href="#projects" primary>
               Découvrir mes projets
             </Button>


            
            <Button href="/cv.pdf">
              Télécharger mon CV
            </Button>


          </div>
          {/* Statistics */}
<div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
  {profile.stats.map((stat) => (
    <div key={stat.label} className="text-center">
      <h3 className="text-3xl font-bold text-emerald-400">
        {stat.value}
      </h3>

      <p className="text-zinc-400 text-sm">
        {stat.label}
      </p>
    </div>
  ))}
</div>


          {/* Social icons */}
          <div className="mt-8 flex gap-5">


            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              <FaGithub size={26}/>
            </a>


            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              <FaLinkedin size={26}/>
            </a>


            <a
               href={`mailto:${profile.email}`}
              className="text-zinc-400 hover:text-emerald-400 transition"
            >
              <Mail size={26}/>
            </a>


          </div>


        </motion.div>



        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

  <div
    className="
      absolute
      inset-0
      rounded-full
      bg-emerald-500
      blur-3xl
      opacity-30
      animate-pulse
    "
  />

  <div
    className="
      relative
      w-80
      h-80
      md:w-96
      md:h-96
      rounded-full
      border-4
      border-emerald-400
      overflow-hidden
      shadow-[0_0_50px_rgba(16,185,129,.5)]
    "
  >
    <img
      src={profileImage}
      alt="Ramarisantoanina Rochel"
      className="w-full h-full object-cover"
    />
  </div>

</div>


        </motion.div>


      </div>


      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        text-zinc-400
        "
      >
        <ArrowDown size={30}/>
      </motion.a>


    </section>
  );
}