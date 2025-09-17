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
        {/* Sun */}
        <div className="sun" />
        {/* Mountain ranges */}
        <div className="mountains m1" />
        <div className="mountains m2" />
        <div className="mountains m3" />

        {/* Side cactus columns */}
        <div className="cactusColumn left">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={`lc-${i}`} className={`cactus small s${(i % 6) + 1}`} />
          ))}
        </div>
        <div className="cactusColumn right">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={`rc-${i}`} className={`cactus small s${(i % 6) + 1}`} />
          ))}
        </div>

        {/* Bottom cactus field */}
        <div className="cactusField">
          {Array.from({ length: 22 }).map((_, i) => (
            <div
              key={`bf-${i}`}
              className={`cactus ${i % 3 === 0 ? "tall" : i % 3 === 1 ? "medium" : "short"}`}
              style={{
                left: `calc(${(i / 21) * 100}% + ${(i % 5) * 6 - 12}px)`,
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
      </div>

      {/* --- DESERT DECOR STYLES --- */}
      <style jsx>{`
        /* Utilities */
        .desertDecor {
          position: fixed;
          inset: 0;
          z-index: 0; /* behind content */
          pointer-events: none; /* never block clicks */
          overflow: hidden;
        }

        /* Sun */
        .sun {
          position: absolute;
          top: clamp(40px, 8vh, 100px);
          right: clamp(40px, 8vw, 120px);
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

        /* Mountains (layered silhouettes using SVG data URIs) */
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

        /* Cactus base shape via mask + background (fast to render & easy to recolor) */
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
        .cactus.tall {
          height: 110px;
          width: 24px;
        }
        .cactus.medium {
          height: 90px;
          width: 22px;
        }
        .cactus.short {
          height: 70px;
          width: 20px;
        }

        /* Arms */
        .cactus::before,
        .cactus::after {
          content: "";
          position: absolute;
          width: 14px;
          height: 40%;
          border-radius: 12px;
          top: 22%;
        }
        .cactus::before {
          left: -12px;
        }
        .cactus::after {
          right: -12px;
          height: 34%;
          top: 32%;
        }

        /* Subtle ribbing highlights */
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
        .cactusColumn.left {
          left: max(0px, env(safe-area-inset-left));
        }
        .cactusColumn.right {
          right: max(0px, env(safe-area-inset-right));
        }
        .cactusColumn .cactus.small {
          position: relative;
          bottom: 0;
          margin: 0 auto;
          transform: translateY(0) scale(0.9);
          height: 62px;
          width: 18px;
        }
        .cactusColumn .cactus.small.s1 {
          transform: translateY(0) scale(0.85) rotate(-2deg);
        }
        .cactusColumn .cactus.small.s2 {
          transform: translateY(4px) scale(0.95) rotate(1deg);
        }
        .cactusColumn .cactus.small.s3 {
          transform: translateY(-2px) scale(0.9) rotate(2deg);
        }
        .cactusColumn .cactus.small.s4 {
          transform: translateY(3px) scale(0.92) rotate(-1deg);
        }
        .cactusColumn .cactus.small.s5 {
          transform: translateY(1px) scale(0.88) rotate(1deg);
        }
        .cactusColumn .cactus.small.s6 {
          transform: translateY(-1px) scale(0.9) rotate(-2deg);
        }

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

        /* Responsive tweaks so content never feels crowded */
        @media (max-width: 900px) {
          .mountains.m1 {
            bottom: 28vh;
          }
          .mountains.m2 {
            bottom: 23vh;
          }
          .mountains.m3 {
            bottom: 19vh;
          }
          .dunes.front {
            height: 32vh;
          }
        }
        @media (max-width: 640px) {
          .cactusColumn {
            opacity: 0.65; /* lighten edges on small screens */
          }
          .sun {
            right: clamp(20px, 4vw, 40px);
            top: clamp(24px, 6vh, 60px);
          }
        }
      `}</style>

      {/* Top-right cactus button (unchanged) */}
      <div className="topRightWrapper">
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

      {/* Cactus button styles */}
      <style jsx>{`
        .topRightWrapper {
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 1000;
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

        /* Right arm */
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

        .cactusEmoji {
          position: relative;
          display: inline-flex;
        }

        .cactusText {
          white-space: nowrap;
        }

        @media (max-width: 540px) {
          .cactusText {
            display: none;
          }
          .cactusBtn {
            padding: 0.7rem 0.8rem;
            border-radius: 999px;
          }
        }
      `}</style>

      <main style={mainStyle}>
        {/* Big turquoise text header */}
        <h1 style={headerText}>Hecht Hospitality</h1>

        {/* === Property 1: The Scottsdale Oasis === */}
        <section style={sectionStyle}>
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
              href="https://www.airbnb.ca/rooms/52926264?check_in=2025-09-25&check_out=2025-09-28&guests=1&adults=1&s=67&unique_share_id=37fe3738-ded1-40ba-adf4-de40bdde6cc5&source_impression_id=p3_1758142493_P3hCZaAuclUGDHhD&_set_bev_on_new_domain=1756964426_EAODkzODM4ZGRjZT&locale=en"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
            >
              Airbnb Rates →
            </a>
            <a
              href="https://www.vrbo.com/2747791?chkin=2025-10-1&chkout=2025-10-2&rm1=a2&regionId=9829&searchId=2c82cc2a-7eac-42d4-92c4-256890a55860"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
            >
              VRBO Rates →
            </a>
          </div>
        </section>

        {/* === Property 2: The Sunrise Condo === */}
        <section style={sectionStyle}>
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
              href="https://www.furnishedfinder.com/property/581506_1?moveDate=%7B%22in%22%3A%222026-04-01%22%7D&budget=%7B%22min%22%3A2000%2C%22max%22%3A2500%7D&filters=%7B%22minBedroomCount%22%3A1%2C%22minBedCount%22%3A1%2C%22minBathroomCount%22%3A1%7D"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
            >
              Furnished Finder Rates →
            </a>
          </div>
        </section>

        {/* Footer with logo */}
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
  color: "#40e0d0", // turquoise
};

const sectionStyle = {
  margin: "2rem 0",
  padding: "1.25rem",
  border: "1px solid #7a2a1e",
  borderRadius: "1rem",
  backgroundColor: "#822e22", // darker card bg
  backdropFilter: "saturate(1.1)",
};

const imgStyle = {
  width: "50%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "0.75rem",
  margin: "0 auto 1rem",
  display: "block",
};

const titleStyle = { fontSize: "1.5rem", marginBottom: ".25rem" };
const subtitleStyle = { margin: ".25rem 0 1rem", color: "#f5d0c5" };

const chipWrapper = {
  display: "flex",
  flexWrap: "wrap",
  gap: ".5rem",
  margin: "0 0 1rem",
};

const chipStyle = {
  padding: ".25rem .6rem",
  border: "1px solid #f5a09a",
  borderRadius: "999px",
  fontSize: ".9rem",
  backgroundColor: "#661f16",
};

const directStyle = {
  margin: "0 0 1rem",
  color: "#f9fafb",
};

const emailStyle = {
  textDecoration: "underline",
  color: "#f9fafb",
};

const btnWrapper = {
  display: "flex",
  gap: ".75rem",
  flexWrap: "wrap",
};

const btnStyle = {
  textDecoration: "none",
  padding: ".6rem 1rem",
  border: "1px solid #f9fafb",
  borderRadius: ".75rem",
  fontWeight: 600,
  color: "#f9fafb",
};

const footerStyle = {
  marginTop: "4rem",
  textAlign: "center",
};

const logoStyle = {
  width: "100px",
  margin: "0 auto",
};
