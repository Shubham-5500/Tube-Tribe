import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, LogOut } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-background/10 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }
        ${visible ? "transform-none" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold gradient-text animate-text-gradient">
                TubeTribe
              </span>
            </Link>
          </div>

          <div className="hidden md:flex ml-14 items-center space-x-6 text-base">
            <Link
              to="/discover"
              className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              Discover
            </Link>
            <Link
              to="/collaboration"
              className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              Collaboration
            </Link>
            <Link
              to="/community"
              className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              Community
            </Link>
            <Link
              to="/dashboard"
              className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
                    <img
                      src={
                        userData?.avatar || "https://i.pravatar.cc/150?img=12"
                      }
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium hidden lg:inline">
                    {userData?.username || "User"}
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600 hover:bg-red-100/10"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:scale-105 transition-transform"
                  >
                    Sign in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    size="sm"
                    className="gradient-bg hover:opacity-90 hover:scale-105 transition-all"
                  >
                    Join Now
                  </Button>
                </Link>
              </>
            )}
          </div>

          <div className="flex md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <Link
              to="/discover"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/discover")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Discover
            </Link>
            <Link
              to="/collaboration"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/collaboration")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Collaboration
            </Link>
            <Link
              to="/community"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/community")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/dashboard")
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    isActive("/profile")
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary mr-2">
                    <img
                      src={
                        userData?.avatar || "https://i.pravatar.cc/150?img=12"
                      }
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>My Profile</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-red-100/10"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <div className="pt-4 pb-2 flex space-x-2">
                <Link
                  to="/login"
                  className="w-1/2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Sign in
                  </Button>
                </Link>
                <Link
                  to="/register"
                  className="w-1/2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full gradient-bg hover:opacity-90">
                    Join Now
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
