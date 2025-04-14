import { BasicLayout } from "../components/layouts/BasicLayout";
import { Card, CardContent } from "../components/ui/card";
import { User, Award, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      position: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      bio: "Former YouTube creator with 500K subscribers who saw the need for a better collaboration platform.",
    },
    {
      name: "Samantha Chen",
      position: "Chief Product Officer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      bio: "Product visionary with experience at top tech companies and a passion for creator economies.",
    },
    {
      name: "Marcus Johnson",
      position: "Head of Community",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150",
      bio: "Community building expert who has grown online communities to millions of members.",
    },
    {
      name: "Priya Patel",
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
      bio: "Tech leader with a background in social platforms and matching algorithms.",
    },
  ];

  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About TubeTribe</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Building the premier community where YouTubers connect, collaborate,
            and grow together.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4 text-foreground/80">
                TubeTribe began in 2023 when Alex Rodriguez, a YouTuber with
                over 500,000 subscribers, experienced firsthand the challenges
                of finding and managing collaborations with other creators.
              </p>
              <p className="mb-4 text-foreground/80">
                After struggling with disorganized DMs, missed opportunities,
                and the lack of a centralized platform for YouTube
                collaborations, Alex assembled a team of tech experts and fellow
                creators to build TubeTribe.
              </p>
              <p className="text-foreground/80">
                Today, TubeTribe is helping thousands of creators connect,
                collaborate, and grow their channels through meaningful
                partnerships and a supportive community.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
                  alt="TubeTribe team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Creator First</h3>
                <p className="text-foreground/70">
                  We build every feature with creators' needs in mind, ensuring
                  our platform helps you grow and succeed.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Quality Connections
                </h3>
                <p className="text-foreground/70">
                  We focus on meaningful collaborations that provide value to
                  both creators and their audiences.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Community Support
                </h3>
                <p className="text-foreground/70">
                  We believe in fostering a supportive environment where
                  creators help each other succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="border border-border hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 py-12 bg-primary/5 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10,000+", label: "Creators" },
              { number: "2,500+", label: "Successful Collaborations" },
              { number: "150M+", label: "Combined Reach" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-xl text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default About;
