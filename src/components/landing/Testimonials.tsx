
const testimonials = [
  {
    name: "Alex Johnson",
    role: "Tech Reviewer",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote: "TubeTribe helped me find amazing collaborators for my channel. My subscriber count has doubled in just three months!",
    channelSize: "450K+ Subscribers"
  },
  {
    name: "Samantha Lee",
    role: "Travel Vlogger",
    avatar: "https://i.pravatar.cc/150?img=5",
    quote: "The creator dashboard gives me insights I never had before. The AI tool suggestions are spot on for my travel content.",
    channelSize: "1.2M+ Subscribers"
  },
  {
    name: "Marcus Rivera",
    role: "Gaming Creator",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote: "I was struggling to network with other creators until I found TubeTribe. Now I'm part of an amazing community of gamers.",
    channelSize: "780K+ Subscribers"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Creators</h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Join thousands of content creators who are taking their channels to the next level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="tube-card p-6 flex flex-col h-full"
            >
              <div className="mb-6 relative">
                <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-50">"</div>
                <p className="text-foreground/80 relative z-10">{testimonial.quote}</p>
                <div className="absolute -bottom-4 -right-2 text-4xl text-primary opacity-50 rotate-180">"</div>
              </div>
              
              <div className="mt-auto pt-6 flex items-center border-t border-border/50">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/70">
                    {testimonial.role} • {testimonial.channelSize}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
