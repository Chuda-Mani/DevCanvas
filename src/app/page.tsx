import { AboutSection } from "@/sections/About";
import { CertificationsSection } from "@/sections/Certifications";
import { ContactSection } from "@/sections/Contact";
import { ExperienceSection } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <TapeSection/>
      <CertificationsSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
