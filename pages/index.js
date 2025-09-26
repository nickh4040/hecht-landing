// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hecht Hospitality</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Modern, easy stays in Scottsdale. Book on Airbnb, VRBO, or Furnished Finder."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Global styles */}
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; }
        html, body, #__next { height: 100%; }
        body {
          margin: 0;
          background: #a33c2e; /* Sedona red */
          color: #f9fafb;
          font-family: -apple-system, Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          overflow-x: hidden;
        }
        a { color: inherit; }
      `}</style>

      {/* Background decor (behind all content) */}
      <div className="desertDecor" aria-hidden="true">
        {/* Sun + small ridge beneath it */}
        <div className="sun" />
        <div className="sunMountain" />

        {/* Layered mountain silhouettes */}
        <div className="mountains m1" />
        <div className="mountains m2" />
        <div className="mountains m3" />

        {/* Cacti along left/right edges */}
        <div className="cactusColumn left">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={`lc-${i}`} className={`cactus small s${(i % 6) + 1}`} />
          ))}
        </div>
        <div className="cactusColumn right">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={`rc-${i}`} className={`cactus small s${(i % 6) + 1}`} />
          ))}
        </div>

        {/* Cacti along the bottom */}
        <div className="cactusField">
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={`bf-${i}`}
              className={`cactus ${
                i % 3 === 0 ? "tall" : i % 3 === 1 ? "medium" : "short"
              }`}
              style={{
                left: `calc(${(i / 27) * 100}% + ${(i % 5) * 6 - 12}px)`,
                transform: `translateY(${(i % 7) * 2 - 6}px) scale(${
                  0.9 + ((i * 7) % 10) / 30
                })`,
              }}
            />
          ))}
        </div>

        {/* Sand dunes */}
        <div className="dunes back" />
        <div className="dunes mid" />
        <div className="dunes front" />

        {/* Bottom-right fixed cactus */}
        <div className="cornerCactus" />
      </div>

      {/* Guide button — single instance, top-right */}
      <div className="guideWrapper">
        <a
          className="cactusBtn"
          href="https://www.airbnb.ca/s/guidebooks?refinement_paths%5B%5D=/guidebooks/3454492"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hecht Hospitality Guide to Scottsdale"
        >
          <span className="cactusEmoji" aria-hidden="true">🌵</span>
          <span className="cactusText">Hecht Hospitality Guide to Scottsdale</span>
        </a>
      </div>

      {/* Component-scoped styles (everything visual lives here) */}
      <style jsx>{`
        .desertDecor {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .sun {
          position: absolute;
          top: clamp(24px, 6vh, 60px);
          left: clamp(20px, 4vw, 40px);
          width: clamp(120px, 18vw, 240px);
          height: clamp(120px, 18vw, 240px);
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%, #ffd08a 0%, #ffbd66 45%, #f39a4b 70%, rgba(243,154,75,0) 72%);
          opacity: 0.85;
        }

        .sunMountain {
          position: absolute;
          top: clamp(160px, 18vh, 220px);
          left: 0;
          width: 46vw;
          height: clamp(90px, 12vh, 140px);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: 0.55;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 240 L120 210 L240 235 L360 200 L460 225 L560 188 L680 230 L800 205 L920 225 L1040 212 L1200 232 L1200 300 L0 300 Z' fill='%23873a2e'/></svg>");
        }

        .mountains { position: absolute; left: -5vw; right: -5vw; height: 30vh; background-repeat: repeat-x; background-size: auto 100%; }
        .mountains.m1 { bottom: 32vh; opacity: 0.35; background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 240 L120 180 L240 220 L360 150 L480 210 L600 160 L720 220 L840 170 L960 210 L1080 185 L1200 220 L1200 300 L0 300 Z' fill='%23833a2e'/></svg>"); }
        .mountains.m2 { bottom: 26vh; opacity: 0.5; background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 230 L100 200 L200 230 L300 180 L420 210 L540 170 L660 230 L780 190 L900 210 L1020 200 L1200 230 L1200 300 L0 300 Z' fill='%237f3529'/></svg>"); }
        .mountains.m3 { bottom: 22vh; opacity: 0.6; background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 220 L120 210 L240 220 L360 200 L480 218 L600 205 L720 220 L840 210 L960 220 L1080 208 L1200 220 L1200 300 L0 300 Z' fill='%23712f24'/></svg>"); }

        .dunes {
          position: absolute;
          left: -5vw;
          right: -5vw;
          bottom: 0;
          height: 34vh;
          border-top-left-radius: 35% 30%;
          border-top-right-radius: 35% 30%;
          mask-image: radial-gradient(160% 60% at 50% 100%, white 55%, transparent 90%);
          -webkit-mask-image: radial-gradient(160% 60% at 50% 100%, white 55%, transparent 90%);
          z-index: 0;
        }
        .dunes.back { height: 26vh; bottom: 0; background: linear-gradient(#8b2f24, #7b291f); opacity: 0.75; }
        .dunes.mid { height: 30vh; bottom: -1vh; background: linear-gradient(#9b3a2a, #8a3024); opacity: 0.85; }
        .dunes.front { height: 34vh; bottom: -2vh; background: linear-gradient(#b24533, #9a3628); box-shadow: 0 -8px 30px rgba(0,0,0,0.25) inset; }

        .cornerCactus,
        .cornerCactus::before,
        .cornerCactus::after {
          background: #1f7f1f;
          border: 2px solid #145214;
          box-shadow: 0 2px 0 rgba(0,0,0,0.15);
        }
        .cornerCactus {
          position: absolute;
          right: calc(max(12px, env(safe-area-inset-right)) + 6px);
          bottom: calc(max(12px, env(safe-area-inset-bottom)) + 4px);
          width: clamp(28px, 5vw, 52px);
          height: clamp(120px, 24vh, 220px);
          border-radius: 16px;
          opacity: 0.95;
          transform-origin: bottom center;
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.25));
          background-image: linear-gradient(90deg, rgba(255,255,255,0.09), rgba(255,255,255,0.09) 2px, transparent 2px, transparent 6px),
                            linear-gradient(0deg, rgba(255,255,255,0.06), rgba(255,255,255,0));
          background-size: 8px 100%, auto;
          z-index: 1;
        }
        .cornerCactus::before, .cornerCactus::after {
          content: "";
          position: absolute;
          top: 24%;
          width: 60%;
          height: 38%;
          border-radius: 16px;
          background-image: linear-gradient(90deg, rgba(255,255,255,0.09), rgba(255,255,255,0.09) 2px, transparent 2px, transparent 6px),
                            linear-gradient(0deg, rgba(255,255,255,0.06), rgba(255,255,255,0));
          background-size: 8px 100%, auto;
        }
        .cornerCactus::before { left: -40%; }
        .cornerCactus::after  { right: -40%; top: 34%; height: 32%; }

        /* ... keep all your other cactus/guide button styles ... */
      `}</style>

      {/* Content */}
      <main style={mainStyle}>
        <h1 style={headerText}>Hecht Hospitality</h1>

        {/* Property 1 */}
        <section style={sectionWrapper}>
          <div className="mountainCard">
            <img src="/d4ccc866-ea30-4579-ab59-ea552fd99eac.jpg" alt="The Scottsdale Oasis living room" style={imgStyle} />
            <h3 style={titleStyle}>The Scottsdale Oasis</h3>
            <p style={subtitleStyle}>Old Town Scottsdale • Sleeps 6</p>
          </div>
        </section>

        {/* Property 2 */}
        <section style={sectionWrapper}>
          <div className="mountainCard">
            <img src="/581506_1_51205717-full.avif" alt="The Sunrise Condo" style={imgStyle} />
            <h3 style={titleStyle}>The Sunrise Condo</h3>
            <p style={subtitleStyle}>Scottsdale • Sleeps 2</p>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---- JS style objects ---- */
const mainStyle = { position: "relative", zIndex: 1, maxWidth: "1000px", margin: "0 auto", padding: "2rem", minHeight: "100vh" };
const headerText = { fontSize: "3rem", marginBottom: "2rem", textAlign: "center", fontWeight: "bold", color: "#40e0d0" };
const sectionWrapper = { margin: "2rem 0" };
const imgStyle = { width: "min(720px, 100%)", height: "auto", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: "0.75rem", margin: "0 auto 1rem", display: "block" };
const titleStyle = { fontSize: "1.5rem", marginBottom: ".25rem", textAlign: "center" };
const subtitleStyle = { margin: ".25rem 0 1rem", color: "#f5d0c5", textAlign: "center" };
