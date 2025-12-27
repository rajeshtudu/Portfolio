import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import MiniGame from "./components/MiniGame";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="min-h-screen text-(--text)">
      <Navbar />
      <main className="mx-auto max-w-5xl px-5">
        <Hero />
        <WorkExperience />
        <Projects />
        <Skills />
        <Certifications />
        <MiniGame />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}