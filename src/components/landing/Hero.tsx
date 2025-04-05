
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, Video } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Unite. Create. Inspire.
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent tube-gradient">
            The Ultimate Platform for <br className="hidden md:block" />
            <span className="inline-block mt-1">Content Creators</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-foreground/80 mb-10">
            Connect with fellow YouTubers, collaborate on projects, and take your 
            channel to the next level with AI-powered tools and a supportive community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/register">
              <Button size="lg" className="tube-button text-base">
                Join Now
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="text-base">
                Explore Creators
              </Button>
            </Link>
          </div>
          
          {/* Floating elements */}
          <div className="relative w-full max-w-5xl mx-auto h-64 md:h-96">
            {/* Center dashboard preview */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 md:w-96 h-48 md:h-64 tube-card p-4 z-20 animate-float">
              <div className="w-full h-full bg-muted rounded-md flex items-center justify-center">
                <span className="text-sm md:text-base text-muted-foreground">Dashboard Preview</span>
              </div>
            </div>
            
            {/* Video preview card */}
            <div className="absolute top-10 md:top-20 left-0 md:left-10 w-40 md:w-64 h-32 md:h-40 tube-card p-2 z-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-full h-full bg-muted rounded-md flex flex-col items-center justify-center">
                <Video className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground mb-2" />
                <span className="text-xs md:text-sm text-muted-foreground">Video Preview</span>
              </div>
            </div>
            
            {/* Chat card */}
            <div className="absolute top-20 right-0 md:right-10 w-40 md:w-64 h-32 md:h-40 tube-card p-2 z-10 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-full h-full bg-muted rounded-md flex flex-col items-center justify-center">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground mb-2" />
                <span className="text-xs md:text-sm text-muted-foreground">Live Chat</span>
              </div>
            </div>
            
            {/* Calendar card */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 md:w-64 h-28 md:h-36 tube-card p-2 z-10 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-full h-full bg-muted rounded-md flex flex-col items-center justify-center">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground mb-2" />
                <span className="text-xs md:text-sm text-muted-foreground">Events Calendar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
