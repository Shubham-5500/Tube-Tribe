import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine scroll direction for hiding/showing navbar
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setVisible(false); // Scrolling down & past threshold
      } else {
        setVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'bg-background/10 backdrop-blur-lg border-b border-border' : 'bg-transparent'}
        ${visible ? 'transform-none' : '-translate-y-full'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold gradient-text animate-text-gradient">TubeTribe</span>
            </Link>
          </div>
          
          <div className="hidden md:flex ml-8 items-center space-x-6 text-base">
            <Link to="/discover" className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200">
              Discover
            </Link>
            <Link to="/collaboration" className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200">
              Collaboration
            </Link>
            <Link to="/community" className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200">
              Community
            </Link>
            <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200">
              Dashboard
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">Sign in</Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="gradient-bg hover:opacity-90 hover:scale-105 transition-all">Join Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
