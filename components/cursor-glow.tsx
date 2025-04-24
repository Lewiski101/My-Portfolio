"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Reset position when route changes
    setPosition({ x: 0, y: 0 })
  }, [pathname])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"

      setIsHovering(isInteractive)
      if (isInteractive) {
        const rect = target.getBoundingClientRect()
        setHoverPosition({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsHovering(false)
    }

    const handleMouseDown = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 300)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
    }
  }, [isVisible])

  if (typeof window === "undefined") return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Main cursor glow */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 blur-[60px]"
        animate={{
          x: position.x - 150,
          y: position.y - 150,
          scale: clicked ? 0.8 : 1,
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          opacity: { duration: 0.3 },
          scale: { duration: 0.2 },
        }}
        style={{
          width: 300,
          height: 300,
        }}
      />

      {/* Smaller, sharper cursor follower */}
      <motion.div
        className="absolute rounded-full bg-gradient-to-r from-purple-400/30 to-teal-400/30 blur-[20px]"
        animate={{
          x: position.x - 50,
          y: position.y - 50,
          scale: clicked ? 1.2 : 1,
          opacity: isVisible ? 0.9 : 0,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 400,
          opacity: { duration: 0.2 },
          scale: { duration: 0.15 },
        }}
        style={{
          width: 100,
          height: 100,
        }}
      />

      {/* Pulsing effect */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="pulse"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.5 }}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-teal-500/10 blur-[30px]"
            style={{
              width: 150,
              height: 150,
              left: position.x - 75,
              top: position.y - 75,
            }}
          />
        )}
      </AnimatePresence>

      {/* Interactive element hover glow */}
      {isHovering && (
        <motion.div
          className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-teal-500/30 blur-[30px]"
          animate={{
            x: hoverPosition.x - 100,
            y: hoverPosition.y - 100,
            opacity: 0.9,
            scale: [1, 1.05, 1],
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 200,
            opacity: { duration: 0.2 },
            scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
          }}
          style={{
            width: 200,
            height: 200,
          }}
        />
      )}
    </div>
  )
}
