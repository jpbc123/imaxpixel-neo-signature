const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-primary rounded-md"></div>
            <span className="text-xl font-bold">IMAX PIXEL</span>
          </div>
          
          <p className="text-muted-foreground text-center">
            © 2024 IMAX PIXEL. Redefining printing & signage in Malaysia.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;