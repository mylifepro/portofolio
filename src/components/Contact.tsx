import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2
} from "lucide-react";

import {
  motion
} from "framer-motion";

import {
  useState
} from "react";

import emailjs from "@emailjs/browser";

import contact from "../data/contact";
import social from "../data/social";
import SocialIcon from "./ui/SocialIcon";



export default function Contact() {


  const [form,setForm] = useState({

    name:"",
    email:"",
    subject:"",
    message:""

  });


  const [loading,setLoading] = useState(false);

  const [success,setSuccess] = useState("");

  const [error,setError] = useState("");





  const handleChange = (
    e:React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  )=>{


    setForm({

      ...form,

      [e.target.name]:e.target.value

    });


  };





  const validate = ()=>{


    if(
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ){

      setError(
        "Veuillez remplir tous les champs."
      );

      return false;

    }



    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!regex.test(form.email)){


      setError(
        "Adresse email invalide."
      );


      return false;

    }



    setError("");

    return true;


  };






  const handleSubmit = async(
    e:React.FormEvent
  )=>{


    e.preventDefault();



    if(!validate())
      return;



    setLoading(true);

    setSuccess("");



    try{


      await emailjs.send(

        import.meta.env.VITE_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,


        {

          from_name:form.name,

          from_email:form.email,

          subject:form.subject,

          message:form.message

        },


        import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      );



      setSuccess(
        "Message envoyé avec succès ✅"
      );



      setForm({

        name:"",
        email:"",
        subject:"",
        message:""

      });



    }catch(err){


      console.log(err);


      setError(
        "Une erreur est survenue."
      );


    }
    finally{


      setLoading(false);


    }



  };







  const informations=[

    {
      icon:Mail,
      title:"Email",
      value:contact.email
    },


    {
      icon:Phone,
      title:"Téléphone",
      value:contact.phone
    },


    {
      icon:MapPin,
      title:"Localisation",
      value:contact.location
    }

  ];






return (


<section

id="contact"

className="
relative
overflow-hidden
py-24
bg-white
dark:bg-zinc-950
text-zinc-900
dark:text-white
"


>


{/* Background */}

<div
className="
absolute
inset-0
-z-10
"

>

<div
className="
absolute
top-20
left-20
w-72
h-72
bg-emerald-500/20
blur-3xl
rounded-full
"

/>


<div
className="
absolute
bottom-20
right-20
w-72
h-72
bg-cyan-500/20
blur-3xl
rounded-full
"

/>


</div>





<div
className="
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
mb-16
"

>


<h2
className="
text-4xl
md:text-6xl
font-black
"

>

Me

<span
className="
text-emerald-400
"
>
{" "}contacter
</span>

</h2>



<p
className="
mt-5
max-w-2xl
mx-auto
text-zinc-600
dark:text-zinc-400
text-lg
"

>

Un projet, une opportunité ou une question ?
Je serai ravi d'échanger avec vous.

</p>


</motion.div>








<div
className="
grid
lg:grid-cols-2
gap-12
items-start
"

>





{/* Informations */}


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
space-y-6
"

>


{
informations.map((item)=>{


const Icon=item.icon;


return (

<motion.div

key={item.title}

whileHover={{
y:-5
}}

transition={{
duration:.3
}}

className="
p-6
rounded-3xl
bg-white/70
dark:bg-zinc-900/60
backdrop-blur
border
border-zinc-200
dark:border-zinc-800
shadow-lg
"

>


<div
className="
flex
items-center
gap-5
"

>

<div
className="
w-14
h-14
rounded-2xl
bg-emerald-500/20
flex
items-center
justify-center
"

>

<Icon
size={28}
className="
text-emerald-400
"
/>

</div>



<div>

<h3
className="
font-bold
text-lg
"

>

{item.title}

</h3>


<p
className="
text-zinc-500
dark:text-zinc-400
"

>

{item.value}

</p>


</div>


</div>


</motion.div>


)

})
}





{/* Social */}

<div
className="
flex
gap-4
pt-4
"

>

{
social.map(item=>(


<a

key={item.name}

href={item.url}

target="_blank"

rel="noopener noreferrer"

className="
w-12
h-12
rounded-full
flex
items-center
justify-center
bg-zinc-100
dark:bg-zinc-900
border
border-zinc-200
dark:border-zinc-800
hover:border-emerald-400
hover:text-emerald-400
transition
"

>

<SocialIcon
icon={item.icon}
size={22}
/>


</a>


))
}


</div>



</motion.div>









{/* Formulaire */}


<motion.form

onSubmit={handleSubmit}


initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}


className="
p-8
rounded-3xl
bg-white/70
dark:bg-zinc-900/60
backdrop-blur
border
border-zinc-200
dark:border-zinc-800
space-y-5
shadow-xl
"

>



<input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Votre nom"

required

className="
input-style
"

/>



<input

name="email"

type="email"

value={form.email}

onChange={handleChange}

placeholder="Votre email"

required

className="
input-style
"

/>




<input

name="subject"

value={form.subject}

onChange={handleChange}

placeholder="Sujet"

required

className="
input-style
"

/>



<textarea

name="message"

rows={6}

value={form.message}

onChange={handleChange}

placeholder="Votre message..."

required

className="
input-style
resize-none
"

/>





{
success &&

<p
className="
text-emerald-400
font-medium
"
>

{success}

</p>

}



{
error &&

<p
className="
text-red-400
font-medium
"
>

{error}

</p>

}





<button

disabled={loading}

className="
w-full
py-4
rounded-xl
bg-emerald-500
hover:bg-emerald-600
text-white
font-semibold
flex
justify-center
items-center
gap-3
transition
disabled:opacity-50
"

>


{
loading ?

<>

<Loader2
className="
animate-spin
"
/>

Envoi...

</>


:

<>

<Send size={20}/>

Envoyer le message

</>

}



</button>



</motion.form>




</div>


</div>



</section>


);


}