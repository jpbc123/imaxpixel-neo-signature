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
  return (
    <section id="services" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-headline mb-6 animate-fade-up">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-subheading max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive printing and signage solutions designed to elevate your brand presence 
            and communicate your message with maximum impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card border-border hover-lift glow-effect animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;