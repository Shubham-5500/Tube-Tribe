import { BasicLayout } from "../components/layouts/BasicLayout";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  
  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="text-foreground/70">
              Have a question, suggestion, or just want to say hello? Reach out to us through any of these channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-foreground/70">hello@tubetribe.com</p>
                  <p className="text-foreground/70">support@tubetribe.com</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p className="text-foreground/70">123 Creator Way</p>
                  <p className="text-foreground/70">San Francisco, CA 94105</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-foreground/70">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-foreground/70">Available 9am - 5pm PT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-semibold">Send Us a Message</h2>
                <p className="text-foreground/70">We'll get back to you as soon as possible</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        required 
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        required 
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?" 
                      required 
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5} 
                      placeholder="Tell us more about your inquiry..." 
                      required 
                      className="w-full p-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto gradient-bg hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <div className="rounded-lg overflow-hidden h-96 bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-xl font-medium mb-2">Interactive Map Coming Soon</h3>
              <p className="text-foreground/70">We're working on integrating a map to help you find us!</p>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Contact;
