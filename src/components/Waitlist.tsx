import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xwprjoak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Welcome to Sarora!",
          description: "You're on the list. Check your inbox for exclusive previews.",
        });
        setEmail("");
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at info@sarora.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Be the First to Know
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join our exclusive list for early access, preview collections, and a special launch offer.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-base"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="lg"
              disabled={isLoading}
              className="h-12 px-8 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--gold)/0.4)]"
            >
              {isLoading ? "Joining..." : "Join Now"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe anytime. First 50 subscribers get 10% off at launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
