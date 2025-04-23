
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Education Website project screenshots (placeholders)
  const projectImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">
          Projects
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Description */}
          <div className="bg-card rounded-lg p-6 shadow-md" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-2">Education Website</h3>
            <p className="text-muted-foreground mb-4">A comprehensive platform for educational resources</p>
            
            <h4 className="font-medium text-lg mb-2">Key Features:</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/30 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <span>Home overview with featured courses and user statistics</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/30 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <span>Course catalog with search functionality and filtering options</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/30 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <span>Team section highlighting instructors and staff</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/30 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <span>Contact page with JavaScript form validation</span>
              </li>
            </ul>
            
            <h4 className="font-medium text-lg mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-secondary/70 rounded-full text-sm">HTML</span>
              <span className="px-3 py-1 bg-secondary/70 rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-secondary/70 rounded-full text-sm">JavaScript</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/12205273s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Preview</span>
              </a>
            </div>
          </div>
          
          {/* Project Carousel */}
          <div className="relative rounded-lg overflow-hidden shadow-md h-[300px] sm:h-[400px]" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute inset-0 flex">
              {projectImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Project screenshot ${index + 1}`}
                  className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                    index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
                  }`}
                />
              ))}
            </div>
            
            {/* Carousel Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-primary w-6" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm p-2 rounded-full"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm p-2 rounded-full"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
