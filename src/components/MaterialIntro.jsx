import { useEffect, useRef } from 'react';
import ParticleText from './ParticleText';
import styles from './MaterialIntro.module.css';
import engineeredImg from '../Asstes/engineered.png';
import texture1 from '../Asstes/texture_raw_wood.jpg';
import texture2 from '../Asstes/texture_plywood_edge.jpg';
import texture3 from '../Asstes/texture_wood_joint.jpg';
import enduringImg from '../Asstes/enduring.png';

export default function MaterialIntro() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Set up intersection observer for scroll animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateIn);
          // Optional: stop observing once animated in
          observerRef.current.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: "0px 0px -50px 0px"
    });

    // Observe all elements with the 'animateOnScroll' class
    const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="introduction" className={`section ${styles.intro}`}>
      <div className={`container ${styles.containerInner}`}>
        <ParticleText text="Why ZECOWOOD?" className={`${styles.mainHeading} ${styles.animateOnScroll} ${styles.delay1}`} />

        <div className={styles.bentoGrid}>
          {/* Left Column: Engineered Card */}
          <div className={`${styles.bentoCard} ${styles.cardLeft} ${styles.animateOnScroll} ${styles.delay2}`}>
            <h3 className={styles.cardHeading}>ENGINEERED</h3>

            <div className={styles.ovalImageWrapper}>
              <div className={styles.ovalImageContainer}>
                <img src={engineeredImg} alt="Beautiful modern wooden objects" className={styles.coverImage} />
              </div>
            </div>

            <p className={styles.cardText}>
              ZECOWOOD is developed through an advanced engineering process that aligns the natural strength of timber with absolute precision.
            </p>
          </div>

          {/* Top Right Card: Natural Materials */}
          <div className={`${styles.bentoCard} ${styles.cardTopRight} ${styles.animateOnScroll} ${styles.delay3}`}>
            <div className={styles.pillHeader}>
              <span className={styles.pillLabel}>NATURAL</span>
              <span className={styles.pillLabel}>MATERIALS</span>
            </div>

            <div className={styles.topRightContent}>
              <div className={styles.circleGroup}>
                <img src={texture1} alt="Raw Oak Texture" className={styles.circleImg} />
                <img src={texture2} alt="Plywood Edge Layers" className={styles.circleImg} />
                <img src={texture3} alt="Wooden Joint Detail" className={styles.circleImg} />
              </div>
              <p className={styles.cardTextSmall}>
                By eliminating the inherent inconsistencies of traditional wood, we deliver a structural material that performs predictably.
              </p>
            </div>
          </div>

          {/* Bottom Right Area: Image + Pill Stack */}
          <div className={`${styles.bottomRightArea} ${styles.animateOnScroll} ${styles.delay4}`}>

            <div className={styles.tallImageContainer}>
              <img src={enduringImg} alt="Enduring process" className={styles.coverImage} />
            </div>

            <div className={styles.pillStack}>
              <div className={`${styles.bentoCard} ${styles.cardPill}`}>
                <h3 className={styles.cardHeadingSmall}>ENDURING PROCESS</h3>
              </div>
              <div className={`${styles.bentoCard} ${styles.cardPillText}`}>
                <p className={styles.cardTextSmall}>
                  A material that performs beautifully across demanding applications. Discover the process.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
