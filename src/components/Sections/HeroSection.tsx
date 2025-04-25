import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background with network pattern */}
      <div className="absolute inset-0 bg-tech dark:opacity-50 z-0">
        <div className="w-full h-full bg-[url('/api/placeholder/1080/1080')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          
          {/* Image - Now at the top */}
          <div className="flex justify-center mb-6" data-aos="fade-down">
            <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-xl">
              <img
                src="sur.png"
                alt="Surendra Kumar Chaudhary"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text Content - Below the image */}
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Surendra Kumar Chaudhary
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 font-display">
              Cyber Security
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl text-muted-foreground mx-auto">
            A dedicated Computer Science Engineering student with a strong focus on Cybersecurity. 
              Proficient in identifying vulnerabilities, penetration testing, and implementing security 
              measures to safeguard systems. Experienced with tools like Wireshark, Metasploit, and Burp Suite, 
              along with secure coding practices in Java, C++, and Python. Passionate about protecting 
              digital assets and enhancing network security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="/surendra.pdf"
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
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </div>
    </section>
  );
};