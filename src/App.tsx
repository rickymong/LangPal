import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Waitlist } from "./components/Waitlist";
import { Contact } from "./components/Contact";
import { Team } from "./components/Team";
import { JoinTeam } from "./components/JoinTeam";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsAndConditions } from "./components/TermsAndConditions";

type Page = "home" | "privacy" | "terms";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToPrivacy = () => {
    setCurrentPage("privacy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToTerms = () => {
    setCurrentPage("terms");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (currentPage === "privacy") {
    return <PrivacyPolicy onBack={navigateToHome} />;
  }

  if (currentPage === "terms") {
    return <TermsAndConditions onBack={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#F5F0E1]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <About />
        <Features />
        <Waitlist />
        <Contact />
        <Team />
        <JoinTeam />
      </main>
      <Footer onNavigateToPrivacy={navigateToPrivacy} onNavigateToTerms={navigateToTerms} />
    </div>
  );
}