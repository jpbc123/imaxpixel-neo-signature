import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Animated Counter Hook
const useAnimatedCounter = (endValue: number, duration: number = 2000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    if (!shouldStart) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      countRef.current = Math.floor(easeOutQuart * endValue);
      setCount(countRef.current);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [endValue, duration, shouldStart]);

  return count;
};

// Individual Counter Component
const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  shouldStart = false, 
  duration = 2000,
  delay = 0 
}: { 
  value: string; 
  suffix?: string; 
  shouldStart?: boolean; 
  duration?: number;
  delay?: number;
}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  
  // Extract number from string (e.g., "600+" -> 600)
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix_from_value = value.replace(/\d/g, ''); // Extract non-digits (like "+")
  
  const count = useAnimatedCounter(numericValue, duration, startAnimation);

  useEffect(() => {
    if (shouldStart) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [shouldStart, delay]);

  return (
    <span>
      {count.toLocaleString()}{suffix_from_value || suffix}
    </span>
  );
};

// Updated stats with numeric values for easier processing
const stats = [
  { number: "600+", label: "Production" },
  { number: "15+", label: "Years Experience" },
  { number: "1200+", label: "Satisfied Customers" },
  { number: "40+", label: "Workers" }
];

const AboutSection = () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const [visibleElements, setVisibleElements] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const elementId = element.getAttribute('data-element');
            
            if (elementId) {
              setVisibleElements(prev => [...new Set([...prev, elementId])]);
            }
            
            // Trigger counters when stats section is visible
            if (element.classList.contains('stats-trigger')) {
              setCountersVisible(true);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-element]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 
              className={`text-headline fade-in-up transition-all duration-1000 ${
                visibleElements.includes('title') ? 'visible' : ''
              }`}
              data-element="title"
            >
              ABOUT
              <br />
              <span className="text-primary">US</span>

            </h2>
            
            <div 
              className={`space-y-6 text-lg leading-relaxed text-muted-foreground fade-in-up transition-all duration-1000 delay-200 ${
                visibleElements.includes('content') ? 'visible' : ''
              }`}
              data-element="content"
            >
              <p>
                Our story began in 2008 in Selangor, Malaysia. iMax Pixel Sdn Bhd was born to cater to all major printing solutions, specializing in Digital Inkjet Printing, UV Inkjet Printing and other media support for all advertising uses.
              </p>
              
              <p>
				Where visibility and branding are the keys to your business, at iMax Pixel, we print possibilities, fabricate imaginations, and bring branding visibility to a whole new level. Responding to the demand for vibrant colors and eye-catching graphics in advertising, iMax Pixel gives you the highest quality inkjet products including Banners, Buntings, Large Format Stickers, Roll Up Stands, Billboards, Signboards, Posters, Lightboard Displays, Wall Murals, Backdrops, Wallpaper, Vehicle Graphics, Hoardings, Building Coverings and many more.
              </p>
              
              <p>
                From conceptual design to final installation, we provide end-to-end solutions that help businesses communicate their brand message effectively and stand out in today's competitive marketplace.
              </p>
            </div>
          </div>
          
          <div 
            className="grid grid-cols-2 gap-6 stats-trigger"
            data-element="stats"
          >
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className={`bg-card border-border hover-lift group fade-in-up transition-all duration-700 ${
                  visibleElements.includes('stats') ? 'visible' : ''
                }`}
                style={{ 
                  transitionDelay: `${400 + (index * 100)}ms`
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-black text-primary mb-2 transition-all duration-300 group-hover:scale-110">
                    <AnimatedCounter 
                      value={stat.number}
                      shouldStart={countersVisible}
                      duration={2500}
                      delay={index * 200} // Stagger the animations
                    />
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;