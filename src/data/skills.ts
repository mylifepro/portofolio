import {
  Code2,
  Server,
  Database,
  Cloud,
  type LucideIcon
} from "lucide-react";


type Skill = {
  category: string;

  icon: LucideIcon;

  technologies: {
    name: string;
    level: number;
  }[];
};


const skills: Skill[] = [

 {
   category:"Frontend",

   icon: Code2,

   technologies:[
    {
      name:"React.js",
      level:90
    },
    {
      name:"Next.js",
      level:85
    },
    {
      name:"TypeScript",
      level:80
    },
    {
      name:"Tailwind CSS",
      level:85
    }
   ]
 },


 {
   category:"Backend",

   icon: Server,

   technologies:[
    {
      name:"NestJS",
      level:85
    },
    {
      name:"Node.js",
      level:80
    },
    {
      name:"API REST",
      level:90
    }
   ]
 },


 {
   category:"Database",

   icon: Database,

   technologies:[
    {
      name:"PostgreSQL",
      level:85
    },
    {
      name:"SQL",
      level:85
    }
   ]
 },


 {
   category:"DevOps & IA",

   icon: Cloud,

   technologies:[
    {
      name:"Docker",
      level:75
    },
    {
      name:"Microservices",
      level:80
    },
    {
      name:"Intelligence Artificielle",
      level:70
    }
   ]
 }

];


export default skills;