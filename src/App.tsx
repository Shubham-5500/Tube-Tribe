import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Discover from "./pages/Discover";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Opportunities from "./pages/opportunities";
import Community from "./pages/Community";
import Features from "./pages/features";
import GettingStarted from "./pages/getting-started";
import Tutorials from "./pages/tutorials";
import HelpCenter from "./pages/help-center";
import About from "./pages/about";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Contact from "./pages/contact";
import CollaborationHub from "./pages/collaboration-hub";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/community" element={<Community />} />
              
              {/* Footer pages */}
              <Route path="/features" element={<Features />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/collaboration-hub" element={<CollaborationHub />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
