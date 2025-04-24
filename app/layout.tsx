import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/scroll-to-top"
import CursorGlow from "@/components/cursor-glow"
import { VercelAnalyticsScript } from "./analytics"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Lewiski | Software Engineer & Creative Designer",
  description: "Portfolio of Lewiski - Software Engineer, Logo Designer, Graphics & Video Editor, Content Creator",
  metadataBase: new URL("https://itslewiski.vercel.app"),
  openGraph: {
    title: "Lewiski | Software Engineer & Creative Designer",
    description: "Portfolio of Lewiski - Software Engineer, Logo Designer, Graphics & Video Editor, Content Creator",
    url: "https://itslewiski.vercel.app",
    siteName: "Lewiski Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Lewiski Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewiski | Software Engineer & Creative Designer",
    description: "Portfolio of Lewiski - Software Engineer, Logo Designer, Graphics & Video Editor, Content Creator",
    images: ["/favicon.png"],
    creator: "@KingLewiski",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png" }],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/favicon.png"],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <VercelAnalyticsScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CursorGlow />
          <div className="flex min-h-screen flex-col relative z-10">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
