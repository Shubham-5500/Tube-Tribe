
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, MessageSquare, Search, User, Video } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const dummyData = [
  { name: 'Mon', views: 4000, subscribers: 24 },
  { name: 'Tue', views: 3000, subscribers: 13 },
  { name: 'Wed', views: 2000, subscribers: 8 },
  { name: 'Thu', views: 2780, subscribers: 19 },
  { name: 'Fri', views: 1890, subscribers: 22 },
  { name: 'Sat', views: 2390, subscribers: 30 },
  { name: 'Sun', views: 3490, subscribers: 34 },
];

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <AnimatedBackground />
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 hidden md:block bg-card border-r border-border h-screen p-4 flex flex-col">
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-8 w-8 rounded-full tube-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl">TubeTribe</span>
          </div>
          
          <nav className="space-y-1 flex-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mr-2"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Video className="h-5 w-5 mr-2" />
              My Videos
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="h-5 w-5 mr-2" />
              Messages
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="h-5 w-5 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mr-2"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              Discover
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mr-2"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Settings
            </Button>
          </nav>
          
          <div className="mt-auto">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {/* Header */}
          <header className="border-b border-border bg-card/70 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center md:hidden">
                <Button variant="ghost" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </Button>
              </div>
              <div className="flex-1 max-w-xl mx-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search creators, videos, or ideas..."
                    className="tube-input pl-10 w-full"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button variant="ghost" className="h-8 w-8 rounded-full">
                  <img
                    src="https://i.pravatar.cc/100?img=28"
                    alt="User"
                    className="rounded-full"
                  />
                </Button>
              </div>
            </div>
          </header>

          {/* Dashboard content */}
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
                <p className="text-foreground/70">Welcome back, Creator! Here's what's happening with your channel.</p>
              </div>
              <Button className="tube-button mt-4 md:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Upload New Video
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="py-4">
                  <CardTitle className="text-base font-medium">Subscribers</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="text-3xl font-bold mb-1">24,521</div>
                  <div className="flex items-center text-green-500 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    +842 this month
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-4">
                  <CardTitle className="text-base font-medium">Total Views</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="text-3xl font-bold mb-1">1.2M</div>
                  <div className="flex items-center text-green-500 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-1"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    +12.4% from last month
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-4">
                  <CardTitle className="text-base font-medium">Watch Time</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="text-3xl font-bold mb-1">42.5K</div>
                  <div className="flex items-center text-foreground/70 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Hours (past 28 days)
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="py-4">
                  <CardTitle className="text-base font-medium">Engagement</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="text-3xl font-bold mb-1">8.7%</div>
                  <div className="flex items-center text-red-500 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 mr-1"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                    -1.2% from last week
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chart */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
                <CardDescription>Views and new subscribers over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={dummyData}
                      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" orientation="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar yAxisId="left" dataKey="views" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                      <Bar yAxisId="right" dataKey="subscribers" fill="#D946EF" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Current Goal */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Current Goal</CardTitle>
                <CardDescription>50,000 subscribers by end of quarter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">24,521 / 50,000</span>
                    <span className="text-sm font-medium">49%</span>
                  </div>
                  <Progress value={49} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Videos */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Videos</CardTitle>
                <CardDescription>Performance of your latest uploads</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div 
                      key={i}
                      className="flex items-center space-x-4 p-3 hover:bg-muted/50 rounded-md transition-colors cursor-pointer"
                    >
                      <div className="w-32 h-20 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
                        <Video className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">
                          {i === 0 && "How I Gained 1000 Subscribers in 30 Days"}
                          {i === 1 && "My Streaming Setup Tour 2023"}
                          {i === 2 && "5 Editing Tips for Better Videos"}
                        </h4>
                        <p className="text-sm text-foreground/70 mt-1">
                          {i === 0 && "8.2K views • 3 days ago"}
                          {i === 1 && "12.7K views • 1 week ago"}
                          {i === 2 && "5.4K views • 2 weeks ago"}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end space-x-2 mb-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-foreground/70"
                          >
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                          </svg>
                          <span className="text-sm text-foreground/70">
                            {i === 0 && "482"}
                            {i === 1 && "1.2K"}
                            {i === 2 && "347"}
                          </span>
                        </div>
                        <div className="text-sm text-foreground/70">
                          {i === 0 ? (
                            <span className="text-green-500">↑ 24%</span>
                          ) : i === 1 ? (
                            <span className="text-green-500">↑ 8%</span>
                          ) : (
                            <span className="text-foreground/70">- avg</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
