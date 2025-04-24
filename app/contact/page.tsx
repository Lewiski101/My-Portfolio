"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Youtube, Twitter } from "lucide-react"
import Link from "next/link"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

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
    <div className="pt-20 bg-[#030303]">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,80,200,0.05),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="slide-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Get In{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                  Touch
                </span>
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Have a project in mind or want to collaborate? I'd love to hear from you.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <AnimateOnScroll animation="slide-right" className="lg:col-span-1">
              <div className="bg-[#030303] border border-white/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">My Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <p className="text-white/70">lewisouma55@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-500/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Phone</h3>
                      <p className="text-white/70">0707775531</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-500/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Location</h3>
                      <p className="text-white/70">Multimedia University of Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-white font-medium mb-4">Connect with me</h3>
                  <div className="flex items-center gap-4">
                    <Link
                      href="https://github.com/Lewiski101"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@Itslewiski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                    >
                      <Youtube className="h-5 w-5 text-white" />
                    </Link>
                    <Link
                      href="https://x.com/KingLewiski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="slide-left" className="lg:col-span-2">
              <div className="bg-[#030303] border border-white/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h2>

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
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#030303]">
        <div className="container mx-auto px-4">
          <AnimateOnScroll animation="fade">
            <div className="bg-[#050505] border border-white/5 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3329.075102995936!2d36.76564957496568!3d-1.3819407486049888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smultimedia%20university%20of%20kenya!5e1!3m2!1sen!2ske!4v1744462121792!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Multimedia University of Kenya Map"
                className="w-full"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
