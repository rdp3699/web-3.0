import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero id='hero'/>
      <ProjectsSection id='projects'/>
      <AboutSection id='about'/>
      <ContactSection id='contact'/>
      <Footer/>
    </div>
  );
}
