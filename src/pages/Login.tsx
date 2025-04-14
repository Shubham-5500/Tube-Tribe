
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { LandingNav } from "../components/landing/LandingNav";
import { Footer } from "../components/Footer";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "../hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt with:", { email });
    
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");
    
    // Set user data in localStorage for profile
    const userData = {
      name: "Alex Johnson",
      username: "alexcreates",
      bio: "Content creator passionate about tech reviews and tutorials. Been creating videos for 3 years with a focus on helping beginners get started in the tech world.",
      location: "San Francisco, CA",
      website: "https://alexjohnson.tech",
      youtube: "https://youtube.com/alexcreates",
      twitter: "https://twitter.com/alexcreates",
      instagram: "https://instagram.com/alexcreates",
      avatar: "https://i.pravatar.cc/150?img=12"
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    
    toast({
      title: "Login Successful",
      description: `Welcome back, ${email}`,
    });
    
    // Redirect to dashboard after successful login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LandingNav />
      <div className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-foreground/70 mt-2">Sign in to your Tube Tribe account</p>
          </div>
          
          <div className="glass-effect p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-tribe-purple hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-foreground/70 hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <Button type="submit" className="w-full gradient-bg hover:opacity-90">
                Sign in
              </Button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-foreground/70">
                Don't have an account?{" "}
                <Link to="/register" className="text-tribe-purple hover:underline">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
