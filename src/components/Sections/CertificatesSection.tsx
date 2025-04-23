
import { Award, ExternalLink } from "lucide-react";

export const CertificatesSection = () => {
  const certificates = [
    {
      title: "Bits and Bytes of Computer Networking",
      issuer: "Google & Coursera",
      description: "Comprehensive understanding of computer networking fundamentals, protocols, and architectures",
      link: "https://coursera.org/verify/CG7M97D51764",
      image: "f08752d3-da31-4c65-a2ac-cd8bda2af1b5.png"
    },
    
    {
      title: "Introduction to Android Mobile Application Development",
      issuer: "Meta & Coursera",
      description: "Hands‑on fundamentals of building Android apps with Java/Kotlin, Android Studio, and common mobile paradigms.",
      ink: "/* use the exact Coursera verify URL printed on your certificate */",
      image: "ram.png"
    },
    {
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "EC‑Council & Coursera",
      description: "Core ethical‑hacking concepts: footprinting, vulnerability analysis, network scanning, enumeration, and basic exploit techniques.",
      link: "/* use the exact Coursera verify URL printed on your certificate */",
      image: "shyam.png"
    },
  
    
    {
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "EC-Council & Coursera",
      description: "Essential skills in ethical hacking, cybersecurity, and network security testing",
      link: "https://coursera.org/verify/8YRNM6EG1R",
      image: "ef1bf828-633c-4057-afe3-7ac650a00518.png"
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      description: "Practical experience in C++ programming and object-oriented design principles",
      link: "#",
      image: "f4682ceb-3f27-4d51-89e6-abf10669cce4.png"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">
          Certificates
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              className="card-wrapper group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground mb-2">Issued by {cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                
                {/* <div className="flex items-center text-primary text-sm font-medium">
                  <span>View Certificate</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
