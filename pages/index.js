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

      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Hecht Hospitality</h1>

        {/* === Property 1: The Scottsdale Oasis === */}
        <section style={sectionStyle}>
          <img
            src="/scottsdale-oasis.jpg"
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

          <p style={noteStyle}>See Airbnb/VRBO for current
