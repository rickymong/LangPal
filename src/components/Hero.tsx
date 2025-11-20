import { Button } from "./ui/button";
import macawImage from "figma:asset/77d20932428b112d8ff930be61d99c97da0a0826.png";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
          >
            <h1 className="text-gray-800 font-extrabold" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}>
              Learn Languages. <span className="gradient-text">Connect Cultures.</span> Speak Confidently.
            </h1>
            <p className="text-gray-600 text-xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}>
              Interactive, AI-powered language learning for students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("waitlist")}
                className="btn-primary px-12 py-8 shadow-lg text-lg"
              >
                Join Waitlist
              </Button>
              <Button
                onClick={() => scrollToSection("how-it-works")}
                className="btn-secondary px-12 py-8 text-lg"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Illustration with Parallax */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.645, 0.045, 0.355, 1] }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={macawImage}
              alt="Scarlet Macaw - LangPal mascot"
              className="w-full max-w-md h-auto"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}