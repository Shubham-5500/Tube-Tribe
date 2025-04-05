
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-20 mt-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Creators</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover talented YouTubers across different niches and connect with content creators that inspire you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center">
            <Input 
              type="text" 
              placeholder="Search creators, niches, topics..." 
              className="pl-10 pr-4 py-6 text-lg rounded-lg border-2 focus:border-primary"
            />
            <Search className="absolute left-3 text-foreground/50" size={20} />
            <Button className="tube-button absolute right-1.5 py-5" size="sm">
              Search
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Creator cards - these would be populated from a database */}
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="tube-card p-6 transition-all hover:shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-tube-purple to-tube-magenta mr-4"></div>
                <div>
                  <h3 className="font-bold text-lg">Creator Name {index + 1}</h3>
                  <p className="text-sm text-foreground/70">1.2M Subscribers</p>
                </div>
              </div>
              <p className="mb-4 text-foreground/80">
                Creating amazing videos about technology, lifestyle, and travel experiences around the world.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Tech</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Travel</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Lifestyle</span>
              </div>
              <Button variant="outline" className="w-full">View Profile</Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="mx-auto">
            Load More
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
