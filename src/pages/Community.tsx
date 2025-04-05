
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  ThumbsUp, 
  Share2, 
  Bookmark, 
  Award,
  Calendar
} from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-20 mt-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join discussions, share your journey, and connect with fellow creators and viewers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Community Feed</h2>
              <Button variant="outline">Create Post</Button>
            </div>
            
            {/* Sample posts - these would be fetched from a database */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="tube-card p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-tube-purple to-tube-magenta mr-4"></div>
                  <div>
                    <h3 className="font-bold">Creator Name {index + 1}</h3>
                    <p className="text-sm text-foreground/70">Posted 2 hours ago</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="mb-4">
                    {index === 0 
                      ? "Just hit 100K subscribers! Thank you to everyone who's been supporting my channel. I couldn't have done it without this amazing community!" 
                      : "Working on a new video about advanced editing techniques. What specific areas would you like me to cover?"}
                  </p>
                  
                  {index === 1 && (
                    <div className="rounded-lg overflow-hidden mb-4 bg-muted aspect-video flex items-center justify-center">
                      <p className="text-foreground/50">Video Thumbnail Preview</p>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-foreground/70">
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <ThumbsUp size={18} />
                    <span>124</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <MessageSquare size={18} />
                    <span>32 comments</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Share2 size={18} />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Bookmark size={18} />
                    <span>Save</span>
                  </button>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">Load More Posts</Button>
          </div>
          
          <div className="space-y-6">
            <div className="tube-card p-6">
              <h3 className="text-xl font-bold mb-4">Community Leaderboard</h3>
              <div className="space-y-4">
                {["Creative Genius", "Helpful Mentor", "Consistent Creator", "Rising Star", "Community Favorite"].map((title, index) => (
                  <div key={title} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <div>
                        <p className="font-medium">Creator {index + 1}</p>
                        <p className="text-xs text-foreground/70">{title}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="text-amber-500 mr-1" />
                      <span className="text-sm">{500 - (index * 50)} XP</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">View Full Leaderboard</Button>
            </div>
            
            <div className="tube-card p-6">
              <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {[
                  "Creator Workshop: SEO for YouTube",
                  "Live Q&A with Top Creators",
                  "Editing Masterclass",
                  "Networking Mixer"
                ].map((event, index) => (
                  <div key={event} className="flex items-start">
                    <Calendar size={18} className="text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">{event}</p>
                      <p className="text-xs text-foreground/70">
                        {new Date(Date.now() + (index + 1) * 86400000 * 3).toLocaleDateString()} at 2:00 PM
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">See All Events</Button>
            </div>
            
            <div className="tube-card p-6">
              <h3 className="text-xl font-bold mb-4">Daily Challenge</h3>
              <div className="mb-4">
                <h4 className="font-medium">Create a 15-second intro</h4>
                <p className="text-sm text-foreground/70 mt-1">
                  Challenge yourself to create a catchy introduction for your videos that hooks viewers instantly.
                </p>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm">Reward: <span className="text-primary">50 XP</span></span>
                <span className="text-sm">24 hours left</span>
              </div>
              <Button className="tube-button w-full">Submit Entry</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
