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
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
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

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Kiran Kumar</span>
            <br />
            <span className="text-foreground">Surali</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Frontend Developer | ReactJS Specialist
          </h2>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-12 h-16">
            <span className="gradient-text font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
            <br />
            <span className="text-lg">with React and modern frontend stacks</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="card-3d px-8 py-4 text-lg bg-primary hover:bg-primary/90 glow"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card px-8 py-4 text-lg border-primary/50 hover:bg-primary/10"
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