import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image
            src="/img/Logo/logo.png"
            alt="Kale Burger"
            width={120}
            height={120}
            className={styles.logo}
          />
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>İletişim Bilgileri</h3>
          <ul className={styles.contactList}>
            <li>
              <strong>Adres:</strong> <span></span>
            </li>
            <li>
              <strong>Telefon:</strong> <span></span>
            </li>
            <li>
              <strong>Email:</strong> <span></span>
            </li>
          </ul>
          <div className={styles.orderLinks}>
            <a href="https://getir.com/yemek/restoran/kale-burger-merkez-2000-evler-mah-merkez-nevsehir/" target="_blank" rel="noopener noreferrer" className={`${styles.orderBtn} ${styles.getirBtn}`}>
              <div className={styles.btnIconWrapper}>
                <span className={styles.btnIcon}>🛵</span>
              </div>
              <div className={styles.btnText}>
                <span className={styles.btnSub}>Hemen Sipariş Ver</span>
                <span className={styles.btnMain}>GetirYemek</span>
              </div>
            </a>
            
            <a href="https://www.yemeksepeti.com/restaurant/qy1u/kale-burger?srsltid=AfmBOoofEuNbEMlwzeIpyQgXaNBbZjQoCCM9vmMdFXiRRtK49VnFCZQe" target="_blank" rel="noopener noreferrer" className={`${styles.orderBtn} ${styles.yemeksepetiBtn}`}>
              <div className={styles.btnIconWrapper}>
                <span className={styles.btnIcon}>🍔</span>
              </div>
              <div className={styles.btnText}>
                <span className={styles.btnSub}>Hemen Sipariş Ver</span>
                <span className={styles.btnMain}>Yemeksepeti</span>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.349940798363!2d34.74020997579!3d38.57176186641885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6a6fa58dfd27%3A0xc6cb52572242defa!2sKALE%20BURGER!5e0!3m2!1str!2str!4v1711843183570!5m2!1str!2str"
            width="300"
            height="180"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          />
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2026 <span className={styles.highlight}>info@tugcore.com.tr</span>. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}
