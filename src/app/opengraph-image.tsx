import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Applies to every route that doesn't define its own opengraph-image.
export const alt = `${site.company} — web development, app building & automation`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pillars = ["Web Development", "App Building", "Automation"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0b1220 0%, #0f2147 55%, #1d4ed8 130%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: wordmark + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            {site.company}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 24,
              color: "#91b1ff",
            }}
          >
            {site.domain.replace("https://", "")}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 1000,
            }}
          >
            We build web apps, custom software and automations.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#bdd0ff",
              maxWidth: 900,
            }}
          >
            Web development, app building and workflow automation — designed
            around how your business actually works.
          </div>
        </div>

        {/* Footer: pillars + accent bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {pillars.map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.22)",
                  background: "rgba(255,255,255,0.06)",
                  fontSize: 24,
                  color: "#dbe6ff",
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              width: 140,
              height: 10,
              borderRadius: 999,
              background: "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
