import { ScrollAnimation } from './ScrollAnimation';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Truefy Technologies',
    position: 'Frontend Developer',
    period: '2022 – Present',
    description: 'Led frontend development for multiple web applications using React.js, implemented responsive designs, and collaborated with cross-functional teams to deliver high-quality user experiences.',
    current: true
  },
  {
    company: 'Capgemini Pvt. Ltd.',
    position: 'Software Analyst',
    period: '2022',
    description: 'Worked on enterprise-level applications, participated in code reviews, and contributed to the development of scalable software solutions using modern JavaScript frameworks.',
    current: false
  },
  {
    company: 'Next Generation Engineers',
    position: 'Junior Developer',
    period: '2021 – 2022',
    description: 'Started my professional journey building web applications, learning best practices, and developing foundational skills in React.js and frontend technologies.',
    current: false
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-background-light/50">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation animation="fade-in">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Professional Experience</span>
          </h2>
        </ScrollAnimation>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollAnimation 
                key={exp.company} 
                animation="slide-in-right" 
                delay={index * 200}
              >
                <div className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.current ? 'bg-primary glow' : 'bg-secondary'
                  }`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1">
                    <div className="glass-card card-3d p-6 rounded-2xl">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-2xl font-semibold gradient-text">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl text-primary font-medium mb-3">
                        {exp.company}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.current && (
                        <div className="mt-4">
                          <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full border border-primary/30">
                            Current Position
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};