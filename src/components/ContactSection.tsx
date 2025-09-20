import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Port Klang", "Selangor, Malaysia"],
    primary: "Port Klang, Selangor"
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+60 3-XXXX XXXX", "+60 1X-XXX XXXX"],
    primary: "+60 3-XXXX XXXX"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@imaxpixel.com", "sales@imaxpixel.com"],
    primary: "hello@imaxpixel.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 1:00 PM"],
    primary: "Mon - Fri: 9:00 AM - 6:00 PM"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-headline animate-fade-up">
              LET'S <span className="text-primary">WORK</span>
              <br />
              TOGETHER
            </h2>
            
            <p className="text-subheading animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Ready to bring your vision to life? Contact us today to discuss your 
              printing and signage needs. Our team of experts is standing by to help 
              you create something extraordinary.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-spring text-lg px-8 py-6 glow-effect animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Get Your Free Quote
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="bg-card border-border hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="font-bold text-foreground">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p 
                          key={i}
                          className={`text-sm ${i === 0 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
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

export default ContactSection;