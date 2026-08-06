import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import navigation from "../data/navigation";
import resumefile from "../assets/file/Rochel.pdf";
import ThemeToggle from "./ui/ThemeToggle";


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  // Gestion du scroll + section active

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);


      const scrollPosition = window.scrollY + 120;


      navigation.forEach((item)=>{

        const sectionId = item.href.replace("#","");

        const section =
          document.getElementById(sectionId);


        if(!section) return;


        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;


        if(
          scrollPosition >= sectionTop &&
          scrollPosition <
          sectionTop + sectionHeight
        ){

          setActiveSection(sectionId);

        }

      });

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    handleScroll();


    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);



  // Navigation mobile et desktop

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href:string
  )=>{

    e.preventDefault();


    const id = href.replace("#","");


    const element =
      document.getElementById(id);



    if(element){

      const navbarHeight = 80;


      const position =
        element.offsetTop - navbarHeight;


      window.scrollTo({

        top:position,

        behavior:"smooth"

      });

    }


    setIsOpen(false);

  };



return (

<header

className={`
fixed
top-0
left-0
w-full
z-50
transition-all
duration-300

${
isScrolled
?
`
bg-white/80
dark:bg-zinc-950/80
backdrop-blur-xl
shadow-lg
border-b
border-zinc-200
dark:border-zinc-800
`
:
"bg-transparent"
}

`}

>


<div

className="
max-w-7xl
mx-auto
h-20
px-6
flex
items-center
justify-between
"

>


{/* Logo */}

<motion.a

whileHover={{
scale:1.05
}}

href="#home"

onClick={(e)=>
handleNavigation(e,"#home")
}

className="
text-3xl
font-black
tracking-tight
"

>

<span className="text-emerald-500">

Rochel

</span>


<span className="text-zinc-900 dark:text-white">

.

</span>


</motion.a>




{/* Desktop Menu */}


<nav

className="
hidden
lg:flex
items-center
gap-2
"

>


{
navigation.map((link)=>{


const id =
link.href.replace("#","");


const active =
activeSection===id;



return (

<a

key={link.name}

href={link.href}

onClick={(e)=>
handleNavigation(e,link.href)
}


className={`

relative
px-4
py-2
rounded-full
font-medium
transition-all
duration-300


${
active
?
`
text-emerald-500
bg-emerald-500/10
`
:
`
text-zinc-700
dark:text-zinc-300

hover:text-emerald-500

hover:bg-zinc-100

dark:hover:bg-zinc-900

`
}

`}

>

{link.name}


</a>

)

})

}


</nav>





{/* Actions */}


<div className="
flex
items-center
gap-3
">


<ThemeToggle />



<a

href={resumefile}

className="
hidden
md:flex
items-center
gap-2
px-5
py-3
rounded-full
bg-emerald-500
hover:bg-emerald-600
text-white
font-medium
transition
shadow-lg
shadow-emerald-500/30
hover:scale-105
"

>


<Download size={18}/>


CV


</a>




<button

onClick={()=>
setIsOpen(!isOpen)
}


className="
lg:hidden
p-2
rounded-lg
text-zinc-800
dark:text-white
hover:bg-zinc-100
dark:hover:bg-zinc-900
transition
"

>


{

isOpen
?
<X size={28}/>
:
<Menu size={28}/>

}


</button>


</div>


</div>





{/* Mobile Menu */}



<AnimatePresence>


{

isOpen && (

<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

exit={{
opacity:0,
height:0
}}

transition={{
duration:0.25
}}

className="
lg:hidden
overflow-hidden
"


>


<div

className="
bg-white
dark:bg-zinc-950
border-t
border-zinc-200
dark:border-zinc-800
px-6
py-6
space-y-3
"

>


{

navigation.map((link)=>{


const active =
activeSection ===
link.href.replace("#","");



return (

<a

key={link.name}

href={link.href}

onClick={(e)=>
handleNavigation(e,link.href)
}


className={`

block
rounded-xl
px-4
py-3
transition


${
active
?
`
bg-emerald-500/10
text-emerald-500
`
:
`
text-zinc-700
dark:text-zinc-300

hover:bg-zinc-100

dark:hover:bg-zinc-900

`
}

`}

>

{link.name}


</a>

)


})

}



<a

href={resumefile}

className="
mt-4
flex
items-center
justify-center
gap-2
rounded-xl
bg-emerald-500
py-3
text-white
font-medium
hover:bg-emerald-600
transition
"

>

<Download size={18}/>


Télécharger le CV


</a>


</div>


</motion.div>


)


}


</AnimatePresence>



</header>


);

}