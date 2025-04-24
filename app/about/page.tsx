import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Code, Palette, Video, Lightbulb } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function AboutPage() {
  return (
    <div className="pt-20 bg-[#030303]">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,200,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Me</span>
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Get to know more about my journey, skills, and passion for creating exceptional digital experiences.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-right" className="relative">
              <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden">
                <Image src="/images/lewiski-profile.png" alt="Lewiski" fill className="object-cover" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-left">
              <h2 className="text-3xl font-bold mb-6 text-white">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Story
                </span>
              </h2>

              <p className="text-white/70 mb-6 leading-relaxed">
                I'm Lewiski, a multidisciplinary creative professional with expertise in software engineering, graphic
                design, logo creation, video editing, and content creation. I'm currently pursuing Software Engineering
                at Multimedia University of Kenya, where I continue to expand my technical knowledge.
              </p>

              <p className="text-white/70 mb-8 leading-relaxed">
                My journey began with a fascination for technology and design, which led me to pursue formal education
                in computer science while simultaneously developing my creative skills. Over the past 5+ years, I've
                worked with clients ranging from startups to established businesses, helping them bring their digital
                visions to life.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-white font-medium mb-2">Name</h3>
                  <p className="text-white/70">Lewiski</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Experience</h3>
                  <p className="text-white/70">5+ Years</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Education</h3>
                  <p className="text-white/70">Software Engineering, MMU</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">Email</h3>
                  <p className="text-white/70">lewisouma55@gmail.com</p>
                </div>
              </div>

              <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10">
                <Download className="mr-2 h-4 w-4" /> Download My Resume
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-[#030303]">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Skills
                </span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                I've developed expertise across multiple disciplines to deliver comprehensive digital solutions.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll animation="fade" delay={0.1}>
              <div className="bg-[#050505] border border-white/5 rounded-lg p-6">
                <div className="p-3 bg-purple-500/10 w-fit rounded-lg mb-4">
                  <Code className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-white text-xl font-medium mb-4">Software Development</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• JavaScript / TypeScript</li>
                  <li>• React / Next.js</li>
                  <li>• Node.js / Express</li>
                  <li>• Python / Django</li>
                  <li>• Database Design</li>
                  <li>• API Development</li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade" delay={0.2}>
              <div className="bg-[#050505] border border-white/5 rounded-lg p-6">
                <div className="p-3 bg-teal-500/10 w-fit rounded-lg mb-4">
                  <Palette className="h-8 w-8 text-teal-400" />
                </div>
                <h3 className="text-white text-xl font-medium mb-4">Design</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Logo Design</li>
                  <li>• Brand Identity</li>
                  <li>• UI/UX Design</li>
                  <li>• Adobe Creative Suite</li>
                  <li>• Figma / Sketch</li>
                  <li>• Typography</li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade" delay={0.3}>
              <div className="bg-[#050505] border border-white/5 rounded-lg p-6">
                <div className="p-3 bg-cyan-500/10 w-fit rounded-lg mb-4">
                  <Video className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-white text-xl font-medium mb-4">Video Production</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Video Editing</li>
                  <li>• Motion Graphics</li>
                  <li>• Color Grading</li>
                  <li>• Sound Design</li>
                  <li>• Adobe Premiere Pro</li>
                  <li>• After Effects</li>
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade" delay={0.4}>
              <div className="bg-[#050505] border border-white/5 rounded-lg p-6">
                <div className="p-3 bg-violet-500/10 w-fit rounded-lg mb-4">
                  <Lightbulb className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-white text-xl font-medium mb-4">Content Creation</h3>
                <ul className="space-y-2 text-white/70">
                  <li>• Content Strategy</li>
                  <li>• Copywriting</li>
                  <li>• Social Media</li>
                  <li>• SEO Optimization</li>
                  <li>• YouTube Content</li>
                  <li>• Digital Marketing</li>
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Let's Work{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Together
                </span>
              </h2>
              <p className="text-white/70 mb-8">
                Interested in collaborating on a project? I'm always open to new opportunities and challenges.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
