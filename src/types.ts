export type MenuCategory = 'Appetizers' | 'Mains' | 'Desserts' | 'Cellar & Bar';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags?: string[];
  isSpecial?: boolean;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  tablePreference: 'Standard' | 'Window View' | 'Chef\'s Table' | 'Private Room';
  specialRequests?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'Atmosphere' | 'Plating' | 'Cellar';
}
