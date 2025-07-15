import { ScrollAnimation } from './ScrollAnimation';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30'
  },
  {
    title: 'Frameworks',
    skills: ['ReactJS', 'Redux', 'Zustand', 'Webpack', 'Material UI'],
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary/30'
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'REST APIs'],
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/30'
  },
  {
    title: 'Design',
    skills: ['HTML5', 'CSS3', 'SCSS'],
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30'
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-background-light/50">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollAnimation 
              key={category.title} 
              animation="scale-in" 
              delay={categoryIndex * 200}
            >
              <div className="glass-card card-3d p-6 rounded-2xl h-full">
                <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className={`${category.bgColor} ${category.borderColor} border rounded-lg p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <span className="text-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};