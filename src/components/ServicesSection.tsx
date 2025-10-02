import { useEffect, useRef, useState } from 'react';
import { Printer, Monitor, Type, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Printer,
    title: "Digital Printing",
    description: "High-quality digital printing solutions for banners, posters, brochures, and marketing materials with vibrant colors and sharp details."
  },
  {
    icon: Monitor,
    title: "Signboards",
    description: "Custom signboard manufacturing from concept to installation. Including acrylic, aluminum composite, and LED-illuminated signage solutions."
  },
  {
    icon: Type,
    title: "3D Lettering",
    description: "Premium dimensional lettering and logos crafted from various materials including acrylic, metal, and foam for maximum visual impact."
  },
  {
    icon: Zap,
    title: "LED Displays",
    description: "State-of-the-art LED display systems for indoor and outdoor applications with dynamic content management and weather-resistant designs."
  }
];

const ServicesSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            
            // Check if it's the header
            if (element.classList.contains('header-trigger')) {
              setHeaderVisible(true);
            } else {
              // It's a service card
              const index = parseInt(element.getAttribute('data-index') || '0');
              setVisibleItems(prev => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-observe]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 bg-gradient-subtle" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div 
          className={`text-center mb-20 fade-in-up header-trigger transition-all duration-1000 ${
            headerVisible ? 'visible' : ''
          }`}
          data-observe="true"
        >
          <h2 className="text-headline mb-6">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-subheading max-w-3xl mx-auto">
            Comprehensive printing and signage solutions designed to elevate your brand presence 
            and communicate your message with maximum impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isVisible = visibleItems.includes(index);
            
            return (
              <Card 
                key={service.title}
                data-index={index}
                data-observe="true"
                className={`bg-card border-border hover-lift glow-effect group transition-all duration-700 ${
                  isVisible ? 'fade-in-up visible' : 'fade-in-up'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;