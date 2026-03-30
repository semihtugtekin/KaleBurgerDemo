import Header from '@/components/Header';
import CategoryGrid from '@/components/CategoryGrid';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Merhaba, <span className={styles.highlight}>KaleBurger</span>'e Hoş Geldiniz
          </h1>
          <p className={styles.subtitle}>
            Siparişinizi oluşturmak için aşağıdaki kategorileri inceleyebilirsiniz. 
            Lezzet dolu bir menü sizi bekliyor!
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <CategoryGrid />
      </div>
      
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} KaleBurger. Tüm Hakları Saklıdır.</p>
        <p className={styles.footerCredit}>
          Created with <span className={styles.heart}>❤</span> for premium taste.
        </p>
      </footer>
    </main>
  );
}
