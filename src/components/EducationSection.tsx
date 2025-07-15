import { ScrollAnimation } from './ScrollAnimation';
import { GraduationCap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const education = {
  degree: 'B.Tech in Mechanical Engineering',
  institution: 'Kakinada Institute of Engineering and Technology',
  period: '2018 – 2021',
  description: 'Completed Bachelor of Technology with a focus on engineering fundamentals, problem-solving, and analytical thinking skills that translate well to software development.'
};

const certifications = [
  {
    title: 'Frontend React Developer',
    issuer: 'Coding Ninjas',
    description: 'Comprehensive certification covering React.js, Redux, and modern frontend development practices.'
  },
  {
    title: 'Full Stack Developer',
    issuer: 'KodNest Technologies',
    description: 'Full-stack development certification covering both frontend and backend technologies.'
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <ScrollAnimation animation="slide-in-left" delay={200}>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold gradient-text flex items-center gap-3">
                <GraduationCap className="w-8 h-8" />
                Education
              </h3>
              
              <Card className="glass-card card-3d">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {education.degree}
                  </CardTitle>
                  <div className="text-muted-foreground">
                    <p className="font-medium">{education.institution}</p>
                    <p className="text-sm">{education.period}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {education.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>

          {/* Certifications */}
          <ScrollAnimation animation="slide-in-right" delay={400}>
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold gradient-text flex items-center gap-3">
                <Award className="w-8 h-8" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={cert.title} className="glass-card card-3d">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        {cert.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium text-sm">
                        {cert.issuer}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};