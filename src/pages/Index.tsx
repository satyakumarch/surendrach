
import { Layout } from "@/components/Layout/Layout";
import { HeroSection } from "@/components/Sections/HeroSection";
import { AboutSection } from "@/components/Sections/AboutSection";
import { SkillsSection } from "@/components/Sections/SkillsSection";
import { ExperienceSection } from "@/components/Sections/ExperienceSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { CertificatesSection } from "@/components/Sections/CertificatesSection";
import { EducationSection } from "@/components/Sections/EducationSection";
import { ContactSection } from "@/components/Sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <EducationSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
