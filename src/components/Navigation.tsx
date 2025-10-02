import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/imaxpixel-logo.png';

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
    <>
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
                <img src={logo} alt="iMAX PIXEL" className="h-16 w-auto"/>
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
        </div>
      </nav>

      {/* Mobile Menu Overlay - Covers entire screen including logo */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-40 md:hidden pt-24">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col space-y-6">
              <a 
                href="#services" 
                className="text-foreground hover:text-primary transition-smooth py-3 text-lg"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-smooth py-3 text-lg"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="text-foreground hover:text-primary transition-smooth py-3 text-lg"
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-smooth py-3 text-lg"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-3 rounded-md transition-all duration-300 w-full mt-4 text-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;