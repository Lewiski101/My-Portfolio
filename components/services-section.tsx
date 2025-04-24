"use client"
import { Code, Palette, Video, Lightbulb, Layers, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-purple-400" />,
      title: "Software Engineering",
      description: "I build robust, scalable applications with modern technologies and best practices.",
    },
    {
      icon: <Palette className="h-10 w-10 text-teal-400" />,
      title: "Logo Design",
      description: "I create distinctive, memorable logos that capture your brand's essence.",
    },
    {
      icon: <Layers className="h-10 w-10 text-cyan-400" />,
      title: "Graphic Design",
      description: "I craft visually stunning graphics for digital and print media.",
    },
    {
      icon: <Video className="h-10 w-10 text-emerald-400" />,
      title: "Video Editing",
      description: "I produce polished, professional videos that engage and captivate your audience.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-amber-400" />,
      title: "Content Creation",
      description: "I develop compelling content strategies that drive engagement and conversions.",
    },
    {
      icon: <Globe className="h-10 w-10 text-violet-400" />,
      title: "Web Development",
      description: "I build responsive, user-friendly websites with cutting-edge technologies.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-[#030303] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,200,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                Services
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              I offer a comprehensive range of digital services to help you stand out in today's competitive landscape.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} animation="fade" delay={index * 0.1}>
              <Card className="bg-white/[0.03] border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
