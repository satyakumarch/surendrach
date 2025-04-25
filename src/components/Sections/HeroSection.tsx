
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background with network pattern */}
      <div className="absolute inset-0 bg-tech dark:opacity-50 z-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1080&auto=format')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <div className="mb-8 rounded-full overflow-hidden w-48 h-48 border-4 border-primary shadow-xl">
            <img 
              src="lovable-uploads/a3ad7381-e8be-4b38-bcb0-a7c74db6beea.png"
              alt="Kuldeep Pathak"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Kuldeep Pathak
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 font-display">
            Computer Science Engineer
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl text-muted-foreground">
            A passionate Computer Science Engineering student with expertise in C, C++, Java, and web technologies.
            Focused on building robust applications and solving complex problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/resume.pdf" 
              download
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <ArrowDown className="h-5 w-5" />
              Download Résumé
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-transparent border border-primary text-foreground font-medium hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};
