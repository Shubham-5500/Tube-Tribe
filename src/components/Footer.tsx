
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">TubeTribe</span>
            </Link>
            <p className="mt-4 text-sm text-foreground/70">
              The premier community where YouTubers connect, collaborate, and grow together.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-tribe-purple">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-tribe-purple">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-tribe-purple">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-tribe-purple">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold">Platform</h3>
            <ul className="mt-4 space-y-2">
              {["Discover", "Collaboration Hub", "Community", "Features"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-foreground/70 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              {["Getting Started", "Tutorials", "API", "Help Center"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-foreground/70 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {["About", "Privacy", "Terms", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-foreground/70 hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-foreground/60 text-center">
            © {new Date().getFullYear()} Tube Tribe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
