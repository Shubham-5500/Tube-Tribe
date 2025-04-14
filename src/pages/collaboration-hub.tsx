
import { BasicLayout } from "../components/layouts/BasicLayout";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { MessageSquare, Users, Calendar, Filter, Search, ArrowRight } from "lucide-react";

const CollaborationHub = () => {
  // Dummy data for collaboration opportunities
  const collaborationOpportunities = [
    {
      id: 1,
      creator: "TechReviewer",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=40&h=40",
      title: "Looking for tech enthusiasts for smartphone comparison video",
      description: "Planning a flagship smartphone comparison video. Need someone with access to latest Android devices to collaborate.",
      niche: "Tech",
      subscribers: "450K",
      deadline: "1 week",
      location: "Remote"
    },
    {
      id: 2,
      creator: "FitnessJourney",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=40&h=40",
      title: "30-Day Fitness Challenge Collaboration",
      description: "Looking for nutrition experts to partner on a 30-day fitness transformation challenge series.",
      niche: "Fitness",
      subscribers: "280K",
      deadline: "2 weeks",
      location: "Los Angeles"
    },
    {
      id: 3,
      creator: "TravelWithMe",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=40&h=40",
      title: "Europe Travel Series Co-Host Wanted",
      description: "Planning a 5-part series exploring hidden gems in Europe. Looking for a local guide or fellow travel creator.",
      niche: "Travel",
      subscribers: "620K",
      deadline: "1 month",
      location: "Europe"
    },
    {
      id: 4,
      creator: "CookingMasterclass",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=40&h=40",
      title: "International Cuisine Exchange",
      description: "Want to create a series where we teach each other traditional recipes from our cultures.",
      niche: "Cooking",
      subscribers: "390K",
      deadline: "3 weeks",
      location: "Remote"
    }
  ];

  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Collaboration Hub</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Discover collaboration opportunities or create your own to find the perfect partner for your next video.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 bg-background/50 backdrop-blur-sm border border-border rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                type="search"
                placeholder="Search for collaborations..."
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button className="gradient-bg hover:opacity-90">Search</Button>
            </div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {["All Categories", "Tech", "Gaming", "Beauty", "Fitness", "Travel", "Food", "Education"].map((category, index) => (
            <Button 
              key={index} 
              variant={index === 0 ? "default" : "outline"} 
              size="sm"
              className={index === 0 ? "gradient-bg hover:opacity-90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Collaboration Opportunities */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Active Opportunities</h2>
            <Button variant="link" className="flex items-center text-primary">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="border border-border hover:border-primary/50 transition-all transform hover:-translate-y-1 duration-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-border">
                        <img 
                          src={opportunity.avatar} 
                          alt={opportunity.creator} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{opportunity.creator}</h3>
                        <p className="text-xs text-foreground/60">{opportunity.subscribers} subscribers</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-2 bg-primary/10 text-primary border-primary/30">
                      {opportunity.niche}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <h4 className="text-lg font-medium mb-2">{opportunity.title}</h4>
                  <p className="text-foreground/70 text-sm mb-4">{opportunity.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <div className="flex items-center text-foreground/60 bg-background rounded-full px-3 py-1 border border-border">
                      <Calendar className="h-3 w-3 mr-1" />
                      Deadline: {opportunity.deadline}
                    </div>
                    <div className="flex items-center text-foreground/60 bg-background rounded-full px-3 py-1 border border-border">
                      <Users className="h-3 w-3 mr-1" />
                      {opportunity.location}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <Button variant="outline" className="w-full mr-2">View Details</Button>
                  <Button className="w-full gradient-bg hover:opacity-90">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Create Your Own */}
        <div className="bg-primary/5 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-semibold mb-3">Can't find what you're looking for?</h2>
          <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
            Create your own collaboration opportunity and let other creators find you.
          </p>
          <Button size="lg" className="gradient-bg hover:opacity-90">
            Post Collaboration Opportunity
          </Button>
        </div>
      </div>
    </BasicLayout>
  );
};

export default CollaborationHub;
