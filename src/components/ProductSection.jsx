import styles from './ProductSection.module.css';

export default function ProductSection() {
  return (
    <section id="product" className={`section ${styles.section}`}>
      <div className="container">
        <span className="eyebrow">03 / ZecoWood</span>
        <h2 className={`section-heading ${styles.heading}`}>
          One material.<br />Many possibilities.
        </h2>

        <div className={`visual-placeholder ${styles.frame}`} aria-label="ZecoWood product visual — imagery to be added">
          <div className={styles.frameInner}>
            <span className={styles.frameLabel}>ZecoWood</span>
          </div>
        </div>

        <div className={styles.footer}>
          <a href="#performance" className="link-underline">Explore Product →</a>
        </div>
      </div>
    </section>
  );
}
