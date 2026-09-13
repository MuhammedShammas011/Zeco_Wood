import { useEffect, useRef, useState } from 'react';
import ParticleText from './ParticleText';
import styles from './ProcessPage.module.css';

// Using specific process images
import imgRaw from '../Asstes/Process/RawMaterial.jpg';
import imgProcess from '../Asstes/Process/Processing.jpg';
import imgLayer from '../Asstes/Process/layering.jpg';
import imgPress from '../Asstes/Process/pressing.jpg';
import imgFinish from '../Asstes/Process/finishing.jpg';
import imgQuality from '../Asstes/Process/quality.jpg';
import imgDist from '../Asstes/Process/Distribution.jpg';
import imgProcessBg from '../Asstes/processSection.png';

const processSteps = [
  {
    number: '01',
    title: 'Raw Material',
    description: 'Carefully selected logs from responsibly managed forests, inspected for moisture content, density, and grain quality.',
    tags: ['Sourcing', 'Inspection', 'Sustainable'],
    image: imgRaw
  },
  {
    number: '02',
    title: 'Processing',
    description: 'Logs are soaked and peeled using precision equipment to obtain uniform wood veneers.',
    tags: ['Peeling', 'Precision', 'Veneers'],
    image: imgProcess
  },
  {
    number: '03',
    title: 'Layering',
    description: 'Veneers are dried, sorted, and assembled in cross-grain orientation for dimensional stability.',
    tags: ['Drying', 'Assembly', 'Cross-Grain'],
    image: imgLayer
  },
  {
    number: '04',
    title: 'Pressing',
    description: 'Layers are bonded under controlled heat and pressure to achieve strength and durability.',
    tags: ['Bonding', 'Heat', 'Pressure'],
    image: imgPress
  },
  {
    number: '05',
    title: 'Finishing',
    description: 'Panels are trimmed, calibrated, and sanded for a smooth and consistent surface.',
    tags: ['Trimming', 'Sanding', 'Calibration'],
    image: imgFinish
  },
  {
    number: '06',
    title: 'Quality',
    description: 'Every panel undergoes multi-stage testing to meet international standards.',
    tags: ['Testing', 'Standards', 'Assurance'],
    image: imgQuality
  },
  {
    number: '07',
    title: 'Distribution',
    description: 'Panels are carefully packaged and transported globally via an optimized supply chain.',
    tags: ['Packaging', 'Logistics', 'Global'],
    image: imgDist
  },
];

export default function ProcessPage() {
  const pageRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (!pageRef.current) return;
      const rect = pageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the 800vh container
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;

      let p = currentScroll / totalScrollable;
      p = Math.max(0, Math.min(1, p));

      setProgress(p);

      // Map progress to active step (0 to 6)
      const currentActive = Math.round(p * (processSteps.length - 1));
      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animateIn);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    // Wait a tick to ensure elements are rendered with classes
    setTimeout(() => {
      const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const totalRotation = (processSteps.length - 1) * 25; // 6 * 25 = 150deg
  const currentRotation = -(progress * totalRotation);

  return (
    <div className={styles.pageWrapper} ref={pageRef}>

      {/* ── Intro Hero Section ── */}
      <div className={styles.introSection}>
        {/* Top: eyebrow */}
        <div className={styles.introTop}>
          <p className={`${styles.introEyebrow} ${styles.animateOnScroll}`}>The Zecowood Process</p>

          {/* Body: big heading + divider + description */}
          <div className={styles.introBody}>
            <div className={`${styles.introHeadingWrap} ${styles.animateOnScroll} ${styles.delay1}`}>
              <ParticleText 
                text={"From\nSelected Timber\nto Reliable Plywood."}
                className={styles.introHeading}
              />
            </div>

            <div className={`${styles.introDivider} ${styles.animateOnScroll} ${styles.delay2}`} />

            <p className={`${styles.introDesc} ${styles.animateOnScroll} ${styles.delay2}`}>
              Every Zecowood sheet begins with carefully selected timber and moves
              through a controlled sequence of processes. Each stage is designed to
              deliver consistency, strength, and stability in every sheet.
            </p>
          </div>
        </div>

        {/* Bottom: tagline + page number */}
        <div className={styles.introBottom}>
          <div className={`${styles.introTagline} ${styles.animateOnScroll} ${styles.delay3}`}>
            <span className={styles.introTaglineText}>A Stronger<br />Tomorrow</span>
            <div className={styles.introTaglineLine} />
          </div>
        </div>

        {/* Decorative Bottom Image */}
        <img src={imgProcessBg} alt="Wood Texture" className={`${styles.introBgImage} ${styles.animateOnScroll} ${styles.delay3}`} />
      </div>
      <div className={styles.stickySection}>

        {/* Left Side: Curved Timeline */}
        <div
          className={styles.orbitContainer}
          style={{ transform: `translateY(-50%) rotate(${currentRotation}deg)` }}
        >
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={styles.orbitNode}
              style={{ '--i': i }}
            >
              <div
                className={`${styles.nodeDot} ${activeIndex === i ? styles.active : ''}`}
                style={{ '--circle-rot': `${currentRotation}deg` }}
              >
                {step.number}
              </div>
            </div>
          ))}
        </div>

        {/* Center: Dynamic Content */}
        <div className={styles.contentWrapper}>
          {processSteps.map((step, i) => (
            <div
              key={`content-${step.number}`}
              className={`${styles.contentItem} ${activeIndex === i ? styles.active : ''}`}
            >
              <span className={styles.phaseNumber}>PHASE {step.number}</span>
              <h1 className={styles.phaseTitle}>{step.title}</h1>
              <p className={styles.phaseDesc}>{step.description}</p>

              <div className={styles.tags}>
                {step.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Visuals */}
        <div className={styles.visualWrapper}>
          {processSteps.map((step, i) => (
            <div
              key={`visual-${step.number}`}
              className={`${styles.visualItem} ${activeIndex === i ? styles.active : ''}`}
            >
              <img src={step.image} alt={step.title} className={styles.visualImage} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
