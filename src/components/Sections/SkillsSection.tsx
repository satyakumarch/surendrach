
import {
  Code,
  Container,
  Database,
  GitBranch,
  Monitor,
  Clock,
  LineChart,
  Repeat,
} from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <Code className="h-5 w-5 text-primary" /> },
        { name: "C++", icon: <Code className="h-5 w-5 text-primary" /> },
        { name: "JavaScript", icon: <Code className="h-5 w-5 text-primary" /> },
      ],
    },
    {
      title: "Tools / Platforms",
      skills: [
        { name: "Git", icon: <GitBranch className="h-5 w-5 text-primary" /> },
        { name: "Docker", icon: <Container className="h-5 w-5 text-primary" /> },
        { name: "Kubernetes", icon: <Container className="h-5 w-5 text-primary" /> },
        { name: "Firebase", icon: <Database className="h-5 w-5 text-primary" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <Database className="h-5 w-5 text-primary" /> },
        { name: "MongoDB", icon: <Database className="h-5 w-5 text-primary" /> },
      ],
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", icon: <Monitor className="h-5 w-5 text-primary" /> },
        { name: "Linux", icon: <Monitor className="h-5 w-5 text-primary" /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Time Management", icon: <Clock className="h-5 w-5 text-primary" /> },
        { name: "Project Management", icon: <LineChart className="h-5 w-5 text-primary" /> },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
