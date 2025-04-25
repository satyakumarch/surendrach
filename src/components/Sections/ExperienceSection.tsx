
import { Briefcase, Shield, Settings, Terminal } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container max-w-7xl mx-auto">
        <h2 className="section-title" data-aos="fade-right">
          Experience / Internship
        </h2>

        <div className="mt-10" data-aos="fade-up">
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Ethical Hacking + Cybersecurity</h3>
                <p className="text-primary font-medium">Professional Internship</p>
              </div>
              <span className="text-muted-foreground mt-2 md:mt-0">June 2024 - July 2024</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Professional expertise in ethical hacking and penetration testing</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Skilled in vulnerability assessment, risk analysis, and threat mitigation</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Terminal className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Proficient in tools like Kali Linux, Metasploit, Burp Suite, Nmap, Wireshark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
