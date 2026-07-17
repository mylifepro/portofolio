import { ArrowUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";

import profile from "../data/profile";
import social from "../data/social";
import SocialIcon from "./ui/SocialIcon";



export default function Footer() {


const year = new Date().getFullYear();



const links = [

{
name:"Accueil",
href:"#home"
},

{
name:"À propos",
href:"#about"
},

{
name:"Formation",
href:"#education"
},

{
name:"Compétences",
href:"#skills"
},

{
name:"Projets",
href:"#projects"
},

{
name:"Contact",
href:"#contact"
}

];




return (


<footer

className="
relative
overflow-hidden
bg-white
dark:bg-zinc-950
border-t
border-zinc-200
dark:border-zinc-800
text-zinc-900
dark:text-white
"

>


{/* Background */}

<div

className="
absolute
inset-0
pointer-events-none
"

>

<div
className="
absolute
top-0
left-1/3
w-96
h-96
bg-emerald-500/10
rounded-full
blur-3xl
"
/>


<div
className="
absolute
bottom-0
right-1/3
w-96
h-96
bg-cyan-500/10
rounded-full
blur-3xl
"
/>


</div>






<div

className="
relative
max-w-7xl
mx-auto
px-6
py-16
"

>



<div

className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-12
"

>



{/* Identity */}


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<div
className="
flex
items-center
gap-3
"

>

<div

className="
w-12
h-12
rounded-xl
bg-emerald-500/20
flex
items-center
justify-center
"

>

<Code2
className="
text-emerald-400
"
/>


</div>



<h2

className="
text-2xl
font-black
"

>

{profile.lastName}

<span
className="
text-emerald-400
"
>

{" "}
{profile.firstName}

</span>


</h2>


</div>




<p

className="
mt-6
text-zinc-600
dark:text-zinc-400
leading-relaxed
"

>

{profile.description}

</p>


</motion.div>








{/* Navigation */}



<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.2
}}

viewport={{
once:true
}}

>


<h3

className="
text-xl
font-bold
mb-6
"

>

Navigation

</h3>



<ul

className="
space-y-3
"

>

{

links.map((link)=>(


<li
key={link.name}
>


<a

href={link.href}

className="
text-zinc-600
dark:text-zinc-400
hover:text-emerald-400
transition
duration-300
"

>

{link.name}

</a>


</li>


))

}


</ul>


</motion.div>









{/* Social */}



<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.4
}}

viewport={{
once:true
}}

>



<h3

className="
text-xl
font-bold
mb-6
"

>

Me suivre

</h3>



<p

className="
text-zinc-600
dark:text-zinc-400
mb-6
"

>

Retrouvez-moi sur mes réseaux.

</p>





<div

className="
flex
gap-4
flex-wrap
"

>


{

social.map((item)=>(


<motion.a


whileHover={{
y:-5,
scale:1.05
}}


key={item.name}


href={item.url}


target="_blank"


rel="noopener noreferrer"



className="

w-12
h-12
rounded-full

bg-zinc-100
dark:bg-zinc-900

border
border-zinc-200
dark:border-zinc-800

flex
items-center
justify-center

text-zinc-600
dark:text-zinc-400

hover:text-emerald-400
hover:border-emerald-400

transition

"


>


<SocialIcon

icon={item.icon}

size={22}

/>


</motion.a>


))


}


</div>



</motion.div>





</div>









{/* Bottom */}



<div

className="
mt-14
pt-8
border-t
border-zinc-200
dark:border-zinc-800

flex
flex-col
md:flex-row

gap-6
items-center
justify-between

"

>



<p

className="
text-sm
text-zinc-500
text-center
"

>

© {year} {profile.lastName} {profile.firstName}.
Tous droits réservés.

</p>






<motion.a


href="#home"


whileHover={{
scale:1.1
}}



className="

w-12
h-12

rounded-full

bg-emerald-500

flex
items-center
justify-center

text-white

shadow-lg
shadow-emerald-500/30

hover:bg-emerald-600

transition

"


>


<ArrowUp size={22}/>


</motion.a>




</div>





</div>



</footer>


);


}