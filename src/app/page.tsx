import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Toolbox from "@/components/Toolbox";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Toolbox />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
