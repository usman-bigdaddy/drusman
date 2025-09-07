// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Skills />
      <Contact />
    </>
  );
}
