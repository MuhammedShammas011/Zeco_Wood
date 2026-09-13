import { useEffect, useRef } from 'react';
import ParticleText from './ParticleText';
import { applications } from '../data/zecowood';
import styles from './Applications.module.css';

export default function Applications() {
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

  const furniture = applications[0];
  const others = applications.slice(1);

  return (
    <section id="applications" className={`section ${styles.section}`}>
      <div className={`container ${styles.bentoContainer}`}>
        
        {/* Top Left: Intro Block */}
        <div className={`${styles.introBlock} ${styles.animateOnScroll} ${styles.delay1}`}>
          <ParticleText text={"Built for\ndifferent\nspaces."} className={`${styles.mainHeading} ${styles.animateOnScroll}`} />
          <p className={styles.introDesc}>
            One material. Many possibilities.<br />
            Zecowood fits every space, from homes<br />to large-scale builds.
          </p>
        </div>

        {/* Top Right: Furniture Card (Wide) */}
        <div 
          className={`${styles.card} ${styles.cardWide} ${styles.animateOnScroll} ${styles.delay2}`}
          style={{ backgroundColor: furniture.bgColor || 'transparent' }}
        >
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{furniture.title}</h3>
            <p className={styles.cardDesc}>{furniture.desc}</p>
            <span className={styles.arrow} aria-hidden="true">→</span>
          </div>
          <img src={furniture.image} alt={furniture.title} className={styles.cardImageRight} />
        </div>

        {/* Bottom Row: 3 Standard Cards */}
        {others.map((app, i) => {
          let spanClass = styles.cardTall;
          let delayClass = styles[`delay${i + 1}`] || styles.delay1;
          
          if (app.title === 'Interiors') spanClass = `${styles.cardTall} ${styles.cardInteriors}`;
          if (app.title === 'Architecture') spanClass = `${styles.cardTall} ${styles.cardArchitecture}`;
          if (app.title === 'Commercial') spanClass = `${styles.cardTall} ${styles.cardCommercial}`;

          return (
            <div 
              key={app.title} 
              className={`${styles.card} ${spanClass} ${styles.animateOnScroll} ${delayClass}`}
              style={{ backgroundColor: app.bgColor || 'transparent' }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{app.title}</h3>
                <p className={styles.cardDesc}>{app.desc}</p>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </div>
              <img src={app.image} alt={app.title} className={styles.cardImageBottom} />
            </div>
          );
        })}

      </div>
    </section>
  );
}
