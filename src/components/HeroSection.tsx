import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : ''}`}>
            <h1 className="text-hero">
              REDEFINING
              <br />
              <span className="hero-text-cycle">
                <span className="hero-text-item active">PRINTING</span>
                <span className="hero-text-item">& SIGNAGE</span>
              </span>
              <br />
              <span className="text-muted-foreground text-6xl md:text-7xl lg:text-8xl">
                IN MALAYSIA
              </span>
            </h1>
            
            <p className={`text-subheading max-w-3xl mx-auto ${isVisible ? 'animate-fade-up' : ''}`} 
               style={{ animationDelay: '0.2s' }}>
              Leading the industry with cutting-edge digital printing, premium signboards, 
              3D lettering, and innovative LED display solutions across Malaysia.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'animate-fade-up' : ''}`}
                 style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:scale-105 transition-spring text-lg px-8 py-6 glow-effect group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary transition-smooth text-lg px-8 py-6 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
                View Our Work
              </Button>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isVisible ? 'animate-fade-in' : ''}`}
               style={{ animationDelay: '0.8s' }}>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;