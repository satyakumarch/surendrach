
import { Award, ExternalLink } from "lucide-react";

export const CertificatesSection = () => {
  const certificates = [
    {
      title: "Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      link: "#",
      logo: "/placeholder.svg"
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "Coursera",
      link: "#",
      logo: "/placeholder.svg"
    },
    {
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "Coursera",
      link: "#",
      logo: "/placeholder.svg"
    },
    {
      title: "Programming Fundamentals in Kotlin",
      issuer: "Coursera",
      link: "#",
      logo: "/placeholder.svg"
    },
    {
      title: "Core & Advanced Java",
      issuer: "Board Infinity",
      link: "#",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">
          Certificates
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-muted-foreground mb-4">Issued by {cert.issuer}</p>
                
                <div className="flex items-center text-primary text-sm font-medium">
                  <span>View Certificate</span>
                  <span className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
