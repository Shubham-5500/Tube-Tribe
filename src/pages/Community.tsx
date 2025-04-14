
import { useState, useEffect, FormEvent } from "react";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, MessageSquare, ThumbsUp, Share2, 
  Image, Send, Bookmark, BookmarkCheck,
  MessageCircle, Heart, Link, MoreHorizontal
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

// Sample posts data
const initialPosts = [
  {
    id: 1,
    author: {
      name: "Emma Thompson",
      username: "emmacreates",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    content: "Just hit 50K subscribers! Thank you to everyone who's been supporting my tech review channel. What type of content would you like to see next?",
    postedAt: "2023-04-12T14:30:00Z",
    likes: 42,
    comments: 18,
    topic: "Celebration",
    liked: false,
    bookmarked: false
  },
  {
    id: 2,
    author: {
      name: "James Wilson",
      username: "jamesgaming",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    content: "Having trouble with my latest gaming video. The audio keeps going out of sync with the gameplay footage. Anyone have recommendations for fixing this in Premiere Pro?",
    postedAt: "2023-04-12T10:15:00Z",
    likes: 12,
    comments: 23,
    topic: "Technical Help",
    liked: false,
    bookmarked: false
  },
  {
    id: 3,
    author: {
      name: "Olivia Chen",
      username: "oliviaart",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    content: "Just released my new digital art course! Check it out if you want to learn how to create stunning illustrations using Procreate. Use code TRIBE20 for 20% off!",
    postedAt: "2023-04-11T16:45:00Z",
    likes: 87,
    comments: 14,
    topic: "Resource",
    image: "https://i.pravatar.cc/500?img=32",
    liked: false,
    bookmarked: false
  },
  {
    id: 4,
    author: {
      name: "Michael Rodriguez",
      username: "mikefilms",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    content: "What's your favorite camera for filming vlogs? I'm thinking of upgrading my setup and could use some recommendations.",
    postedAt: "2023-04-10T09:20:00Z",
    likes: 31,
    comments: 45,
    topic: "Discussion",
    liked: false,
    bookmarked: false
  },
];

// Sample topics data
const communityTopics = [
  { id: "all", name: "All Topics" },
  { id: "technical-help", name: "Technical Help" },
  { id: "discussion", name: "Discussion" },
  { id: "collaboration", name: "Collaboration" },
  { id: "resource", name: "Resources" },
  { id: "celebration", name: "Celebrations" },
  { id: "question", name: "Questions" },
];

interface Post {
  id: number;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  postedAt: string;
  likes: number;
  comments: number;
  topic: string;
  image?: string;
  liked: boolean;
  bookmarked: boolean;
}

const Community = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [activeTopic, setActiveTopic] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostTopic, setNewPostTopic] = useState("Discussion");

  // Get user data from localStorage
  const getUserData = () => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      return JSON.parse(userData);
    }
    return {
      name: "Alex Johnson",
      username: "alexcreates",
      avatar: "https://i.pravatar.cc/150?img=12"
    };
  };

  // Initialize posts from localStorage or use initial data
  useEffect(() => {
    const storedPosts = localStorage.getItem("communityPosts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts(initialPosts);
    }
  }, []);

  // Update filtered posts when search term, active topic, or posts change
  useEffect(() => {
    let filtered = [...posts];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by topic
    if (activeTopic !== "all") {
      filtered = filtered.filter(post => 
        post.topic.toLowerCase() === activeTopic.replace(/-/g, ' ')
      );
    }
    
    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
    
    setFilteredPosts(filtered);
  }, [searchTerm, activeTopic, posts]);

  // Save posts to localStorage when they change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("communityPosts", JSON.stringify(posts));
    }
  }, [posts]);

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    if (diffInWeeks < 4) return `${diffInWeeks}w ago`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths}mo ago`;
  };

  const handleLikePost = (id: number) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        const updatedPost = { 
          ...post, 
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
        return updatedPost;
      }
      return post;
    }));
  };

  const handleBookmarkPost = (id: number) => {
    setPosts(posts.map(post => {
      if (post.id === id) {
        const updatedPost = { ...post, bookmarked: !post.bookmarked };
        
        if (updatedPost.bookmarked) {
          toast({
            title: "Post Bookmarked",
            description: "You can find this post in your saved items",
          });
        }
        
        return updatedPost;
      }
      return post;
    }));
  };

  const handleCreatePost = (e: FormEvent) => {
    e.preventDefault();
    
    if (!newPostContent.trim()) {
      toast({
        title: "Error",
        description: "Post content cannot be empty",
        variant: "destructive",
      });
      return;
    }
    
    const user = getUserData();
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
    
    const newPost: Post = {
      id: newId,
      author: {
        name: user.name,
        username: user.username,
        avatar: user.avatar
      },
      content: newPostContent,
      postedAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
      topic: newPostTopic,
      liked: false,
      bookmarked: false
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent("");
    
    toast({
      title: "Post Created",
      description: "Your post has been published to the community",
    });
  };

  return (
    <AuthLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Community</h1>
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground/50" />
              <Input 
                placeholder="Search posts" 
                className="pl-10 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-6 overflow-x-auto">
          <NavigationMenu>
            <NavigationMenuList className="flex">
              {communityTopics.map((topic) => (
                <NavigationMenuItem key={topic.id}>
                  <NavigationMenuLink 
                    className={`${navigationMenuTriggerStyle()} ${activeTopic === topic.id ? 'bg-accent text-accent-foreground' : ''}`}
                    onClick={() => setActiveTopic(topic.id)}
                  >
                    {topic.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Tabs defaultValue="feed" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
            <TabsTrigger value="my-posts">My Posts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="feed" className="pt-6">
            {/* Create post form */}
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex gap-3">
                  <Avatar className="h-10 w-10">
                    <img src={getUserData().avatar} alt="Your avatar" />
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{getUserData().name}</p>
                    <p className="text-sm text-foreground/60">@{getUserData().username}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreatePost}>
                  <div className="space-y-4">
                    <textarea
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                      placeholder="What's on your mind? Share with the creator community..."
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    ></textarea>
                    <div className="flex flex-wrap justify-between gap-4">
                      <div className="flex items-center gap-1">
                        <Button type="button" variant="ghost" size="sm">
                          <Image className="h-4 w-4 mr-1" />
                          Add Image
                        </Button>
                        <select
                          value={newPostTopic}
                          onChange={(e) => setNewPostTopic(e.target.value)}
                          className="py-1 px-2 text-sm rounded border border-input bg-background"
                        >
                          <option value="Discussion">Discussion</option>
                          <option value="Question">Question</option>
                          <option value="Technical Help">Technical Help</option>
                          <option value="Resource">Resource</option>
                          <option value="Celebration">Celebration</option>
                          <option value="Collaboration">Collaboration</option>
                        </select>
                      </div>
                      <Button type="submit" className="gradient-bg hover:opacity-90">
                        <Send className="h-4 w-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Posts list */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex gap-3">
                          <Avatar className="h-10 w-10">
                            <img src={post.author.avatar} alt={post.author.name} />
                          </Avatar>
                          <div>
                            <p className="font-medium">{post.author.name}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-foreground/60">@{post.author.username}</p>
                              <span className="text-xs text-foreground/60">•</span>
                              <p className="text-sm text-foreground/60">{getTimeAgo(post.postedAt)}</p>
                            </div>
                          </div>
                        </div>
                        <Badge>{post.topic}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-line">{post.content}</p>
                      {post.image && (
                        <div className="mt-4">
                          <img 
                            src={post.image} 
                            alt="Post attachment" 
                            className="rounded-lg max-h-96 w-auto"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <div className="flex gap-4">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleLikePost(post.id)}
                          className={post.liked ? "text-tribe-purple" : "text-foreground/70"}
                        >
                          <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-foreground/70">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{post.comments}</span>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-foreground/70">
                          <Link className="h-4 w-4 mr-1" />
                          <span>Share</span>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleBookmarkPost(post.id)}
                          className={post.bookmarked ? "text-tribe-purple" : "text-foreground/70"}
                        >
                          {post.bookmarked ? 
                            <BookmarkCheck className="h-4 w-4" /> : 
                            <Bookmark className="h-4 w-4" />
                          }
                        </Button>
                        <Button variant="ghost" size="sm" className="text-foreground/70 px-2">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-foreground/70">
                  {searchTerm || activeTopic !== "all" ? 
                    "No posts match your current filters." : 
                    "No posts yet. Be the first to share something!"
                  }
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="bookmarks" className="pt-6">
            <div className="space-y-6">
              {posts.filter(post => post.bookmarked).length > 0 ? (
                posts.filter(post => post.bookmarked).map((post) => (
                  <Card key={post.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex gap-3">
                          <Avatar className="h-10 w-10">
                            <img src={post.author.avatar} alt={post.author.name} />
                          </Avatar>
                          <div>
                            <p className="font-medium">{post.author.name}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-foreground/60">@{post.author.username}</p>
                              <span className="text-xs text-foreground/60">•</span>
                              <p className="text-sm text-foreground/60">{getTimeAgo(post.postedAt)}</p>
                            </div>
                          </div>
                        </div>
                        <Badge>{post.topic}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-line">{post.content}</p>
                      {post.image && (
                        <div className="mt-4">
                          <img 
                            src={post.image} 
                            alt="Post attachment" 
                            className="rounded-lg max-h-96 w-auto"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <div className="flex gap-4">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleLikePost(post.id)}
                          className={post.liked ? "text-tribe-purple" : "text-foreground/70"}
                        >
                          <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-foreground/70">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{post.comments}</span>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-foreground/70">
                          <Link className="h-4 w-4 mr-1" />
                          <span>Share</span>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleBookmarkPost(post.id)}
                          className="text-tribe-purple"
                        >
                          <BookmarkCheck className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-foreground/70 px-2">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-foreground/70">You haven't bookmarked any posts yet.</p>
                  <Button 
                    onClick={() => setActiveTab("feed")} 
                    className="mt-4 gradient-bg hover:opacity-90"
                  >
                    Browse Feed
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="my-posts" className="pt-6">
            <div className="space-y-6">
              {posts.filter(post => post.author.username === getUserData().username).length > 0 ? (
                posts.filter(post => post.author.username === getUserData().username).map((post) => (
                  <Card key={post.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex gap-3">
                          <Avatar className="h-10 w-10">
                            <img src={post.author.avatar} alt={post.author.name} />
                          </Avatar>
                          <div>
                            <p className="font-medium">{post.author.name}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-sm text-foreground/60">@{post.author.username}</p>
                              <span className="text-xs text-foreground/60">•</span>
                              <p className="text-sm text-foreground/60">{getTimeAgo(post.postedAt)}</p>
                            </div>
                          </div>
                        </div>
                        <Badge>{post.topic}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-line">{post.content}</p>
                      {post.image && (
                        <div className="mt-4">
                          <img 
                            src={post.image} 
                            alt="Post attachment" 
                            className="rounded-lg max-h-96 w-auto"
                          />
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <div className="flex gap-4">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={post.liked ? "text-tribe-purple" : "text-foreground/70"}
                        >
                          <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-foreground/70">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{post.comments}</span>
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-foreground/70">
                          <Link className="h-4 w-4 mr-1" />
                          <span>Share</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-foreground/70 px-2">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-foreground/70">You haven't created any posts yet.</p>
                  <Button 
                    onClick={() => setActiveTab("feed")} 
                    className="mt-4 gradient-bg hover:opacity-90"
                  >
                    Create Your First Post
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default Community;
