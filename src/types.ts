export type MenuItemCategory = 
  | 'all'
  | 'buns-bread'
  | 'cakes-pastries'
  | 'catering';

export interface MenuItem {
  id: string;
  name: string;
  dutchName?: string;
  category: MenuItemCategory;
  subCategory?: string;
  price: number;
  unit?: string;
  description: string;
  image: string;
  tags: string[];
  isPopular?: boolean;
  isDailySpecial?: boolean;
  freshOutTime?: string;
  dietary?: ('Vegetarian' | 'Nut-Free' | 'Dairy-Free' | 'Authentic Dutch')[];
  options?: string[];
}

export interface DailySpecial {
  id: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  title: string;
  dutchHighlight?: string;
  items: MenuItem[];
  discountText?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  content: string;
  favoriteItem?: string;
  verifiedCustomer: boolean;
  avatarUrl?: string;
}

export interface TakeoutCartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface CakeQuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  eventDate: string;
  cakeSize: string;
  flavor: string;
  filling: string;
  servings: number;
  notes: string;
}

export interface BusinessHour {
  day: string;
  open: string;
  close: string;
  isClosed?: boolean;
}
