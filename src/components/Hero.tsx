import { Mail, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import resumefile from "../assets/file/Rochel.pdf";
import profileImage from "../assets/images/id.png";
import profile from "../data/profile";
import statistics from "../data/statistics";
import Button from "./ui/Button";
import social from "../data/social";
import SocialIcon from "./ui/SocialIcon";

export default function Hero() {
  return (
    <section
  id="home"
  className="
relative
overflow-hidden
min-h-screen
flex
items-center
bg-white
dark:bg-zinc-950
text-zinc-900
dark:text-white
pt-24
"
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once:true }}
          transition={{ duration: 0.8 }}
        >
          <div
className="
inline-flex
items-center
gap-2
px-4
py-2
mb-6
rounded-full
bg-emerald-100
dark:bg-emerald-900/30
text-emerald-600
dark:text-emerald-400
text-sm
font-medium
"
>

<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />


Disponible pour une alternance / CDI

</div>


        <h1 className="
text-5xl
sm:text-6xl
lg:text-7xl
xl:text-8xl
font-black
leading-none
tracking-tight


">

            {profile.firstName}
            <span
className="
bg-gradient-to-r
from-emerald-400
to-cyan-400
bg-clip-text
text-transparent

"
>
            {" "} 
            {profile.lastName}
            </span>

        </h1>


          <div
className="
mt-8
inline-flex
items-center
rounded-full
border
border-zinc-300
dark:border-zinc-700
px-6
py-3
bg-white/70
dark:bg-zinc-900/60
backdrop-blur
"
>

<p
className="
text-xl
font-semibold
"
>

{profile.title}

</p>

</div>


          <p className="mt-8
max-w-2xl
leading-8
text-lg
text-zinc-600
dark:text-zinc-400">

            {profile.subtitle}

          </p>
          <p className="mt-8
max-w-2xl
leading-8
text-lg
text-zinc-600
dark:text-zinc-400">


            {profile.description}



          </p>


          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">


            <Button  href="#projects" primary>
               Découvrir mes projets
             </Button>


            
            <Button href={resumefile}>
              Télécharger mon CV
            </Button>


          </div>
          {/* Statistics */}
<div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
  {statistics.map((stat) => (
    <div key={stat.label} className="rounded-2xl
    text-center
px-4
bg-zinc-100
dark:bg-zinc-900
border
border-zinc-200
dark:border-zinc-800
py-6
hover:-translate-y-2
hover:shadow-xl
transition">
      <h3 className="text-3xl font-bold text-emerald-400">
        {stat.value}
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {stat.label}
      </p>
    </div>
  ))}
</div>


          {/* Social icons */}
          {/* Social icons */}

        <div
          className="
          mt-8
          flex
          gap-4
          
          "
          >

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
          
          flex
          items-center
          justify-center
          
          hover:text-emerald-400
          hover:border-emerald-400
          transition
          bg-zinc-100
dark:bg-zinc-900

border-zinc-300
dark:border-zinc-800

text-zinc-700
dark:text-zinc-400
          "

          >

          <SocialIcon icon={item.icon}/>

          </a>

          ))
          }


        </div>


        </motion.div>



        {/* Profile image */}
        <motion.div

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1,
y:[0,-12,0]
}}

transition={{
duration:5,
repeat:Infinity,
ease:"easeInOut"
}}

className="flex justify-center"
>

          <div className="relative">

  <div
    className="
      absolute
inset-0
rounded-full
border-2
border-emerald-400/30
animate-ping
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


      {/* Scroll indication ito */}
      <motion.a
        href="#about"
        whileInView={{ y: [0, 10, 0] }}
        viewport={{ once:true }}
        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
        className="
        absolute
left-1/2
top-1/2
w-[600px]
h-[600px]
bg-emerald-500/10
rounded-full
blur-[180px]
-translate-x-1/2
-translate-y-1/2
        "
      >
        <ArrowDown size={30}/>
      </motion.a>


    </section>
  );
}