import AnimateOnScroll from "@/components/animate-on-scroll"

export default function TermsOfServicePage() {
  return (
    <div className="pt-20 bg-[#030303]">
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,200,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Terms of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Service
                </span>
              </h1>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Please read these terms carefully before using my website.
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
                Welcome to Lewiski's portfolio website. These Terms of Service govern your use of my website and the
                services I offer. By accessing or using my website, you agree to be bound by these Terms.
              </p>

              <h2>Use of My Website</h2>
              <p>You may use my website for lawful purposes only. You agree not to:</p>
              <ul>
                <li>Use my website in any way that violates any applicable laws or regulations</li>
                <li>
                  Use my website to transmit any material that is defamatory, offensive, or otherwise objectionable
                </li>
                <li>Use my website to impersonate any person or entity</li>
                <li>Interfere with the proper functioning of my website</li>
                <li>Attempt to gain unauthorized access to my website or any related systems or networks</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, audio clips,
                digital downloads, and software, is my property or the property of my licensors and is protected by
                copyright and other intellectual property laws.
              </p>
              <p>
                You may view, download, and print content from my website for your personal, non-commercial use only.
                You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the material on my website without my express
                written consent.
              </p>

              <h2>Portfolio Projects</h2>
              <p>
                The projects displayed in my portfolio are examples of my work. Some projects may be subject to
                confidentiality agreements or other restrictions. You must not use, reproduce, or distribute any of the
                projects displayed without my express written consent.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                My website and its content are provided "as is" and "as available" without any warranties of any kind,
                either express or implied, including but not limited to the implied warranties of merchantability,
                fitness for a particular purpose, or non-infringement.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall I be liable for any direct, indirect, incidental, special, consequential, or punitive
                damages arising out of or in connection with your use of my website or services.
              </p>

              <h2>Changes to These Terms</h2>
              <p>
                I may update these Terms of Service from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>

              <h2>Contact</h2>
              <p>If you have any questions about these Terms of Service, please contact me at lewisouma55@gmail.com.</p>

              <p className="text-sm text-white/40 mt-12">Last updated: April 12, 2025</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
