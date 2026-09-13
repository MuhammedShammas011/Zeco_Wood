import { specifications } from '../data/zecowood';
import { useEffect, useRef } from 'react';
import ParticleText from './ParticleText';
import styles from './Performance.module.css';
import meatreImage from '../Asstes/meatreImage.png';

const Icon = ({ name }) => {
  switch (name) {
    case 'Thickness':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
          <line x1="12" y1="3" x2="12" y2="21"></line>
          <line x1="7" y1="8" x2="17" y2="8"></line>
          <line x1="7" y1="16" x2="17" y2="16"></line>
        </svg>
      );
    case 'Dimensions':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <line x1="9" y1="4" x2="9" y2="20"></line>
          <line x1="15" y1="4" x2="15" y2="20"></line>
        </svg>
      );
    case 'Core':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      );
    case 'Density':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.iconSvg}>
          <circle cx="8" cy="8" r="1.5"></circle>
          <circle cx="16" cy="8" r="1.5"></circle>
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="8" cy="16" r="1.5"></circle>
          <circle cx="16" cy="16" r="1.5"></circle>
        </svg>
      );
    case 'Strength':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
    case 'Bonding':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      );
    case 'Moisture Resistance':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </svg>
      );
    case 'Certifications':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      );
    default:
      return null;
  }
};

export default function Performance() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateIn);
          observerRef.current.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section className={styles.section} id="performance" aria-label="Performance details">
      <div className={`container ${styles.bentoGrid}`}>

        {/* ── Left Column ── */}
        <div className={styles.leftCol}>

          {/* Heading Block */}
          <div className={`${styles.headingBlock} ${styles.animateOnScroll}`}>
            <span className={styles.eyebrow}>06 / PERFORMANCE</span>
            <ParticleText text={"Performance you\ncan build on."} className={styles.heading} />
            <p className={styles.description}>
              Engineered for strength, made for real spaces.<br />
              Zecowood delivers consistent quality you can rely on.
            </p>
          </div>

          {/* Specs List */}
          <div className={`${styles.specsContainer} ${styles.animateOnScroll} ${styles.delay1}`}>
            {specifications.map(({ label, value }) => (
              <div key={label} className={styles.specRow}>
                <div className={styles.iconWrapper}>
                  <Icon name={label} />
                </div>
                <div className={styles.specLabel}>{label}</div>
                <div className={styles.specValue}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image & Bottom Card */}
        <div className={styles.rightCol}>

          <div className={`${styles.imageWrapper} ${styles.animateOnScroll} ${styles.delay2}`}>
            <img
              src={meatreImage}
              alt="Engineered ZecoWood panels stacked"
              className={styles.mainImage}
            />
          </div>

          {/* Bottom Card */}
          <div className={`${styles.bottomCard} ${styles.animateOnScroll} ${styles.delay3}`}>
            <div className={styles.bottomCardIconWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.iconSvg}>
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 22l10-10"></path>
              </svg>
            </div>
            <div className={styles.bottomCardText}>
              <h4 className={styles.bottomCardTitle}>A stronger tomorrow.</h4>
              <p className={styles.bottomCardDesc}>
                Sustainable materials. Dependable performance.<br />
                Built for what's next.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
