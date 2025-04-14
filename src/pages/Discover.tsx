import { AuthLayout } from "@/components/layouts/AuthLayout";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample creator data
const initialCreators = [
  {
    id: 1,
    name: "Emma Thompson",
    username: "emmacreates",
    avatar: "https://i.pravatar.cc/150?img=1",
    followers: 45200,
    category: "Tech Reviews",
    description: "Tech enthusiast creating detailed product reviews and tutorials."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    username: "mikefilms",
    avatar: "https://i.pravatar.cc/150?img=4",
    followers: 128500,
    category: "Filmmaking",
    description: "Independent filmmaker sharing cinematic techniques and storytelling tips."
  },
  {
    id: 3,
    name: "Sarah Williams",
    username: "sarahcooks",
    avatar: "https://i.pravatar.cc/150?img=5",
    followers: 89300,
    category: "Cooking",
    description: "Chef bringing you easy and delicious recipes with a creative twist."
  },
  {
    id: 4,
    name: "James Wilson",
    username: "jamesgaming",
    avatar: "https://i.pravatar.cc/150?img=9",
    followers: 226700,
    category: "Gaming",
    description: "Gamer providing entertaining gameplay and insightful reviews."
  },
  {
    id: 5,
    name: "Olivia Chen",
    username: "oliviaart",
    avatar: "https://i.pravatar.cc/150?img=10",
    followers: 67800,
    category: "Art & Design",
    description: "Digital artist sharing creative processes and design tutorials."
  },
  {
    id: 6,
    name: "Daniel Kumar",
    username: "danielfitness",
    avatar: "https://i.pravatar.cc/150?img=12",
    followers: 185000,
    category: "Fitness",
    description: "Fitness coach helping you achieve your health and wellness goals."
  }
];

interface Creator {
  id: number;
  name: string;
  username: string;
  avatar: string;
  followers: number;
  category: string;
  description: string;
  following?: boolean;
}

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [creators, setCreators] = useState<Creator[]>([]);
  const [filteredCreators, setFilteredCreators] = useState<Creator[]>([]);

  // Initialize creators from localStorage or use initial data
  useEffect(() => {
    const storedCreators = localStorage.getItem("creators");
    if (storedCreators) {
      setCreators(JSON.parse(storedCreators));
    } else {
      setCreators(initialCreators);
    }
  }, []);

  // Update filtered creators when search term or creators change
  useEffect(() => {
    const filtered = creators.filter(creator => 
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCreators(filtered);
  }, [searchTerm, creators]);

  // Save creators to localStorage when they change
  useEffect(() => {
    if (creators.length > 0) {
      localStorage.setItem("creators", JSON.stringify(creators));
    }
  }, [creators]);

  const handleFollow = (id: number) => {
    const updatedCreators = creators.map(creator => {
      if (creator.id === id) {
        return { ...creator, following: !creator.following };
      }
      return creator;
    });
    setCreators(updatedCreators);
  };

  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count;
  };

  return (
    <AuthLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold">Discover Creators</h1>
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground/50" />
              <Input 
                placeholder="Search creators by name or category" 
                className="pl-10 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreators.length > 0 ? (
            filteredCreators.map(creator => (
              <Card key={creator.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                  <div className="p-6 pt-0 -mt-12">
                    <Avatar className="h-20 w-20 border-4 border-background">
                      <img src={creator.avatar} alt={creator.name} className="h-full w-full object-cover" />
                    </Avatar>
                    <div className="mt-2 flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg">{creator.name}</h3>
                        <p className="text-sm text-foreground/70">@{creator.username}</p>
                      </div>
                      <Button 
                        variant={creator.following ? "outline" : "default"}
                        className={creator.following ? "border-primary text-primary" : "gradient-bg hover:opacity-90"}
                        onClick={() => handleFollow(creator.id)}
                      >
                        {creator.following ? 'Following' : 'Follow'}
                      </Button>
                    </div>
                    <div className="mt-4">
                      <span className="inline-block bg-secondary text-foreground/80 rounded-full px-3 py-1 text-xs font-semibold mb-2">
                        {creator.category}
                      </span>
                      <span className="inline-block bg-secondary text-foreground/80 rounded-full px-3 py-1 text-xs font-semibold mb-2 ml-2">
                        {formatFollowers(creator.followers)} followers
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-foreground/70">{creator.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-foreground/70">No creators found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </AuthLayout>
  );
};

export default Discover;
