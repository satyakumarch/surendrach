import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background with network pattern */}
      <div className="absolute inset-0 bg-tech dark:opacity-50 z-0">
        <div className="w-full h-full bg-[url('/api/placeholder/1080/1080')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-12">
          
          {/* Text Content - Left side */}
          <div className="md:w-3/5 md:pr-6 md:text-left text-center" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Kuldeep Pathak
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 font-display">
              Cyber Security
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl text-muted-foreground md:mx-0 mx-auto">
              A dedicated Computer Science Engineering student with expertise in C, C++, Java, and web technologies.
              Passionate about cybersecurity and ethical hacking with hands-on experience in various security tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:justify-start justify-center">
              <a
                href="/Kuldeep.pdf"
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
          
          {/* Image - Right side */}
          <div className="md:w-2/5 flex justify-center md:justify-end" data-aos="fade-left">
            <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-xl">
            <img
  src="kuldip1.jpg"
  alt="Kuldeep Pathak"
  className="w-full h-full object-cover"
/>
            </div>
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