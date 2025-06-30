
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
