import { ImageResponse } from "next/og";

export const alt = "Arden Fuel Trading — Reliable Energy Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1f3a 0%, #122a4d 55%, #1f5f24 130%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 20,
              background: "linear-gradient(135deg, #63b95f, #1f5f24)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              fontWeight: 800,
              color: "#0b1f3a",
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72, fontWeight: 800, color: "#ffffff", letterSpacing: -1 }}>ARDEN</div>
            <div style={{ fontSize: 22, fontWeight: 600, color: "#92d17f", letterSpacing: 8 }}>FUEL TRADING</div>
          </div>
        </div>
        <div style={{ marginTop: 36, fontSize: 30, color: "#e7ecf3", fontWeight: 500 }}>Reliable Energy Solutions</div>
      </div>
    ),
    { ...size },
  );
}
