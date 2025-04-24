import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import AnimateOnScroll from "@/components/animate-on-scroll"

const projects = [
  {
    id: 1,
    title: "MMU Genius",
    description:
      "An AI-powered study assistant for Multimedia University students that converts notes into summaries, flashcards, and practice questions.",
    image: "/images/mmu-genius.png",
    category: "Software Development",
    technologies: ["Next.js", "React", "AI", "Tailwind CSS", "Vercel"],
    link: "https://mmugenius.vercel.app",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    description:
      "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Design",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
  },
  {
    id: 3,
    title: "Product Showcase Video",
    description: "High-quality product showcase video with motion graphics, sound design, and professional voiceover.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Video Production",
    technologies: ["Adobe Premiere Pro", "After Effects", "Audition"],
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile application with user authentication, real-time updates, and offline functionality.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Software Development",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
  },
  {
    id: 5,
    title: "Logo Collection",
    description:
      "A collection of logo designs for various industries, including technology, healthcare, and education.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Design",
    technologies: ["Adobe Illustrator", "Procreate", "Figma"],
  },
  {
    id: 6,
    title: "Corporate Explainer Video",
    description: "Animated explainer video that communicates complex concepts in a simple and engaging way.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Video Production",
    technologies: ["After Effects", "Cinema 4D", "Audition"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-20 bg-[#030303]">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,200,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Projects
                </span>
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Explore my latest work across software development, design, and video production.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="slide-right" className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
                <span className="text-sm text-purple-400 font-medium">Featured Project</span>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-white">MMU Genius</h2>

              <p className="text-white/70 mb-6 leading-relaxed">
                I developed an AI-powered study assistant for Multimedia University students that instantly converts
                notes into summaries, flashcards, and practice questions. This tool helps students study more
                effectively and get ahead of the curve.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full">AI</span>
                <span className="px-3 py-1 bg-violet-500/10 text-violet-400 text-sm rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full">Vercel</span>
              </div>

              <Button
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
                asChild
              >
                <Link href="https://mmugenius.vercel.app" target="_blank" rel="noopener noreferrer">
                  Visit MMU Genius <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-left" className="order-1 lg:order-2">
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/10">
                <Image src="/images/mmu-genius.png" alt="MMU Genius" fill className="object-cover" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#030303]">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <h2 className="text-3xl font-bold mb-12 text-white">
              All{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                Projects
              </span>
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimateOnScroll key={project.id} animation="fade" delay={index * 0.1}>
                <div className="group relative bg-[#050505] border border-white/5 rounded-lg overflow-hidden hover:border-white/10 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium text-white">{project.title}</h3>
                      <span className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded">{project.category}</span>
                    </div>

                    <p className="text-white/70 mb-6 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/5 pl-0" asChild>
                      <Link
                        href={project.link || `/projects/${project.id}`}
                        target={project.link ? "_blank" : undefined}
                        rel={project.link ? "noopener noreferrer" : undefined}
                      >
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="slide-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Have a Project in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Mind?
                </span>
              </h2>
              <p className="text-white/70 mb-8">
                Let's collaborate to bring your vision to life. I'm always excited to take on new challenges and create
                something amazing together.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
