import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ParticleText from './ParticleText';
import imgAbout1 from '../Asstes/About1.png';
import imgRoundedWood from '../Asstes/RoundedWood.png';
import imgApproach from '../Asstes/AboutApproach.png';
import styles from './AboutPage.module.css';
import HoverBloom from './HoverBloom';

export default function AboutPage() {
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

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
    <div className={styles.pageWrapper}>

      {/* ── Hero Section ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>

          <div className={styles.heroContent}>
            <p className={`${styles.heroEyebrow} ${styles.animateOnScroll}`}>ABOUT ZECOWOOD</p>
            <ParticleText 
              text={"Nature,\nEngineered\nBetter."} 
              className={`${styles.heroHeading} ${styles.animateOnScroll} ${styles.delay1}`}
            />
            <p className={`${styles.heroDesc} ${styles.animateOnScroll} ${styles.delay2}`}>
              ZECOWOOD, a brand from ZECOGLOBAL, brings together the natural character of wood and the precision of modern manufacturing.
            </p>
            <div className={`${styles.heroDivider} ${styles.animateOnScroll} ${styles.delay3}`}></div>
            <div className={`${styles.heroTags} ${styles.animateOnScroll} ${styles.delay3}`}>
              NATURAL WOOD.<br />
              PRECISE ENGINEERING.<br />
              RELIABLE PERFORMANCE.
            </div>
          </div>

          <div className={styles.heroVisual}>
            <img src={imgAbout1} alt="Wood panels" className={`${styles.heroImage} ${styles.animateOnScroll} ${styles.delay3}`} />
          </div>

        </div>
      </section>

      {/* ── Split Section 1 ── */}
      <section className={styles.splitSection}>
        <div className={styles.container}>
          <div className={styles.splitGrid}>

            <div className={`${styles.splitLeft} ${styles.animateOnScroll}`}>
              <div className={styles.sectionIndicator}>
                <span>01</span>
                <div className={styles.indicatorLine}></div>
              </div>
              <ParticleText 
                text={"More\nThan Wood."} 
                className={styles.splitTitle}
              />
            </div>

            <div className={`${styles.splitText} ${styles.animateOnScroll} ${styles.delay1}`}>
              <p>Wood is where we begin. Precision is how we transform it.</p>
              <p>From carefully selected timber to processed veneers and engineered layers, every stage of the ZECOWOOD process is focused on creating a material that performs consistently.</p>
              <p>We respect the natural qualities of wood while using technology and controlled manufacturing to make it stronger, more stable, and more dependable.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Split Section 2 ── */}
      <section className={`${styles.splitSection} ${styles.overflowHidden}`}>
        <div className={styles.container}>
          <div className={styles.splitGridAlternate}>

            {/* Left Side: Content */}
            <div className={`${styles.splitLeftFull} ${styles.animateOnScroll}`}>
              <div className={styles.sectionIndicator}>
                <span>02</span>
                <div className={styles.indicatorLine}></div>
              </div>
              <ParticleText 
                text={"Built Layer\nby Layer."} 
                className={styles.splitTitle}
              />
              <div className={styles.splitTextAlt}>
                <p>Every ZECOWOOD sheet has a story beneath its surface. Carefully chosen timber forms the foundation of every sheet, then is converted into uniform veneers through controlled processing.</p>
                <p>These veneers are arranged and bonded to create a balanced, strong structure, while quality is monitored throughout production to maintain consistency and performance.</p>
              </div>
            </div>

            {/* Right Side: Visual */}
            <div className={`${styles.splitVisual} ${styles.animateOnScroll} ${styles.delay1}`}>
              <div className={styles.splitSideText}>
                <span>STRENGTH<br />FROM<br />NATURE.</span>
                <div className={styles.splitSideTextLine}></div>
              </div>
              <img src={imgRoundedWood} alt="Wood Grain" className={styles.roundedWoodImage} />
            </div>

          </div>
        </div>
      </section>



      {/* ── Approach Section ── */}
      <section
        className={styles.approachSection}
        style={{ backgroundImage: `linear-gradient(rgba(248, 247, 244, 0.65), rgba(248, 247, 244, 0.65)), url(${imgApproach})` }}
      >
        <div className={styles.container}>
          <div className={styles.splitGrid}>

            <div className={`${styles.splitLeft} ${styles.animateOnScroll}`}>
              <div className={styles.sectionIndicator}>
                <span>03</span>
                <div className={styles.indicatorLine}></div>
              </div>
              <ParticleText 
                text={"Our\nApproach."} 
                className={styles.splitTitle}
              />
            </div>

            <div className={`${styles.splitText} ${styles.animateOnScroll} ${styles.delay1}`}>
              <p className={styles.approachSubheading}>UNDERSTAND WOOD.<br />ENGINEER ITS POTENTIAL.</p>
              <p>Wood is naturally unique. Its grain, structure, and character are part of what makes it valuable.</p>
              <p>At ZECOWOOD, we don't try to remove that character. We work with it.</p>
              <p>Through careful selection, precision slicing, and controlled engineering, we enhance the natural properties of wood, turning it into a stable, consistent material for modern applications.</p>

              <Link to="/" className={`${styles.ctaLink} ${styles.approachLink}`}>
                Explore Our Products →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission Callout ── */}
      <section className={styles.missionCallout}>
        <h2 className={`${styles.missionText} ${styles.animateOnScroll}`}>
          Every sheet of plywood you buy, We plant a new tree!...
        </h2>
      </section>

      {/* ── HoverBloom Section ── */}
      <section style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <HoverBloom />
      </section>

    </div>
  );
}
