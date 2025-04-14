import { useState, useEffect } from "react";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Link as LinkIcon, Youtube, Twitter, Instagram, Edit, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface UserData {
  name: string;
  username: string;
  bio: string;
  location: string;
  website: string;
  youtube: string;
  twitter: string;
  instagram: string;
  avatar: string;
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    name: "",
    username: "",
    bio: "",
    location: "",
    website: "",
    youtube: "",
    twitter: "",
    instagram: "",
    avatar: ""
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setFormData(JSON.parse(storedUserData));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(formData));
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully."
    });
  };

  const handleAvatarChange = () => {
    const randomId = Math.floor(Math.random() * 70) + 1;
    setFormData(prev => ({
      ...prev,
      avatar: `https://i.pravatar.cc/150?img=${randomId}`
    }));
  };

  return (
    <AuthLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-background">
                <img src={formData.avatar} alt="Profile" className="aspect-square h-full w-full" />
              </Avatar>
              <Button 
                size="icon" 
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 gradient-bg hover:opacity-90" 
                variant="outline"
                onClick={handleAvatarChange}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{formData.name}</h1>
              <p className="text-foreground/70">@{formData.username}</p>
            </div>
          </div>
          <div>
            {isEditing ? (
              <Button onClick={handleSave} className="gradient-bg hover:opacity-90">
                <Check className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="outline">
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>
        
        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your profile information visible to other creators.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Display Name</label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="username" className="text-sm font-medium">Username</label>
                      <Input 
                        id="username" 
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">Location</label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
                <CardDescription>Connect your social media accounts and websites.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium flex items-center gap-2">
                      <LinkIcon className="h-4 w-4" /> Website
                    </label>
                    <Input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="youtube" className="text-sm font-medium flex items-center gap-2">
                      <Youtube className="h-4 w-4" /> YouTube Channel
                    </label>
                    <Input
                      id="youtube"
                      name="youtube"
                      value={formData.youtube}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="twitter" className="text-sm font-medium flex items-center gap-2">
                        <Twitter className="h-4 w-4" /> Twitter
                      </label>
                      <Input
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="instagram" className="text-sm font-medium flex items-center gap-2">
                        <Instagram className="h-4 w-4" /> Instagram
                      </label>
                      <Input
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="videos" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Your Videos</CardTitle>
                <CardDescription>Manage and track your uploaded content.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <p className="text-foreground/70">You haven't uploaded any videos yet.</p>
                  <Button className="mt-4 gradient-bg hover:opacity-90">Upload Your First Video</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Channel Analytics</CardTitle>
                <CardDescription>Insights and statistics about your content performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-16">
                  <p className="text-foreground/70">Analytics will be available after you upload your first video.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AuthLayout>
  );
};

export default Profile;
