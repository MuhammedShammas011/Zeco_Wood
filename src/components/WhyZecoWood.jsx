import { whyFeatures } from '../data/zecowood';
import styles from './WhyZecoWood.module.css';

export default function WhyZecoWood() {
  return (
    <section id="why-zecowood" className={`section ${styles.section}`}>
      <div className={`container ${styles.stackingContainer}`}>

        {whyFeatures.map((feature, index) => {
          const tabWidth = 180;
          const slope = 30;
          const initialWidth = tabWidth + slope; // 210
          const blockWidth = tabWidth + slope * 2; // 240

          let clipVars = {};
          if (index === 0) {
            clipVars = {
              '--clip-start-base': '0px',
              '--clip-slope-top-left': '0px',
              '--clip-top-flat-right': `${tabWidth}px`,
              '--clip-slope-bottom-right': `${initialWidth}px`,
              '--tab-left': '40px',
            };
          } else {
            const startBase = initialWidth + (index - 1) * blockWidth;
            clipVars = {
              '--clip-start-base': `${startBase}px`,
              '--clip-slope-top-left': `${startBase + slope}px`,
              '--clip-top-flat-right': `${startBase + slope + tabWidth}px`,
              '--clip-slope-bottom-right': `${startBase + slope + tabWidth + slope}px`,
              '--tab-left': `${startBase + slope + 30}px`,
            };
          }

          const isAlt = index === 1 || index === 3;

          return (
            <div
              key={feature.number}
              className={`${styles.folderCard} ${isAlt ? styles.folderCardAlt : ''}`}
              style={{
                zIndex: index + 1,
                top: '120px',
                ...clipVars
              }}
            >
              {/* Folder Cutout Shape applied via CSS */}

              <div className={`${styles.folderInner} ${isAlt ? styles.folderAlt : ''}`}>

                {/* Top Tab Area */}
                <div className={styles.topTab} style={{ left: 'var(--tab-left)' }}>
                  <span className={styles.tabIcon}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 4h7v7H4V4zm10 0h7v7h-7V4zM4 14h7v7H4v-7zm10 0h7v7h-7v-7z" />
                    </svg>
                  </span>
                  QUALITY {feature.number}
                </div>

                {/* Main Split Layout */}
                <div className={styles.splitLayout}>

                  {/* Left Side Content */}
                  <div className={styles.leftContent}>
                    <div className={styles.eyebrow}>
                      <span className={styles.dot}></span> Why ZECOWOOD
                    </div>

                    <h2 className={styles.title}>{feature.title}</h2>
                    <p className={styles.desc}>{feature.desc}</p>

                    <a href="#explore" className={styles.exploreLink}>
                      EXPLORE {feature.title.toUpperCase()} ↗
                    </a>

                    <div className={styles.bottomTabs}>
                      {feature.tabs.map((tab, i) => (
                        <div key={i} className={styles.bottomTab}>
                          {tab}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side Image Area */}
                  <div className={styles.rightContent}>
                    <div className={styles.imageFrame}>
                      <img src={feature.image} alt={feature.title} className={styles.featureImage} />

                      {/* Floating Annotations */}
                      <div className={styles.imageTagTop}>
                        <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                          <polyline points="13 2 13 9 20 9"></polyline>
                        </svg>
                        ZECOWOOD.JPG
                      </div>



                      {/* Corner Crosshairs */}
                      <div className={`${styles.crosshair} ${styles.tl}`}></div>
                      <div className={`${styles.crosshair} ${styles.tr}`}></div>
                      <div className={`${styles.crosshair} ${styles.bl}`}></div>
                      <div className={`${styles.crosshair} ${styles.br}`}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
