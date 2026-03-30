export interface ProductVariant {
  weight: string;
  price: number;
}

export interface Recommendation {
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  badges?: string[];
  variants: ProductVariant[];
  recommendations?: Recommendation[];
}

export interface CategoryData {
  slug: string;
  title: string;
  description: string;
  products: Product[];
}

export const menuData: Record<string, CategoryData> = {
  "et-burgerler": {
    slug: "et-burgerler",
    title: "Et Burgerler",
    description: "Özenle hazırlanmış %100 dana eti köftelerimizle eşsiz burger deneyimi.",
    products: [
      {
        id: "klasik-burger",
        name: "Klasik Burger",
        description: "Özel El Yapımı Köfte, Akdeniz Yeşillikleri, Domates Dilimleri, Kornişon Turşu, Özel Kale Sos, Patates Cipsi Ve Özel Sos İle Sunulur.",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        badges: ["⭐ Klasik"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 380.00 },
          { weight: "150g", price: 420.00 },
          { weight: "200g", price: 460.00 },
        ],
        recommendations: [{ name: "Buz Gibi Cola 🥤" }, { name: "Çıtır Soğan Halkası 🧅" }]
      },
      {
        id: "cheese-burger",
        name: "Cheese Burger",
        description: "Özel El Yapımı Köfte, Akdeniz Yeşillikleri, Cheddar Peyniri, Domates Dilimleri, Kornişon Turşu, Özel Kale Sos, Patates Cipsi Ve Özel Sos İle Sunulur.",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
        badges: ["🧀 Peynir Şelalesi"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 395.00 },
          { weight: "150g", price: 435.00 },
          { weight: "200g", price: 475.00 },
        ],
        recommendations: [{ name: "Ev Yapımı Ayran 🥛" }, { name: "Buzlu Çay 🧋" }]
      },
      {
        id: "hot-burger",
        name: "Hot Burger",
        description: "Özel El Yapımı Köfte, Cheddar Peyniri, Karamelize Soğan, Jalapeno, Acı Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1594212204780-60b5a1f6a152?auto=format&fit=crop&w=500&q=80",
        badges: ["🌶️ Acı", "🔥 Şefin Tavsiyesi"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 395.00 },
          { weight: "150g", price: 435.00 },
          { weight: "200g", price: 475.00 },
        ],
        recommendations: [{ name: "Ayran (Serinletir) 🧊" }, { name: "Baharatlı Patates 🍟" }]
      },
      {
        id: "barbekum-burger",
        name: "Barbeküm Burger",
        description: "Özel El Yapımı Köfte, Cheddar Peyniri, Karamelize Soğan, Barbekü Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=500&q=80",
        badges: ["😋 Enfes Barbekü"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 395.00 },
          { weight: "150g", price: 435.00 },
          { weight: "200g", price: 475.00 },
        ],
        recommendations: [{ name: "Kutu Fanta 🥤" }, { name: "Çıtır Tavuk 🍗" }]
      },
      {
        id: "sweet-chili-burger",
        name: "Sweet Chili Burger",
        description: "Sweet Chili Sos, Karamelize Soğan, Ev Yapımı Köfte Üzerine Chedddar Peyniri Eklenir Ve Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
        badges: ["🌶️ Tatlı & Acı"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 395.00 },
          { weight: "150g", price: 435.00 },
          { weight: "200g", price: 475.00 },
        ],
        recommendations: [{ name: "Soğuk Sprite 🍋" }, { name: "Cheddarlı Patates 🥔" }]
      }
    ]
  },
  "gurme-burgerler": {
    slug: "gurme-burgerler",
    title: "Gurme Burgerler",
    description: "Şefin özel dokunuşlarıyla hazırlanan gurme lezzetler.",
    products: [
      {
        id: "smoke-burger",
        name: "Smoke Burger",
        description: "Fümelenmiş Dana Kaburga Dilimleri, Cheddar Peyniri, Kıtır Soğan Ve Özel Kale Burger Sosu İle Lezzetin Doruğunda! Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=500&q=80",
        badges: ["⭐ Gurme", "🔥 Füme"],
        variants: [{ weight: "150g", price: 525.00 }],
        recommendations: [{ name: "Buz Gibi Cola 🥤" }]
      },
      {
        id: "crispy-burger",
        name: "Crispy Burger",
        description: "Özel Kale Burger Sos, Karamelize Soğan, Füme Kaburga, Ev Yapımı Köfte, Çubuk Turşu, Kibrit Patates Ve Kaşar Peyniri Eklenir Ve Yanında Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80",
        badges: ["🍟 Kibrit Patatesli"],
        variants: [{ weight: "150g", price: 525.00 }],
        recommendations: [{ name: "Soğuk Çay 🧋" }]
      },
      {
        id: "jack-burger",
        name: "Jack Burger",
        description: "Özel Kale Burger Sos, Karamelize Soğan Ve Mantar, Füme Kaburga Dilimi, Jalapeno Biberi Ve Cheddar Peyniri Eklenir Yanında Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
        badges: ["🍄 Mantarlı"],
        variants: [{ weight: "150g", price: 525.00 }],
        recommendations: [{ name: "Ayran 🥛" }]
      }
    ]
  },
  "tavuk-burgerler": {
    slug: "tavuk-burgerler",
    title: "Tavuk Burgerler",
    description: "Dışı çıtır çıtır, içi yumuşacık tavuk burger seçeneklerimiz.",
    products: [
      {
        id: "klasik-tavuk-burger",
        name: "Klasik Tavuk Burger",
        description: "Çıtır Kaplamalı Tavuk Bonfile, Akdeniz Yeşillikleri, Domates, Kornişon Turşu, Özel Kale Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&w=500&q=80",
        badges: ["🍗 Çıtır Tavuk"],
        variants: [
          { weight: "120g", price: 325.00 },
          { weight: "210g", price: 355.00 }
        ],
        recommendations: [{ name: "Limonata 🍋" }, { name: "Ketçap & Mayonez 🍅" }]
      },
      {
        id: "cheese-tavuk-burger",
        name: "Cheese Tavuk Burger",
        description: "Çıtır Kaplamalı Tavuk Bonfile, Cheddar Peyniri, Akdeniz Yeşillikleri, Domates, Kornişon Turşu, Özel Kale Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=500&q=80",
        variants: [
          { weight: "120g", price: 340.00 },
          { weight: "210g", price: 370.00 }
        ],
        recommendations: [{ name: "Ayran 🧊" }]
      },
      {
        id: "hot-tavuk-burger",
        name: "Hot Tavuk Burger",
        description: "Çıtır Kaplamalı Tavuk Bonfile, Cheddar Peyniri, Karamelize Soğan, Jalapeno, Acı Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        badges: ["🌶️ Acı"],
        variants: [
          { weight: "120g", price: 340.00 },
          { weight: "210g", price: 370.00 }
        ],
        recommendations: [{ name: "Buz gibi Kola 🥤" }]
      },
      {
        id: "barbekum-tavuk-burger",
        name: "Barbeküm Tavuk Burger",
        description: "Çıtır Kaplamalı Tavuk Bonfile, Cheddar Peyniri, Karamelize Soğan, Barbekü Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1594212204780-60b5a1f6a152?auto=format&fit=crop&w=500&q=80",
        variants: [
          { weight: "120g", price: 340.00 },
          { weight: "210g", price: 370.00 }
        ],
        recommendations: [{ name: "Soğan Halkası 🧅" }]
      },
      {
        id: "izgara-tavuk-burger",
        name: "Izgara Tavuk Burger",
        description: "Marine Edilmiş Izgara Tavuk, Akdeniz Yeşillikleri, Domates, Soğan Turşusu, Özel Kale Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=80",
        badges: ["🔥 Izgara Ateşi"],
        variants: [
          { weight: "120g", price: 345.00 },
          { weight: "210g", price: 365.00 }
        ],
        recommendations: [{ name: "Ayran 🥛" }]
      },
      {
        id: "mantarli-tavuk-burger",
        name: "Mantarlı Tavuk Burger",
        description: "Özel Kale Burger Sos, Çıtır Kaplamalı Tavuk Bonfile, Mantar Sos, Cheddar Peyniri Eklenir Ve Yanında Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80",
        variants: [
          { weight: "120g", price: 340.00 },
          { weight: "210g", price: 370.00 }
        ],
        recommendations: [{ name: "Şişe Kola 🥤" }]
      },
      {
        id: "sweet-chili-tavuk",
        name: "Sweet Chili Tavuk",
        description: "Sweet Chili Sos, Karamelize Soğan, Çıtır Kaplamalı Tavuk Bonfile, Cheddar Peyniri Eklenir Ve Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=500&q=80",
        badges: ["🌶️ Tatlı & Acı"],
        variants: [
          { weight: "120g", price: 340.00 },
          { weight: "210g", price: 370.00 }
        ],
        recommendations: [{ name: "Sprite 🍋" }]
      },
      {
        id: "ranc-chicken",
        name: "Ranc Chicken",
        description: "Ranc Sos, Akdeniz Yeşillikleri, Domates, Turşu, Cheddar Peyniri Eklenir Ve Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
        variants: [
          { weight: "120g", price: 340.00 },
          { weight: "210g", price: 370.00 }
        ],
        recommendations: [{ name: "Elma Dilim Patates 🥔" }]
      },
      {
        id: "purple-chicken",
        name: "Purple Chicken",
        description: "Çıtır Kaplamalı Tavuk, Mor Lahana Salatası, Turşu Ve Cheddar Peyniri İle Renkli Lezzet",
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",
        badges: ["💜 Renkli Menü"],
        variants: [{ weight: "120g", price: 340.00 }],
        recommendations: [{ name: "Ayran 🧊" }]
      },
      {
        id: "crispy-chicken",
        name: "Crispy Chicken",
        description: "Çıtır Patates, Çıtır Kaplamalı Tavuk Bonfile, Karamelize Soğan, Turşu Ve Cheddar Peyniri İle Lezzetin Zirvesi!",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
        badges: ["🔥 Çok Çıtır"],
        variants: [{ weight: "120g", price: 340.00 }],
        recommendations: [{ name: "Buzlu Çay 🧋" }]
      }
    ]
  },
  "special-burgerler": {
    slug: "special-burgerler",
    title: "Special Burgerler",
    description: "Kale Burger'in en özel ve iddialı burger seçenekleri.",
    products: [
      {
        id: "kale-burger",
        name: "Kale Burger",
        description: "Özel El Yapımı Köfte, Üzerine Marine Edilmiş Bonfile Parçaları, Kıtır Soğan, Kornişon Turşu, Cheddar Peyniri, Özel Kale Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
        badges: ["👑 İmza Lezzet"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 450.00 },
          { weight: "150g", price: 490.00 },
          { weight: "200g", price: 530.00 }
        ],
        recommendations: [{ name: "Soguk Cola 🥤" }, { name: "Soğan Halkası 🧅" }]
      },
      {
        id: "osmanli-burger",
        name: "Osmanlı Burger",
        description: "Özel El Yapımı Köfte, Pastırma Dilimleri, Kaşar Peyniri, Karamelize Soğan, Özel Kale Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=500&q=80",
        badges: ["🍖 Pastırmalı"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 435.00 },
          { weight: "150g", price: 475.00 },
          { weight: "200g", price: 515.00 }
        ],
        recommendations: [{ name: "Geleneksel Ayran 🥛" }]
      },
      {
        id: "koz-burger",
        name: "Köz Burger",
        description: "Özel El Yapımı Köfte, Közlenmiş Soğan, Közlenmiş Kapya Biber, Patlıcan, Kaşar Peyniri, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1594212204780-60b5a1f6a152?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 395.00 },
          { weight: "150g", price: 435.00 },
          { weight: "200g", price: 475.00 }
        ],
        recommendations: [{ name: "Şişe Kola 🥤" }]
      },
      {
        id: "mantar-burger",
        name: "Mantar Burger",
        description: "Özel El Yapımı Köfte, Kremalı Demi-Glace Soslu Mantar, Özel Kale Sos, Kaşar Peyniri, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
        badges: ["🍄 Kremalı"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 395.00 },
          { weight: "150g", price: 435.00 },
          { weight: "200g", price: 475.00 }
        ],
        recommendations: [{ name: "Ayran 🧊" }]
      },
      {
        id: "dana-bacon-burger",
        name: "Dana Bacon Burger",
        description: "Özel El Yapımı Köfte, Üzerinde Füme Dana Kaburga Dilimleri, Cheddar Peyniri, Özel Kale Sos, Kıtır Soğan, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=500&q=80",
        badges: ["🥓 Bacon"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [
          { weight: "100g", price: 450.00 },
          { weight: "150g", price: 490.00 },
          { weight: "200g", price: 530.00 }
        ],
        recommendations: [{ name: "Ice Tea 🧋" }]
      },
      {
        id: "kalkan-burger",
        name: "Kalkan Burger",
        description: "Özel El Yapımı Köfte, İçinde Dolgulu Cheddar Peyniri, Kıtır Soğan, Özel Kale Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80",
        badges: ["🧀 Peynir Dolgulu"],
        variants: [{ weight: "200g", price: 485.00 }],
        recommendations: [{ name: "Kola 🥤" }]
      },
      {
        id: "kat-kat-burger",
        name: "Kat Kat Burger",
        description: "Özel El Yapımı Çift Kat Köfte, Çift Kat Cheddar Peyniri, Karamelize Soğan, Domates, Özel Kale Sos, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        badges: ["🍔 Double"],
        variants: [{ weight: "200g", price: 485.00 }],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }]
      },
      {
        id: "triple-burger",
        name: "Triple Burger",
        description: "Triple Köfte, Triple Cheddar Peyniri, Özel Kale Sos, Karamelize Soğan, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=500&q=80",
        badges: ["🍔 Triple", "💪 Çok Doyurucu"],
        variants: [{ weight: "300g", price: 550.00 }],
        recommendations: [{ name: "Litre Kola 🥤" }, { name: "Büyük Ayran 🥛" }]
      },
      {
        id: "lokum-burger",
        name: "Lokum Burger",
        description: "Özel Soslar Ve Baharatlarla Marine Edilerek Hazırlanmış Dana Bonfile, Özel Kale Sos, Cheddar Peyniri, Kıtır Soğan, Karamelize Soğan, Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
        badges: ["🥩 Lokum Bonfile"],
        variants: [{ weight: "150g", price: 525.00 }],
        recommendations: [{ name: "Ayran 🧊" }]
      }
    ]
  },
  "icecekler": {
    slug: "icecekler",
    title: "İçecekler",
    description: "Yemeğinizin yanına enfes serinletici içecekler.",
    products: [
      {
        id: "kutu-icecekler",
        name: "Kutu İçecekler",
        description: "Coca Cola, Coca Cola Zero, Pepsi, Pepsi Max, Fanta, Yedigün, Sevenup, Sprite Ice Tea; Şeftali, Limon, Mango, Karpuz, Fuse Tea; Şeftali, Mango, Limon, Karpuz, Kavun Çilek",
        imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        variants: [{ weight: "1 adet", price: 65.00 }],
        recommendations: [{ name: "Soğuk İçiniz ❄️" }]
      },
      {
        id: "sise-icecekler",
        name: "Şişe İçecekler",
        description: "Coca Cola, Coca Cola Zero, Fanta, Sprite",
        imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        variants: [{ weight: "1 adet", price: 55.00 }],
        recommendations: [{ name: "Cam Şişede 🥤" }]
      },
      {
        id: "litrelik-icecekler",
        name: "Litrelik İçecekler",
        description: "Coca Cola, Coca Cola Zero, Pepsi, Pepsi Max, Sprite, Fanta, Yedigün, Sevenup",
        imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        badges: ["👨‍👩‍👧‍👦 Aile Boyu"],
        variants: [{ weight: "1 adet", price: 95.00 }],
        recommendations: [{ name: "Bol Bol Paylaşın 🧊" }]
      },
      {
        id: "ayran",
        name: "Ayran",
        description: "30 Cl",
        imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=500&q=80",
        variants: [{ weight: "1 adet", price: 45.00 }],
        recommendations: [{ name: "Geleneksel Lezzet 🥛" }]
      },
      {
        id: "su",
        name: "Su",
        description: "0.5L",
        imageUrl: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "1 adet", price: 15.00 }]
      },
      {
        id: "turk-kahvesi",
        name: "Türk Kahvesi",
        description: "Geleneksel Cezvede, İnce Çekilmiş Kahveyle Hazırlanan, Yoğun Aromalı Ve Bol Köpüklü Bir Lezzet.",
        imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80",
        badges: ["☕ Bol Köpüklü"],
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "1 adet", price: 40.00 }]
      },
      {
        id: "cay",
        name: "Çay",
        description: "Demlikte Özenle Demlenmiş, Sıcak Ve Taze Bir Lezzet.",
        imageUrl: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "1 adet", price: 10.00 }]
      },
      {
        id: "soda",
        name: "Soda",
        description: "Beypazarı; Sade, Limon, Mango Ananas, Frenk Üzümü, Fesleğen Nane, Karpuz Çilek, Elma",
        imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        variants: [{ weight: "1 adet", price: 45.00 }],
        recommendations: [{ name: "Hazım İçin Birebir 🧊" }]
      }
    ]
  },
  "salatalar": {
    slug: "salatalar",
    title: "Salatalar",
    description: "Taptaze Akdeniz yeşillikleri ve özel soslarla hazırlanan salatalar.",
    products: [
      {
        id: "susamli-citir-tavuk-salata",
        name: "Susamlı Çıtır Tavuk Salata",
        description: "Akdeniz Yeşillikleri, Domates, Salatalık, Salata Sosu İle Tereyağında Kavrulmuş Ve Susamla Kaplanmış Çıtır Tavuk Dilimleri İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Sıkma Limonata 🍋" }, { name: "Maden Suyu 🧊" }],
        variants: [{ weight: "1 adet", price: 250.00 }]
      },
      {
        id: "bonfile-salata",
        name: "Bonfile Salata",
        description: "Akdeniz Yeşillikleri, Domates, Salata Sosu, Mevsim Meyveleri Ve Marine Edilmiş Izgara Bonfile Dilimleri İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80",
        badges: ["🥩 Premium"],
        recommendations: [{ name: "Sıkma Limonata 🍋" }, { name: "Maden Suyu 🧊" }],
        variants: [{ weight: "1 adet", price: 350.00 }]
      },
      {
        id: "beyaz-peynirli-akdeniz-salata",
        name: "Beyaz Peynirli Akdeniz Salata",
        description: "Akdeniz Yeşillikleri, Salatalık, Havuç, Salata Sosu Ve Mevsim Meyveleri İle Birlikte Beyaz Peynir İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Sıkma Limonata 🍋" }, { name: "Maden Suyu 🧊" }],
        variants: [{ weight: "1 adet", price: 270.00 }]
      }
    ]
  },
  "burritolar": {
    slug: "burritolar",
    title: "Burritolar",
    description: "Özel soslarla hazırlanan nefis Meksika lezzetleri.",
    products: [
      {
        id: "tavuklu-burrito",
        name: "Tavuklu Burrito",
        description: "Tavuk Bonfile, Kapya Biber, Köy Biberi Ve Mantar Özenle Seçilmiş Baharatlarla Sotelenir Ve Tortilla Lavaşina Özel Kale Burrito Sos Sürülüp Sarılır Ve Yanında Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 320.00 }]
      },
      {
        id: "cheddarli-tavuk-burrito",
        name: "Cheddarlı Tavuk Burrito",
        description: "Tavuk Bonfile, Kapya Biber, Köy Biberi, Mantar Özel Baharatlarla Kavrulur Ve Torilla Ekmeğine Özel Kale Burrito Sos Ve Cheddar Peyniri Eklenip Sarılır Yanında Patates Cips İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
        badges: ["🧀 Cheddarlı"],
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 350.00 }]
      },
      {
        id: "citir-tavuklu-burrito",
        name: "Çıtır Tavuklu Burrito",
        description: "Çıtır Kaplamalı Tavuk Bonfile, Akdeniz Yeşillikleri, Domates, Turşu, Özel Kale Burrito Sos Tortilla Lavaşina Sarılır Ve Yanında Patates Kızartması İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 320.00 }]
      },
      {
        id: "cheddarli-citir-tavuk-burrito",
        name: "Cheddarlı Çıtır Tavuk Burrito",
        description: "Çıtır Kaplamalı Tavuk Bonfile, Akdeniz Yeşillikleri, Domates, Turşu Eklenir Tortilla Lavaşina Özel Kale Burrito Sos Sürülüp Ve Cheddar Peyniri Eklenip Sarılır Yanında Patates Cips İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=80",
        badges: ["🧀 Cheddarlı", "🔥 Çıtır"],
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 350.00 }]
      }
    ]
  },
  "tatlilar": {
    slug: "tatlilar",
    title: "Tatlılar",
    description: "Yemeğin üstüne çok yakışacak günlük tatlılarımız.",
    products: [
      {
        id: "churros",
        name: "Churros",
        description: "Esmer Şeker Ve Tarçınla Kaplanmış Churros Çubukları, 3 Adet Çikolata Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=500&q=80",
        badges: ["Tükendi"],
        recommendations: [{ name: "Demleme Çay ☕" }, { name: "Türk Kahvesi ☕" }],
        variants: [{ weight: "3 adet", price: 0 }]
      },
      {
        id: "oreolu-magnolia",
        name: "Oreolu Magnolia",
        description: "Oreolu Magnolia; El Yapımı Magnolia Kreması Ve Oreo Parçaları İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Demleme Çay ☕" }, { name: "Türk Kahvesi ☕" }],
        variants: [{ weight: "1 adet", price: 150.00 }]
      },
      {
        id: "cilekli-magnolia",
        name: "Çilekli Magnolia",
        description: "Çilekli Magnolia; El Yapımı Magnolia Kreması, Bisküvi Parçaları Ve Çilek İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80",
        badges: ["Tükendi"],
        recommendations: [{ name: "Demleme Çay ☕" }, { name: "Türk Kahvesi ☕" }],
        variants: [{ weight: "1 adet", price: 0 }]
      },
      {
        id: "firin-sutlac",
        name: "Fırın Sütlaç",
        description: "Günlük Taze Sütlaç",
        imageUrl: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Demleme Çay ☕" }, { name: "Türk Kahvesi ☕" }],
        variants: [{ weight: "150g", price: 100.00 }]
      },
      {
        id: "incirli-muhallebi",
        name: "İncirli Muhallebi",
        description: "Günlük Taze Yapılır",
        imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Demleme Çay ☕" }, { name: "Türk Kahvesi ☕" }],
        variants: [{ weight: "150g", price: 150.00 }]
      },
      {
        id: "kavanoz-tiramisu",
        name: "Kavanoz Tiramisu",
        description: "Günlük Taze Yapılır",
        imageUrl: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Demleme Çay ☕" }, { name: "Türk Kahvesi ☕" }],
        variants: [{ weight: "150g", price: 150.00 }]
      }
    ]
  },
  "extralar": {
    slug: "extralar",
    title: "Extralar",
    description: "Burgerinize ekstra lezzet katmak için harika eklentiler.",
    products: [
      { id: "cheddar-peyniri", name: "Cheddar Peyniri", description: "Cheddar Peyniri", imageUrl: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 15.00 }] },
      { id: "kasar-peyniri", name: "Kaşar Peyniri", description: "Kaşar Peyniri", imageUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 15.00 }] },
      { id: "karamelize-mantar", name: "Karamelize Mantar", description: "Karamelize Mantar", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 10.00 }] },
      { id: "karamelize-sogan", name: "Karamelize Soğan", description: "Karamelize Soğan", imageUrl: "https://images.unsplash.com/photo-1518013431119-2ce69829f9fb?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 10.00 }] },
      { id: "kitir-sogan", name: "Kıtır Soğan", description: "Kıtır Soğan", imageUrl: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 10.00 }] },
      { id: "jelapone", name: "Jelapone", description: "Jelapone", imageUrl: "https://images.unsplash.com/photo-1506802913710-1dc071f1af34?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 3.00 }] },
      { id: "salatalik-tursusu", name: "Salatalık Turşusu", description: "Salatalık Turşusu", imageUrl: "https://images.unsplash.com/photo-1615486171448-4fdcf526fbdf?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 3.00 }] },
      { id: "pastirma", name: "Pastırma", description: "Pastırma", imageUrl: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 30.00 }] },
      { id: "bonfile-dilimi", name: "Bonfile Dilimi", description: "Bonfile Dilimi", imageUrl: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 40.00 }] },
      { id: "fume-et-dilimi", name: "Füme Et Dilimi", description: "Füme Et Dilimi", imageUrl: "https://images.unsplash.com/photo-1593001874117-c99c800e3ee7?auto=format&fit=crop&w=500&q=80", variants: [{ weight: "1 adet", price: 40.00 }] }
    ]
  },
  "atistirmaliklar": {
    slug: "atistirmaliklar",
    title: "Atıştırmalıklar",
    description: "Sıcacık ve çıtır çıtır atıştırmalık sepetleri.",
    products: [
      {
        id: "cheddar-soslu-kasik-patates",
        name: "(Yeni) Cheddar Soslu Kaşık Patates",
        description: "Mccain Kaşık Patates(350Gr), Cheddar Sos",
        imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80",
        badges: ["✨ Yeni"],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "350gr", price: 220.00 }]
      },
      {
        id: "parmesanli-kasik-patates",
        name: "(Yeni) Parmesanlı Kaşık Patates",
        description: "Mccain Kaşık Patates(350Gr), Rendelenmiş Parmesan",
        imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80",
        badges: ["✨ Yeni"],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "350gr", price: 240.00 }]
      },
      {
        id: "kiymali-cheddar-soslu-kasik-patates",
        name: "(Yeni) Kıymalı Cheddar Soslu Kaşık Patates",
        description: "Mccain Kaşık Patates(350Gr), Soslu Kıyma, Cheddar Sos, Jalapeño Turşusu",
        imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80",
        badges: ["✨ Yeni"],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "350gr", price: 320.00 }]
      },
      {
        id: "deniz-tuzlu-kasik-patates",
        name: "(Yeni) Deniz Tuzlu Kaşık Patates",
        description: "Mccain Kaşık Patates (350Gr), Deniz Tuzu",
        imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80",
        badges: ["✨ Yeni"],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "350gr", price: 180.00 }]
      },
      {
        id: "sogan-halkasi",
        name: "Soğan Halkası",
        description: "6 Adet Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "6 adet", price: 60.00 }]
      },
      {
        id: "patates-kroket",
        name: "Patates Kroket",
        description: "6 Adet Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "6 adet", price: 60.00 }]
      },
      {
        id: "tavuk-toplari",
        name: "Tavuk Topları",
        description: "6,10 Adet Şeklinde Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [
          { weight: "6 adet", price: 80.00 },
          { weight: "10 adet", price: 120.00 }
        ]
      },
      {
        id: "patates-cips",
        name: "Patates Cips",
        description: "Çıtır Lezzet, Doğal Patateslerden Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "1 porsiyon", price: 110.00 }]
      },
      {
        id: "citir-tavuk-dilimleri",
        name: "Çıtır Tavuk Dilimleri",
        description: "Patates Cips Ve Özel Sos İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "1 porsiyon", price: 250.00 }]
      },
      {
        id: "atistirmalik-sepeti",
        name: "Atıştırmalık Sepeti",
        description: "Soğan Halkası, Patates Kroket, Tavuk Topları, Patates Cipsi Ve Çıtır Tavuk İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80",
        badges: ["🔥 Karışık Lezzet"],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "1 adet", price: 300.00 }]
      },
      {
        id: "mini-atistirmalik",
        name: "Mini Atıştırmalık",
        description: "İkişer Adet Soğan Halkası, Patates Kroket Ve Tavuk Topu İle Servis Edilir.",
        imageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "6 adet", price: 85.00 }]
      }
    ]
  },
  "soslu-tavuk-yemekleri": {
    slug: "soslu-tavuk-yemekleri",
    title: "Soslu Tavuk Yemekleri",
    description: "Özel soslarla bezenmiş, damak çatlatan tavuk lezzetleri.",
    products: [
      {
        id: "dag-kekikli-tavuk",
        name: "Dağ Kekikli Tavuk",
        description: "Dağ Kekiği İle Marine Edilmiş Tavuk Kremalı Mantar Sos İle Sotelenerek Taze Salata Ve Makarna İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150gr", price: 290.00 }]
      },
      {
        id: "efsane-kori",
        name: "Efsane Köri",
        description: "Mantar İle Sotelenmiş Tavuk Köri Ve Krema İle Pişirilerek Taze Salata Ve Makarna İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80",
        badges: ["🔥 Çok Satan"],
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150gr", price: 290.00 }]
      },
      {
        id: "siriracha-soslu-tavuk",
        name: "Siriracha Soslu Tavuk",
        description: "Açık Ateşte Grilled Tavuk, Siriracha Sosu İle Tatlanmış Makarna Ve Taze Salata İle Lezzetin Patlaması",
        imageUrl: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=500&q=80",
        badges: ["🌶️ Acı"],
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 290.00 }]
      },
      {
        id: "kremali-mantar-soslu-tavuk",
        name: "Kremalı Mantar Soslu Tavuk",
        description: "Tavuk Özel Soslu Mantar Sos İle Pişirilerek Yanında Taze Salata Ve Makarna İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 290.00 }]
      },
      {
        id: "cheddar-soslu-tavuk",
        name: "Cheddar Soslu Tavuk",
        description: "Cheddar Soslu Tavuk, Makarna Ve Taze Salata İle Lezzetin Doruğu!",
        imageUrl: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 290.00 }]
      },
      {
        id: "tavuk-cokertme",
        name: "Tavuk Çökertme",
        description: "İzmir'in Lezzet Şöleni: Kibrit Patates, Özel Yoğurt, Ve Lezzetli Tavukla Çökertme",
        imageUrl: "https://images.unsplash.com/photo-1626082929543-eed885cfa1fb?auto=format&fit=crop&w=500&q=80",
        badges: ["⭐ Yöresel"],
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 290.00 }]
      },
      {
        id: "begendili-tavuk",
        name: "Beğendili Tavuk",
        description: "Beğendili Sos Üzeri Tavuk Bonfilesi Beraberinde Taze Salata Ve Makarna İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 290.00 }]
      },
      {
        id: "soyazade",
        name: "Soyazade",
        description: "Uzakdoğu Lezzeti Soya Soslu Tavuk, Makarna Ve Taze Salata İle Buluşuyor!",
        imageUrl: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150gr", price: 290.00 }]
      },
      {
        id: "barbeku-soslu-tavuk",
        name: "Barbekü Soslu Tavuk",
        description: "Mix Biberler Ve Mantar İle Sotelenmiş Tavuk Barbekü Sosu İle Lezzetlendirip Yanında Makarna Ve Taze Salata İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1598515082498-f2b7a66b2a47?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150gr", price: 290.00 }]
      },
      {
        id: "sefin-tavasi",
        name: "Şefin Tavası",
        description: "Şefin Özel Sosu İle Marine Edilen Tavuk Parçaları Biber Mantar Ve Arpacık Soğan İle Sotelenir Beraberinde Makarna Ve Salata İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80",
        badges: ["👨‍🍳 Şefin Spesiyali"],
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 400.00 }]
      }
    ]
  },
  "kofteler": {
    slug: "kofteler",
    title: "Köfteler",
    description: "Özel baharatlarla hazırlanan ev yapımı enfes köfteler.",
    products: [
      {
        id: "izgara-kofte",
        name: "Izgara Köfte",
        description: "Özel Baharatlarla Hazırlanmış Ev Yapımı Köfte Yanında Makarna Ve Taze Salata İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 350.00 }]
      },
      {
        id: "begendili-kofte",
        name: "Beğendili Köfte",
        description: "Özel Beğendi Sosu Üzerine Ev Yapımı Köfte Yanında Taze Salata Ve Makarna İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Ayran 🧊" }, { name: "Buz Gibi Kola 🥤" }],
        variants: [{ weight: "150g", price: 400.00 }]
      }
    ]
  },
  "makarnalar": {
    slug: "makarnalar",
    title: "Makarnalar",
    description: "İtalyan restoranlarını aratmayacak lezzette makarnalarımız.",
    products: [
      {
        id: "penne-arabiatta",
        name: "Penne Arabiatta",
        description: "Acılı Arabiatta Soslu Makarna",
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",
        badges: ["🌶️ Acı"],
        recommendations: [{ name: "Buzlu Çay 🧋" }],
        variants: [{ weight: "150g", price: 200.00 }]
      },
      {
        id: "kori-soslu-penne",
        name: "Köri Soslu Penne",
        description: "Tavuk, Mantar Ve Özel Köri Sosu İle Kremalı Penne Makarna...Lezzetin İtalyan Ruhu!",
        imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Buzlu Çay 🧋" }],
        variants: [{ weight: "150g", price: 250.00 }]
      },
      {
        id: "kremali-mantarli-penne",
        name: "Kremalı Mantarlı Penne",
        description: "Kremalı Mantar Sosu, Penne Makarna, Tavuk Bonfile İle Lezzetin Zirvesi!",
        imageUrl: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Buzlu Çay 🧋" }],
        variants: [{ weight: "150g", price: 250.00 }]
      },
      {
        id: "pesto-soslu-penne",
        name: "Pesto Soslu Penne",
        description: "Tavuk, Taze Fesleğen, Permasan Peyniri Ve Cevizli Pesto Sosu İle Lezzetin Yeşili",
        imageUrl: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Buzlu Çay 🧋" }],
        variants: [{ weight: "150g", price: 250.00 }]
      }
    ]
  },
  "ortaya-citirlar": {
    slug: "ortaya-citirlar",
    title: "Ortaya Çıtırlar",
    description: "Arkadaşlarla paylaşmalık dev çıtır sepetleri.",
    products: [
      {
        id: "2li-kanat",
        name: "2'Li Kanat",
        description: "2 Adet Kanat Ve Sweet Chili Sos İle",
        imageUrl: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "150g", price: 100.00 }]
      },
      {
        id: "3lu-kanat",
        name: "3'Lü Kanat",
        description: "3 Adet Kanat Ve Sweet Chili Sos İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "225gr", price: 140.00 }]
      },
      {
        id: "4lu-kanat",
        name: "4'Lü Kanat",
        description: "4 Adet Kanat Ve Sweet Chili Sos İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1608039755401-742077f0f5b6?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "300gr", price: 180.00 }]
      },
      {
        id: "6li-kanat",
        name: "6'Kanat",
        description: "6 Adet Kanat Ve Sweet Chili Sos İle Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1608039755401-742077f0f5b6?auto=format&fit=crop&w=500&q=80",
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "450gr", price: 260.00 }]
      },
      {
        id: "buffalo-wings",
        name: "Buffalo Wings (5 Adet)",
        description: "5 Adet Çıtır Kanat Buffalo Sosu İle Harmanlanıp Servis Edilir",
        imageUrl: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80",
        badges: ["🔥 Acılı"],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "375gr", price: 250.00 }]
      },
      {
        id: "iki-kisilik-citir-menu",
        name: "İki Kişilik Çıtır Menü",
        description: "(4 Adet Kanat, 4 Adet Çıtır Tavuk, 4 Adet Tavuk Topu, 4 Adet Soğan Halkası, Patates Kızartması) + 1L İçecek",
        imageUrl: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=80",
        badges: ["👫 2 Kişilik"],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "600gr", price: 400.00 }]
      },
      {
        id: "dort-kisilik-citir-menu",
        name: "Dört Kişilik Çıtır Menü",
        description: "(8 Adet Kanat, 8 Adet Çıtır Tavuk, 8 Adet Tavuk Topu, 8 Adet Soğan Halkası, Patates Kızartması) + 1L İçecek",
        imageUrl: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=500&q=80",
        badges: ["👨‍👩‍👧‍👦 4 Kişilik"],
        recommendations: [{ name: "Büyük Boy Kola 🥤" }, { name: "Limonata 🍋" }],
        variants: [{ weight: "1000gr", price: 600.00 }]
      }
    ]
  }
};
