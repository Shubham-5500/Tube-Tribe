
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { 
  Sparkles,
  VideoIcon,
  PenTool,
  TrendingUp,
  BarChart,
  Calendar
} from "lucide-react";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-20 mt-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Creator Tools</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Boost your content creation with our powerful AI-powered tools designed specifically for YouTubers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-md transition-all">
            <VideoIcon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Video Ideas</h3>
            <p className="text-foreground/70 mb-4">
              Generate fresh video concepts tailored to your channel's niche and audience interests.
            </p>
            <Button className="tube-button w-full">Try Now</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-all">
            <PenTool className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Script Assistant</h3>
            <p className="text-foreground/70 mb-4">
              Craft engaging scripts with AI-powered suggestions and readability analysis.
            </p>
            <Button className="tube-button w-full">Try Now</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-all">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Trend Analyzer</h3>
            <p className="text-foreground/70 mb-4">
              Stay ahead of trends with AI analysis of popular topics in your content category.
            </p>
            <Button className="tube-button w-full">Try Now</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-all">
            <BarChart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Analytics Helper</h3>
            <p className="text-foreground/70 mb-4">
              Get insights and recommendations based on your channel's performance metrics.
            </p>
            <Button className="tube-button w-full">Try Now</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-all">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Content Calendar</h3>
            <p className="text-foreground/70 mb-4">
              Plan and schedule your content with an intuitive drag-and-drop calendar interface.
            </p>
            <Button className="tube-button w-full">Try Now</Button>
          </Card>
          
          <Card className="p-6 hover:shadow-md transition-all">
            <Sparkles className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Thumbnail Designer</h3>
            <p className="text-foreground/70 mb-4">
              Create eye-catching thumbnails with AI-enhanced design tools and templates.
            </p>
            <Button className="tube-button w-full">Try Now</Button>
          </Card>
        </div>

        <div className="tube-card p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Sparkles className="mr-2 text-primary" /> AI Video Idea Generator
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Your Channel Category</label>
              <Input 
                type="text" 
                placeholder="e.g., Tech Reviews, Travel Vlogs, Gaming, Cooking..." 
                className="tube-input w-full"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Target Audience</label>
              <Input 
                type="text" 
                placeholder="e.g., Tech enthusiasts, Beginner cooks, Gamers ages 18-24..." 
                className="tube-input w-full"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Video Style Preferences</label>
              <Input 
                type="text" 
                placeholder="e.g., Tutorial, Review, Day-in-the-life, Challenge..." 
                className="tube-input w-full"
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Topics to Avoid</label>
              <Input 
                type="text" 
                placeholder="Any topics you don't want to cover..." 
                className="tube-input w-full"
              />
            </div>
            
            <Button className="tube-button w-full sm:w-auto">Generate Ideas</Button>
            
            <div className="mt-6 p-4 border rounded-lg bg-muted/30">
              <h3 className="font-medium mb-2">Generated Ideas</h3>
              <p className="text-sm text-foreground/70 italic">
                Ideas will appear here after generation. Try the generator to get creative video concepts customized for your channel!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
