import { ScrollAnimation } from './ScrollAnimation';
import { Github, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 bg-background-light/30 border-t border-border/20">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold gradient-text">
                  Kiran Kumar Surali
                </h3>
                <p className="text-muted-foreground">
                  Frontend Developer passionate about creating amazing web experiences with React and modern technologies.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
                <div className="space-y-2">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('skills')}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Connect</h4>
                <div className="space-y-3">
                  <a 
                    href="mailto:kiran.surali@example.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    kiran.surali@example.com
                  </a>
                  <a 
                    href="tel:+91XXXXXXXXX"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 XXXXX XXXXX
                  </a>
                  <a 
                    href="https://github.com/kirankumar949489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border/20 mt-8 pt-8 text-center">
              <p className="text-muted-foreground">
                © 2024 Kiran Kumar Surali. Built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};