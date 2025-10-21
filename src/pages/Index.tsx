import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pillars from "@/components/Pillars";
import Waitlist from "@/components/Waitlist";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Pillars />
      <Waitlist />
      <Instagram />
      <Footer />
    </main>
  );
};

export default Index;
