
import { Award } from "lucide-react";

export const CertificatesSection = () => {
  const certificates = [
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google & Coursera",
      description: "Comprehensive course on computer networking fundamentals, protocols, and infrastructure",
      link: "https://coursera.org/share/912674cef05d39dc9c821c7986fb3193",
      image: "lovable-uploads/2f48c132-6f0e-49f3-892f-c1e19566c5c4.png"
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Coursera",
      description: "Specialization covering C++ fundamentals, data structures, and object-oriented programming concepts",
      link: "https://coursera.org/verify/specialization/pGCAC-J6MrLBRu",
      image: "lovable-uploads/f7843394-6b52-4ffe-992e-bdf007d09230.png"
    },
    {
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "EC-Council & Coursera",
      description: "In-depth study of ethical hacking fundamentals, security protocols, and vulnerability assessment",
      link: "https://coursera.org/share/a6a349296fc0208389e1bb8f71df7a1e",
      image: "lovable-uploads/08d33a21-a489-4b8d-83f6-618fc77d92d3.png"
    },
    {
      title: "Introduction to Android Mobile Application Development",
      issuer: "Meta & Coursera",
      description: "Fundamental concepts of Android app development, interface design, and programming",
      link: "https://coursera.org/verify/ML8JFHCHJLJL",
      image: "lovable-uploads/ee5f58bb-d0f7-44da-9671-a062e23f2938.png"
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google & Coursera",
      description: "Core cybersecurity principles, threat assessment methodologies, and security frameworks",
      link: "https://coursera.org/verify/TXGJS9MPZFP6",
      image: "lovable-uploads/5d202651-6ab3-45ba-b67c-259c283bc5be.png"
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
