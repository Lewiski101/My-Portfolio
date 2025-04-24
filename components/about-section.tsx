"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/lewiski-profile.png"
                alt="Lewiski"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Me</span>
            </h2>

            <p className="text-white/70 mb-6 leading-relaxed">
              I'm a multidisciplinary creative professional with expertise in software engineering, graphic design, logo
              creation, video editing, and content creation. With over 5 years of experience, I've helped businesses and
              individuals bring their digital visions to life.
            </p>

            <p className="text-white/70 mb-8 leading-relaxed">
              My approach combines technical precision with creative flair, allowing me to deliver solutions that are
              both functional and visually stunning. I'm passionate about creating digital experiences that leave a
              lasting impression and help my clients achieve their goals.
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

            <div className="flex flex-wrap gap-4">
              <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10">
                <Download className="mr-2 h-4 w-4" /> Download My Resume
              </Button>

              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
