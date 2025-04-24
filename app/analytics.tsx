import Script from "next/script"

export function VercelAnalyticsScript() {
  return (
    <>
      <Script
        id="vercel-analytics"
        strategy="afterInteractive"
        src="https://va.vercel-scripts.com/v1/script.js"
        data-domain="lewiski-portfolio.vercel.app"
      />
    </>
  )
}
