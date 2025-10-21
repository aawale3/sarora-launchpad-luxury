import { Instagram } from "lucide-react";
import logoImage from "@/assets/sarora-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img 
              src={logoImage} 
              alt="Sarora Logo" 
              className="w-16 mb-3 mx-auto md:mx-0 opacity-80"
            />
            <h3 className="text-2xl font-serif mb-2">Sarora</h3>
            <p className="text-sm text-muted-foreground">
              Elegant fine jewellery from Scottsdale, Arizona
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://www.instagram.com/sarorajewelry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              aria-label="Follow Sarora on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@sarora.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              info@sarora.com
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sarora. All rights reserved. | Based in Scottsdale, AZ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
