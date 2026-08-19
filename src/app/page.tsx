import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Toolbox from "@/components/Toolbox";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

export default function Home() {
  return (
    <main>
      <AuroraBackground />
      <Navbar />
      <Hero />
      <About />
      <Toolbox />
      <Projects />
      <Experience />
      <Awards />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
