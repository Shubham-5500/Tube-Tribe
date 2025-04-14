
import { BasicLayout } from "../components/layouts/BasicLayout";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight } from "lucide-react";

const GettingStarted = () => {
  const steps = [
    {
      number: 1,
      title: "Create Your Account",
      description: "Sign up with your email or connect your Google account for a seamless experience."
    },
    {
      number: 2,
      title: "Complete Your Profile",
      description: "Add your YouTube channel details, content niche, and collaboration preferences."
    },
    {
      number: 3,
      title: "Connect Your YouTube Channel",
      description: "Link your YouTube account to unlock analytics integration and channel verification."
    },
    {
      number: 4,
      title: "Discover Creators",
      description: "Browse through creators in your niche or use our matchmaking algorithm."
    },
    {
      number: 5,
      title: "Initiate Collaborations",
      description: "Reach out to creators through our platform and plan your first collaboration."
    }
  ];

  return (
    <BasicLayout>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Getting Started with TubeTribe</h1>
          <p className="text-xl text-foreground/70">
            Follow these simple steps to start your collaborative journey on TubeTribe.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <Card key={step.number} className="border border-border hover:border-primary/50 transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-6 bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/register" className="inline-flex items-center text-primary hover:underline">
            Ready to get started? Create your account now <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </BasicLayout>
  );
};

export default GettingStarted;
