import {
  Code2,
  Database,
  Server,
  Brain,
  MapPin,
  Mail,
  GraduationCap,
  Sparkles
} from "lucide-react";

import { motion } from "framer-motion";

import profile from "../data/profile";
import education from "../data/education";
import contact from "../data/contact";



const aboutSkills = [

  {
    icon: Code2,
    title: "Frontend",
    description:
      "Création d'interfaces modernes, rapides et responsives avec React, Next.js et Tailwind CSS.",
    tools:["React","Next.js","Tailwind"]
  },


  {
    icon: Server,
    title: "Backend",
    description:
      "Développement d'API performantes avec NestJS et conception d'architectures microservices.",
    tools:["NestJS","API REST","Docker"]
  },


  {
    icon: Database,
    title: "Base de données",
    description:
      "Modélisation et gestion des données avec PostgreSQL.",
    tools:["PostgreSQL","SQL","ORM"]
  },


  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description:
      "Automatisation et intégration de solutions basées sur l'IA.",
    tools:["IA","Automation","Prompt"]
  }

];



const statistics = [

 {
  value:"+10",
  label:"Projets réalisés"
 },

 {
  value:"3+",
  label:"Années d'apprentissage"
 },

 {
  value:"100%",
  label:"Motivation"
 },

 {
  value:"24/7",
  label:"Veille technologique"
 }

];



export default function About(){


return (

<section
id="about"

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
top-0
left-1/2
-translate-x-1/2

w-[600px]
h-[600px]

bg-emerald-500/10

rounded-full

blur-[150px]

"
/>



<div
className="
relative
max-w-7xl
mx-auto
px-6
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
duration:.7
}}

className="
text-center
mb-20
"

>


<div
className="
inline-flex
items-center
gap-2

px-4
py-2

rounded-full

bg-emerald-500/10

text-emerald-500

mb-6

"
>

<Sparkles size={18}/>

À propos

</div>



<h2
className="
text-4xl
md:text-6xl
font-black
"
>

Mon parcours

<span
className="
text-emerald-400
"
>

{" "}professionnel

</span>

</h2>



<p
className="
mt-6
max-w-3xl
mx-auto

text-lg

text-zinc-600
dark:text-zinc-400

leading-relaxed
"
>

Je conçois des applications web modernes,
performantes et évolutives en combinant
développement frontend, backend,
bases de données et intelligence artificielle.

</p>



</motion.div>





{/* Main */}

<div
className="
grid
lg:grid-cols-2

gap-12

items-start
"
>



{/* Profile Card */}


<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
rounded-3xl

p-8

bg-white/70

dark:bg-zinc-900/60

backdrop-blur-xl

border

border-zinc-200

dark:border-zinc-800

shadow-xl
"

>


<h3
className="
text-3xl
font-bold
mb-4
"
>

{profile.title}

</h3>


<p
className="
text-zinc-600
dark:text-zinc-400

leading-relaxed
"
>

{profile.description}

</p>



<div
className="
mt-8
space-y-4
"
>


<div
className="
flex
items-center
gap-3
"
>

<MapPin
className="text-emerald-400"
/>

<span>

{contact.location}

</span>


</div>



<div
className="
flex
items-center
gap-3
"
>

<Mail
className="text-emerald-400"
/>


<span>

{contact.email}

</span>


</div>


</div>





{/* Education */}


<div
className="
mt-10
"
>


<h4
className="
flex
items-center
gap-2

text-xl
font-bold

mb-6
"
>

<GraduationCap
className="text-emerald-400"
/>

Formation

</h4>




{
education.map((item)=>(


<div

key={item.diploma}

className="
relative

pl-8

border-l-2

border-emerald-400

mb-8

"

>


<div
className="
absolute

left-[-7px]

top-0

w-3

h-3

rounded-full

bg-emerald-400

"
/>



<h5
className="
font-bold
text-lg
"
>

{item.diploma}

</h5>


<p
className="
text-emerald-400
mt-1
"
>

{item.school}

</p>


<p
className="
text-sm

text-zinc-500

mt-2
"
>

{item.period}

</p>


<p
className="
mt-3

text-zinc-600

dark:text-zinc-400

text-sm
"
>

{item.description}

</p>



</div>


))

}


</div>



</motion.div>








{/* Skills */}


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

viewport={{
once:true
}}

transition={{
delay:index*.15
}}


whileHover={{
y:-8
}}


className="
group

p-6

rounded-3xl

bg-white/70

dark:bg-zinc-900/60

backdrop-blur-xl

border

border-zinc-200

dark:border-zinc-800


hover:border-emerald-400

transition

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

mb-5

"
>

<Icon
size={30}
className="text-emerald-400"
/>


</div>



<h4
className="
text-xl
font-bold
mb-3
"
>

{item.title}

</h4>


<p
className="
text-sm

text-zinc-600

dark:text-zinc-400
"
>

{item.description}

</p>



<div
className="
flex
flex-wrap
gap-2
mt-5
"
>


{
item.tools.map(tool=>(

<span

key={tool}

className="
px-3
py-1

rounded-full

text-xs

bg-zinc-100

dark:bg-zinc-800

text-emerald-400

"

>

{tool}

</span>

))

}


</div>



</motion.div>

)


})


}


</div>



</div>





{/* Statistics */}


<div
className="
grid

grid-cols-2

md:grid-cols-4

gap-6

mt-20
"
>


{

statistics.map(stat=>(

<div

key={stat.label}

className="
text-center

rounded-2xl

p-6

bg-white

dark:bg-zinc-900

border

border-zinc-200

dark:border-zinc-800

"

>


<h3
className="
text-4xl
font-black

text-emerald-400
"
>

{stat.value}

</h3>


<p
className="
text-sm

text-zinc-500

mt-2
"
>

{stat.label}

</p>


</div>


))

}


</div>



</div>


</section>

)

}