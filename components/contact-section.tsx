"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Youtube, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)

      const response = await fetch("https://formspree.io/f/xldjzbzn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
      } else {
        setIsError(true)
      }
    } catch (error) {
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#030303] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,200,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">Touch</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-white/70">lewisouma55@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-white/70">0707775531</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/5 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-white/70">Multimedia University of Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-white font-medium mb-4">Follow Me</h3>
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com/Lewiski101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                >
                  <Github className="h-5 w-5 text-white" />
                </Link>
                <Link
                  href="https://www.youtube.com/@Itslewiski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                >
                  <Youtube className="h-5 w-5 text-white" />
                </Link>
                <Link
                  href="https://x.com/KingLewiski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            {isSuccess ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                <p className="text-white/70 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                action="https://formspree.io/f/xldjzbzn"
                method="POST"
              >
                {isError && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                    <p className="text-red-400">There was an error sending your message. Please try again.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-purple-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-purple-500"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-purple-500 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white px-8"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
