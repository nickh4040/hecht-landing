// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hecht Hospitality</title>
        <meta
          name="description"
          content="Modern, easy stays in Scottsdale. Book on Airbnb, VRBO, or Furnished Finder."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Global styles */}
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          margin: 0;
          background: #a33c2e; /* Sedona red */
          color: #f9fafb;
          font-family: -apple-system, Inter, Segoe UI, Roboto, Helvetica, Arial,
            sans-serif;
          overflow-x: hidden;
        }
        a {
          color: inherit;
        }
      `}</style>

      {/* --- DESERT DECOR LAYER (behind everything) --- */}
      <div className="desertDecor" aria-hidden="true">
        {/* Sun (left corner) */}
        <div className="sun" />
        {/* Small mountain right under the sun */}
        <div className="sunMountain" />

        {/* Mountain ranges */}
        <div className="mountains m1" />
        <div className="mountains m2" />
        <div className="mountains m3" />

        {/* Side cactus columns */}
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

        {/* Bottom cactus field */}
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

        {/* Dunes */}
        <div className="dunes back" />
        <div className="dunes mid" />
        <div className="dunes front" />
      </div>

      {/* --- DECOR, MOUNTAIN CARDS & BUTTON STYLES --- */}
      <style jsx>{`
        .desertDecor {
          position: fixed;
          inset: 0;
          z-index: 0; /* behind content */
          pointer-events: none;
          overflow: hidden;
        }

        /* Sun (left) */
        .sun {
          position: absolute;
          top: clamp(24px, 6vh, 60px);
          left: clamp(20px, 4vw, 40px);
          width: clamp(120px, 18vw, 240px);
          height: clamp(120px, 18vw, 240px);
          border-radius: 50%;
          background: radial-gradient(
            circle at 50% 50%,
            #ffd08a 0%,
            #ffbd66 45%,
            #f39a4b 70%,
            rgba(243, 154, 75, 0) 72%
          );
          filter: blur(0.3px);
          opacity: 0.85;
        }

        /* Small ridge under the sun */
        .sunMountain {
          position: absolute;
          top: clamp(160px, 18vh, 220px); /* sits below the sun */
          left: 0;
          width: 46vw;
          height: clamp(90px, 12vh, 140px);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: 0.55;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 240 L120 210 L240 235 L360 200 L460 225 L560 188 L680 230 L800 205 L920 225 L1040 212 L1200 232 L1200 300 L0 300 Z' fill='%23873a2e'/></svg>");
        }

        /* Mountains (layered silhouettes) */
        .mountains {
          position: absolute;
          left: -5vw;
          right: -5vw;
          height: 30vh;
          background-repeat: repeat-x;
          background-size: auto 100%;
          opacity: 0.65;
          filter: saturate(0.92);
        }
        .mountains.m1 {
          bottom: 32vh;
          opacity: 0.35;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 240 L120 180 L240 220 L360 150 L480 210 L600 160 L720 220 L840 170 L960 210 L1080 185 L1200 220 L1200 300 L0 300 Z' fill='%23833a2e'/></svg>");
        }
        .mountains.m2 {
          bottom: 26vh;
          opacity: 0.5;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 230 L100 200 L200 230 L300 180 L420 210 L540 170 L660 230 L780 190 L900 210 L1020 200 L1200 230 L1200 300 L0 300 Z' fill='%237f3529'/></svg>");
        }
        .mountains.m3 {
          bottom: 22vh;
          opacity: 0.6;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 220 L120 210 L240 220 L360 200 L480 218 L600 205 L720 220 L840 210 L960 220 L1080 208 L1200 220 L1200 300 L0 300 Z' fill='%23712f24'/></svg>");
        }

        /* Dunes */
        .dunes {
          position: absolute;
          left: -5vw;
          right: -5vw;
          bottom: 0;
          height: 34vh;
          border-top-left-radius: 35% 30%;
          border-top-right-radius: 35% 30%;
          mask-image: radial-gradient(160% 60% at 50% 100%, black 55%, transparent 90%);
        }
        .dunes.back {
          height: 26vh;
          bottom: 0;
          background: linear-gradient(#8b2f24, #7b291f);
          opacity: 0.75;
          filter: blur(0.4px);
        }
        .dunes.mid {
          height: 30vh;
          bottom: -1vh;
          background: linear-gradient(#9b3a2a, #8a3024);
          opacity: 0.85;
        }
        .dunes.front {
          height: 34vh;
          bottom: -2vh;
          background: linear-gradient(#b24533, #9a3628);
          box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.25) inset;
        }

        /* Decorative cacti (background) */
        .cactus,
        .cactus::before,
        .cactus::after {
          background: #1f7f1f;
          border: 2px solid #145214;
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
        }
        .cactus {
          position: absolute;
          bottom: 8vh;
          width: 20px;
          height: 70px;
          border-radius: 12px;
          transform-origin: bottom center;
          filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.12));
        }
        .cactus.tall { height: 110px; width: 24px; }
        .cactus.medium { height: 90px; width: 22px; }
        .cactus.short { height: 70px; width: 20px; }
        .cactus::before,
        .cactus::after {
          content: "";
          position: absolute;
          width: 14px;
          height: 40%;
          border-radius: 12px;
          top: 22%;
        }
        .cactus::before { left: -12px; }
        .cactus::after { right: -12px; height: 34%; top: 32%; }
        .cactus,
        .cactus::before,
        .cactus::after {
          background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.09),
              rgba(255, 255, 255, 0.09) 2px,
              transparent 2px,
              transparent 6px
            ),
            linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0));
          background-size: 8px 100%, auto;
        }

        /* Side columns of cacti */
        .cactusColumn {
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(46px, 6vw, 72px);
          display: grid;
          grid-template-rows: repeat(12, 1fr);
          align-items: end;
          gap: 2vh;
          padding-bottom: 8vh;
          opacity: 0.92;
        }
        .cactusColumn.left  { left: max(0px, env(safe-area-inset-left)); }
        .cactusColumn.right { right: max(0px, env(safe-area-inset-right)); }

        /* Bottom field spread across width */
        .cactusField {
          position: absolute;
          left: -2vw;
          right: -2vw;
          bottom: 0;
          height: 34vh;
          pointer-events: none;
          mix-blend-mode: normal;
        }

        /* Mountain-shaped cards */
        .mountainCard {
          position: relative;
          padding: 1.25rem;
          background: #822e22;
          border: 1px solid #7a2a1e;
          color: #f9fafb;
          -webkit-clip-path: polygon(
            0% 40%,
            8% 28%,
            18% 46%,
            28% 22%,
            38% 38%,
            50% 16%,
            60% 36%,
            70% 24%,
            82% 42%,
            92% 30%,
            100% 44%,
            100% 100%,
            0% 100%
          );
          clip-path: polygon(
            0% 40%,
            8% 28%,
            18% 46%,
            28% 22%,
            38% 38%,
            50% 16%,
            60% 36%,
            70% 24%,
            82% 42%,
            92% 30%,
            100% 44%,
            100% 100%,
            0% 100%
          );
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          backdrop-filter: saturate(1.1);
          text-align: center;
        }

        /* ---------- CACTUS-ARM GUIDE BUTTON (back) ---------- */

        /* Move to LEFT and down a bit so it never clips */
        .guideWrapper {
          position: fixed;
          top: 0.7in;    /* slightly lower than before */
          left: 1rem;    /* pinned to left */
          z-index: 1000;
          pointer-events: auto; /* clickable */
        }

        .cactusBtn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 1.1rem 0.9rem 0.95rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.92rem;
          line-height: 1;
          color: #ffffff;
          background: #228b22; /* cactus green */
          border: 2px solid #145214;
          border-radius: 28px;
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.28);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          background-image: radial-gradient(
              circle at 12px 10px,
              rgba(255, 255, 255, 0.14) 0,
              rgba(255, 255, 255, 0.14) 2px,
              transparent 3px
            ),
            linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0));
          background-size: 28px 28px, auto;
        }
        .cactusBtn:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.32);
        }

        /* Button's cactus arms (left + right) */
        .cactusEmoji {
          position: relative;
          display: inline-flex;
        }

        /* Left arm */
        .cactusBtn::before {
          content: "";
          position: absolute;
          left: -12px;
          bottom: 12px;
          width: 18px;
          height: 34px;
          background: #228b22;
          border: 2px solid #145214;
          border-right: none;
          border-radius: 14px 0 0 14px;
          box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.04);
        }
        /* Left arm tip */
        .cactusBtn::after {
          content: "";
          position: absolute;
          left: -8px;
          bottom: 34px;
          width: 14px;
          height: 14px;
          background: #228b22;
          border: 2px solid #145214;
          border-bottom: none;
          border-radius: 14px 14px 0 0;
          box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.04);
        }

        /* Right arm anchored to the emoji span */
        .cactusEmoji::before {
          content: "";
          position: absolute;
          right: -12px;
          bottom: 16px;
          width: 18px;
          height: 30px;
          background: #228b22;
          border: 2px solid #145214;
          border-left: none;
          border-radius: 0 14px 14px 0;
          box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.04);
        }
        .cactusEmoji::after {
          content: "";
          position: absolute;
          right: -8px;
          bottom: 40px;
          width: 14px;
          height: 14px;
          background: #228b22;
          border: 2px solid #145214;
          border-bottom: none;
          border-radius: 14px 14px 0 0;
          box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.04);
        }

        .cactusText { white-space: nowrap; }

        @media (max-width: 540px) {
          .cactusText { display: none; }
          .cactusBtn { padding: 0.7rem 0.8rem; border-radius: 999px; }
        }
      `}</style>

      {/* Guide button — now left, lower, with cactus arms */}
      <div className="guideWrapper">
        <a
          className="cactusBtn"
          href="https://www.airbnb.ca/s/guidebooks?refinement_paths[]=/guidebooks/3454492"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hecht Hospitality Guide to Scottsdale"
        >
          <span className="cactusEmoji" aria-hidden="true">🌵</span>
          <span className="cactusText">Hecht Hospitality Guide to Scottsdale</span>
        </a>
      </div>

      <main style={mainStyle}>
        <h1 style={headerText}>Hecht Hospitality</h1>

        {/* === Property 1: The Scottsdale Oasis === */}
        <section style={sectionWrapper}>
          <div className="mountainCard">
            <img
              src="/d4ccc866-ea30-4579-ab59-ea552fd99eac.jpg"
              alt="The Scottsdale Oasis living room"
              style={imgStyle}
            />
            <h3 style={titleStyle}>The Scottsdale Oasis</h3>
            <p style={subtitleStyle}>Old Town Scottsdale • Sleeps 6</p>
            <p style={chipWrapper}>
              <span style={chipStyle}>pool</span>
              <span style={chipStyle}>washer</span>
              <span style={chipStyle}>dryer</span>
            </p>
            <p style={directStyle}>
              <strong>Book Directly and Save!</strong>
              <br />
              Email:{" "}
              <a href="mailto:nick.hecht@yahoo.com" style={emailStyle}>
                nick.hecht@yahoo.com
              </a>
            </p>
            <div style={btnWrapper}>
              <a
                href="https://www.airbnb.ca/rooms/52926264"
                target="_blank"
                rel="noopener noreferrer"
                style={btnStyle}
              >
                Airbnb Rates →
              </a>
              <a
                href="https://www.vrbo.com/2747791"
                target="_blank"
                rel="noopener noreferrer"
                style={btnStyle}
              >
                VRBO Rates →
              </a>
            </div>
          </div>
        </section>

        {/* === Property 2: The Sunrise Condo === */}
        <section style={sectionWrapper}>
          <div className="mountainCard">
            <img
              src="/581506_1_51205717-full.avif"
              alt="The Sunrise Condo"
              style={imgStyle}
            />
            <h3 style={titleStyle}>The Sunrise Condo</h3>
            <p style={subtitleStyle}>Scottsdale • Sleeps 2</p>
            <p style={chipWrapper}>
              <span style={chipStyle}>wifi</span>
              <span style={chipStyle}>parking</span>
              <span style={chipStyle}>furnished</span>
            </p>
            <p style={directStyle}>
              <strong>Book Directly and Save!</strong>
              <br />
              Email:{" "}
              <a href="mailto:nick.hecht@yahoo.com" style={emailStyle}>
                nick.hecht@yahoo.com
              </a>
            </p>
            <div style={btnWrapper}>
              <a
                href="https://www.furnishedfinder.com/property/581506_1"
                target="_blank"
                rel="noopener noreferrer"
                style={btnStyle}
              >
                Furnished Finder Rates →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={footerStyle}>
          <img src="/logo.png" alt="Hecht Hospitality logo" style={logoStyle} />
        </footer>
      </main>
    </div>
  );
}

/* ---- Shared styles ---- */
const mainStyle = {
  position: "relative",
  zIndex: 1, // above decor
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "2rem",
  minHeight: "100vh",
};

const headerText = {
  fontSize: "3rem",
  marginBottom: "2rem",
  textAlign: "center",
  fontWeight: "bold",
  color: "#40e0d0",
};

const sectionWrapper = { margin: "2rem 0" };

const imgStyle = {
  width: "50%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "0.75rem",
  margin: "0 auto 1rem",
  display: "block",
};

const titleStyle = { fontSize: "1.5rem", marginBottom: ".25rem", textAlign: "center" };
const subtitleStyle = { margin: ".25rem 0 1rem", color: "#f5d0c5", textAlign: "center" };

const chipWrapper = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: ".5rem",
  margin: "0 0 1rem",
  textAlign: "center",
};

const chipStyle = {
  padding: ".25rem .6rem",
  border: "1px solid #f5a09a",
  borderRadius: "999px",
  fontSize: ".9rem",
  backgroundColor: "#661f16",
};

const directStyle = { margin: "0 0 1rem", color: "#f9fafb", textAlign: "center" };
const emailStyle = { textDecoration: "underline", color: "#f9fafb" };

const btnWrapper = {
  display: "flex",
  justifyContent: "center",
  gap: ".75rem",
  flexWrap: "wrap",
  textAlign: "center",
};

const btnStyle = {
  textDecoration: "none",
  padding: ".6rem 1rem",
  border: "1px solid #f9fafb",
  borderRadius: ".75rem",
  fontWeight: 600,
  color: "#f9fafb",
  textAlign: "center",
};

const footerStyle = { marginTop: "4rem", textAlign: "center" };
const logoStyle = { width: "100px", margin: "0 auto" };
