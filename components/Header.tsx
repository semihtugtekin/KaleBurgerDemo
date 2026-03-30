import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            KaleBurger<span>.</span>
          </Link>
        </div>
        <nav className={styles.nav}>
          <a href="https://www.instagram.com/kaleburgeer/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://wa.me/5306414250" target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
            0530 641 42 50
          </a>
        </nav>
      </div>
    </header>
  );
}
