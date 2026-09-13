import { resources } from '../data/zecowood';
import styles from './Resources.module.css';

export default function Resources() {
  return (
    <section id="resources" className={`section ${styles.section}`}>
      <div className="container">
        <span className="eyebrow">07 / Resources</span>

        <ul className={styles.list} aria-label="ZecoWood resources">
          {resources.map(({ label, href }) => (
            <li key={label} className={styles.item}>
              <a href={href} className={styles.link}>
                <span className={styles.label}>{label}</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
