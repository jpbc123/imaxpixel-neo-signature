import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">

              <span className="text-2xl font-bold">iMAX PIXEL</span>
            </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>No 11, Jalan Selat Selatan 22,
			Sobena Jaya, Pandamaran
			42000 Klang,
			Selangor Darul Ehsan</p>
                  <p>Malaysia</p>
                </div>
              </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/imaxpixel/" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">

			<div className="flex items-start space-x-3">
			<Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
			<div className="flex flex-col space-y-1">
				<a href="tel:+60338849755" className="text-muted-foreground hover:text-primary transition-smooth">
				+603 3884 9755
				</a>
				<a href="tel:+60338855538" className="text-muted-foreground hover:text-primary transition-smooth">
				+603 3885 5538
				</a>
				<a href="tel:+17008142311" className="text-muted-foreground hover:text-primary transition-smooth">
				1700 81 4231
				</a>
			</div>
			</div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:imaxpixel@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                  imaxpixel@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:sales@imaxpixel.com" className="text-muted-foreground hover:text-primary transition-smooth">
                  sales@imaxpixel.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p className="font-medium">Monday - Saturday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="text-muted-foreground ml-8">
                <p className="font-medium">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
		  
		  {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Digital Printing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Signboard Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">3D Lettering</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">LED Displays</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Vehicle Wraps</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Corporate Branding</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 iMAX PIXEL Sdn Bhd. All rights reserved. Redefining printing & signage in Malaysia.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;