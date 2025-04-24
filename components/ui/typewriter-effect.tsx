"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: string[]
  className?: string
  cursorClassName?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const typeSpeed = isDeleting ? 50 : 100 // Faster when deleting
    const pauseTime = isDeleting ? 300 : 1500 // Pause longer at the end of a word

    let timeout: NodeJS.Timeout

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        timeout = setTimeout(() => {}, 200)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, typeSpeed)
      }
    } else {
      if (currentText === currentWord) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseTime)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, typeSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  // Animate the cursor
  useEffect(() => {
    controls.start({
      opacity: [1, 0, 1],
      transition: {
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    })
  }, [controls])

  return (
    <div className={cn("inline-flex items-center", className)}>
      <span>{currentText}</span>
      <motion.span
        animate={controls}
        className={cn("ml-1 inline-block h-[1.2em] w-[2px] bg-white/70", cursorClassName)}
      />
    </div>
  )
}
