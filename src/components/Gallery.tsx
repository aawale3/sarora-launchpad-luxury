import lifestyle1 from "@/assets/lifestyle-1.jpg";
import detailRings from "@/assets/detail-rings.jpg";

const Gallery = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Curated Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece tells a story of refined craftsmanship and timeless design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="fade-in group">
            <div className="aspect-square overflow-hidden rounded-sm bg-muted">
              <img 
                src={lifestyle1} 
                alt="Delicate gold bracelet and ring in luxury Scottsdale setting" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="fade-in-delay group">
            <div className="aspect-square overflow-hidden rounded-sm bg-muted">
              <img 
                src={detailRings} 
                alt="Close-up of 14k gold stacking rings with diamonds" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
