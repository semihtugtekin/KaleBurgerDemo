import CategoryCard from './CategoryCard';
import styles from './CategoryGrid.module.css';

const categories = [
  { id: 1, title: 'Et Burgerler', slug: 'et-burgerler', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Tavuk Burgerler', slug: 'tavuk-burgerler', img: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Special Burgerler', slug: 'special-burgerler', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Gurme Burgerler', slug: 'gurme-burgerler', img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Salatalar', slug: 'salatalar', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Tatlılar', slug: 'tatlilar', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Atıştırmalıklar', slug: 'atistirmaliklar', img: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'İçecekler', slug: 'icecekler', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80' },
  { id: 9, title: 'Extralar', slug: 'extralar', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80' },
  { id: 10, title: 'Burritolar', slug: 'burritolar', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80' },
  { id: 11, title: 'Makarnalar', slug: 'makarnalar', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80' },
  { id: 12, title: 'Ortaya Çıtırlar', slug: 'ortaya-citirlar', img: 'https://images.unsplash.com/photo-1630431341973-02e1b662ce3b?auto=format&fit=crop&w=800&q=80' },
  { id: 13, title: 'Soslu Tavuk Yemekleri', slug: 'soslu-tavuk-yemekleri', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80' },
  { id: 14, title: 'Köfteler', slug: 'kofteler', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80' },
];

export default function CategoryGrid() {
  return (
    <section className={styles.gridContainer}>
      {categories.map((category) => (
        <CategoryCard 
          key={category.id} 
          title={category.title} 
          slug={category.slug} 
          imageUrl={category.img} 
        />
      ))}
    </section>
  );
}
