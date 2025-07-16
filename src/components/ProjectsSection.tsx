import { ScrollAnimation } from './ScrollAnimation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'YouLyst E-Commerce Platform',
    description:
      'React-based e-commerce UI with advanced product filtering and mobile-first responsive design. Features include dynamic cart management, product search, and optimized user experience.',
    technologies: ['React', 'Redux', 'CSS3', 'Responsive Design'],
    demoUrl: 'https://youlyst-homepage-u8gz.vercel.app/',
    githubUrl: 'https://github.com/kirankumar949489/youlyst-homepage',
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'Visual Pipeline Builder',
    description:
      'Node-based UI built with React Flow, featuring FastAPI backend integration, lazy loading for performance, and DAG validation for complex workflow management.',
    technologies: ['React Flow', 'FastAPI', 'TypeScript', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#',
    gradient: 'from-secondary to-accent',
  },
  {
    title: 'Weather App',
    description:
      'Responsive weather forecast application using OpenWeatherMap API with debounced search functionality, location-based weather, and 7-day forecast display.',
    technologies: ['React', 'OpenWeather API', 'JavaScript', 'CSS3'],
    demoUrl: 'https://weather-dashboard-task.netlify.app/',
    githubUrl: '#',
    gradient: 'from-accent to-primary',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing skills, projects, and contact information with a modern design and responsive layout.',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite'],
    demoUrl: 'https://kiran-surali-portfolio-craft.vercel.app/',
    githubUrl: 'https://github.com/kirankumar949489/kiran-surali-portfolio-craft',
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'Wedding Invitation Website',
    description:
      'A digital wedding invitation with event details, RSVP form, and responsive design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Netlify'],
    demoUrl: 'https://wedding-invitation-own.netlify.app/',
    githubUrl: '#',
    gradient: 'from-secondary to-accent',
  },
  {
    title: 'Restaurant Website',
    description:
      'A restaurant site with a menu of food items, prices, and images. Features responsive design, online ordering, and contact info.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Netlify', 'React JS'],
    demoUrl: 'https://beautiful-maamoul-2e1897.netlify.app/',
    githubUrl: '#',
    gradient: 'from-accent to-primary',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Featured Projects</span>
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation
              key={project.title}
              animation="scale-in"
              delay={index * 200}
            >
              <Card className="glass-card card-3d h-full group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <CardHeader>
                  <CardTitle className="text-xl gradient-text group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="flex-1 glow"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 glass-card border-primary/30"
                      onClick={() => {
                        if (project.githubUrl !== '#') {
                          window.open(project.githubUrl, '_blank');
                        }
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
