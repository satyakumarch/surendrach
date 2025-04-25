
import { Code, Database, Monitor, Clock, LineChart, Repeat } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: <Code className="h-5 w-5 text-primary" /> },
        { name: "C++", icon: <Code className="h-5 w-5 text-primary" /> },
        { name: "Java", icon: <Code className="h-5 w-5 text-primary" /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <Code className="h-5 w-5 text-primary" /> },
        { name: "CSS", icon: <Code className="h-5 w-5 text-primary" /> },
      ],
    },
    {
      title: "Tools/Platforms",
      skills: [
        { name: "MySQL", icon: <Database className="h-5 w-5 text-primary" /> },
        { name: "Kali Linux", icon: <Monitor className="h-5 w-5 text-primary" /> },
        { name: "Metasploit", icon: <Monitor className="h-5 w-5 text-primary" /> },
        { name: "Burp Suite", icon: <Monitor className="h-5 w-5 text-primary" /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem-Solving", icon: <Clock className="h-5 w-5 text-primary" /> },
        { name: "Team Player", icon: <LineChart className="h-5 w-5 text-primary" /> },
        { name: "Project Management", icon: <Repeat className="h-5 w-5 text-primary" /> },
        { name: "Adaptability", icon: <Repeat className="h-5 w-5 text-primary" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-lg p-6 shadow-md"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-badge"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
