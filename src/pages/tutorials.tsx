
import { BasicLayout } from "../components/layouts/BasicLayout";
import { Card, CardContent } from "../components/ui/card";
import { ExternalLink, PlayCircle } from "lucide-react";

const Tutorials = () => {
  const tutorials = [
    {
      title: "Finding Your First Collaboration Partner",
      duration: "5:32",
      thumbnail: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=500&h=300"
    },
    {
      title: "Setting Up Your Creator Profile for Success",
      duration: "8:15",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500&h=300"
    },
    {
      title: "Collaborating Across Different Content Niches",
      duration: "12:47",
      thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=500&h=300"
    },
    {
      title: "Analytics: Measuring Collaboration Success",
      duration: "9:23",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=300"
    },
    {
      title: "Remote Collaboration Tools and Techniques",
      duration: "7:58",
      thumbnail: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=500&h=300"
    },
    {
      title: "Creating a Collaboration Agreement",
      duration: "6:12",
      thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=500&h=300"
    }
  ];

  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Creator Tutorials</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Learn how to make the most of TubeTribe with our collection of tutorials and guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:border-primary/50 transition-all">
              <div className="relative h-40 bg-muted">
                <img src={tutorial.thumbnail} alt={tutorial.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white opacity-90" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {tutorial.duration}
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-medium text-lg mb-2">{tutorial.title}</h3>
                <a href="#" className="text-primary inline-flex items-center text-sm hover:underline">
                  Watch tutorial <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </BasicLayout>
  );
};

export default Tutorials;
