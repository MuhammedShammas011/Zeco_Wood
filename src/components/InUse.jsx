import styles from './InUse.module.css';

export default function InUse() {
  return (
    <section id="in-use" className={`section ${styles.section}`}>
      <div className="container">
        <span className="eyebrow">06 / In Use</span>
        <h2 className={`section-heading ${styles.heading}`}>
          Engineered for real spaces.
        </h2>

        <div
          className={`visual-placeholder ${styles.frame}`}
          role="img"
          aria-label="ZecoWood in application — photography to be added"
        >
          {/* Architectural cross-hair marker — intentional empty frame */}
          <div className={styles.marker} aria-hidden="true">
            <div className={styles.markerH} />
            <div className={styles.markerV} />
          </div>
        </div>

        <div className={styles.footer}>
          <a href="#applications" className="link-underline">View Applications →</a>
        </div>
      </div>
    </section>
  );
}
