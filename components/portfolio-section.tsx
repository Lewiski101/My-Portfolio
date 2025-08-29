"use client"

import Link from "next/link"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import AnimateOnScroll from "@/components/animate-on-scroll"

type Category = "all" | "software" | "design" | "video"

interface PortfolioItem {
  id: number
  title: string
  category: Exclude<Category, "all">
  image: string
  link: string
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "MMU Genius",
      category: "software",
      image: "/images/mmu-genius.png",
      link: "https://mmugenius.vercel.app",
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "design",
      image: "/images/brand-identity.png",
      link: "#",
    },
    {
      id: 3,
      title: "Product Showcase Video",
      category: "video",
      image: "/images/product-showcase-video.png",
      link: "#",
    },
    {
      id: 4,
      title: "Mobile App Development",
      category: "software",
      image: "/images/mobile-app.png",
      link: "#",
    },
    {
      id: 5,
      title: "Logo Collection",
      category: "design",
      image: "/images/logo-collection.png",
      link: "#",
    },
    {
      id: 6,
      title: "Corporate Explainer Video",
      category: "video",
      image: "/images/corporate-explainer.png",
      link: "#",
    },
  ]

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimateOnScroll animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
                Portfolio
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10">
              Explore my latest projects across software engineering, design, and video production.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {(["all", "software", "design", "video"] as const).map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "border-white/10 text-white/80 hover:bg-white/5 capitalize",
                    activeCategory === category && "bg-gradient-to-r from-purple-500/20 to-teal-500/20 border-white/20",
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <AnimateOnScroll key={item.id} animation="fade" delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-white/70 capitalize mb-4">{item.category}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit border-white/20 text-white bg-black/30 backdrop-blur-sm hover:bg-black/50"
                    asChild
                  >
                    <Link href={item.link}>View Project</Link>
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
