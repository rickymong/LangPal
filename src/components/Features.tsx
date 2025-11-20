import { MessageCircle, Target, CheckCircle, MapPin, Trophy, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const features = [
  {
    title: "Practice Real Conversations",
    description: "Speak with lifelike AI that responds naturally so you can build real speaking confidence.",
    icon: MessageCircle,
    color: "#E63946",
  },
  {
    title: "Personalized Learning for Your Goals",
    description: "Your lessons match your level and purpose, whether you are studying, traveling, or improving for work.",
    icon: Target,
    color: "#F4A261",
  },
  {
    title: "Clear and Instant Feedback",
    description: "Get simple corrections on pronunciation, grammar, and word choice so you learn faster.",
    icon: CheckCircle,
    color: "#E9C46A",
  },
  {
    title: "Real Life Speaking Scenarios",
    description: "Train for everyday situations like ordering food, interviewing, traveling, and meeting new people.",
    icon: MapPin,
    color: "#2A9D8F",
  },
  {
    title: "Community Challenges and Support",
    description: "Stay motivated with weekly challenges, rewards, and a supportive community of learners.",
    icon: Trophy,
    color: "#1D3557",
  },
  {
    title: "Easy to Track Progress",
    description: "See your growth with clean analytics that show accuracy, vocabulary, and speaking confidence.",
    icon: TrendingUp,
    color: "#E63946",
  },
];

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="features" className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F5F0E1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#E63946] mb-3">Why Choose LangPal</h2>
          <p className="text-gray-600">Learn a new language with tools built for real communication</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 20px ${feature.color}40`
                  }}
                >
                  <Icon size={28} style={{ color: feature.color }} />
                </motion.div>
                <h3 className="mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}