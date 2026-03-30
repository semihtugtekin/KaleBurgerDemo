import { menuData } from '@/data/menuData';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(menuData).map((slug) => ({
    slug: slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const category = menuData[slug];

  if (!category) {
    return (
      <main className={styles.main}>
        <Header />
        <div className={styles.notFound}>
          <h1>404 - Kategori Bulunamadı</h1>
          <p>Aradığınız menü kategorisi yakında eklenecektir.</p>
          <Link href="/" className={styles.backBtn}>
            Menü Ana Sayfasına Dön
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Header />
      
      <div className={styles.hero}>
        <h1 className={styles.title}>{category.title}</h1>
        <p className={styles.description}>{category.description}</p>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
