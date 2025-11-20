import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF5EF]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            className="space-y-5"
          >
            <h2 className="text-[#E63946]">About LangPal</h2>
            <p className="text-gray-700">
              LangPal is revolutionizing language education by combining cutting-edge AI technology 
              with the power of community learning. Our mission is to make language learning 
              interactive, fun, and accessible for students worldwide.
            </p>
            <p className="text-gray-700">
              We believe that confidence comes from practice, and practice is best when it's 
              engaging. Through personalized learning paths, real-time feedback, and a supportive 
              community, we empower learners to achieve their language goals and connect with 
              cultures around the globe.
            </p>
            <p className="text-gray-700">
              Join us on this journey to break down language barriers and open doors to new 
              opportunities, friendships, and experiences.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
              alt="Students learning together"
              className="rounded-2xl shadow-xl w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}