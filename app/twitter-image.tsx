import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Lewiski Portfolio"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "serif",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 24, fontWeight: "bold" }}>Lewiski</div>
        <div style={{ fontSize: 32 }}>Software Engineer & Creative Designer</div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
