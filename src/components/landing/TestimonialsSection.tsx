
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    handle: "@techwithalex",
    image: "https://i.pravatar.cc/150?img=1",
    text: "Tube Tribe completely changed how I collaborate with other creators. I've found amazing partners and grown my channel by 200% in just 3 months!",
    stars: 5,
    subscribers: "1.2M"
  },
  {
    id: 2,
    name: "Mia Johnson",
    handle: "@miacooks",
    image: "https://i.pravatar.cc/150?img=5",
    text: "The AI idea generator helped me overcome creative blocks. Now I always have fresh content ideas that my audience loves!",
    stars: 5,
    subscribers: "845K"
  },
  {
    id: 3,
    name: "Jamal Wright",
    handle: "@travelwithjamal",
    image: "https://i.pravatar.cc/150?img=8",
    text: "I love how easy it is to connect with other travel creators. The dashboard analytics have helped me understand what content performs best.",
    stars: 5,
    subscribers: "2.4M"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setScrollY(window.scrollY * 0.05);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const next = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000); // Change testimonial every 8 seconds
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-tribe-purple/10 blur-3xl"
        style={{ transform: `translateY(${scrollY * 2}px)` }}
      ></div>
      <div 
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-tribe-pink/10 blur-3xl"
        style={{ transform: `translateY(${scrollY * -1.5}px)` }}
      ></div>
      
      <div className="container px-4 mx-auto">
        <div 
          className="text-center mb-12"
          style={{ 
            transform: `translateY(${scrollY * -1}px)`,
            opacity: sectionRef.current && sectionRef.current.getBoundingClientRect().top < window.innerHeight * 0.8 ? 1 : 0,
            transition: 'opacity 0.8s ease-out'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by YouTube Creators</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Hear what some of our community members have to say about their Tube Tribe experience.
          </p>
        </div>
        
        <div 
          className="max-w-4xl mx-auto px-4"
          style={{ 
            transform: `translateY(${scrollY * -0.5}px)`,
            opacity: sectionRef.current && sectionRef.current.getBoundingClientRect().top < window.innerHeight * 0.7 ? 1 : 0,
            transition: 'opacity 0.8s ease-out 0.3s'
          }}
        >
          <div className="glass-effect p-6 md:p-10 relative">
            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4">
              <div className="w-20 h-20 rounded-full bg-tribe-purple/30 animate-pulse-slow"></div>
            </div>
            <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
              <div className="w-16 h-16 rounded-full bg-tribe-pink/30 animate-pulse-slow"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6 relative">
              <div className={`transition-all duration-300 ${isAnimating ? (direction === 'next' ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10') : 'opacity-100 translate-x-0'}`}>
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
                />
              </div>
              <div className={`transition-all duration-300 delay-100 ${isAnimating ? (direction === 'next' ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10') : 'opacity-100 translate-x-0'}`}>
                <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-foreground/70">{testimonials[currentIndex].handle}</p>
                <div className="flex items-center mt-1">
                  {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-tribe-purple text-tribe-purple" />
                  ))}
                  <span className="ml-2 text-sm text-foreground/70">{testimonials[currentIndex].subscribers} subscribers</span>
                </div>
              </div>
            </div>
            
            <blockquote className={`text-xl md:text-2xl mb-8 italic transition-all duration-300 delay-200 ${isAnimating ? (direction === 'next' ? 'opacity-0 -translate-y-10' : 'opacity-0 translate-y-10') : 'opacity-100 translate-y-0'}`}>
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="flex justify-between">
              <Button variant="outline" size="icon" onClick={prev} className="rounded-full hover:scale-110 transition-transform">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > currentIndex ? 'next' : 'prev');
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentIndex(i);
                        setIsAnimating(false);
                      }, 300);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-tribe-purple scale-125' : 'bg-foreground/20 hover:bg-foreground/40'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={next} className="rounded-full hover:scale-110 transition-transform">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
