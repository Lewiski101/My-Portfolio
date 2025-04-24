import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import ContactSection from "@/components/contact-section"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="xZwCevOY74i-EfN6ild72tDKz6tsD0D_iQjmQPUV-Gs" />
      </Head>
      <main className="min-h-screen bg-[#030303]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </>
  )
}
