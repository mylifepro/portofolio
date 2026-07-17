import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

import education from "../data/education";


export default function Education() {


return (

<section

id="education"

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


{/* Background effect */}

<div
className="
absolute
top-20
right-0

w-96
h-96

bg-emerald-500/10

rounded-full

blur-3xl

"
/>



<div
className="
relative

max-w-5xl

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

<GraduationCap size={18}/>

Parcours académique

</div>



<h2

className="
text-4xl
md:text-6xl

font-black

"

>

Ma

<span
className="
text-emerald-400
"
>

{" "}formation

</span>


</h2>



<p

className="
mt-5

text-zinc-600

dark:text-zinc-400

text-lg

"

>

Mon parcours universitaire et les compétences
acquises durant ma formation.

</p>



</motion.div>






{/* Timeline */}


<div

className="
relative
"

>


{/* Ligne verticale */}

<div

className="
absolute

left-6

top-0

bottom-0

w-px

bg-emerald-400/40

md:left-1/2

"

></div>



{


education.map((item,index)=>(


<motion.div

key={item.diploma}


initial={{
opacity:0,
x:index % 2 === 0 ? -50 : 50
}}


whileInView={{
opacity:1,
x:0
}}


viewport={{
once:true
}}


transition={{
duration:.7
}}



className="
relative

mb-16

md:flex

md:justify-between

"

>





{/* Point timeline */}

<div

className="
absolute

left-4

top-8

w-5

h-5

rounded-full

bg-emerald-400

border-4

border-white

dark:border-zinc-950

md:left-1/2

md:-translate-x-1/2

z-10

"

/>







{/* Card */}


<div

className={`
ml-14

md:w-[45%]

${
index % 2 === 0
?
"md:mr-auto"
:
"md:ml-auto"
}

`}

>


<div

className="
group

bg-white/80

dark:bg-zinc-900/70

backdrop-blur-xl

border

border-zinc-200

dark:border-zinc-800

rounded-3xl

p-8


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
items-start
gap-4

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

shrink-0

"

>

<GraduationCap

size={30}

className="
text-emerald-400
"

/>

</div>



<div>


<h3

className="
text-xl

md:text-2xl

font-bold

"

>

{item.diploma}

</h3>



<p

className="
mt-2

text-emerald-400

font-medium

"

>

{item.school}

</p>



<div

className="
flex

items-center

gap-2

mt-3

text-sm

text-zinc-500

"

>

<Calendar size={16}/>

{item.period}

</div>



</div>



</div>





<p

className="
mt-6

leading-relaxed

text-zinc-600

dark:text-zinc-400

"

>

{item.description}

</p>





</div>


</div>





</motion.div>



))

}



</div>




</div>


</section>


)

}