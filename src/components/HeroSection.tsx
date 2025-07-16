import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Download, Code, Zap, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
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

  // Parallax icon effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll<HTMLElement>(".parallax-icon").forEach((el) => {
        const speed = Number(el.dataset.speed || 1);
        el.style.transform = `translateY(${window.scrollY * speed * 0.05}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="hero-bg pt-24 pb-32 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Particle blob background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 blur-3xl opacity-10 z-0">
        <div className="w-[600px] h-[600px] bg-gradient-to-br from-primary via-secondary to-accent rounded-full" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 z-0">
        <div className="floating absolute top-20 left-10 parallax-icon" data-speed="2">
          <Code size={40} className="text-primary opacity-20" />
        </div>
        <div className="floating absolute top-40 right-20 parallax-icon" data-speed="1.5">
          <Zap size={35} className="text-secondary opacity-20" />
        </div>
        <div className="floating absolute bottom-40 left-20 parallax-icon" data-speed="1.8">
          <Sparkles size={30} className="text-accent opacity-20" />
        </div>
        <div className="floating absolute bottom-20 right-10 parallax-icon" data-speed="2.2">
          <Code size={45} className="text-primary opacity-20" />
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl max-w-4xl mx-auto shadow-glow backdrop-blur-md transition-all duration-700 hover:scale-[1.02]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Kiran Kumar
            </span>
            <br />
            <span className="text-foreground">Surali</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8">
            Frontend Developer | ReactJS Specialist
          </h2>

          <div className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 h-16">
            <span className="gradient-text font-medium relative after:content-['|'] after:animate-blink after:ml-1">
              {typedText}
            </span>
            <br />
            <span className="text-sm sm:text-base md:text-lg">
              with React and modern frontend stacks
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              size="lg"
              className="card-3d px-6 py-4 bg-primary hover:bg-primary/80 glow ring-2 ring-primary ring-offset-2 ring-offset-background transition-all duration-300 w-full sm:w-auto"
              onClick={() => window.open("#", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-card px-6 py-4 border-primary/50 hover:bg-primary/10 transition-all w-full sm:w-auto"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
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
