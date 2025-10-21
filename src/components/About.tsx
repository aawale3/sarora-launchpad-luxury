import lifestyle2 from "@/assets/lifestyle-2.jpg";

const About = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Luxury for Every Day
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Sarora is a fine jewellery brand rooted in the refined elegance of Scottsdale, Arizona. 
              We create pieces that marry timeless sophistication with everyday wearability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each piece is thoughtfully designed to become part of your daily ritual—jewellery 
              that feels as natural as it looks exceptional, crafted from the finest materials 
              and inspired by the warm, minimalist beauty of the desert.
            </p>
          </div>
          <div className="fade-in-delay">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src={lifestyle2} 
                alt="Elegant Sarora jewelry worn by model in natural light" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
