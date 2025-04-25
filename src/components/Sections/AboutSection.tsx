
import { FlagTriangleRight, Languages } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-lg leading-relaxed mb-6">
            Passionate Cybersecurity Specialist with expertise in Java, C++, and JavaScript. 
              I specialize in building secure and scalable systems while leveraging DevOps tools like Docker and 
              Kubernetes for seamless deployment. My background in cybersecurity gives me a unique perspective on building 
              reliable systems that prioritize security and performance.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-md" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FlagTriangleRight className="h-5 w-5 text-primary mt-1" />
                <div>
                  <span className="font-medium">Location:</span> 
                  <p className="text-muted-foreground">Lucknow, Amethi| Roots in Uttarpradesh,India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Languages className="h-5 w-5 text-primary mt-1" />
                <div>
                  <span className="font-medium">Languages Spoken:</span> 
                  <p className="text-muted-foreground">English, Hindi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
