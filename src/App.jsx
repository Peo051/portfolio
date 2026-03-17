import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import JourneySection from "./components/JourneySection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import ProjectCaseStudyPage from "./components/ProjectCaseStudyPage";
import { getProjectBySlug } from "./data/portfolioData";
import { useLanguage } from "./context/LanguageContext";

const sectionIds = ["about", "journey", "skills", "projects", "achievements", "contact"];
const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
const homePath = basePath || "/";

function getProjectPath(slug) {
  return `${basePath}/projects/${slug}`;
}

function getRouteFromLocation() {
  const segments = window.location.pathname.split("/").filter(Boolean);
  const projectIndex = segments.indexOf("projects");

  if (projectIndex !== -1 && segments[projectIndex + 1]) {
    return {
      type: "project",
      slug: decodeURIComponent(segments[projectIndex + 1])
    };
  }

  return { type: "home" };
}

function App() {
  const { language } = useLanguage();
  const [route, setRoute] = useState(() => getRouteFromLocation());
  const [activeSection, setActiveSection] = useState("about");

  const project = useMemo(() => (route.type === "project" ? getProjectBySlug(route.slug) : null), [route]);

  useEffect(() => {
    const onPopState = () => setRoute(getRouteFromLocation());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (route.type !== "home") {
      return;
    }

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [route.type]);

  useEffect(() => {
    if (route.type === "project" && project) {
      document.title = `${project.title} | ${language === "vi" ? "Chi tiet du an" : "Case Study"}`;
      return;
    }

    document.title =
      language === "vi"
        ? "Tran Duong Gia Bao | Portfolio Ky thuat phan mem"
        : "Tran Duong Gia Bao | Software Engineering Portfolio";
  }, [language, project, route.type]);

  function openCaseStudy(slug) {
    window.history.pushState({}, "", getProjectPath(slug));
    setRoute({ type: "project", slug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToHome(sectionId) {
    window.history.pushState({}, "", homePath);
    setRoute({ type: "home" });

    window.requestAnimationFrame(() => {
      if (sectionId) {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  if (route.type === "project") {
    return (
      <div className="relative min-h-screen overflow-x-clip bg-bg text-text">
        <BackgroundEffects />
        <ProjectCaseStudyPage project={project} onBackHome={backToHome} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg text-text">
      <BackgroundEffects />
      <Navbar activeSection={activeSection} />
      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection onOpenCaseStudy={openCaseStudy} />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
