import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AnimatedSection } from "@/components/common/animated-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection /> 
        
        <AnimatedSection>
          <ExperienceSection />
        </AnimatedSection>
        
        <AnimatedSection delay="delay-100">
          <EducationSection />
        </AnimatedSection>
        
        <AnimatedSection delay="delay-300">
          <ProjectsSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
