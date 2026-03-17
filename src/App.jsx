import { useEffect, useState } from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import JourneySection from "./components/JourneySection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { siteConfig } from "./data";

const sectionIds = ["about", "journey", "skills", "projects", "achievements", "contact"];
const STORAGE_KEY = "portfolio-language";

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem(STORAGE_KEY) || "en";
  });
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    document.title = siteConfig.seo.title[language];
    document.documentElement.lang = language;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", siteConfig.seo.description[language]);
    }

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -58% 0px",
        threshold: [0.15, 0.3, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg text-text">
      <BackgroundEffects />
      <Navbar activeSection={activeSection} language={language} onLanguageChange={setLanguage} />

      <main className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 sm:px-8">
        <HeroSection language={language} />
        <AboutSection language={language} />
        <JourneySection language={language} />
        <SkillsSection language={language} />
        <ProjectsSection language={language} />
        <AchievementsSection language={language} />
        <ContactSection language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}

export default App;
