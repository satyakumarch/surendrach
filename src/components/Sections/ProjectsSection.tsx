
import { useState } from "react";
import { Code, Database, GitBranch, Github, ExternalLink, Server } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "University Management System",
      description: "A comprehensive system to manage students, faculty, and courses",
      features: [
        "Responsive frontend using HTML & CSS",
        "User authentication with PHP & MySQL",
        "Database schemas for students, faculty, and courses",
        "Role-based access control"
      ],
      techStack: ["HTML", "CSS", "PHP", "MySQL"],
      date: "January 2023",
      preview: "/placeholder.svg",
      github: "https://github.com/kuldeeppathak8008/university-management",
      live: "https://university-management-demo.netlify.app"
    },
    {
      title: "Car Rental System",
      description: "Full-featured car rental management system",
      features: [
        "Responsive user interface for car booking",
        "User authentication and role-based access",
        "MySQL database for users, cars, and bookings",
        "Real-time car availability tracking"
      ],
      techStack: ["Java", "HTML", "CSS", "MySQL"],
      date: "February 2025",
      preview: "/placeholder.svg",
      github: "https://github.com/kuldeeppathak8008/car-rental",
      live: "https://car-rental-demo.netlify.app"
    }
  ];

  const [currentProject, setCurrentProject] = useState(0);
  
  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">
          Projects
        </h2>

        <div className="mt-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card rounded-lg p-6 shadow-md mb-8 ${
                index % 2 === 0 ? 'lg:ml-0' : 'lg:ml-auto'
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              style={{ maxWidth: '800px' }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <h4 className="font-medium text-lg mb-2">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/30 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-medium text-lg mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary/70 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href={project.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Repository</span>
                </a>
                <a 
                  href={project.live}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
