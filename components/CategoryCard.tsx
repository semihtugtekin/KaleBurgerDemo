import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  title: string;
  slug: string;
  imageUrl: string;
}

export default function CategoryCard({ title, slug, imageUrl }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`} className={styles.cardWrapper}>
      <div className={`${styles.card} glass`}>
        <div className={styles.imageContainer}>
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image} 
          />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.arrowIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
