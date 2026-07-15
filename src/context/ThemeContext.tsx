import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


type ThemeContextType = {

  theme:string;

  toggleTheme:()=>void;

};


const ThemeContext =
createContext<ThemeContextType | null>(null);



export function ThemeProvider({
 children
}:{
 children:React.ReactNode
}){


const [theme,setTheme]=useState(
 localStorage.getItem("theme") || "dark"
);



useEffect(()=>{


const root=document.documentElement;


if(theme==="dark"){

 root.classList.add("dark");

}else{

 root.classList.remove("dark");

}


localStorage.setItem(
"theme",
theme
);


},[theme]);




const toggleTheme=()=>{

setTheme(
 theme==="dark"
 ?
 "light"
 :
 "dark"
);

};



return (

<ThemeContext.Provider
value={{
theme,
toggleTheme
}}
>

{children}

</ThemeContext.Provider>

);


}



export function useTheme(){

const context=useContext(ThemeContext);


if(!context){

throw new Error(
"ThemeContext must be used inside ThemeProvider"
);

}


return context;


}