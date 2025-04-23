
import { Briefcase, Cable, Settings, Wifi } from "lucide-react";

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
                <h3 className="text-xl font-bold">SIBSU WIFI Pvt Ltd</h3>
                <p className="text-primary font-medium">Router Configuration Intern</p>
              </div>
              <span className="text-muted-foreground mt-2 md:mt-0">Jan 2022 - Jun 2022</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Wifi className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Configured routers via Wi‑Fi/Ethernet connections for optimal performance</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Set up custom SSIDs and network preferences based on client requirements</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Adjusted DHCP settings and implemented appropriate IP addressing schemes</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Cable className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Tested network connectivity, troubleshooted issues, monitored performance, and deployed firmware updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
