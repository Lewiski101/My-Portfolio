"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Github, Youtube, Twitter, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://github.com/Lewiski101", icon: Github, label: "GitHub" },
  { href: "https://www.youtube.com/@Itslewiski", icon: Youtube, label: "YouTube" },
  { href: "https://x.com/KingLewiski", icon: Twitter, label: "Twitter" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">LEWISKI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    pathname === route.href ? "text-white" : "text-white/70",
                  )}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Button key={link.href} variant="ghost" size="icon" asChild>
                <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 border-white/10">
            <nav className="flex flex-col h-full">
              <div className="flex flex-col gap-6 mt-10">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-white",
                      pathname === route.href ? "text-white" : "text-white/70",
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>

              <div className="mt-auto mb-8">
                <h3 className="text-white font-medium mb-4">Follow Me on Socials</h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link) => (
                    <Button key={link.href} variant="ghost" size="icon" asChild>
                      <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                        <link.icon className="h-5 w-5" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
