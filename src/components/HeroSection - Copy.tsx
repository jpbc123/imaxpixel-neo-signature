import { useEffect, useState } from 'react';

const CyclingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const texts = ['PRINTING', '& SIGNAGE'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 300); // Half of transition duration
      
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <span 
      className={`inline-block transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform -translate-y-4'
      }`}
    >
      {texts[currentIndex]}
    </span>
  );
};

// Updated HeroSection component
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
              <CyclingText />
              <br />
              <span className="text-muted-foreground text-6xl md:text-7xl lg:text-8xl">
                IN MALAYSIA
              </span>
            </h1>
            
            {/* Rest of your component stays the same */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;