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
      </Head>

      <style jsx global>{`
        html, body, #__next { height: 100%; }
        body { margin: 0; background: #0a1f44; color: #f9fafb; font-family: -apple-system, Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
        a { color: inherit; }
      `}</style>

      <main style={mainStyle}>
        {/* Logo at the top */}
        <img src="/logo.png" alt="Hecht Hospitality logo" style={logoStyle} />

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

          {/* Direct booking section */}
          <p style={directStyle}>
            <strong>Book Directly and Save!</strong><br />
            Email:{" "}
            <a href="mailto:nick.hecht@yahoo.com" style={emailStyle}>
              nick.hecht@yahoo.com
            </a>
          </p>

          <div style={btnWrapper}>
            <a
              href="https://airbnb.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
            >
              Click here for rates →
            </a>
            <a
              href="https://vrbo.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
            >
              Click here for rates →
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

          {/* Direct booking section */}
          <p style={directStyle}>
            <strong>Book Directly and Save!</strong><br />
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
              Click here for rates →
            </a>
          </div>
        </section>
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

const logoStyle = {
  display: "block",
  margin: "0 auto 2rem",
  width: "120px",   // adjust as needed
};

const sectionStyle = {
  margin: "2rem 0",
  padding: "1.25rem",
  border: "1px solid #334155",
  borderRadius: "1rem",
  backgroundColor: "#1e293b",
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
const subtitleStyle = { margin: ".25rem 0 1rem", color: "#cbd5e1" };

const chipWrapper = {
  display: "flex",
  flexWrap: "wrap",
  gap: ".5rem",
  margin: "0 0 1rem",
};

const chipStyle = {
  padding: ".25rem .6rem",
  border: "1px solid #64748b",
  borderRadius: "999px",
  fontSize: ".9rem",
  backgroundColor: "#0f172a",
};

const directStyle = {
  margin: "0 0 1rem",
  color: "#f9fafb",
};

const emailStyle = {
  textDecoration: "underline",
  color: "#f9fafb",
};

const btnWrapper = { display: "flex", gap: ".75rem", flexWrap: "wrap" };

const btnStyle = {
  textDecoration: "none",
  padding: ".6rem 1rem",
  border: "1px solid #f9fafb",
  borderRadius: ".75rem",
  fontWeight: 600,
  color: "#f9fafb",
};
