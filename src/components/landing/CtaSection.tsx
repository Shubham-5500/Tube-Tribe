import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

export function CtaSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: ctaRef, inView } = useInView({ threshold: 0.3 });
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setScrollY(window.scrollY * 0.1);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div ref={sectionRef} className="py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            ref={ctaRef} 
            className={`glass-effect p-8 md:p-12 relative overflow-hidden transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
          >
            <div 
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-tribe-purple/30 blur-3xl"
              style={{ transform: `translateY(${scrollY * -1.5}px) rotate(${scrollY * 0.03}deg)` }}
            ></div>
            <div 
              className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-tribe-pink/30 blur-3xl"
              style={{ transform: `translateY(${scrollY * 1.2}px) rotate(${scrollY * -0.02}deg)` }}
            ></div>
            
            {/* Animated sparkles */}
            <div className="absolute right-10 top-10 animate-float">
              <Sparkles className="h-6 w-6 text-tribe-purple/60" />
            </div>
            <div className="absolute left-16 bottom-12 animate-float animation-delay-2">
              <Sparkles className="h-4 w-4 text-tribe-pink/60" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">Ready to join our tribe?</h2>
            <p className="text-xl text-foreground/80 mb-8 relative z-10 max-w-2xl mx-auto">
              Start connecting with creators, grow your channel, and take your YouTube journey to the next level.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/register">
                <Button size="lg" className="gradient-bg hover:opacity-90 text-lg px-8 hover:scale-105 transition-all">
                  Join Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-all">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
