// pages/index.js
export default function Home() {
  // Your property list (add more objects to show more homes)
  const listings = [
    {
      title: "The Scottsdale Oasis",
      location: "Old Town Scottsdale",
      sleeps: 6,
      highlights: ["pool", "washer", "dryer", "parking", "garage", "pet friendly", "fireplace"],
      rate: "See Airbnb/VRBO for current rate",
      airbnb: "https://www.airbnb.com/rooms/52926264",
      vrbo: "https://www.vrbo.com/2747791?dateless=true",
      image: "/oasis.jpg" // <-- ensure this file exists in /public
    }
  ];

  // Simple styles
  const wrap = {
    minHeight: "100vh",
    background: "#0b1426",
    color: "#fff",
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  };
  const section = { maxWidth: 980, margin: "0 auto", padding: "56px 20px" };
  const grid = {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  };
  const card = {
    background: "#121a2e",
    borderRadius: 16,
    padding: 20,
    boxShadow: "0 10px 24px rgba(0,0,0,.2)",
  };
  const chip = {
    display: "inline-block",
    marginRight: 8,
    padding: "4px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,.08)",
    fontSize: 12,
  };

  return (
    <main style={wrap}>
      <section style={section}>
        <header style={{ marginBottom: 20 }}>
          <h1 style={{ margin: 0, fontSize: 42 }}>Hecht Hospitality</h1>
          <p style={{ opacity: 0.9, marginTop: 6, fontSize: 18 }}>
            Modern, easy stays in Scottsdale. Book on Airbnb or VRBO.
          </p>
        </header>

        <div style={grid}>
          {listings.map((p, i) => (
            <article key={i} style={card}>
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 12,
                    marginBottom: 12,
                  }}
                />
              ) : null}

              <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>
              <div style={{ opacity: 0.85, marginBottom: 8 }}>
                {p.location} • Sleeps {p.sleeps}
              </div>

              <div style={{ marginBottom: 10 }}>
                {p.highlights.map((h, j) => (
                  <span key={j} style={chip}>
                    {h}
                  </span>
                ))}
              </div>

              <div style={{ marginBottom: 12, fontWeight: 600 }}>{p.rate}</div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={p.airbnb}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#3b82f6", fontWeight: 600 }}
                >
                  Airbnb →
                </a>
                <a
                  href={p.vrbo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#3b82f6", fontWeight: 600 }}
                >
                  VRBO →
                </a>
              </div>
            </article>
          ))}
        </div>

        <footer style={{ marginTop: 36 }}>
          <a
            href="mailto:hello@hechthospitality.com"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 10,
              background: "#3b82f6",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Contact Us
          </a>
        </footer>
      </section>
    </main>
  );
}
