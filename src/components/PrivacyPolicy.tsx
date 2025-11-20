import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-[#F5F0E1] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            onClick={onBack}
            className="mb-6 btn-primary"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h1 className="text-[#E63946] mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">
              <em>Last updated: November 20, 2025</em>
            </p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-[#1D3557] mb-4">1. Introduction</h2>
                <p>
                  Welcome to LangPal ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered language learning platform.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">2. Information We Collect</h2>
                <p className="mb-3">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email address, password)</li>
                  <li>Profile information (language preferences, learning goals, proficiency level)</li>
                  <li>Communication data (messages, feedback, support requests)</li>
                  <li>Voice recordings and transcriptions for language practice</li>
                  <li>Usage data and analytics</li>
                  <li>Payment and billing information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our language learning services</li>
                  <li>Personalize your learning experience and recommendations</li>
                  <li>Process your transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Analyze usage patterns and improve our AI algorithms</li>
                  <li>Detect, prevent, and address technical issues and fraudulent activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-3">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations and law enforcement requests</li>
                  <li>To protect the rights, property, and safety of LangPal, our users, and others</li>
                  <li>In connection with a merger, sale, or acquisition of all or part of our business</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">6. Your Rights and Choices</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your personal information</li>
                  <li>Object to or restrict certain processing of your data</li>
                  <li>Withdraw consent where we rely on it</li>
                  <li>Export your data in a portable format</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">7. Children's Privacy</h2>
                <p>
                  Our service is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">8. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our service, you consent to such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">10. Contact Us</h2>
                <p className="mb-3">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-[#E63946]">
                  Email: teamlangpal@gmail.com
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
