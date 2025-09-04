// pages/index.js
export default function Home() {
  // You can add more objects to this array for more properties.
  const listings = [
    {
      title: "The Scottsdale Oasis",
      location: "Old Town Scottsdale",
      sleeps: 6,
      highlights: ["pool", "washer", "dryer", "parking", "garage", "pet friendly", "fireplace"],
      rate: "See Airbnb/VRBO for current rate",
      // Converted to public, guest-facing link so visitors can open it:
      airbnb: "https://www.airbnb.com/rooms/52926264",
      vrbo: "https://www.vrbo.com/2747791?dateless=true",
      // NOTE: this URL is a VRBO page, not a direct image.
      // If it doesn't show, replace with a direct photo URL (jpg/png).
      image: "image: "/oasis.jpg",
",
    },
  ];

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
    <main style={{ minHeight: "100vh", background: "#0b1426", color: "#fff", fontFamily: "system-ui" }}>
      <section style={{ maxWidth: 980, margin: "0 auto", padding: "56px 20px" }}>
        <header style={{ marginBottom: 20 }}>
          <h1 style={{ margin: 0, fontSize: 42 }}>Hecht Hospitality</h1>
          <p style={{ opacity: .9, marginTop: 6, fontSize: 18 }}>
            Modern, easy stays in Scottsdale. Book on Airbnb or VRBO.
          </p>
        </header>

        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {listings.map((p, i) => (
            <article key={i} style={card}>
              {p.image ? (
                <div style={{
                  width: "100%", height: 150, borderRadius: 12, marginBottom: 12,
                  background: `center / cover no-repeat url('${p.image}')`
                }}/>
              ) : null}

              <h3 style={{ margin: "0 0 6px" }}>{p.title}</h3>
              <div style={{ opacity: .85, marginBottom: 8 }}>{p.location} • Sleeps {p.sleeps}</div>
              <div style={{ marginBottom: 10 }}>
                {p.highlights?.map((h, j) => <span key={j} style={chip}>{h}</span>)}
              </div>
              {p.rate ? <div style={{ marginBottom: 12, fontWeight: 600 }}>{p.rate}</div> : null}

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {p.airbnb && (
                  <a href={p.airbnb} target="_blank" rel="noopener noreferrer"
                     style={{ color: "#3b82f6", fontWeight: 600 }}>
                    Airbnb →
                  </a>
                )}
                {p.vrbo && (
                  <a href={p.vrbo} target="_blank" rel="noopener noreferrer"
                     style={{ color: "#3b82f6", fontWeight: 600 }}>
                    VRBO →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <footer style={{ marginTop: 36 }}>
          <a href="mailto:hello@hechthospitality.com"
             style={{ display: "inline-block", padding: "12px 16px", borderRadius: 10,
                      background: "#3b82f6", color: "#fff", textDecoration: "none", fontWeight: 600 }}>
            Contact Us
          </a>
        </footer>
      </section>
    </main>
  );
}
