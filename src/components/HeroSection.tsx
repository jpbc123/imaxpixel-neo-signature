import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);

  // Tagline variations - "Your Brand" stays static
  const taglines = [
    { prefix: "BRING", suffix: "TO LIFE" },
    { prefix: "ELEVATE", suffix: "" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate taglines every 3 seconds
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentTag = taglines[currentTagline];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[hsl(220,13%,8%)] via-[hsl(240,100%,9%)] to-[hsl(220,13%,8%)]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at top left, hsl(36 100% 50% / 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, hsl(14 100% 57% / 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at center, hsl(120 100% 25% / 0.05) 0%, transparent 50%)
          `
        }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main heading with staggered animation */}
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Rotating tagline with better spacing */}
          <div className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none text-center">
            {/* First line - animated prefix with effects */}
            <div className="text-hero mb-8">
              <span 
                key={`prefix-${currentTagline}`}
                className={`transition-all duration-500 ease-in-out ${
                  currentTagline === 0 ? 'led-effect' : 'embossed-effect'
                }`}
              >
                {currentTag.prefix}
              </span>
            </div>
            
            {/* Second line - static "Brand" (centered) */}
            <div className="text-white text-hero mb-8">
              YOUR BRAND
            </div>
            
            {/* Third line - animated suffix with effects */}
            <div className="text-hero">
              {currentTag.suffix && (
                <span 
                  key={`suffix-${currentTagline}`}
                  className="transition-all duration-500 ease-in-out led-effect"
                >
                  {currentTag.suffix}
                </span>
              )}
            </div>
          </div>
          
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Professional printing services for banners, signboards, 3D lit signages, and custom displays 
            that make your business stand out and attract customers.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/80 text-accent-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View Our Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Get Consultation
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}

      </div>

      {/* CSS for visual effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ledGlow {
            0%, 100% { 
              text-shadow: 
                0 0 5px #00ffff,
                0 0 10px #00ffff,
                0 0 15px #00ffff,
                0 0 20px #00ffff;
            }
            25% { 
              text-shadow: 
                0 0 5px #ff00ff,
                0 0 10px #ff00ff,
                0 0 15px #ff00ff,
                0 0 20px #ff00ff;
            }
            50% { 
              text-shadow: 
                0 0 5px #ffffff,
                0 0 10px #ffffff,
                0 0 15px #ffffff,
                0 0 20px #ffffff;
            }
            75% { 
              text-shadow: 
                0 0 5px #00ff00,
                0 0 10px #00ff00,
                0 0 15px #00ff00,
                0 0 20px #00ff00;
            }
          }

          @keyframes ledPulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }

          .led-effect {
            color: #ffffff;
            animation: ledGlow 3s ease-in-out infinite, ledPulse 1.5s ease-in-out infinite;
            text-shadow: 
              0 0 5px #00ffff,
              0 0 10px #00ffff,
              0 0 15px #00ffff,
              0 0 20px #00ffff;
          }

          .embossed-effect {
            background: linear-gradient(135deg, #ffd700 0%, #ffed4e 25%, #fff59d 50%, #ffed4e 75%, #ffd700 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 
              2px 2px 4px rgba(0,0,0,0.5),
              1px 1px 2px rgba(255,255,255,0.3),
              -1px -1px 2px rgba(0,0,0,0.3);
            filter: drop-shadow(0 0 3px rgba(255,215,0,0.3));
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
              opacity: 0.3;
            }
            50% {
              transform: translateY(-20px);
              opacity: 0.8;
            }
          }
        `
      }} />

    </section>
  );
};

export default HeroSection;