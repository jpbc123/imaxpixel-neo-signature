import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <a href="/">
              <img src="/src/assets/imaxpixel-logo.png" alt="iMAX PIXEL" className="h-16 w-auto"/>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">
              Portfolio
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </div>
          
          {/* Desktop Get Quote Button */}
          <button className="hidden md:block border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md transition-all duration-300">
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md transition-all duration-300 w-full mt-4">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;