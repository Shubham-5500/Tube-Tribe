
import { BasicLayout } from "../components/layouts/BasicLayout";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Creator Discovery",
      description: "Find like-minded YouTubers based on niche, content style, and audience demographics.",
      icon: "search"
    },
    {
      title: "Collaboration Matchmaking",
      description: "Our algorithm suggests perfect collaboration partners based on content compatibility.",
      icon: "users"
    },
    {
      title: "Content Planning Tools",
      description: "Plan your collaborative videos with shared calendars and content boards.",
      icon: "calendar"
    },
    {
      title: "Analytics Integration",
      description: "Connect your YouTube analytics to track the success of your collaborations.",
      icon: "bar-chart"
    },
    {
      title: "Community Forums",
      description: "Discuss trending topics and share knowledge with fellow creators.",
      icon: "message-square"
    },
    {
      title: "Resource Library",
      description: "Access exclusive tutorials, templates, and resources to improve your content.",
      icon: "book-open"
    }
  ];

  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Platform Features</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover all the tools and features TubeTribe offers to help you grow your YouTube presence through meaningful collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 text-primary">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </BasicLayout>
  );
};

export default Features;
