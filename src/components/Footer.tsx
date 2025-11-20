import { Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

// X (Twitter) icon component
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// TikTok icon component
const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

interface FooterProps {
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
}

export function Footer({ onNavigateToPrivacy, onNavigateToTerms }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { label: "Home", id: "hero" },
    { label: "How It Works", id: "how-it-works" },
    { label: "About", id: "about" },
    { label: "Our Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      color: "#E63946",
      hoverColor: "#C62828",
      label: "Instagram",
      url: "https://www.instagram.com/langpalhq",
    },
    {
      icon: Linkedin,
      color: "#F4A261",
      hoverColor: "#E07B4C",
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/langpalapp",
    },
    {
      icon: XIcon,
      color: "#2A9D8F",
      hoverColor: "#228B7F",
      label: "X",
      url: "https://www.x.com/langpalhq",
    },
    {
      icon: TikTokIcon,
      color: "#E9C46A",
      hoverColor: "#D4B357",
      label: "TikTok",
      url: "https://www.tiktok.com/@langpalhq",
    },
  ];

  return (
    <footer className="bg-[#1D3557] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="text-2xl mb-4">LangPal</div>
            <p className="text-gray-300">
              The modern way to learn languages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-[#E63946] transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{ backgroundColor: social.color }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: social.hoverColor,
                    }}
                    transition={{ duration: 0.4 }}
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
            <div className="mt-4">
              <a
                href="mailto:teamlangpal@gmail.com"
                className="text-gray-300 hover:text-[#E63946] transition-colors duration-200"
              >
                teamlangpal@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="border-t border-gray-600 pt-8 text-center text-gray-400">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a
              href="#"
              className="hover:text-[#E63946] transition-colors duration-200"
              onClick={onNavigateToPrivacy}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-[#E63946] transition-colors duration-200"
              onClick={onNavigateToTerms}
            >
              Terms & Conditions
            </a>
          </div>
          <p>© 2025 LangPal, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}