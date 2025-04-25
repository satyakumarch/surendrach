
import { GraduationCap, School } from "lucide-react";

export const EducationSection = () => {
  const educationItems = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Lovely Professional University, Punjab",
      period: "Aug 2022 – Present",
      grade: "CGPA 5.25",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
      degree: "Intermediate",
      institution: "Shree janachetana mavi. Bisunpur, Kapilvastu",
      period: "Apr 2020 – Mar 2022",
      grade: "83%",
      icon: <School className="h-6 w-6 text-primary" />
    },
    {
      degree: "SEE NEB Board Exam",
      institution: "Shree janachetana mavi. Bisunpur, Kapilvastu",
      period: "Apr 2019",
      grade: "85%",
      icon: <School className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">
          Education
        </h2>

        <div className="mt-10 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-0 translate-x-4"></div>
          
          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div 
                key={item.degree} 
                className="relative"
                data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
              >
                <div className="flex flex-col md:flex-row items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center transform -translate-x-4 md:-translate-x-4">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'
                  }`}>
                    <div className="bg-card p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <p className="text-primary font-medium">{item.institution}</p>
                      <div className="mt-2 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="text-muted-foreground">{item.period}</span>
                        <span className="bg-secondary/50 px-3 py-1 rounded-full text-sm mt-2 sm:mt-0">
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
