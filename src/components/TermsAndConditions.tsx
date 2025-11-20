import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface TermsAndConditionsProps {
  onBack: () => void;
}

export function TermsAndConditions({ onBack }: TermsAndConditionsProps) {
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
            <h1 className="text-[#E63946] mb-6">Terms & Conditions</h1>
            <p className="text-gray-600 mb-8">
              <em>Last updated: November 20, 2025</em>
            </p>

            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-[#1D3557] mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using LangPal's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of the service constitutes acceptance of those changes.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">2. Description of Service</h2>
                <p>
                  LangPal is an AI-powered language learning platform that provides interactive conversation practice, personalized learning paths, instant feedback, and progress tracking. We continuously work to improve and expand our services, and the features available may change over time.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">3. User Accounts</h2>
                <p className="mb-3">To use our services, you must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 13 years of age</li>
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Be responsible for all activities that occur under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">4. Acceptable Use</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service for any illegal or unauthorized purpose</li>
                  <li>Violate any laws in your jurisdiction</li>
                  <li>Infringe on the intellectual property rights of others</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use automated systems to access the service without permission</li>
                  <li>Interfere with or disrupt the service or servers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">5. Subscription and Payment</h2>
                <p className="mb-3">
                  LangPal offers both free and paid subscription plans. For paid services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Pricing is subject to change with notice to existing subscribers</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>You are responsible for all applicable taxes</li>
                  <li>Payment information must be current and accurate</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">6. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of LangPal, including but not limited to text, graphics, logos, icons, audio clips, and software, are the exclusive property of LangPal and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">7. User Content</h2>
                <p className="mb-3">
                  When you submit content to LangPal (such as voice recordings or feedback):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You retain ownership of your content</li>
                  <li>You grant us a license to use, store, and process your content to provide our services</li>
                  <li>You represent that you have the right to submit the content</li>
                  <li>We may use anonymized and aggregated data for service improvement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">8. Privacy</h2>
                <p>
                  Your use of LangPal is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">9. Disclaimer of Warranties</h2>
                <p>
                  LangPal is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free. We make no warranties regarding the accuracy, reliability, or completeness of the content or AI-generated responses.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">10. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, LangPal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">11. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your account at any time for any reason, including violation of these Terms. Upon termination, your right to use the service will immediately cease. You may also cancel your account at any time through your account settings.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which LangPal operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">13. Changes to Terms</h2>
                <p>
                  We may modify these Terms at any time. If we make material changes, we will notify you by email or through a notice on our website. Your continued use of the service after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-[#1D3557] mb-4">14. Contact Information</h2>
                <p className="mb-3">
                  If you have any questions about these Terms and Conditions, please contact us at:
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
