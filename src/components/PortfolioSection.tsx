import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const projects = [
  {
    image: portfolio1,
    title: "Corporate Signage Excellence",
    category: "Corporate Signage",
    description: "Premium corporate identity signage featuring modern design elements and high-quality materials."
  },
  {
    image: portfolio2,
    title: "Digital LED Display",
    category: "LED Displays",
    description: "State-of-the-art LED display installation for retail environment with dynamic content capabilities."
  },
  {
    image: portfolio3,
    title: "Professional Vehicle Wrap",
    category: "Vehicle Wraps",
    description: "Full vehicle wrap design and installation featuring bold graphics and professional branding."
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-headline mb-6 animate-fade-up">
            OUR <span className="text-primary">WORK</span>
          </h2>
          <p className="text-subheading max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Showcasing our premium projects that demonstrate our commitment to quality, 
            innovation, and exceptional craftsmanship across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card border-border overflow-hidden hover-lift group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-spring"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <Badge 
                  className="absolute top-4 left-4 bg-primary text-primary-foreground"
                >
                  {project.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;