import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About/>

      <Skills/>

      <section
        id="projects"
        className="min-h-screen bg-zinc-900 flex items-center justify-center text-white"
      >
        PROJECTS
      </section>

      <section
        id="contact"
        className="min-h-screen bg-zinc-950 flex items-center justify-center text-white"
      >
        CONTACT
      </section>
    </>
  );
}

export default App;