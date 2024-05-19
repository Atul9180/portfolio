import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Leadership />
      <Footer />
    </main>
  );
}
