import Link from "next/link"
import { Github, Youtube, Twitter, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { href: "https://github.com/Lewiski101", icon: Github, label: "GitHub" },
  { href: "https://www.youtube.com/@Itslewiski", icon: Youtube, label: "YouTube" },
  { href: "https://x.com/KingLewiski", icon: Twitter, label: "Twitter" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#020202] border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="font-bold text-2xl text-white inline-block mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
                LEWISKI
              </span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Software engineer, logo designer, graphics & video editor, and content creator crafting exceptional
              digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-white/10 hover:bg-white/5"
                >
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <link.icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/70 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="h-4 w-4 text-purple-400" />
                <span>lewisouma55@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="h-4 w-4 text-teal-400" />
                <span>0707775531</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-cyan-400 mt-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Multimedia University of Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">© {currentYear} Lewiski. All rights reserved.</p>
          <p className="text-white/40 text-sm mt-2 md:mt-0">Created by Lewiski with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
