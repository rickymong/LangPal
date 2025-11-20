import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { motion, AnimatePresence } from "motion/react";
import { createClient } from "@supabase/supabase-js";
import { projectId, publicAnonKey } from "../utils/supabase/info";

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

export function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const { error: insertError } = await supabase.from("waitlist").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        consent: formData.consent,
        timestamp: new Date().toISOString()
      });

      if (insertError) throw insertError;

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", consent: false });
      }, 3000);

    } catch (err: any) {
      console.error("Waitlist submit error:", err);
      setError(err.message || "Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F5F0E1]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[#E63946] mb-3">Join Our Waitlist</h2>
          <p className="text-gray-700">
            Be the first to try LangPal! Join our waitlist now.
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
                  ✓ Thank you for joining the waitlist!
                </motion.div>
                <p className="text-gray-600">We'll be in touch soon.</p>
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
                  <Label htmlFor="waitlist-name">Name *</Label>
                  <Input
                    id="waitlist-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="waitlist-email">Email *</Label>
                  <Input
                    id="waitlist-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="waitlist-phone">Phone Number *</Label>
                  <Input
                    id="waitlist-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="waitlist-consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-2 border-gray-800 bg-white cursor-pointer checked:bg-[#E63946] checked:border-[#E63946]"
                  />
                  <Label htmlFor="waitlist-consent" className="cursor-pointer text-sm">
                    I agree to receive communication from LangPal about product updates,
                    launch announcements, and early access opportunities. *
                  </Label>
                </div>

                {error && <div className="text-red-600 text-sm">{error}</div>}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-8 text-lg"
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
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
