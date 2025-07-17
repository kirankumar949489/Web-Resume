import { ScrollAnimation } from './ScrollAnimation';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">{/* Responsive padding */}
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">{/* Responsive heading */}
            <span className="gradient-text">About Me</span>
          </h2>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">{/* Better responsive grid */}
          <ScrollAnimation animation="slide-in-left" delay={200}>
  <div className="relative">
    <div className="glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl">
      <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-primary glow relative overflow-hidden">
        <div className="absolute inset-4 rounded-full bg-card flex items-center justify-center overflow-hidden">
          <img 
  src="/my.jpg"
  alt="Kiran Surali"
  className="w-full h-full object-cover rounded-full border-2 border-primary/40 shadow-lg"
/>
        </div>
      </div>
    </div>
  </div>
</ScrollAnimation>


          <ScrollAnimation animation="slide-in-right" delay={400}>
            <div className="space-y-6">
              <div className="glass-card p-6 sm:p-8 rounded-xl sm:rounded-2xl">{/* Responsive card */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 gradient-text">{/* Responsive heading */}
                  Passionate Frontend Developer
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">{/* Responsive text */}
                  I'm a passionate Frontend Developer with <span className="text-primary font-semibold">4.5 years of experience</span> creating 
                  responsive and scalable web applications using ReactJS, JavaScript, and modern UI frameworks.
                </p>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">{/* Responsive text */}
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