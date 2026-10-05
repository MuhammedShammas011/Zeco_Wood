import { useState, useEffect } from 'react';
import workshopImg from '../Asstes/texture_plywood_edge.jpg';
import handsImg from '../Asstes/texture_raw_wood.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll position
  // Maximum effect reached after 600px of scrolling
  const maxScroll = 600;
  const progress = Math.min(scrollY / maxScroll, 1);

  // Fade out from 1 to 0
  const opacity = 1 - progress;
  // Shrink from 1 to 0.85
  const scale = 1 - (progress * 0.15);
  // Slight parallax to keep it somewhat centered while shrinking
  const translateY = scrollY * 0.3;

  // Helper function to render text as individual letters for the dock bulge effect
  // Groups letters into words so they can gracefully wrap on smaller screens
  const renderBulgeText = (text) => {
    return text.split(' ').map((word, wordIndex, words) => (
      <span key={wordIndex} className={styles.wordWrapper}>
        {word.split('').map((char, index) => (
          <span key={index} className={styles.bulgeLetter}>
            {char}
          </span>
        ))}
        {wordIndex < words.length - 1 && <span className={styles.spaceLetter}>&nbsp;</span>}
      </span>
    ));
  };

  return (
    <div className={styles.heroWrapper}>
      <section className={styles.hero} aria-label="Hero">
        <div
          className={`container ${styles.inner}`}
          style={{
            opacity: opacity,
            transform: `translateY(${translateY}px) scale(${scale})`,
            transformOrigin: 'center center',
            willChange: 'opacity, transform'
          }}
        >

          {/* Row 1: Top Headline (Left) */}
          <div className={styles.rowTop}>
            <h1 className={styles.headlineLeft}>
              <span className={styles.revealWrapper}>
                <span className={`${styles.revealText} ${styles.delay1}`}>
                  {renderBulgeText("A PLYWOOD TO")}
                </span>
              </span>
            </h1>
          </div>

          {/* Row 2: Description (Left) + Middle Headline (Right) */}
          <div className={styles.rowMid}>
            <div className={styles.descLeft}>
              <p className={`${styles.revealFade} ${styles.delayFade1}`}>
                ZECOWOOD IS AN ENGINEERED PLYWOOD MADE FOR ARCHITECTS AND MAKERS TO BUILD WITH.
              </p>
            </div>

            <div className={styles.headlineRightWrap}>
              <h2 className={styles.headlineRight}>
                <span className={styles.revealWrapper}>
                  <span className={`${styles.revealText} ${styles.delay2}`}>
                    {renderBulgeText("BUILD SOMETHING")}
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* Row 3: Sub-bar (Right aligned: Note + Pill Badge) */}
          <div className={`${styles.subBarRight} ${styles.revealFade} ${styles.delayFade2}`}>
            <p className={styles.subNote}>
              ENGINEERED FOR FURNITURE, INTERIORS, AND SPACES — BUILT TO LAST.
            </p>
            <div className={styles.pillBadge}>
              STRENGTH IN EVERY LAYER
            </div>
          </div>

          {/* Row 4: Bottom Row (Headline Left + Circular CTA + Two Image Cards) */}
          <div className={styles.rowBottom}>

            {/* Bottom Left Headline */}
            <div className={styles.headlineBottomWrap}>
              <h2 className={styles.headlineBottom}>
                <span className={styles.revealWrapper}>
                  <span className={`${styles.revealText} ${styles.delay3}`}>
                    {renderBulgeText("THAT LASTS.")}
                  </span>
                </span>
              </h2>
            </div>

            {/* Bottom Right Group: Circular Outlined CTA + Two Image Cards */}
            <div className={styles.bottomRightGroup}>

              {/* Circular Outlined Badge with Button */}
              <div className={`${styles.circleBadge} ${styles.revealFade} ${styles.delayFade3}`}>
                <p className={styles.circleText}>
                  MADE FOR ARCHITECTS,<br />
                  MAKERS AND BUILDERS<br />
                  — ENGINEERED TO PERFORM
                </p>
                <a href="#final-cta" className={styles.circleButton}>
                  Know More!
                  <span className={styles.circleArrow}>→</span>
                </a>
              </div>

              {/* Two Image Cards */}
              <div className={styles.imageCards}>
                <div className={`${styles.imageCard} ${styles.revealFade} ${styles.delayFade4}`}>
                  <img
                    src={workshopImg}
                    alt="Artisan craftsman woodworking in studio"
                    className={styles.cardImage}
                  />
                </div>
                <div className={`${styles.imageCard} ${styles.revealFade} ${styles.delayFade5}`}>
                  <img
                    src={handsImg}
                    alt="Hands holding sculpted wooden craft design"
                    className={styles.cardImage}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
