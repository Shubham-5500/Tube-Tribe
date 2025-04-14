
import { CheckCircle, Video, BarChart3, MessagesSquare, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

export function FeaturesSection() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const { ref: featureRef1, inView: feature1InView } = useInView({ threshold: 0.2 });
  const { ref: featureRef2, inView: feature2InView } = useInView({ threshold: 0.2 });
  const { ref: featureRef3, inView: feature3InView } = useInView({ threshold: 0.2 });
  const { ref: featureRef4, inView: feature4InView } = useInView({ threshold: 0.2 });
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setScrollY(window.scrollY * 0.1); // Parallax effect multiplier
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-tribe-purple/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 2}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-tribe-pink/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * -1.5}px)` }}
      ></div>
      
      <div className="container px-4 mx-auto">
        <div 
          ref={headingRef} 
          className="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000"
          style={{ 
            opacity: sectionRef.current && sectionRef.current.getBoundingClientRect().top < window.innerHeight * 0.8 ? 1 : 0,
            transform: sectionRef.current && sectionRef.current.getBoundingClientRect().top < window.innerHeight * 0.8 ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need To Grow</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Tube Tribe provides all the tools creators need to elevate their YouTube presence and build meaningful connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div 
            ref={featureRef1} 
            className={`flex gap-4 items-start transition-all duration-1000 ${feature1InView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-1">
              <Video className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Smart Video Feed</h3>
              <p className="text-foreground/70 mb-3">
                Discover trending content and preview videos with a simple hover. Our intelligent algorithm surfaces relevant content.
              </p>
              <ul className="space-y-2">
                {["Hover preview with auto-play", "Trending and personalized tabs", "Smart filters and search"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-tribe-purple mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div 
            ref={featureRef2} 
            className={`flex gap-4 items-start transition-all duration-1000 delay-200 ${feature2InView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-1">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Custom Dashboards</h3>
              <p className="text-foreground/70 mb-3">
                Track your growth with beautiful, customizable dashboard panels. Drag and drop to create your perfect layout.
              </p>
              <ul className="space-y-2">
                {["Subscriber analytics", "Engagement metrics", "Growth visualization", "Drag & drop interface"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-tribe-purple mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div 
            ref={featureRef3} 
            className={`flex gap-4 items-start transition-all duration-1000 delay-400 ${feature3InView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-1">
              <MessagesSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Real-time Collaboration</h3>
              <p className="text-foreground/70 mb-3">
                Connect with like-minded creators through our suite of real-time collaboration tools.
              </p>
              <ul className="space-y-2">
                {["Live chat rooms", "Idea boards", "Collaboration matching", "Project management"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-tribe-purple mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div 
            ref={featureRef4} 
            className={`flex gap-4 items-start transition-all duration-1000 delay-600 ${feature4InView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 mt-1">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Tools</h3>
              <p className="text-foreground/70 mb-3">
                Unleash your creativity with our suite of AI tools designed specifically for content creators.
              </p>
              <ul className="space-y-2">
                {["Video idea generation", "Title optimization", "Thumbnail analysis", "Content planning"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-tribe-purple mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
