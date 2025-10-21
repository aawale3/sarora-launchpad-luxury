import { Gem, MapPin, Sparkles, Package } from "lucide-react";

const pillars = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "14k and 18k gold, conflict-free diamonds, and ethically sourced gemstones"
  },
  {
    icon: MapPin,
    title: "Designed in Scottsdale",
    description: "Rooted in Arizona's refined desert luxury and minimalist aesthetic"
  },
  {
    icon: Sparkles,
    title: "Everyday Luxury",
    description: "Pieces designed to be worn daily, not saved for special occasions"
  },
  {
    icon: Package,
    title: "Exclusive Drops",
    description: "Limited availability with carefully curated collections"
  }
];

const Pillars = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Why Choose Sarora
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-secondary/10">
                <pillar.icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif mb-3 tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
