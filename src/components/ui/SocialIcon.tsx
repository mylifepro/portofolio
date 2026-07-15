import {
  Mail
} from "lucide-react";

import {
  FaFacebook,
   FaLinkedin,
  FaGithub
} from "react-icons/fa";


const icons:any = {

 github:FaGithub,

 linkedin:FaLinkedin,

 facebook:FaFacebook,

 mail:Mail

};



export default function SocialIcon({
 icon,
 size=26
}:{
 icon:string;
 size?:number;
}){


const Icon = icons[icon];


if(!Icon){
 return null;
}


return <Icon size={size}/>;

}