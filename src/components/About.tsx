import { Code2, Database, Server, Brain } from "lucide-react";
import { motion } from "framer-motion";

import profile from "../data/profile";
import education from "../data/education";


const aboutSkills = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Création d'interfaces modernes avec React, Next.js et Tailwind CSS.",
  },

  {
    icon: Server,
    title: "Backend",
    description:
      "Développement d'API robustes avec NestJS et architectures microservices.",
  },

  {
    icon: Database,
    title: "Database",
    description:
      "Gestion des données avec PostgreSQL et conception de modèles efficaces.",
  },

  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description:
      "Intégration de solutions IA et automatisation des processus.",
  },
];



export default function About() {


return (

<section
id="about"
className="
min-h-screen
bg-zinc-900
text-white
flex
items-center
"
>


<div
className="
max-w-7xl
mx-auto
px-6
py-20
w-full
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

À propos de

<span className="text-emerald-400">
{" "}moi
</span>


</h2>


<p
className="
mt-4
text-zinc-400
"
>

Découvrez mon parcours et mes domaines
d'expertise.

</p>


</motion.div>





<div
className="
grid
md:grid-cols-2
gap-12
items-center
"
>



{/* Description */}

<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

viewport={{
once:true
}}

>


<h3
className="
text-3xl
font-semibold
mb-6
"
>

{profile.title}

</h3>



<p
className="
text-zinc-400
leading-relaxed
text-lg
"
>

{profile.description}

</p>





{/* Formation */}

<div
className="
mt-8
"
>

<h4
className="
text-xl
font-semibold
mb-4
text-emerald-400
"
>

Formation

</h4>


{
education.map((item)=>(

<div
key={item.diploma}
className="
bg-zinc-950
border
border-zinc-800
rounded-xl
p-5
"
>

<h5
className="
font-bold
"
>

{item.diploma}

</h5>


<p
className="
text-zinc-300
mt-1
"
>

{item.school}

</p>


<p
className="
text-sm
text-zinc-400
mt-2
"
>

{item.period}

</p>


<p
className="
text-sm
text-zinc-400
mt-3
"
>

{item.description}

</p>


</div>

))

}


</div>


</motion.div>






{/* Cards compétences */}

<div
className="
grid
sm:grid-cols-2
gap-6
"
>


{
aboutSkills.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={item.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}


className="
bg-zinc-950
border
border-zinc-800
rounded-2xl
p-6
hover:border-emerald-400
transition
"

>


<Icon

size={35}

className="
text-emerald-400
mb-4
"

/>



<h4
className="
text-xl
font-semibold
mb-2
"
>

{item.title}

</h4>


<p
className="
text-zinc-400
text-sm
"
>

{item.description}

</p>


</motion.div>


)


})

}


</div>



</div>


</div>


</section>


);


}