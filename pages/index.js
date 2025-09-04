export default function Home() {
  const card = {
    boxShadow: '0 10px 24px rgba(0,0,0,.2)',
    borderRadius: 16,
    background: '#121a2e',
    padding: 20
  };

  return (
    <main style={{minHeight:'100vh',background:'#0b1426',color:'#fff',fontFamily:'system-ui'}}>
      <section style={{maxWidth:960,margin:'0 auto',padding:'56px 20px'}}>
        <h1 style={{margin:0,fontSize:42}}>Hecht Hospitality</h1>
        <p style={{opacity:.9,marginTop:8,fontSize:18}}>
          Modern, easy stays in Scottsdale. Book direct or via Airbnb/VRBO.
        </p>

        <div style={{display:'grid',gap:20,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',marginTop:28}}>
          <div style={card}>
            <h3 style={{marginTop:0}}>Old Town 2BR</h3>
            <p>Sleeps 4 · Walk to restaurants</p>
            <a href="https://www.vrbo.com/2747791?dateless=true" target="_blank" style={{color:'#3b82f6'}}>Airbnb</a> ·{' '}
            <a href="https://www.airbnb.com/hosting/listings/editor/52926264/view-your-space" target="_blank" style={{color:'#3b82f6'}}>VRBO</a>
          </div>
          <div style={card}>
            <h3 style={{marginTop:0}}>Desert View 3BR</h3>
            <p>Sleeps 6 · Pool</p>
            <a href="https://www.airbnb.com/hosting/listings/editor/52926264/view-your-space" target="_blank" style={{color:'#3b82f6'}}>Airbnb</a> ·{' '}
            <a href="https://www.vrbo.com/2747791?dateless=true" target="_blank" style={{color:'#3b82f6'}}>VRBO</a>
          </div>
        </div>

        <a href="mailto:hello@hechthospitality.com"
           style={{display:'inline-block',marginTop:28,padding:'12px 16px',borderRadius:10,
                   background:'#3b82f6',color:'#fff',textDecoration:'none',fontWeight:600}}>
          Contact Us
        </a>
      </section>
    </main>
  );
}
