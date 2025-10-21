import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";
import logoImage from "@/assets/sarora-logo.jpg";

const Hero = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-2xl fade-in">
          <img 
            src={logoImage} 
            alt="Sarora Logo" 
            className="w-32 md:w-40 lg:w-48 mb-8 opacity-90"
          />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 tracking-tight">
            Sarora
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Coming Soon
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Elegant, everyday fine jewellery. Crafted in Scottsdale, designed to be worn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-delay">
            <Button 
              size="lg" 
              variant="default"
              onClick={scrollToWaitlist}
              className="text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--gold)/0.4)]"
            >
              Join the List
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://www.instagram.com/sarorajewelry', '_blank')}
              className="text-lg px-8 py-6"
            >
              Follow on Instagram
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Launching Winter 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
