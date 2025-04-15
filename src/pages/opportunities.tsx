import { useState, useEffect } from "react";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Clock, MessageSquare, ThumbsUp, Share2, Plus, UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Sample collaboration opportunities data
const initialOpportunities = [
  {
    id: 1,
    title: "Looking for editor for tech review series",
    creator: {
      name: "Emma Thompson",
      username: "emmacreates",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    category: "Video Editing",
    description: "I'm creating a new tech review series and need an editor who can add great transitions and graphics. 10-15 minute videos, once per week.",
    postedAt: "2023-04-08T14:30:00Z",
    deadline: "2023-04-22T00:00:00Z",
    applicants: 3,
    applied: false
  },
  {
    id: 2,
    title: "Co-host wanted for gaming podcast",
    creator: {
      name: "James Wilson",
      username: "jamesgaming",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    category: "Podcast",
    description: "Starting a new gaming podcast focusing on indie games. Looking for a co-host with gaming knowledge and good banter. Weekly recording, 1 hour episodes.",
    postedAt: "2023-04-10T09:15:00Z",
    deadline: "2023-04-25T00:00:00Z",
    applicants: 7,
    applied: false
  },
  {
    id: 3,
    title: "Thumbnail designer for cooking channel",
    creator: {
      name: "Sarah Williams",
      username: "sarahcooks",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    category: "Graphic Design",
    description: "Need someone to create eye-catching thumbnails for my cooking videos. 3-4 thumbnails per week, consistent style important.",
    postedAt: "2023-04-11T16:45:00Z",
    deadline: "2023-04-18T00:00:00Z",
    applicants: 12,
    applied: false
  },
  {
    id: 4,
    title: "Guest speakers for digital art tutorials",
    creator: {
      name: "Olivia Chen",
      username: "oliviaart",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    category: "Guest Appearance",
    description: "Looking for digital artists to feature as guest teachers on my channel. Each guest will share a special technique or approach. 20-30 minute segments.",
    postedAt: "2023-04-12T11:20:00Z",
    deadline: "2023-04-30T00:00:00Z",
    applicants: 5,
    applied: false
  }
];

// Sample personal projects data
const initialProjects = [
  {
    id: 1,
    title: "Tech Review Series",
    description: "Weekly reviews of the latest tech gadgets and products.",
    collaborators: 2,
    openPositions: 1,
    status: "In Progress"
  },
  {
    id: 2,
    title: "Creative Vlog Challenge",
    description: "30-day challenge documenting the creative process.",
    collaborators: 0,
    openPositions: 3,
    status: "Planning"
  }
];

interface Opportunity {
  id: number;
  title: string;
  creator: {
    name: string;
    username: string;
    avatar: string;
  };
  category: string;
  description: string;
  postedAt: string;
  deadline: string;
  applicants: number;
  applied: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  collaborators: number;
  openPositions: number;
  status: string;
}

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState("discover");
  const [searchTerm, setSearchTerm] = useState("");
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunity[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    openPositions: 1,
    status: "Planning"
  });

  // Initialize data from localStorage or use initial data
  useEffect(() => {
    const storedOpportunities = localStorage.getItem("collaborationOpportunities");
    if (storedOpportunities) {
      setOpportunities(JSON.parse(storedOpportunities));
    } else {
      setOpportunities(initialOpportunities);
    }

    const storedProjects = localStorage.getItem("collaborationProjects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      setProjects(initialProjects);
    }
  }, []);

  // Update filtered opportunities when search term or opportunities change
  useEffect(() => {
    const filtered = opportunities.filter(opp => 
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOpportunities(filtered);
  }, [searchTerm, opportunities]);

  // Save data to localStorage when they change
  useEffect(() => {
    if (opportunities.length > 0) {
      localStorage.setItem("collaborationOpportunities", JSON.stringify(opportunities));
    }

    if (projects.length > 0) {
      localStorage.setItem("collaborationProjects", JSON.stringify(projects));
    }
  }, [opportunities, projects]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  const handleApply = (id: number) => {
    setOpportunities(opportunities.map(opp => {
      if (opp.id === id) {
        const updatedOpp = { ...opp, applied: !opp.applied };
        if (updatedOpp.applied) {
          updatedOpp.applicants += 1;
          toast({
            title: "Application Submitted",
            description: `You've applied to "${opp.title}"`,
          });
        } else {
          updatedOpp.applicants -= 1;
          toast({
            title: "Application Withdrawn",
            description: `You've withdrawn your application to "${opp.title}"`,
          });
        }
        return updatedOpp;
      }
      return opp;
    }));
  };

  const handleCreateProject = () => {
    if (!newProject.title || !newProject.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
    const projectToAdd = {
      id: newId,
      title: newProject.title,
      description: newProject.description,
      collaborators: 0,
      openPositions: Number(newProject.openPositions),
      status: newProject.status
    };

    setProjects([...projects, projectToAdd]);
    setNewProject({
      title: "",
      description: "",
      openPositions: 1,
      status: "Planning"
    });
    setShowNewProjectForm(false);
    toast({
      title: "Project Created",
      description: `Your project "${projectToAdd.title}" has been created`,
    });
  };

  const handleNewProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AuthLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Opportunities</h1>
        </div>

        <Tabs defaultValue="discover" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="discover">Discover Opportunities</TabsTrigger>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discover" className="pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground/50" />
                <Input 
                  placeholder="Search opportunities" 
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex gap-2 whitespace-nowrap">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>

            {filteredOpportunities.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Avatar className="h-6 w-6">
                              <img src={opportunity.creator.avatar} alt={opportunity.creator.name} />
                            </Avatar>
                            <CardDescription>by @{opportunity.creator.username}</CardDescription>
                          </div>
                        </div>
                        <Badge>{opportunity.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">{opportunity.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Posted: {getTimeAgo(opportunity.postedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{opportunity.applicants} applicants</span>
                        </div>
                        <div>
                          <span className="font-medium">Deadline:</span> {formatDate(opportunity.deadline)}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-secondary/20 flex justify-between">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="text-foreground/70">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>Save</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-foreground/70">
                          <Share2 className="h-4 w-4 mr-1" />
                          <span>Share</span>
                        </Button>
                      </div>
                      <Button 
                        onClick={() => handleApply(opportunity.id)}
                        className={opportunity.applied ? "border-primary text-primary" : "gradient-bg hover:opacity-90"}
                        variant={opportunity.applied ? "outline" : "default"}
                      >
                        {opportunity.applied ? 'Applied' : 'Apply Now'}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-foreground/70">No opportunities match your search criteria.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="projects" className="pt-6">
            <div className="mb-6">
              <Button 
                onClick={() => setShowNewProjectForm(!showNewProjectForm)} 
                className="gradient-bg hover:opacity-90"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create New Project
              </Button>
            </div>

            {showNewProjectForm && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">New Collaboration Project</CardTitle>
                  <CardDescription>Fill in the details to create your new project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">Project Title</label>
                    <Input 
                      id="title" 
                      name="title" 
                      value={newProject.title} 
                      onChange={handleNewProjectChange}
                      placeholder="Give your project a descriptive title"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={newProject.description}
                      onChange={handleNewProjectChange}
                      placeholder="Describe your project and what you're looking for"
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="openPositions" className="text-sm font-medium">Open Positions</label>
                      <Input 
                        id="openPositions" 
                        name="openPositions" 
                        type="number"
                        min="1"
                        value={newProject.openPositions} 
                        onChange={handleNewProjectChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="status" className="text-sm font-medium">Status</label>
                      <select
                        id="status"
                        name="status"
                        value={newProject.status}
                        onChange={handleNewProjectChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="Planning">Planning</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-secondary/20 flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowNewProjectForm(false)}>Cancel</Button>
                  <Button 
                    onClick={handleCreateProject} 
                    className="gradient-bg hover:opacity-90"
                  >
                    Create Project
                  </Button>
                </CardFooter>
              </Card>
            )}

            {projects.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <CardDescription>Status: {project.status}</CardDescription>
                        </div>
                        <Button size="sm" variant="outline">
                          <UserPlus className="h-4 w-4 mr-1" />
                          <span>Invite</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                        <div>
                          <span className="font-medium">Collaborators:</span> {project.collaborators}
                        </div>
                        <div>
                          <span className="font-medium">Open Positions:</span> {project.openPositions}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-secondary/20 flex justify-end gap-2">
                      <Button variant="outline">Edit Project</Button>
                      <Button className="gradient-bg hover:opacity-90">View Details</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-foreground/70">You haven't created any collaboration projects yet.</p>
                <Button 
                  onClick={() => setShowNewProjectForm(true)} 
                  className="mt-4 gradient-bg hover:opacity-90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Project
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default Opportunities;
