'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import { Product } from '@/data/menuData';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  
  // Güvenlik amaçlı variant kontrolü
  const selectedVariant = product.variants[selectedVariantIdx] || product.variants[0];

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={product.imageUrl} 
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        {product.badges && product.badges.length > 0 && (
          <div className={styles.badges}>
            {product.badges.map((badge, idx) => (
              <span key={idx} className={styles.badge}>{badge}</span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        
        {product.variants.length > 1 && (
          <div className={styles.variantSelector}>
            {product.variants.map((variant, idx) => (
              <button 
                key={idx}
                className={`${styles.variantBtn} ${idx === selectedVariantIdx ? styles.variantBtnActive : ''}`}
                onClick={() => setSelectedVariantIdx(idx)}
              >
                {variant.weight}
              </button>
            ))}
          </div>
        )}

        {product.recommendations && product.recommendations.length > 0 && (
          <div className={styles.recommendations}>
            <h4 className={styles.recTitle}>Yanında Ne Gider?</h4>
            <div className={styles.recList}>
              {product.recommendations.map((rec, idx) => (
                <span key={idx} className={styles.recItem}>{rec.name}</span>
              ))}
            </div>
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>
              {selectedVariant ? selectedVariant.price.toFixed(2) : "0.00"}
            </span>
            <span className={styles.currency}>TL</span>
          </div>
          
          <button className={styles.addBtn} aria-label="Sepete Ekle" title="Sepete Ekle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
