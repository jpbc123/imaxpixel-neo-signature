import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Happy Clients" },
  { number: "24/7", label: "Support Available" }
];

const AboutSection = () => {
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-headline animate-fade-up">
              MALAYSIA'S
              <br />
              <span className="text-primary">LEADING</span>
              <br />
              PRINTING SOLUTIONS
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground animate-fade-up" 
                 style={{ animationDelay: '0.2s' }}>
              <p>
                Established with a vision to revolutionize the printing and signage industry in Malaysia, 
                IMAX PIXEL has grown to become the trusted partner for businesses seeking premium quality 
                and innovative solutions.
              </p>
              
              <p>
                Our state-of-the-art facility in Port Klang combines cutting-edge technology with 
                skilled craftsmanship, ensuring every project meets the highest standards of quality 
                and durability.
              </p>
              
              <p>
                From conceptual design to final installation, we provide end-to-end solutions that 
                help businesses communicate their brand message effectively and stand out in today's 
                competitive marketplace.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="bg-card border-border hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`text-4xl font-black text-primary mb-2 ${countersVisible ? 'animate-fade-in' : ''}`}>
                    {stat.number}
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