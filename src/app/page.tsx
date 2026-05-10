import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ExperienceSection } from "@/components/sections/experience";
import { FeaturedProjectSection } from "@/components/sections/featured-project";
import { SkillsSection } from "@/components/sections/skills";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex-1">
        <HeroSection />
        <div className="relative z-10 px-5 sm:px-8">
          <div className="section-rule" />
        </div>
        <ExpertiseSection />
        <ExperienceSection />
        <FeaturedProjectSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
