
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Navbar from "@/components/navigation/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Footer from "@/components/navigation/Footer";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [accountType, setAccountType] = useState("creator");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempted with:", { email, password, name, accountType });
    // Registration logic would go here
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="tube-card p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
              <p className="text-foreground/70">Join the TubeTribe community today</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="tube-input"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="tube-input"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="tube-input"
                />
                <p className="text-xs text-foreground/70 mt-1">
                  Password must be at least 8 characters long
                </p>
              </div>
              
              <div className="space-y-3">
                <Label>Account Type</Label>
                <RadioGroup 
                  defaultValue="creator" 
                  value={accountType}
                  onValueChange={setAccountType}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="creator" id="creator" />
                    <Label htmlFor="creator" className="cursor-pointer">I'm a Content Creator</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="viewer" id="viewer" />
                    <Label htmlFor="viewer" className="cursor-pointer">I'm a Viewer / Fan</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="text-sm text-foreground/70">
                By clicking "Sign Up", you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </div>
              
              <Button type="submit" className="w-full tube-button">
                Sign Up
              </Button>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-foreground/70">Or sign up with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                    <path d="M12.545,10.239V14.069H18.175a2.426,2.426,0,0,1-.782,1.875,4.991,4.991,0,0,1-3.538,1.38,5.412,5.412,0,0,1-3.734-1.38,4.425,4.425,0,0,1-1.563-3.5A4.668,4.668,0,0,1,10.2,8.9,5.173,5.173,0,0,1,13.869,7.52a4.762,4.762,0,0,1,3.344,1.253l2.628-2.529a9.294,9.294,0,0,0-6.166-2.361,9.207,9.207,0,0,0-6.46,2.361A8.434,8.434,0,0,0,4.17,12.442a7.662,7.662,0,0,0,2.8,6.1,9.7,9.7,0,0,0,6.558,2.387,8.423,8.423,0,0,0,6.026-2.194,7.193,7.193,0,0,0,2.513-5.581,7.428,7.428,0,0,0-.147-1.767h-9.37Z" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                  </svg>
                  Apple
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-foreground/70">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
