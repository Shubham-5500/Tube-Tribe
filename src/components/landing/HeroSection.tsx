
import { ArrowRight, Star, Play, Users, Zap, BarChart3, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setScrollY(window.scrollY * 0.3); // Parallax effect multiplier
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative pt-32 pb-16 md:py-40 overflow-hidden">
      {/* Background parallax decorations */}
      <div 
        className="absolute top-20 right-[15%] w-72 h-72 bg-tribe-purple/20 rounded-full filter blur-3xl animate-blob"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute top-40 left-[15%] w-72 h-72 bg-tribe-pink/20 rounded-full filter blur-3xl animate-blob animation-delay-2"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 right-[30%] w-72 h-72 bg-tribe-blue/20 rounded-full filter blur-3xl animate-blob animation-delay-4"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      
      {/* Floating elements with parallax */}
      <div 
        className="absolute top-1/4 right-[20%] animate-float"
        style={{ transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * 0.05}deg)` }}
      >
        <Star className="text-tribe-pink w-8 h-8 opacity-80" />
      </div>
      <div 
        className="absolute bottom-1/3 left-[20%] animate-float animation-delay-2"
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * -0.03}deg)` }}
      >
        <Play className="text-tribe-blue w-8 h-8 opacity-80" />
      </div>
      <div 
        className="absolute top-1/3 left-[30%] animate-spin-slow"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      >
        <Users className="text-tribe-purple w-8 h-8 opacity-80" />
      </div>
      <div 
        className="absolute bottom-1/4 right-[30%] animate-pulse-slow"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <Zap className="text-tribe-pink w-8 h-8 opacity-80" />
      </div>
      <div 
        className="absolute top-1/2 right-[15%] animate-float animation-delay-4"
        style={{ transform: `translateY(${scrollY * -0.25}px)` }}
      >
        <BarChart3 className="text-tribe-blue w-8 h-8 opacity-80" />
      </div>
      <div 
        className="absolute top-2/3 left-[10%] animate-pulse-slow animation-delay-2"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <MessageSquare className="text-tribe-purple w-8 h-8 opacity-80" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text animate-text-gradient">
            Unite. Create. Inspire.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-foreground/80 max-w-2xl mx-auto animate-fade-in">
            Join the premier community where YouTubers connect, collaborate, and grow together with cutting-edge tools and real-time engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up">
            <Link to="/register">
              <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 hover:scale-105 transition-transform">
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/discover">
              <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                Explore Creators
              </Button>
            </Link>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 card-animation animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Previews</h3>
              <p className="text-foreground/70">Preview videos with instant hover playback and smart recommendations.</p>
            </div>
            
            <div className="glass-effect p-6 card-animation animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Creator Dashboards</h3>
              <p className="text-foreground/70">Customizable analytics and insights to track your growth and engagement.</p>
            </div>
            
            <div className="glass-effect p-6 card-animation animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration Tools</h3>
              <p className="text-foreground/70">Find perfect partners and streamline your creative collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
