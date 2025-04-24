import AnimateOnScroll from "@/components/animate-on-scroll"

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 bg-[#030303]">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,200,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Privacy{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Policy
                </span>
              </h1>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                This Privacy Policy outlines how I collect, use, and protect your information.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <h2>Introduction</h2>
              <p>
                Welcome to Lewiski's portfolio website. I respect your privacy and am committed to protecting your
                personal data. This privacy policy will inform you about how I look after your personal data when you
                visit my website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2>Information I Collect</h2>
              <p>When you use the contact form on my website, I collect the following information:</p>
              <ul>
                <li>Your name</li>
                <li>Your email address</li>
                <li>The subject of your message</li>
                <li>The content of your message</li>
              </ul>

              <h2>How I Use Your Information</h2>
              <p>I use the information you provide via the contact form to:</p>
              <ul>
                <li>Respond to your inquiries</li>
                <li>Provide you with information about my services</li>
                <li>Communicate with you about potential collaborations</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                I have implemented appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way, altered, or disclosed. I limit access to your personal
                data to those who have a business need to know.
              </p>

              <h2>Data Retention</h2>
              <p>
                I will only retain your personal data for as long as necessary to fulfill the purposes I collected it
                for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>

              <h2>Your Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                I may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>

              <h2>Contact</h2>
              <p>
                If you have any questions about this privacy policy or my data practices, please contact me at
                lewisouma55@gmail.com.
              </p>

              <p className="text-sm text-white/40 mt-12">Last updated: April 12, 2025</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
