import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/zecowood';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';
import logoImg from '../Asstes/ZecowoodLogoWhite.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
          <div className={styles.inner}>

            {/* Brand */}
            <Link to="/" className={styles.logo} aria-label="ZecoWood homepage">
              <img src={logoImg} alt="ZecoWood" className={styles.logoImage} />
            </Link>

            {/* Actions */}
            <div className={styles.actions}>
              <button
                className={`${styles.hamburgerCircle} ${menuOpen ? styles.active : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(o => !o)}
              >
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={styles.line} />
              </button>
            </div>

          </div>
        </header>
      </div>

      <MobileMenu
        id="mobile-menu"
        isOpen={menuOpen}
        onClose={closeMenu}
        links={navLinks}
      />
    </>
  );
}
