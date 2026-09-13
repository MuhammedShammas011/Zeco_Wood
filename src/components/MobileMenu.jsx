import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ id, isOpen, onClose, links }) {
  return (
    <div
      id={id}
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      aria-hidden={!isOpen}
    >
      <nav className={styles.nav} aria-label="Mobile navigation">
        <ul className={styles.list}>
          {links.map(({ label, href }) => {
            const isInternalRoute = href && !href.includes('#');
            return (
              <li key={label} className={styles.item}>
                {isInternalRoute ? (
                  <Link to={href} className={styles.link} onClick={onClose}>
                    {label}
                  </Link>
                ) : (
                  <a href={href} className={styles.link} onClick={onClose}>
                    {label}
                  </a>
                )}
              </li>
            );
          })}
          <li className={`${styles.item} ${styles.ctaItem}`}>
            <a href="/#contact" className={styles.link} onClick={onClose}>
              Enquire →
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
