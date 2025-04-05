
import { Camera, Code, Heart, Link, MessageSquare, Star, User, Video } from 'lucide-react';

const features = [
  {
    icon: <User className="h-6 w-6" />,
    title: "Creator Profiles",
    description: "Showcase your content, stats, and achievements with customizable profiles."
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Video Insights",
    description: "Get detailed analytics and instant feedback on your content."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Community Chat",
    description: "Connect with creators in real-time through group and private chats."
  },
  {
    icon: <Link className="h-6 w-6" />,
    title: "Collaboration Tools",
    description: "Find the perfect partners for your next big project."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "AI Assistants",
    description: "Generate video ideas, thumbnails, and scripts with our AI tools."
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Creator Dashboard",
    description: "Customizable workspace to manage all your creator activities."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Tools for Creators</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Everything you need to grow your channel and connect with the community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="tube-card p-6 flex flex-col glow-effect transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="h-12 w-12 mb-5 rounded-full tube-gradient flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
