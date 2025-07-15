import { ScrollAnimation } from './ScrollAnimation';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">About Me</span>
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="slide-in-left" delay={200}>
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-primary glow relative overflow-hidden">
                  <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text">KS</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-in-right" delay={400}>
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">
                  Passionate Frontend Developer
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I'm a passionate Frontend Developer with <span className="text-primary font-semibold">4.5 years of experience</span> creating 
                  responsive and scalable web applications using ReactJS, JavaScript, and modern UI frameworks.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I translate UI/UX ideas into performant code and love collaborating in agile teams to build 
                  production-ready products that deliver exceptional user experiences.
                </p>
                
                <Button 
                  className="glow bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://github.com/kirankumar949489', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};