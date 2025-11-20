import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { motion, AnimatePresence } from "motion/react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

const positions = [
  "Business",
  "Marketing/Content Creation",
  "Mobile App Developer",
  "Web Developer",
  "Graphic Designer",
  "UI/UX Engineer",
  "Other"
];

export function JoinTeam() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    marketingConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9428597d/team-application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      console.log("Team application successful:", data);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", position: "", marketingConsent: false });
      }, 3000);
    } catch (err: any) {
      console.error("Error submitting team application:", err);
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="join-team" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F0E1]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#E63946] mb-3" style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1.1 }}>Join Our Team</h2>
          <p className="text-gray-600 text-lg" style={{ fontWeight: 600 }}>
            We're looking for passionate individuals to help us revolutionize language learning.
          </p>
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-8"
              >
                <motion.div
                  className="text-[#2A9D8F] text-xl mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  ✓ Application submitted successfully!
                </motion.div>
                <p className="text-gray-600">
                  Thank you for your interest! We'll review your application and get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <Label htmlFor="team-name">Name *</Label>
                  <Input
                    id="team-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="team-email">Email *</Label>
                  <Input
                    id="team-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="team-phone">Phone Number *</Label>
                  <Input
                    id="team-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="team-position">Position *</Label>
                  <select
                    id="team-position"
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="mt-2 w-full px-4 py-3 border border-[#DADADA] rounded-lg focus:border-[#E63946] focus:outline-none focus:ring-2 focus:ring-[#E63946]/20 transition-all"
                    style={{ fontSize: '1.05rem', fontWeight: 500 }}
                  >
                    <option value="">Select a position</option>
                    {positions.map((position) => (
                      <option key={position} value={position}>
                        {position}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="team-marketing-consent"
                    type="checkbox"
                    checked={formData.marketingConsent}
                    onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-2 border-gray-800 bg-white text-[#E63946] focus:ring-[#E63946] cursor-pointer checked:bg-[#E63946] checked:border-[#E63946]"
                  />
                  <Label htmlFor="team-marketing-consent" className="cursor-pointer text-sm">
                    I would like to receive promotional emails and updates about job listings from LangPal (optional)
                  </Label>
                </div>

                {error && (
                  <div className="text-red-600 text-sm">{error}</div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-8 text-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}