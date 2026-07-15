import {
 Moon,
 Sun
} from "lucide-react";


import {
 useTheme
} from "../../context/ThemeContext";



export default function ThemeToggle(){


const {
 theme,
 toggleTheme
}=useTheme();



return (

<button

onClick={toggleTheme}

className="
w-10
h-10
rounded-full
flex
items-center
justify-center
bg-zinc-800
dark:bg-zinc-800
hover:bg-emerald-500
transition
"

>


{
theme==="dark"

?

<Sun size={20}/>

:

<Moon size={20}/>

}


</button>


);


}