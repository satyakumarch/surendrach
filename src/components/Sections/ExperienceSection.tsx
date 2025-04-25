
import { Briefcase, Shield, Settings, Terminal, Wifi } from "lucide-react";

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
                <h3 className="text-xl font-bold">Network Technician</h3>
                <p className="text-primary font-medium">SIBSU WIFI PRIVATE COMPANY</p>
              </div>
              <span className="text-muted-foreground mt-2 md:mt-0">June 2023 - August 2023</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Wifi className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Connected to routers via Wi-Fi or Ethernet for configuration</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Set unique Wi-Fi network names (SSID) for easy identification</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Configured DHCP settings for automatic IP address assignment</p>
              </div>

              <div className="flex items-start gap-3">
                <Terminal className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Tested network connectivity and resolved basic connection issues</p>
              </div>

              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p>Monitored router performance and updated firmware when needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
