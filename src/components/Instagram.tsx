import { Instagram as InstagramIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Instagram = () => {
  return (
    <section className="section-padding">
      <div className="container-custom text-center">
        <div className="fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888]">
            <InstagramIcon className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get behind-the-scenes glimpses, design inspiration, and exclusive sneak peeks on Instagram
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open('https://www.instagram.com/sarorajewelry', '_blank')}
            className="text-lg px-8 py-6"
          >
            @sarorajewelry
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
