
import { BasicLayout } from "../components/layouts/BasicLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Search, Mail, MessageSquare, FileText, HelpCircle } from "lucide-react";

const HelpCenter = () => {
  const faqItems = [
    {
      question: "How do I find collaboration partners?",
      answer: "You can find collaboration partners by using our Discovery feature, which lets you filter creators by niche, subscriber count, location, and more. You can also use our matchmaking algorithm that suggests creators based on your channel's compatibility."
    },
    {
      question: "Is TubeTribe free to use?",
      answer: "TubeTribe offers both free and premium plans. The free plan gives you access to basic features, while our premium plans unlock advanced collaboration tools, analytics, and priority support."
    },
    {
      question: "How do I link my YouTube channel?",
      answer: "To link your YouTube channel, go to your Profile settings, click on 'Connect accounts', and follow the OAuth authentication process with your Google account that has access to your YouTube channel."
    },
    {
      question: "Can I collaborate with creators outside my niche?",
      answer: "Absolutely! Cross-niche collaborations can be very successful. Our platform helps you find creators with complementary content styles and audiences, even if they're in different niches."
    },
    {
      question: "What happens if a creator doesn't respond to my collaboration request?",
      answer: "Collaboration requests expire after 14 days if there's no response. You'll receive a notification when this happens, and you're free to send another request or find other potential collaborators."
    }
  ];

  return (
    <BasicLayout>
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Find answers to common questions or get in touch with our support team.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder="Search for answers..."
              className="pl-10 py-6"
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 gradient-bg hover:opacity-90">
              Search
            </Button>
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { title: "Email Support", icon: Mail, description: "Get help from our support team" },
            { title: "Live Chat", icon: MessageSquare, description: "Chat with our support agents" },
            { title: "Documentation", icon: FileText, description: "Browse our detailed guides" }
          ].map((item, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-6 pb-4 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-6 flex justify-center">
                <Button variant="outline">Access</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <HelpCircle className="mr-2 h-6 w-6" /> Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Still have questions?</h2>
            <p className="text-sm text-foreground/70">Our support team is here to help you.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" className="w-full" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" className="w-full" />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" className="w-full" />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  className="w-full min-h-[120px] p-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <Button className="w-full sm:w-auto gradient-bg hover:opacity-90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </BasicLayout>
  );
};

export default HelpCenter;
