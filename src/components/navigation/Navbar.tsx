
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full tube-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">TubeTribe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/explore" className="text-foreground/80 hover:text-primary transition-colors">
              Explore
            </Link>
            <Link to="/collaborations" className="text-foreground/80 hover:text-primary transition-colors">
              Collaborate
            </Link>
            <Link to="/community" className="text-foreground/80 hover:text-primary transition-colors">
              Community
            </Link>
            <Link to="/tools" className="text-foreground/80 hover:text-primary transition-colors">
              AI Tools
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/register">
              <Button className="tube-gradient">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
          <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-accordion-down">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/explore" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                to="/collaborations" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Collaborate
              </Link>
              <Link 
                to="/community" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                to="/tools" 
                className="px-4 py-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Tools
              </Link>
              <div className="pt-2 flex flex-col space-y-3 border-t border-border">
                <Link 
                  to="/login" 
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">Log In</Button>
                </Link>
                <Link 
                  to="/register" 
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full tube-gradient">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
