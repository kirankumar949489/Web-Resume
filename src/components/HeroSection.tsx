import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Download, Code, Zap, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Building fast, scalable, and elegant web apps";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-16">{/* Added pt-16 for nav spacing */}
      {/* Floating background elements */}
      <div className="absolute inset-0 z-0">
        <div className="floating absolute top-20 left-10">
          <Code size={40} className="text-primary opacity-20" />
        </div>
        <div className="floating absolute top-40 right-20" style={{ animationDelay: '1s' }}>
          <Zap size={35} className="text-secondary opacity-20" />
        </div>
        <div className="floating absolute bottom-40 left-20" style={{ animationDelay: '2s' }}>
          <Sparkles size={30} className="text-accent opacity-20" />
        </div>
        <div className="floating absolute bottom-20 right-10" style={{ animationDelay: '0.5s' }}>
          <Code size={45} className="text-primary opacity-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">{/* Improved responsive padding */}
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto">{/* Responsive padding */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">{/* Better responsive text sizing */}
            <span className="gradient-text">Kiran Kumar</span>
            <br />
            <span className="text-foreground">Surali</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8">{/* Responsive subtitle */}
            Frontend Developer | ReactJS Specialist
          </h2>
          
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 h-12 sm:h-16">{/* Responsive typing text */}
            <span className="gradient-text font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="text-sm sm:text-base md:text-lg">with React and modern frontend stacks</span>{/* Responsive text */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">{/* Better responsive button layout */}
            <Button 
              size="lg" 
              className="card-3d px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-primary hover:bg-primary/90 glow w-full sm:w-auto"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-primary/50 hover:bg-primary/10 w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};