import { useState } from 'react';
import { ScrollAnimation } from './ScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background-light/50">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Get In Touch</span>
          </h2>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollAnimation animation="slide-in-left" delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold gradient-text mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <Card className="glass-card card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground">suralikirankumar82gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground">+91 8333991819</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card card-3d">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Github className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">GitHub</h4>
                        <button 
                          onClick={() => window.open('https://github.com/kirankumar949489', '_blank')}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          github.com/kirankumar949489
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation animation="slide-in-right" delay={400}>
            <Card className="glass-card card-3d">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-card border-border/50 focus:border-primary bg-input"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-card border-border/50 focus:border-primary bg-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="glass-card border-border/50 focus:border-primary bg-input min-h-[120px]"
                      placeholder="Tell me about your project or just say hello..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full glow bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};