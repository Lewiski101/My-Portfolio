"use client"

import { useEffect, type ReactNode } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"
import { useInView } from "react-intersection-observer"

type AnimationVariant = {
  hidden: Variant
  visible: Variant
}

type AnimateOnScrollProps = {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-right" | "slide-left" | "zoom"
  duration?: number
  delay?: number
  threshold?: number
  once?: boolean
  className?: string
}

const animations: Record<string, AnimationVariant> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function AnimateOnScroll({
  children,
  animation = "fade",
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
}: AnimateOnScrollProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: once,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const selectedAnimation = animations[animation]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedAnimation}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
