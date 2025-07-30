"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Youtube, Twitter } from "lucide-react"
import Link from "next/link"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { useState, useEffect } from "react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [heroRef, setHeroRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef) {
        const rect = heroRef.getBoundingClientRect()
        // Calculate position relative to the hero section - exact cursor position
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    if (heroRef) {
      heroRef.addEventListener("mousemove", handleMouseMove)
      heroRef.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (heroRef) {
        heroRef.removeEventListener("mousemove", handleMouseMove)
        heroRef.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [heroRef])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const roles = [
    "a Software Engineer",
    "a Graphic Designer",
    "a Logo Maker",
    "a Blogger",
    "a Video Editor",
    "a Mentor",
    "a Content Creator",
  ]

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
      ref={setHeroRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] via-transparent to-teal-500/[0.05] blur-3xl" />

      {/* Hero-specific cursor glow effect - positioned exactly at cursor */}
      {isHovering && (
        <motion.div
          className="absolute pointer-events-none z-1 rounded-full bg-gradient-to-r from-purple-500/20 via-purple-400/15 to-teal-500/20 blur-[60px]"
          style={{
            width: 300,
            height: 300,
            left: mousePosition.x - 150, // Center the glow exactly at cursor position
            top: mousePosition.y - 150, // Center the glow exactly at cursor position
            position: "absolute",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.8,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.2 },
            scale: { duration: 0.3 },
          }}
        />
      )}

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-purple-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-teal-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-emerald-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
            >
              <span className="text-sm text-white/80 tracking-wide">Software Engineer • Designer • Creator</span>
            </motion.div>

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-2 tracking-tight">
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white/90 to-teal-300",
                    pacifico.className,
                  )}
                >
                  I'm Lewiski
                </span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <div className="h-16 sm:h-20 flex items-center mb-4 py-2">
                <TypewriterEffect
                  words={roles}
                  className={cn(
                    "text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-white/90 to-teal-300",
                    pacifico.className,
                  )}
                />
              </div>
            </motion.div>

            <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-light tracking-wide max-w-xl mt-4">
                Welcome to my portfolio website! I craft exceptional digital experiences through innovative design,
                cutting-edge technology, and creative content.
              </p>
            </motion.div>

            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white px-6 py-6 rounded-full w-full sm:w-auto"
              >
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/10 text-white/80 hover:bg-white/5 px-6 py-6 rounded-full w-full sm:w-auto"
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-start gap-6"
            >
              <Link
                href="https://github.com/Lewiski101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@Itslewiski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/KingLewiski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] sm:w-[350px] md:w-[400px] aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-teal-500/20 blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <Image src="/images/lewiski-profile.png" alt="Lewiski" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}
