
import { Award } from "lucide-react";

export const CertificatesSection = () => {
  const certificates = [
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      description: "Comprehensive course covering C++ fundamentals, object-oriented programming, data structures, and practical programming concepts",
      link: "https://coursera.org/verify/specialization/WQK5",
      image: "lovable-uploads/cbc95d90-eb37-4545-a699-886d968f462a.png"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google & Coursera",
      description: "In-depth study of computer networking fundamentals, protocols, and network security concepts",
      link: "https://coursera.org/verify/UU9C6E3EQY4C",
      image: "lovable-uploads/1cba612b-73a3-4aa7-ac6a-9a75e63d930c.png"
    },
    {
      title: "Introduction to Cybersecurity Essentials",
      issuer: "IBM & Coursera",
      description: "Comprehensive introduction to cybersecurity fundamentals, security protocols, and threat assessment",
      link: "https://coursera.org/verify/PQKQWP4FWL6G",
      image: "lovable-uploads/fdb4fee0-1de6-4304-9c78-23b012a855fc.png"
    },
    {
      title: "Ethical Hacking+",
      issuer: "CyberForge Academy",
      description: "60-hour intensive course on ethical hacking, penetration testing, and cybersecurity practices",
      link: "#",
      image: "lovable-uploads/ac7cf0ef-e95b-427d-9afb-21a7ce688dc1.png"
    },
    {
      title: "Digital Forensics Essentials (DFE)",
      issuer: "EC-Council & Coursera",
      description: "Specialized training in digital forensics, evidence handling, and cybersecurity investigation techniques",
      link: "https://coursera.org/verify/7PWXFP121NQN",
      image: "lovable-uploads/6fd15536-ce83-4336-bddf-f9a4956012f5.png"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">
          Certificates
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              className="group no-underline"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">Issued by {cert.issuer}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">{cert.description}</p>
                  
                  <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="h-4 w-4 mr-2" />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
