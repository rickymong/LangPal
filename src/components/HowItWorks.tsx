import { Target, MessageCircle, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const steps = [
  {
    number: "01",
    title: "Set Your Goals",
    description: "Choose why you want to learn a language, your level, and the type of conversations you want to practice.",
    icon: Target,
    color: "#E63946",
  },
  {
    number: "02",
    title: "Start Speaking with LangPal AI",
    description: "Jump into natural conversations, practice slang or formal speech, and learn through real scenarios.",
    icon: MessageCircle,
    color: "#F4A261",
  },
  {
    number: "03",
    title: "Get Instant Feedback",
    description: "LangPal gives quick corrections on pronunciation, grammar, and vocabulary so you improve fast.",
    icon: Lightbulb,
    color: "#E9C46A",
  },
  {
    number: "04",
    title: "Track Your Progress",
    description: "See your growth with clear analytics that show accuracy, confidence, and vocabulary expansion.",
    icon: TrendingUp,
    color: "#2A9D8F",
  },
];

export function HowItWorks() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F5F0E1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#E63946] mb-3">How It Works</h2>
          <p className="text-gray-600">Get started in four simple steps</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.645, 0.045, 0.355, 1]
                }}
                whileHover={{ 
                  y: -6, 
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${step.color}20` }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: `0 0 25px ${step.color}30`
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={32} style={{ color: step.color }} />
                </motion.div>
                <div className="mb-4" style={{ color: step.color }}>
                  {step.number}
                </div>
                <h3 className="mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}