import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import contact from "../data/contact";
import social from "../data/social";
import SocialIcon from "./ui/SocialIcon";


export default function Contact() {


  const [form, setForm] = useState({

    name:"",
    email:"",
    subject:"",
    message:"",

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



    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!emailRegex.test(form.email)){


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



    if(!validate()) return;



    setLoading(true);

    setSuccess("");

    setError("");



    try{


      await emailjs.send(

        import.meta.env.VITE_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,


        {

          from_name:form.name,

          from_email:form.email,

          subject:form.subject,

          message:form.message,

        },


        import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      );



      setSuccess(
        "Votre message a été envoyé avec succès."
      );



      setForm({

        name:"",
        email:"",
        subject:"",
        message:"",

      });



    }catch(error){


      console.log(error);


      setError(
        "Erreur lors de l'envoi du message."
      );


    }
    finally{


      setLoading(false);


    }


  };





  return (

    <section
      id="contact"
      className="
        min-h-screen
        bg-zinc-950
        text-white
        py-20
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
          px-6
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
            duration:.8
          }}

          viewport={{
            once:true
          }}

          className="
          text-center
          mb-16
          "

        >


          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
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
            mt-4
            text-zinc-400
            max-w-2xl
            mx-auto
            "
          >

            Vous avez un projet, une opportunité ou une question ?
            N'hésitez pas à me contacter.

          </p>


        </motion.div>





        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          "
        >



          {/* Informations */}


          <motion.div

            initial={{
              opacity:0,
              x:-40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            className="space-y-6"

          >



            {
              [
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

              ].map((item)=>(


                <div
                  key={item.title}
                  className="
                  bg-zinc-900
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                  "
                >


                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >


                    <item.icon
                      className="
                      text-emerald-400
                      "
                      size={28}
                    />


                    <div>


                      <h3
                        className="
                        font-semibold
                        "
                      >
                        {item.title}
                      </h3>


                      <p
                        className="
                        text-zinc-400
                        "
                      >
                        {item.value}
                      </p>


                    </div>


                  </div>


                </div>



              ))
            }





            <div
              className="
              flex
              gap-4
              pt-2
              "
            >


              {
                social.map((item)=>(


                  <a

                    key={item.name}

                    href={item.url}

                    target="_blank"

                    rel="noopener noreferrer"


                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-zinc-900
                    border
                    border-zinc-800
                    flex
                    items-center
                    justify-center
                    hover:bg-emerald-500
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
              x:40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}


            className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-2xl
            p-8
            space-y-6
            "

          >



            <input

              name="name"

              value={form.name}

              onChange={handleChange}

              placeholder="Votre nom"

              className="
              w-full
              bg-zinc-950
              border
              border-zinc-700
              rounded-lg
              px-4
              py-3
              outline-none
              focus:border-emerald-400
              "

            />




            <input

              name="email"

              value={form.email}

              onChange={handleChange}

              type="email"

              placeholder="Votre email"


              className="
              w-full
              bg-zinc-950
              border
              border-zinc-700
              rounded-lg
              px-4
              py-3
              outline-none
              focus:border-emerald-400
              "

            />





            <input

              name="subject"

              value={form.subject}

              onChange={handleChange}

              placeholder="Sujet"


              className="
              w-full
              bg-zinc-950
              border
              border-zinc-700
              rounded-lg
              px-4
              py-3
              outline-none
              focus:border-emerald-400
              "

            />





            <textarea

              name="message"

              value={form.message}

              onChange={handleChange}

              rows={6}

              placeholder="Votre message..."


              className="
              w-full
              bg-zinc-950
              border
              border-zinc-700
              rounded-lg
              px-4
              py-3
              outline-none
              resize-none
              focus:border-emerald-400
              "

            />





            {
              success &&

              <p className="text-green-400">

                {success}

              </p>
            }



            {
              error &&

              <p className="text-red-400">

                {error}

              </p>
            }





            <button

              disabled={loading}

              className="
              w-full
              bg-emerald-500
              hover:bg-emerald-600
              rounded-lg
              py-4
              font-semibold
              flex
              justify-center
              items-center
              gap-2
              transition
              disabled:opacity-50
              "

            >


              {
                loading
                ?
                <>
                  <Loader2
                    className="animate-spin"
                    size={20}
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