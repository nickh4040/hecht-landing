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

      {/* --- DESERT DECOR --- */}
      <div className="desertDecor" aria-hidden="true">
        {/* Sun + mountain ridge below it */}
        <div className="sun" />
        <div className="sunMountain" />

        {/* Mountain layers */}
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

      {/* --- DECOR & BUTTON STYLES --- */}
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

        .mountains {
          position: absolute;
          left: -5vw;
          right: -5vw;
          height: 30vh;
          background-repeat: repeat-x;
          background-size: auto 100%;
          opacity: 0.65;
        }
        .mountains.m1 {
          bottom: 32vh;
          opacity: 0.35;
          background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200 300' xmlns='http://www.w3.org/2000/svg'><path d='M0 240 L120 180 L240 220 L360 150 L480
