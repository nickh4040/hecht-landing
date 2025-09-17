{/* Guide button — top right, bigger cactus green text */}
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

<style jsx>{`
  .guideWrapper {
    position: fixed;
    top: 0.7in;   /* slightly down */
    right: 1rem;  /* back to top-right */
    z-index: 1000;
    pointer-events: auto;
  }

  .cactusBtn {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.25rem;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.15rem; /* bigger font */
    line-height: 1.2;
    color: #228b22; /* cactus green text */
    background: #ffffff; /* optional: white background so green pops */
    border: 2px solid #145214;
    border-radius: 32px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.28);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cactusBtn:hover {
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.32);
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
