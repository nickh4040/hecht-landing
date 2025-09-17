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
        }
        a {
          color: inherit;
        }
      `}</style>

      {/* Top-right cactus button */}
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
