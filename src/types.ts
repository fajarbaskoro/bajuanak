export interface Product {
  id: string;
  name: string;
  category: 'bayi' | 'laki' | 'perempuan' | 'piyama';
  categoryLabel: string;
  tag: string;
  tagColor: string;
  stockStatus: string;
  materialFeature: string;
  materialIcon: string;
  ageRange: string;
  description: string;
  sizes: string[];
  price: number;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  initialsBg: string;
  initialsColor: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  image: string;
  alt: string;
}
