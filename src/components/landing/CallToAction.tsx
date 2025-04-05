
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="tube-card overflow-hidden">
          <div className="relative p-8 md:p-12">
            {/* Background gradient blur */}
            <div className="absolute -inset-1/2 bg-gradient-to-r from-tube-purple/20 to-tube-magenta/20 blur-3xl opacity-50 animate-pulse-glow" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Tribe?</h2>
                <p className="text-foreground/80 mb-0 md:mb-6 max-w-xl">
                  Connect with creators, grow your audience, and unlock powerful tools designed specifically for YouTubers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="tube-button text-base min-w-[140px]">
                    Get Started
                  </Button>
                </Link>
                <Link to="/features">
                  <Button size="lg" variant="outline" className="text-base min-w-[140px]">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
