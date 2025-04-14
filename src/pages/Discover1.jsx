import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ThumbsUp, MessageSquare, Eye, Star } from "lucide-react";

// Mock data for videos
const videosData = [
  {
    id: 1,
    title: "10 Tips for Growing Your YouTube Channel",
    thumbnail: "https://i.pravatar.cc/600?img=1",
    creator: "Alex Rivera",
    creatorAvatar: "https://i.pravatar.cc/150?img=1",
    views: "124K",
    likes: "8.2K",
    comments: 342,
    duration: "12:45",
    category: "Education",
    trending: true
  },
  {
    id: 2,
    title: "Ultimate Camera Setup for YouTubers",
    thumbnail: "https://i.pravatar.cc/600?img=2",
    creator: "Tech Insights",
    creatorAvatar: "https://i.pravatar.cc/150?img=2",
    views: "89K",
    likes: "5.1K",
    comments: 231,
    duration: "18:22",
    category: "Technology",
    trending: true
  },
  {
    id: 3,
    title: "How I Edit My Videos - Full Workflow",
    thumbnail: "https://i.pravatar.cc/600?img=3",
    creator: "EditPro",
    creatorAvatar: "https://i.pravatar.cc/150?img=3",
    views: "56K",
    likes: "3.8K",
    comments: 187,
    duration: "22:17",
    category: "Technology",
    trending: false
  },
  {
    id: 4,
    title: "Storytelling Techniques for Content Creators",
    thumbnail: "https://i.pravatar.cc/600?img=4",
    creator: "Narrative Masters",
    creatorAvatar: "https://i.pravatar.cc/150?img=4",
    views: "112K",
    likes: "9.3K",
    comments: 456,
    duration: "15:32",
    category: "Education",
    trending: true
  },
  {
    id: 5,
    title: "Lighting Setup on a Budget",
    thumbnail: "https://i.pravatar.cc/600?img=5",
    creator: "Studio Secrets",
    creatorAvatar: "https://i.pravatar.cc/150?img=5",
    views: "78K",
    likes: "4.2K",
    comments: 203,
    duration: "10:18",
    category: "Technology",
    trending: false
  },
  {
    id: 6,
    title: "Finding Your Voice as a Creator",
    thumbnail: "https://i.pravatar.cc/600?img=6",
    creator: "Creative Minds",
    creatorAvatar: "https://i.pravatar.cc/150?img=6",
    views: "45K",
    likes: "3.5K",
    comments: 178,
    duration: "14:55",
    category: "Inspiration",
    trending: false
  }
];

const Discover = () => {
  const [activeTab, setActiveTab] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredVideo, setHoveredVideo] = useState(null);

  // Filter videos based on search query and active tab
  const filteredVideos = videosData.filter(video => {
    const matchesQuery = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         video.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "trending") {
      return matchesQuery && video.trending;
    } else if (activeTab === "new") {
      return matchesQuery; // For now, all videos appear in "New" tab
    } else if (activeTab === "engaging") {
      return matchesQuery; // For now, all videos appear in "Engaging" tab
    }
    return matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Discover</h1>
              <p className="text-foreground/70">Find inspiring content from creators</p>
            </div>
            <div className="w-full md:w-auto relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
              <Input 
                placeholder="Search videos, creators, or topics" 
                className="pl-10 w-full md:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="trending" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="engaging">Most Engaging</TabsTrigger>
            </TabsList>
            
            <TabsContent value="trending" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map(video => (
                  <Card 
                    key={video.id}
                    className={`overflow-hidden transition-all duration-300 ${hoveredVideo === video.id ? 'scale-[1.02] shadow-lg' : ''}`}
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <div className="relative aspect-video">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-black/50 hover:bg-black/50 text-white">
                          {video.duration}
                        </Badge>
                      </div>
                      {/* Video preview overlay would go here in a real implementation */}
                      {hoveredVideo === video.id && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <img 
                          src={video.creatorAvatar} 
                          alt={video.creator} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium line-clamp-2">{video.title}</h3>
                          <p className="text-sm text-foreground/70 mt-1">{video.creator}</p>
                          <div className="flex items-center space-x-3 mt-2 text-xs text-foreground/60">
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {video.views}
                            </span>
                            <span className="flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {video.likes}
                            </span>
                            <span className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              {video.comments}
                            </span>
                          </div>
                          <div className="mt-2">
                            <Badge variant="outline" className="text-xs">
                              {video.category}
                            </Badge>
                            {video.trending && (
                              <Badge variant="secondary" className="ml-2 text-xs bg-tribe-purple/20 text-tribe-purple border border-tribe-purple/30">
                                <Star className="h-3 w-3 mr-1 fill-tribe-purple" /> Trending
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredVideos.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-foreground/70">No videos found matching your search.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="new" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map(video => (
                  <Card 
                    key={video.id}
                    className={`overflow-hidden transition-all duration-300 ${hoveredVideo === video.id ? 'scale-[1.02] shadow-lg' : ''}`}
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <div className="relative aspect-video">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-black/50 hover:bg-black/50 text-white">
                          {video.duration}
                        </Badge>
                      </div>
                      {hoveredVideo === video.id && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <img 
                          src={video.creatorAvatar} 
                          alt={video.creator} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium line-clamp-2">{video.title}</h3>
                          <p className="text-sm text-foreground/70 mt-1">{video.creator}</p>
                          <div className="flex items-center space-x-3 mt-2 text-xs text-foreground/60">
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {video.views}
                            </span>
                            <span className="flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {video.likes}
                            </span>
                            <span className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              {video.comments}
                            </span>
                          </div>
                          <div className="mt-2">
                            <Badge variant="outline" className="text-xs">
                              {video.category}
                            </Badge>
                            <Badge variant="secondary" className="ml-2 text-xs bg-tribe-blue/20 text-tribe-blue border border-tribe-blue/30">
                              New
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredVideos.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-foreground/70">No videos found matching your search.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="engaging" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map(video => (
                  <Card 
                    key={video.id}
                    className={`overflow-hidden transition-all duration-300 ${hoveredVideo === video.id ? 'scale-[1.02] shadow-lg' : ''}`}
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <div className="relative aspect-video">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-black/50 hover:bg-black/50 text-white">
                          {video.duration}
                        </Badge>
                      </div>
                      {hoveredVideo === video.id && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <img 
                          src={video.creatorAvatar} 
                          alt={video.creator} 
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-medium line-clamp-2">{video.title}</h3>
                          <p className="text-sm text-foreground/70 mt-1">{video.creator}</p>
                          <div className="flex items-center space-x-3 mt-2 text-xs text-foreground/60">
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />
                              {video.views}
                            </span>
                            <span className="flex items-center">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {video.likes}
                            </span>
                            <span className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />
                              {video.comments}
                            </span>
                          </div>
                          <div className="mt-2">
                            <Badge variant="outline" className="text-xs">
                              {video.category}
                            </Badge>
                            <Badge variant="secondary" className="ml-2 text-xs bg-tribe-pink/20 text-tribe-pink border border-tribe-pink/30">
                              High Engagement
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredVideos.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-foreground/70">No videos found matching your search.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
