export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#0b1426', color: '#fff',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'
    }}>
      <div style={{
        maxWidth: 640, padding: 24, borderRadius: 16,
        background: '#121a2e', boxShadow: '0 10px 24px rgba(0,0,0,.25)'
      }}>
        <h1 style={{margin: 0}}>Hecht Hospitality</h1>
        <p style={{opacity:.85, marginTop: 8}}>
          Modern stays in Scottsdale. (Pages Router test page)
        </p>
        <a href="mailto:hello@hechthospitality.com" style={{
          display:'inline-block', marginTop:12, padding:'10px 14px',
          borderRadius:10, background:'#3b82f6', color:'#fff',
          textDecoration:'none', fontWeight:600
        }}>Contact</a>
      </div>
    </main>
  );
}
