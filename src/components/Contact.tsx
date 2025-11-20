import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { motion, AnimatePresence } from "motion/react";
import { createClient } from "@supabase/supabase-js";
import {
  projectId,
  publicAnonKey,
} from "../utils/supabase/info";

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey,
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      const { error: insertError } = await supabase
        .from("contact_messages")
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          consent: formData.consent,
          timestamp: new Date().toISOString(),
        });

      if (insertError) throw insertError;

      console.log(
        "Contact form submitted → contact_messages table",
      );

      // Show success message
      setIsSubmitted(true);

      // Reset after displaying confirmation
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          consent: false,
        });
      }, 3000);
    } catch (err: any) {
      console.error("Contact form insert failed:", err);
      setError(
        err.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF5EF]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[#E63946] mb-3">Get in Touch</h2>
          <p className="text-gray-600">
            We'd love to hear from you
          </p>
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-12"
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
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  ✓ Message sent successfully!
                </motion.div>
                <p className="text-gray-600">
                  Thanks for reaching out! We'll get back to you
                  shortly.
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
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-subject">
                    Subject *
                  </Label>
                  <Input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message">
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="mt-2 border-[#DADADA] focus:border-[#E63946]"
                    placeholder="Your message..."
                    rows={6}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consent: e.target.checked,
                      })
                    }
                    className="mt-1 w-5 h-5 rounded border-2 border-gray-800 bg-white text-[#E63946] focus:ring-[#E63946] cursor-pointer checked:bg-[#E63946] checked:border-[#E63946]"
                  />
                  <Label
                    htmlFor="contact-consent"
                    className="cursor-pointer text-sm"
                  >
                    I agree to be contacted by LangPal regarding
                    my inquiry. *
                  </Label>
                </div>

                {error && (
                  <div className="text-red-600 text-sm">
                    {error}
                  </div>
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
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}
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