import { useEffect, useRef } from 'react';
import styles from './Footer.module.css';
import logoGreen from '../Asstes/ZecoWoodLogoGreen.png';

export default function Footer() {
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
    <footer className={styles.footer} id="contact">
      <div className="container">

        {/* ── Top CTA Block ── */}
        <div className={`${styles.ctaBlock} ${styles.animateOnScroll}`}>
          <div className={styles.headingWrapper}>
            <h2 className={styles.massiveHeading}>
              BUILD BETTER SPACES<br />
              WITH ZECOWOOD.
            </h2>

            <a href="mailto:info@zecowood.com" className={styles.pillButton}>
              GET IN TOUCH
            </a>
          </div>

          <p className={styles.subtext}>
            Let's discuss your next project<br />
            and create something lasting together.
          </p>
        </div>

        {/* ── Bottom Grid Rows ── */}
        <div className={`${styles.footerGrid} ${styles.animateOnScroll} ${styles.delay1}`}>

          {/* Row 1: Contact */}
          <div className={styles.gridRow}>
            <div className={styles.rowLabel}>CONTACT</div>
            <div className={styles.rowItem}>Malappuram, Kerala, India</div>
            <div className={styles.rowItem}>+91 495 239 4000</div>
            <div className={styles.rowItem}>info@zecowood.com</div>
          </div>

          {/* Row 2: Social Media */}
          <div className={styles.gridRow}>
            <div className={styles.rowLabel}>SOCIAL MEDIA</div>
            <div className={styles.rowItem}>
              <a href="#" className={styles.link}>Instagram</a>
            </div>
            <div className={styles.rowItem}>
              <a href="#" className={styles.link}>Facebook</a>
            </div>
            <div className={styles.rowItem}>
              <a href="#" className={styles.link}>LinkedIn</a>
            </div>
          </div>

          {/* Row 3: Branding */}
          <div className={`${styles.gridRow} ${styles.brandRow}`}>
            <div className={styles.brandLeft}>
              <img src={logoGreen} alt="ZecoWood" className={styles.logo} />
              <span className={styles.tagline}>ENGINEERING TO ENDURE.</span>
            </div>
            <div className={styles.brandRight}>
              NATURAL STRENGTH<br />
              FOR REAL SPACES.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
