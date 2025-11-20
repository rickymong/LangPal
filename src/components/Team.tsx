import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import rickImage from "figma:asset/174c7e84d8b2fc05e38061360f7366cdbfe921b1.png";
import muruImage from "figma:asset/4c780cc2cd1c858ac8af62b038ba8f08b5003cad.png";
import ayushImage from "figma:asset/18ec9d739a68f025ad5244cb44b546ecad484ae5.png";

const teamMembers = [
  {
    name: "Parikshit (Rick) Mongia",
    role: "Co-Founder & CEO",
    bio: "Passionate about languages and AI. Finance & Data Science Student @ Rutgers University",
    image: rickImage,
    imagePosition: "47% 45%", // Move image down slightly
  },
  {
    name: "Ayush Mongia",
    role: "Co-Founder & CMO",
    bio: "Marketing and tech enthusiast. Current Finance Student @ the University of Washington ",
    image: ayushImage,
    imagePosition: "50% 20%",
  },
  {
    name: "Sakthimurugan Sakthivel",
    role: "Co-Founder & Tech Lead",
    bio: "Electrical Engineering Student @ the University of Washington",
    image: muruImage,
    imagePosition: "10% 40%",
  },
];

export function Team() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="team"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF5EF]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#E63946] mb-4" style={{ fontSize: '3.5rem', fontWeight: 800 }}>Meet the Team</h2>
          <p className="text-gray-600 text-lg" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            The people behind LangPal
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    style={{
                      objectPosition: member.imagePosition,
                    }}
                  />
                </motion.div>
              </div>
              <div className="p-6 border-2 border-transparent group-hover:border-[#E63946] transition-colors duration-300">
                <h3 className="mb-1 text-gray-800">
                  {member.name}
                </h3>
                <div className="text-[#E63946] mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}