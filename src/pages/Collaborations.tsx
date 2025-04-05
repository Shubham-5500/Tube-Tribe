
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, Lightbulb } from "lucide-react";

const Collaborations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-20 mt-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Collaborations</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Connect with other creators, share ideas, and build something amazing together.
          </p>
        </div>

        <Tabs defaultValue="find" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="find" className="text-base py-3">
              <Users className="mr-2 h-4 w-4" /> Find Creators
            </TabsTrigger>
            <TabsTrigger value="chat" className="text-base py-3">
              <MessageSquare className="mr-2 h-4 w-4" /> Chat Rooms
            </TabsTrigger>
            <TabsTrigger value="ideas" className="text-base py-3">
              <Lightbulb className="mr-2 h-4 w-4" /> Idea Boards
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="find" className="tube-card p-6">
            <h2 className="text-2xl font-bold mb-6">Find Collaboration Partners</h2>
            
            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <label className="font-medium">Content Category</label>
                <div className="flex flex-wrap gap-2">
                  {["Gaming", "Tech", "Beauty", "Travel", "Education", "Entertainment", "Fitness", "Food"].map((category) => (
                    <div key={category} className="flex items-center">
                      <Button variant="outline" size="sm" className="mr-2">
                        {category}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-medium">Subscriber Range</label>
                <div className="flex flex-wrap gap-2">
                  {["0-5K", "5K-50K", "50K-500K", "500K-1M", "1M+"].map((range) => (
                    <div key={range} className="flex items-center">
                      <Button variant="outline" size="sm" className="mr-2">
                        {range}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-medium">Collaboration Type</label>
                <div className="flex flex-wrap gap-2">
                  {["Guest Appearance", "Joint Video", "Shoutout", "Challenge", "Series", "Live Stream"].map((type) => (
                    <div key={type} className="flex items-center">
                      <Button variant="outline" size="sm" className="mr-2">
                        {type}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <Button className="tube-button w-full sm:w-auto">Find Matches</Button>
          </TabsContent>
          
          <TabsContent value="chat" className="tube-card p-6">
            <h2 className="text-2xl font-bold mb-6">Collaboration Chat Rooms</h2>
            <div className="grid gap-4 mb-8">
              {["Tech Creators Hub", "Travel Vloggers Unite", "Gaming Crossovers", "Educational Content Creators"].map((room) => (
                <div key={room} className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <h3 className="font-semibold">{room}</h3>
                    <p className="text-sm text-foreground/70">42 active creators</p>
                  </div>
                  <Button>Join Room</Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full sm:w-auto">Create New Room</Button>
          </TabsContent>
          
          <TabsContent value="ideas" className="tube-card p-6">
            <h2 className="text-2xl font-bold mb-6">Collaboration Idea Boards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {["Summer Challenge Ideas", "Cross-Channel Series Concepts", "Holiday Special Planning", "Trending Topics Brainstorm"].map((board) => (
                <div key={board} className="p-4 border rounded-lg bg-gradient-to-br from-background to-muted hover:shadow-md transition-all">
                  <h3 className="font-semibold mb-2">{board}</h3>
                  <p className="text-sm text-foreground/70 mb-4">12 ideas · 8 contributors</p>
                  <Button variant="outline" size="sm">View Board</Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full sm:w-auto">Create New Board</Button>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Collaborations;
