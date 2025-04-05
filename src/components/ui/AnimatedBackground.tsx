
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-background dark:from-background dark:via-tube-purple/5 dark:to-background" />
      
      {/* Animated blobs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-tube-purple/10 rounded-full blur-3xl opacity-50 animate-float" />
      <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-tube-magenta/10 rounded-full blur-3xl opacity-30 animate-float animation-delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-tube-blue/10 rounded-full blur-3xl opacity-30 animate-float animation-delay-2000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgOGgydi0yaC0ydjJ6bTIgMGgydjJoLTJ2LTJ6bS0yLTRoMnYtMmgtMnYyem00LTRoMnYyaC0ydi0yek0zMCAyNGg1di0ySDMwdi0yaC0ydjRoMnptLTIgNGgydi0yaC0ydjJ6bTQgOGgxdi0yaC0xdi0yaC0ydjRoMnptLTQtMTJoMnYtMmgtMnYyem00IDBsMi0yaC0ydjJ6bTAgMmgydi0yaC0ydjJ6bTIgMmgxdi0yaC0xdjJ6bS0yLTJoLTJ2Mkg0MHYtMmgtMTB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-tube-purple/50 rounded-full animate-pulse-glow" style={{ left: '15%' }} />
      <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-tube-teal/50 rounded-full animate-pulse-glow animation-delay-500" />
      <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-tube-magenta/50 rounded-full animate-pulse-glow animation-delay-1000" style={{ left: '16%' }} />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-tube-blue/50 rounded-full animate-pulse-glow animation-delay-1500" />
      <div className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-tube-purple/50 rounded-full animate-pulse-glow animation-delay-2000" style={{ right: '16%' }} />
    </div>
  );
};

export default AnimatedBackground;
