import { MenuItem, DailySpecial, Review, BusinessHour } from '../types';

import heroArtisanImg from '../assets/images/hero_bakery_artisan_1785884232230.jpg';
import artisanBreadsImg from '../assets/images/artisan_bread_selection_1785884242575.jpg';
import dutchPastriesImg from '../assets/images/dutch_pastries_donuts_1785884256553.jpg';
import interiorImg from '../assets/images/coaldale_interior_actual_1785891641110.jpg';
import breakfastPastriesImg from '../assets/images/breakfast_pastries_1785894792934.jpg';
import individualQuicheImg from '../assets/images/individual_4inch_quiche_1785894938942.jpg';
import turkeyAndGravyImg from '../assets/images/turkey_and_gravy_1785950983230.jpg';
import bakedHamImg from '../assets/images/oven_baked_glazed_ham_1785951096244.jpg';
import beefOnABunImg from '../assets/images/beef_on_a_bun_1785951239167.jpg';
import mashedPotatoesImg from '../assets/images/creamy_mashed_potatoes_1785951765093.jpg';
import focacciaPotatoImg from '../assets/images/focaccia_potato_bread_1785952003331.jpg';
import turkeyDressingImg from '../assets/images/turkey_dressing_casserole_1785952364759.jpg';
import dutchSausageRollImg from '../assets/images/dutch_sausage_roll_1785952788750.jpg';
import dutchMeatPieImg from '../assets/images/dutch_meat_pie_1785952800151.jpg';
import potatoSaladImg from '../assets/images/creamy_potato_salad_1785952808064.jpg';
import caesarSaladImg from '../assets/images/caesar_salad_1785952815256.jpg';
import marinatedVegSaladImg from '../assets/images/marinated_veg_salad_1785952823379.jpg';
import spinachSaladImg from '../assets/images/fresh_spinach_salad_1785952831631.jpg';
import greekSaladImg from '../assets/images/greek_salad_1785952840206.jpg';
import orientalCabbageSaladImg from '../assets/images/oriental_cabbage_salad_1785952849664.jpg';
import coleslawImg from '../assets/images/creamy_coleslaw_1785952859953.jpg';
import tossedSaladImg from '../assets/images/tossed_garden_salad_1785952868548.jpg';
import bakedBeansImg from '../assets/images/savory_baked_beans_1785952876715.jpg';
import greenBeansAlmandineImg from '../assets/images/green_beans_almandine_1785952885165.jpg';
import sweetCornImg from '../assets/images/sweet_kernel_corn_1785952895419.jpg';
import babyCarrotsImg from '../assets/images/steamed_baby_carrots_1785952905410.jpg';
import peasAndCarrotsImg from '../assets/images/peas_and_carrots_1785952913079.jpg';
import mixedVegImg from '../assets/images/steamed_mixed_vegetables_1785952921746.jpg';

import yellowStorefrontImg from '../assets/images/coaldale_yellow_storefront_1785964897960.jpg';

export const BAKERY_IMAGES = {
  hero: heroArtisanImg,
  storefront: yellowStorefrontImg,
  breads: artisanBreadsImg,
  pastries: dutchPastriesImg,
  interior: interiorImg,
};

export const BAKERY_INFO = {
  name: 'Coaldale Bakery',
  tagline: 'A Touch of Dutch',
  address: '1907 20th Ave, Coaldale, Alberta, T1M 1M9',
  phone: '(403) 345-3322',
  displayPhone: '(403) 345-3322',
  website: 'coaldalebakery.com',
  rating: 4.8,
  reviewCount: 492,
  takeoutAvailable: true,
  deliveryAvailable: false,
  googleMapsUrl: 'https://maps.google.com/?q=1907+20th+Ave,+Coaldale,+AB+T1M+1M9',
};

export const BUSINESS_HOURS: BusinessHour[] = [
  { day: 'Monday', open: 'Closed', close: 'Closed', isClosed: true },
  { day: 'Tuesday', open: '7:00 AM', close: '6:00 PM' },
  { day: 'Wednesday', open: '7:00 AM', close: '6:00 PM' },
  { day: 'Thursday', open: '7:00 AM', close: '6:00 PM' },
  { day: 'Friday', open: '7:00 AM', close: '6:00 PM' },
  { day: 'Saturday', open: '7:00 AM', close: '6:00 PM' },
  { day: 'Sunday', open: 'Closed', close: 'Closed', isClosed: true },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- SECTION 1: WHOLE GRAIN BREAD ---
  {
    id: 'wg-1',
    name: 'Nordic Rye',
    category: 'buns-bread',
    subCategory: 'Whole Grain Bread',
    price: 5.95,
    unit: 'loaf',
    description: 'Dense, heart-healthy Nordic rye loaf made with whole rye kernels and seeds.',
    image: artisanBreadsImg,
    tags: ['Whole Grain', 'Scandinavian Style'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'wg-2',
    name: 'Goodhearth Bread',
    category: 'buns-bread',
    subCategory: 'Whole Grain Bread',
    price: 5.75,
    unit: 'loaf',
    description: 'Wholesome multi-grain bread packed with cracked grains, seeds, and natural oat fiber.',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    tags: ['High Fiber', 'Customer Favorite'],
    isPopular: true,
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'wg-3',
    name: 'Austrian Grain Bread',
    category: 'buns-bread',
    subCategory: 'Whole Grain Bread',
    price: 5.95,
    unit: 'loaf',
    description: 'Traditional European whole grain loaf with a crusty exterior and nut-like crumb.',
    image: artisanBreadsImg,
    tags: ['European Style', 'Whole Grain'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'wg-4',
    name: 'Multi Grain Bread',
    category: 'buns-bread',
    subCategory: 'Whole Grain Bread',
    price: 5.50,
    unit: 'loaf',
    description: 'Daily scratch-baked loaf filled with flax, sunflower seeds, oats, and whole wheat flour.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Daily Favorite', 'Seed Blend'],
    dietary: ['Vegetarian', 'Nut-Free']
  },

  // --- SECTION 2: RYE BREAD ---
  {
    id: 'rye-1',
    name: 'Dutch Rye (Nederlands Roggebrood)',
    dutchName: 'Donker Roggebrood',
    category: 'buns-bread',
    subCategory: 'Rye Bread',
    price: 5.50,
    unit: 'loaf',
    description: 'Authentic dark Dutch rye loaf baked with caraway seeds and dark malt.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    tags: ['Authentic Dutch', 'Classic Recipe'],
    isPopular: true,
    dietary: ['Authentic Dutch', 'Vegetarian']
  },
  {
    id: 'rye-2',
    name: 'Light Rye Bread',
    category: 'buns-bread',
    subCategory: 'Rye Bread',
    price: 5.25,
    unit: 'loaf',
    description: 'Mild, soft rye bread with subtle caraway notes, perfect for daily sandwiches.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    tags: ['Sandwich Choice'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'rye-3',
    name: 'Heavy Rye Bread',
    category: 'buns-bread',
    subCategory: 'Rye Bread',
    price: 5.75,
    unit: 'loaf',
    description: 'Rich, dark, dense European heavy rye loaf fermented slowly for deep flavor.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    tags: ['Slow Fermented', 'Heavy Rye'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'rye-4',
    name: 'Pumpernickel Bread',
    category: 'buns-bread',
    subCategory: 'Rye Bread',
    price: 5.75,
    unit: 'loaf',
    description: 'Dark, slightly sweet sourdough rye bread baked slowly with dark malt flour.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    tags: ['Traditional'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'rye-5',
    name: 'Sourdough Rye',
    category: 'buns-bread',
    subCategory: 'Rye Bread',
    price: 6.25,
    unit: 'loaf',
    description: 'Tangy wild yeast sourdough starter blended with stone-ground rye flour.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
    tags: ['Wild Sourdough', 'Tangy Crust'],
    dietary: ['Vegetarian', 'Nut-Free']
  },

  // --- SECTION 3: BAGELS ---
  {
    id: 'bgl-1',
    name: 'White / Sesame Bagels',
    category: 'buns-bread',
    subCategory: 'Bagels',
    price: 1.75,
    unit: 'each',
    description: 'Traditional boiled and baked white bagel, topped with toasted sesame seeds.',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Boiled & Baked'],
    options: ['White', 'Sesame'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bgl-2',
    name: '60% Whole Wheat / Sesame Bagels',
    category: 'buns-bread',
    subCategory: 'Bagels',
    price: 1.75,
    unit: 'each',
    description: '60% whole wheat bagel with toasted sesame seeds and a chewy texture.',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=80',
    tags: ['60% Whole Wheat'],
    options: ['60% Whole Wheat', 'Sesame'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bgl-3',
    name: 'Cheese & Onion Bagels',
    category: 'buns-bread',
    subCategory: 'Bagels',
    price: 2.25,
    unit: 'each',
    description: 'Savory bagel baked with melted cheddar cheese and caramelized onion bits.',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=80',
    tags: ['Savory Cheese'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bgl-4',
    name: 'Multigrain Bagels',
    category: 'buns-bread',
    subCategory: 'Bagels',
    price: 1.95,
    unit: 'each',
    description: 'Nutritious bagel loaded with flax, sunflower seeds, oats, and sesame.',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&w=800&q=80',
    tags: ['Multi Seed'],
    dietary: ['Vegetarian']
  },

  // --- SECTION 4: MORE BREAD SELECTIONS ---
  {
    id: 'mbs-1',
    name: 'White Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 4.50,
    unit: 'loaf',
    description: 'Classic soft scratch-baked white loaf, a staple for toast and daily sandwiches.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Daily Staple'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'mbs-2',
    name: '60% Whole Wheat Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 4.75,
    unit: 'loaf',
    description: 'Balanced wheat loaf combining rich whole grain nutrition with a soft crumb.',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    tags: ['Best Seller'],
    isPopular: true,
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'mbs-3',
    name: '100% Whole Wheat Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 4.95,
    unit: 'loaf',
    description: '100% stone-ground whole wheat bread rich in fiber and hearty wheat flavor.',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    tags: ['100% Whole Grain'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'mbs-4',
    name: 'Cracked Wheat Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 4.95,
    unit: 'loaf',
    description: 'Baked with soaked toasted cracked wheat berries for a satisfying texture.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Cracked Berry'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'mbs-5',
    name: 'Flax Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 5.25,
    unit: 'loaf',
    description: 'Hearty loaf blended with whole brown and golden flaxseeds.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Omega-3 Flax'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'mbs-6',
    name: 'Focaccia Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 5.95,
    unit: 'loaf',
    description: 'Italian-style flat bread dimpled with olive oil, sea salt, and aromatic herbs.',
    image: 'https://images.unsplash.com/photo-1579697096985-41fe1430e5df?auto=format&fit=crop&w=800&q=80',
    tags: ['Herbs & Olive Oil'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'mbs-7',
    name: 'Raisin Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 5.50,
    unit: 'loaf',
    description: 'Sweet yeast loaf packed with plump dark raisins and a hint of cinnamon.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    tags: ['Sweet Cinnamon'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'mbs-8',
    name: 'Fruit Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 5.95,
    unit: 'loaf',
    description: 'Specialty fruit loaf filled with candied citrus peel, raisins, and dried fruits.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    tags: ['Candied Fruit'],
    dietary: ['Vegetarian']
  },
  {
    id: 'mbs-9',
    name: 'Sugar Bread (Suikerbrood)',
    dutchName: 'Fries Suikerbrood',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 6.25,
    unit: 'loaf',
    description: 'Famous Frisian sweet Dutch bread baked with sugar nibs and cinnamon syrup.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    tags: ['Authentic Dutch', 'Suikerbrood'],
    isPopular: true,
    dietary: ['Authentic Dutch', 'Vegetarian']
  },
  {
    id: 'mbs-10',
    name: 'Cheese Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 5.95,
    unit: 'loaf',
    description: 'Savory bread folded and topped with sharp melted Alberta cheddar cheese.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Melted Cheddar'],
    dietary: ['Vegetarian']
  },
  {
    id: 'mbs-11',
    name: 'Sourdough White Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 6.50,
    unit: 'loaf',
    description: 'Naturally fermented white sourdough bread with blistered crust and open crumb.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
    tags: ['Natural Ferment'],
    isPopular: true,
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'mbs-12',
    name: 'Garlic Bread',
    category: 'buns-bread',
    subCategory: 'More Bread Selections',
    price: 5.25,
    unit: 'loaf',
    description: 'Savory loaf infused with real garlic butter and chopped parsley.',
    image: 'https://images.unsplash.com/photo-1579697096985-41fe1430e5df?auto=format&fit=crop&w=800&q=80',
    tags: ['Garlic Butter'],
    dietary: ['Vegetarian']
  },

  // --- SECTION 5: BUNS (most available in white or 60%) ---
  {
    id: 'bun-1',
    name: 'Soft Dinner Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 5.50,
    unit: 'dozen',
    description: 'Soft, fluffy dinner rolls. Available in White or 60% Whole Wheat.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    options: ['White', '60% Whole Wheat'],
    tags: ['Dozen', 'Dinner Roll'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-2',
    name: 'Crusty Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 5.95,
    unit: 'dozen',
    description: 'European-style hard crust rolls with a light, pillowy center.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    options: ['White', '60% Whole Wheat'],
    tags: ['Dozen', 'Crusty'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-3',
    name: 'Kaiser Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 6.25,
    unit: 'dozen',
    description: 'Classic star-stamped sandwich kaiser rolls.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    options: ['White', '60% Whole Wheat'],
    tags: ['Dozen', 'Kaiser'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-4',
    name: 'Raisin Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 6.50,
    unit: 'dozen',
    description: 'Sweet breakfast rolls filled with plump dark raisins.',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    tags: ['Dozen', 'Sweet Raisin'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-5',
    name: 'Hoagie Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 4.95,
    unit: '6 pack',
    description: 'Long sub rolls perfect for deli meats, sausages, and hot hoagies.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    options: ['White', '60% Whole Wheat'],
    tags: ['6 Pack', 'Hoagie Sub'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-6',
    name: 'Hamburger Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 4.75,
    unit: '6 pack',
    description: 'Freshly baked burger buns available in White or 60% Whole Wheat.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    options: ['White', '60% Whole Wheat'],
    tags: ['6 Pack', 'BBQ Favorite'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-7',
    name: 'Hot Dog Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 4.75,
    unit: '6 pack',
    description: 'Classic soft hot dog buns baked fresh daily.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    options: ['White', '60% Whole Wheat'],
    tags: ['6 Pack', 'Hot Dog'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-8',
    name: 'Cheese Buns or Sticks',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 5.25,
    unit: '6 pack',
    description: 'Fluffy buns or long breadsticks baked with golden toasted cheddar cheese.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    options: ['Cheese Buns', 'Cheese Sticks'],
    tags: ['Toasted Cheddar'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-9',
    name: 'Pizza Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 3.25,
    unit: 'each',
    description: 'Individual savory bun topped with pizza sauce, Italian herbs, and cheese.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Savory Snack'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-10',
    name: 'Goodhearth Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 6.50,
    unit: 'dozen',
    description: 'Whole grain Goodhearth rolls packed with cracked seeds and fiber.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Dozen', 'Whole Grain'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-11',
    name: 'Butter Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 5.95,
    unit: 'dozen',
    description: 'Rich golden butter rolls baked side-by-side.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Dozen', 'Rich Butter'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-12',
    name: 'Vienna Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 5.95,
    unit: 'dozen',
    description: 'Light Austrian-style rolls with a delicate golden crust.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Dozen', 'Vienna Style'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-13',
    name: 'Parker House Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 5.95,
    unit: 'dozen',
    description: 'Classic folded butter rolls with a soft, sweet texture.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Dozen', 'Parker House'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-14',
    name: 'Salad Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 5.50,
    unit: 'dozen',
    description: 'Mini sandwich rolls ideal for slider sandwiches, egg salad, and ham.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Dozen', 'Slider Size'],
    dietary: ['Vegetarian']
  },
  {
    id: 'bun-15',
    name: 'Butter Pan Buns',
    category: 'buns-bread',
    subCategory: 'Buns (most available in white or 60%)',
    price: 5.95,
    unit: 'dozen',
    description: 'Pull-apart pan rolls baked golden brown with real butter.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Dozen', 'Butter Pan'],
    dietary: ['Vegetarian']
  },

  // --- SECTION 6: SPECIALTY CAKES ---
  {
    id: 'cake-1',
    name: 'White Buttercream Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 38.00,
    unit: '8" round',
    description: 'White cake with layers of white buttercream icing and custard, iced with white buttercream icing.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    tags: ['Buttercream', 'Custard Layer'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-2',
    name: 'Chocolate Buttercream Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 38.00,
    unit: '8" round',
    description: 'Chocolate cake with layers of chocolate buttercream icing and custard, iced with chocolate buttercream icing.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    tags: ['Chocolate', 'Buttercream'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-3',
    name: 'Chocolate Truffle Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 42.00,
    unit: '8" round',
    description: 'Chocolate cake layered with chocolate buttercream icing and custard iced with chocolate buttercream icing, topped with a layer of chocolate truffle and decorated with hazelnuts and chocolate buttercream icing.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    tags: ['Chocolate Truffle', 'Hazelnuts'],
    isPopular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-4',
    name: 'Chocolate Caramel Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 42.00,
    unit: '8" round',
    description: 'Chocolate cake layered with scrumptious caramel and chocolate buttercream iced in chocolate buttercream and decorated with chocolate caramel candies.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    tags: ['Scrumptious Caramel', 'Chocolate Candies'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-5',
    name: 'Lemon Buttercream Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 38.00,
    unit: '8" round',
    description: 'White Cake layered with white buttercream icing and lemon filling. Iced with white buttercream icing.',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=800&q=80',
    tags: ['Lemon Filling', 'Buttercream'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-6',
    name: 'Mocha Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 40.00,
    unit: '8" round',
    description: 'White cake flavored with rum, layered with mocha buttercream and custard and iced with mocha buttercream.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80',
    tags: ['Rum Flavored', 'Mocha Buttercream'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-7',
    name: 'Whipped Cream Cake (The "Standard")',
    dutchName: 'Coaldale Standard Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 38.00,
    unit: '8" round',
    description: 'The "Standard" – traditional Coaldale Bakery Cake – this cake has a reputation! White or chocolate cake iced in whipped cream and layered with custard and whipped cream, decorated with fruit and chocolate pieces.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    tags: ['Traditional Classic', 'Famous Reputation'],
    isPopular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-8',
    name: 'Carrot Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 40.00,
    unit: '8" round',
    description: 'Filled with cream cheese icing and iced with cream cheese icing. This cake does not contain nuts or raisins.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    tags: ['Cream Cheese', 'No Nuts or Raisins'],
    isPopular: true,
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'cake-9',
    name: 'Black Forest Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 42.00,
    unit: '8" round',
    description: 'Chocolate cake flavored with Kirsch (liqueur), filled with cherry filling, whipped cream and sour cherries, iced with whipped cream and decorated in the traditional style with chocolate shavings and maraschino cherries.',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80',
    tags: ['Kirsch Liqueur', 'Sour Cherries'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-10',
    name: 'Pina Colada Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 42.00,
    unit: '8" round',
    description: 'White cake flavored with rum. Filled with pineapple, coconut and vanilla custard. Iced with whipped cream and decorated with coconut, cherries and pineapple.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    tags: ['Rum & Coconut', 'Pineapple Custard'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-11',
    name: 'Peaches and Cream Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 40.00,
    unit: '8" round',
    description: 'White cake layered with custard, peaches and whipped cream, decorated with white chocolate and peach slices.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Peaches', 'White Chocolate'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-12',
    name: 'Lemon Cream Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 38.00,
    unit: '8" round',
    description: 'White cake layered with lemon filling and whipped cream.',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=800&q=80',
    tags: ['Tangy Lemon', 'Whipped Cream'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-13',
    name: 'Almond Poppyseed Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 42.00,
    unit: '8" round',
    description: 'Almond poppy seed cake layered with raspberries, custard and whipped cream, iced with whipped cream and decorated with toasted almonds and fresh raspberries (seasonal).',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    tags: ['Raspberries', 'Toasted Almonds'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-14',
    name: 'Creamsicle Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 38.00,
    unit: '8" round',
    description: 'White cake filled with orange mousse and iced with whipped cream.',
    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?auto=format&fit=crop&w=800&q=80',
    tags: ['Orange Mousse', 'Citrus Delight'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-15',
    name: '"Skor" Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 42.00,
    unit: '8" round',
    description: 'Chocolate cake layered with whipped cream and "Skor" bits, decorated with chocolate shavings and skor bits! A must for any chocolate lover! Skor bits do contain almonds.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    tags: ['Skor Toffee Bits', 'Must For Chocolate Lovers'],
    isPopular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-16',
    name: 'Strawberries and Cream Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 40.00,
    unit: '8" round',
    description: 'White or chocolate cake layered with strawberries, custard, and whipped cream, iced with whipped cream and decorated with chocolate shavings (white or dark) and strawberries.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Strawberries', 'Chocolate Shavings'],
    isPopular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-17',
    name: 'Raspberries and Cream Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 40.00,
    unit: '8" round',
    description: 'Chocolate cake layered with raspberries, vanilla custard and whipped cream, iced with whipped cream and decorated with chocolate shavings and raspberries (can be made with white cake as well).',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Raspberries', 'Vanilla Custard'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-18',
    name: 'Tiramisu Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 45.00,
    unit: '8" round',
    description: 'White cake soaked in espresso, layered with tiramisu mousse iced, with whipped cream and topped with chocolate. * This cake also contains amaretto* (need 48 hours notice).',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80',
    tags: ['Espresso & Amaretto', '48 Hours Notice'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-19',
    name: 'B-52 Liqueur Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 45.00,
    unit: '8" round',
    description: 'Layers of white and chocolate cake flavored with Irish Cream, Kahlua and Grand Marnier, iced with whipped cream and decorated with chocolate shavings and cherries.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80',
    tags: ['Irish Cream', 'Kahlua & Grand Marnier'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-20',
    name: 'German Chocolate Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 42.00,
    unit: '8" round',
    description: 'Chocolate cake layered with German chocolate topping (a mixture of pecans & coconut) and iced in chocolate buttercream.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    tags: ['Pecans & Coconut', 'German Chocolate'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-21',
    name: 'Cookies and Cream Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 40.00,
    unit: '8" round',
    description: 'Chocolate cake layered and iced with cookies and cream buttercream and topped with chocolate and Oreo Cookies.',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
    tags: ['Oreo Cookies', 'Cookies & Cream'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cake-22',
    name: 'Peanut Butter Chocolate Cake',
    category: 'cakes-pastries',
    subCategory: 'Specialty Cakes',
    price: 42.00,
    unit: '8" round',
    description: 'Chocolate cake layered with peanut butter filling and iced in chocolate buttercream, topped with peanut butter and chocolate.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    tags: ['Peanut Butter', 'Rich Chocolate'],
    dietary: ['Vegetarian']
  },

  // --- SECTION 7: PASTRIES ---
  {
    id: 'pst-1',
    name: 'Mocha Points',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 4.25,
    unit: 'each',
    description: 'Delicate pastry point layered with rich mocha cream and coffee glaze.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Mocha Cream', 'Fresh Baked'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-2',
    name: 'Mocha Meringues',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 3.95,
    unit: 'each',
    description: 'Light, crisp espresso meringue shells filled with smooth mocha buttercream.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Crisp Meringue'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-3',
    name: 'Vanilla Slices',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 4.50,
    unit: 'each',
    description: 'Crisp puff pastry layers filled with thick vanilla bean custard and sweet fondant icing.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Vanilla Custard', 'Puff Pastry'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-4',
    name: 'Cream Puffs',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 3.95,
    unit: 'each',
    description: 'Golden choux pastry stuffed generously with fresh whipped cream and dusted with powdered sugar.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Whipped Cream', 'Choux Pastry'],
    isPopular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-5',
    name: 'Cream Croissants',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 4.25,
    unit: 'each',
    description: 'Flaky butter croissant split and filled with sweet whipped vanilla cream.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tags: ['Butter Croissant'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-6',
    name: 'Tiramisu Slices',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 5.25,
    unit: 'slice',
    description: 'Espresso and amaretto soaked sponge slice with mascarpone cream and cocoa powder.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80',
    tags: ['Espresso', 'Mascarpone'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-7',
    name: 'Chocolate Eclairs',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 4.50,
    unit: 'each',
    description: 'Classic choux pastry filled with vanilla custard and dipped in dark chocolate glaze.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Dark Chocolate Glaze', 'Customer Favorite'],
    isPopular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-8',
    name: 'Cream Horns',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 4.25,
    unit: 'each',
    description: 'Flaky horn-shaped puff pastry pipe filled with sweetened real whipped cream.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tags: ['Flaky Horn'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-9',
    name: 'Strawberries and Cream Croissant',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 4.95,
    unit: 'each',
    description: 'Fresh butter croissant stuffed with ripe sliced strawberries and real whipped cream.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Strawberries', 'Whipped Cream'],
    isPopular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-10',
    name: 'Strawberries and Cream Donut',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 3.95,
    unit: 'each',
    description: 'Yeast raised donut filled with fresh strawberries and whipped cream.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Donut'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-11',
    name: 'Strawberry Cheesecake Slice',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 5.25,
    unit: 'slice',
    description: 'Rich New York style baked cheesecake topped with sweet strawberry topping.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    tags: ['Baked Cheesecake'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-12',
    name: 'Raspberry Cheesecake Slice',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 5.25,
    unit: 'slice',
    description: 'Creamy cheesecake on a graham crust topped with tart raspberry glaze.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    tags: ['Raspberry Glaze'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-13',
    name: 'Parfait Cups',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 4.95,
    unit: 'each',
    description: 'Layered cup of vanilla custard, fruit compote, whipped cream, and sponge cake bits.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Layered Cup'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-14',
    name: 'Seasonal Premium Pastries',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 5.50,
    unit: 'each',
    description: 'Baker’s seasonal specialty pastry crafted with fresh local fruits and toppings.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    tags: ['Seasonal Special'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-15',
    name: 'Mini Cream Pies',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 4.25,
    unit: 'each',
    description: 'Individual pie shell filled with cream filling. Available in Banana, Coconut, Strawberry, or Lemon Meringue.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    options: ['Banana Cream', 'Coconut Cream', 'Strawberry Cream', 'Lemon Meringue'],
    tags: ['Mini Pie'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-16',
    name: 'Decorated Cupcakes',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 3.50,
    unit: 'each',
    description: 'Soft sponge cupcakes topped with rich buttercream swirl and decorations.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    options: ['Vanilla', 'Chocolate', 'Red Velvet', 'Carrot'],
    tags: ['Cupcake'],
    dietary: ['Vegetarian']
  },
  {
    id: 'pst-17',
    name: 'Cake by the Slice',
    category: 'cakes-pastries',
    subCategory: 'Pastries & Slices',
    price: 5.25,
    unit: 'slice',
    description: 'Fresh slice of our daily featured specialty cake selection.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    tags: ['Daily Slice'],
    dietary: ['Vegetarian']
  },

  // --- SECTION 8: CATERING SERVICES ---
  {
    id: 'cat-1',
    name: 'Breakfast Pastries Assortment',
    category: 'catering',
    subCategory: 'Continental Breakfast / Coffee Break',
    price: 4.49,
    unit: 'per serving',
    description: 'An assortment of Donuts, Muffins, Cinnamon Buns, and Danish Pastry. (Based on 1 1/2 pieces per serving).',
    image: breakfastPastriesImg,
    tags: ['Breakfast', 'Coffee Break', 'Assorted Pastries'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-2',
    name: 'Individual 4" Quiche',
    category: 'catering',
    subCategory: 'Continental Breakfast / Coffee Break',
    price: 5.99,
    unit: 'per serving',
    description: 'Freshly baked individual 4-inch savory quiche with savory egg filling.',
    image: individualQuicheImg,
    tags: ['Quiche', 'Hot Breakfast'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-3',
    name: 'Soup and Sandwich Luncheon',
    category: 'catering',
    subCategory: 'Soup & Sandwich Luncheon',
    price: 16.79,
    unit: 'per serving',
    description: 'Includes: Soup (2 varieties), Assorted Sandwiches, Beverage, and Dessert (bakery\'s choice). Complete buffet-style luncheon.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    tags: ['Complete Luncheon', 'Soup & Sandwich', 'Popular Catering'],
    isPopular: true
  },

  // Catering Main Dishes
  {
    id: 'cat-4',
    name: 'Roast Beef and Gravy',
    category: 'catering',
    subCategory: 'Catering Main Dishes',
    price: 12.00,
    unit: 'per serving',
    description: 'Tender slow-roasted beef served with rich savory gravy. (Minimum 20 servings required).',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Main Dish', 'Min 20 Servings', 'Hot Buffet'],
    isPopular: true
  },
  {
    id: 'cat-5',
    name: 'Ham',
    category: 'catering',
    subCategory: 'Catering Main Dishes',
    price: 10.00,
    unit: 'per serving',
    description: 'Delicious oven-baked glazed ham slice. (Minimum 20 servings required).',
    image: bakedHamImg,
    tags: ['Main Dish', 'Min 20 Servings']
  },
  {
    id: 'cat-6',
    name: 'Turkey and Gravy',
    category: 'catering',
    subCategory: 'Catering Main Dishes',
    price: 11.00,
    unit: 'per serving',
    description: 'Juicy oven-roasted turkey served with traditional pan gravy. (Minimum 20 servings required).',
    image: turkeyAndGravyImg,
    tags: ['Main Dish', 'Min 20 Servings', 'Holiday Favorite']
  },
  {
    id: 'cat-7',
    name: 'Beef on a Bun',
    category: 'catering',
    subCategory: 'Catering Main Dishes',
    price: 12.00,
    unit: 'per serving',
    description: 'Savory shredded slow-cooked beef served with fresh bakery buns. (Minimum 20 servings required).',
    image: beefOnABunImg,
    tags: ['Main Dish', 'Min 20 Servings', 'Crowd Pleaser']
  },

  // Catering Side Dishes
  {
    id: 'cat-8',
    name: 'Mashed Potatoes',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 3.00,
    unit: 'per serving',
    description: 'Creamy homemade mashed potatoes.',
    image: mashedPotatoesImg,
    tags: ['Side Dish'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-9',
    name: 'Focaccia Roasted Potatoes',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 3.50,
    unit: 'per serving',
    description: 'Herb-roasted potato chunks seasoned with focaccia spices.',
    image: focacciaPotatoImg,
    tags: ['Side Dish', 'Herb Roasted'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-10',
    name: 'Turkey Dressing',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 3.00,
    unit: 'per serving',
    description: 'Traditional seasoned bread stuffing.',
    image: turkeyDressingImg,
    tags: ['Side Dish', 'Stuffing']
  },
  {
    id: 'cat-11',
    name: 'Baby Carrots',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 2.50,
    unit: 'per serving',
    description: 'Tender steamed sweet baby carrots.',
    image: babyCarrotsImg,
    tags: ['Side Dish', 'Vegetable'],
    dietary: ['Vegetarian', 'Nut-Free', 'Dairy-Free']
  },
  {
    id: 'cat-12',
    name: 'Peas and Carrots',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 2.00,
    unit: 'per serving',
    description: 'Sweet green peas and tender diced carrots.',
    image: peasAndCarrotsImg,
    tags: ['Side Dish', 'Vegetable'],
    dietary: ['Vegetarian', 'Nut-Free', 'Dairy-Free']
  },
  {
    id: 'cat-13',
    name: 'Mixed Vegetables',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 2.00,
    unit: 'per serving',
    description: 'Fresh seasonal mixed vegetable medley.',
    image: mixedVegImg,
    tags: ['Side Dish'],
    dietary: ['Vegetarian', 'Nut-Free', 'Dairy-Free']
  },
  {
    id: 'cat-14',
    name: 'Corn',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 2.00,
    unit: 'per serving',
    description: 'Sweet buttered sweet kernel corn.',
    image: sweetCornImg,
    tags: ['Side Dish'],
    dietary: ['Vegetarian', 'Nut-Free']
  },
  {
    id: 'cat-15',
    name: 'Green Beans Almandine',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 2.50,
    unit: 'per serving',
    description: 'Fresh tender green beans garnished with crispy toasted slivered almonds.',
    image: greenBeansAlmandineImg,
    tags: ['Side Dish', 'Almonds'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-16',
    name: 'Baked Beans',
    category: 'catering',
    subCategory: 'Catering Side Dishes',
    price: 3.50,
    unit: 'per serving',
    description: 'Slow-cooked sweet and savory baked beans.',
    image: bakedBeansImg,
    tags: ['Side Dish', 'Hearty'],
    dietary: ['Vegetarian']
  },

  // Catering Salads
  {
    id: 'cat-17',
    name: 'Tossed Salad',
    category: 'catering',
    subCategory: 'Catering Salads',
    price: 4.00,
    unit: 'per serving',
    description: 'Fresh crisp garden greens served with 2 varieties of dressing.',
    image: tossedSaladImg,
    tags: ['Salad', 'Fresh Greens'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-18',
    name: 'Coleslaw',
    category: 'catering',
    subCategory: 'Catering Salads',
    price: 3.00,
    unit: 'per serving',
    description: 'Classic creamy shredded cabbage coleslaw.',
    image: coleslawImg,
    tags: ['Salad', 'Coleslaw'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-19',
    name: 'Oriental Cabbage Salad',
    category: 'catering',
    subCategory: 'Catering Salads',
    price: 4.00,
    unit: 'per serving',
    description: 'Crunchy cabbage salad tossed with toasted noodles and sesame vinaigrette.',
    image: orientalCabbageSaladImg,
    tags: ['Salad', 'Oriental Cabbage'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-20',
    name: 'Greek Salad',
    category: 'catering',
    subCategory: 'Catering Salads',
    price: 4.50,
    unit: 'per serving',
    description: 'Crisp cucumbers, ripe tomatoes, olives, red onion, and tangy feta cheese.',
    image: greekSaladImg,
    tags: ['Salad', 'Feta & Olives'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-21',
    name: 'Spinach Salad',
    category: 'catering',
    subCategory: 'Catering Salads',
    price: 4.00,
    unit: 'per serving',
    description: 'Fresh baby spinach leaves served with house signature dressing.',
    image: spinachSaladImg,
    tags: ['Salad', 'Baby Spinach'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-22',
    name: 'Marinated Vegetable Salad',
    category: 'catering',
    subCategory: 'Catering Salads',
    price: 4.50,
    unit: 'per serving',
    description: 'Zesty marinated fresh mixed garden vegetables.',
    image: marinatedVegSaladImg,
    tags: ['Salad', 'Marinated Veggies'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-23',
    name: 'Caesar Salad',
    category: 'catering',
    subCategory: 'Catering Salads',
    price: 4.00,
    unit: 'per serving',
    description: 'Crisp romaine lettuce, garlic croutons, shredded parmesan, and Caesar dressing.',
    image: caesarSaladImg,
    tags: ['Salad', 'Caesar'],
    dietary: ['Vegetarian']
  },
  {
    id: 'cat-24',
    name: 'Potato Salad',
    category: 'catering',
    subCategory: 'Catering Salads',
    price: 4.50,
    unit: 'per serving',
    description: 'Classic creamy homemade potato salad with herbs.',
    image: potatoSaladImg,
    tags: ['Salad', 'Homemade Potato'],
    dietary: ['Vegetarian']
  },

  // --- SAVORY BAKERY FAVORITES ---
  {
    id: 'm1',
    name: 'Coaldale Famous Dutch Sausage Roll',
    dutchName: 'Gevuld Saucijzenbroodje',
    category: 'catering',
    subCategory: 'Savory Bakery Favorites',
    price: 4.25,
    description: 'Our iconic savory specialty. Seasoned lean pork wrapped in light, golden flaky puff pastry baked fresh all morning long.',
    image: dutchSausageRollImg,
    tags: ['Best Seller', 'Coaldale Classic'],
    isPopular: true,
    freshOutTime: '10:00 AM',
    dietary: ['Authentic Dutch']
  },
  {
    id: 'm8',
    name: 'Beef & Potato Dutch Meat Pie',
    category: 'catering',
    subCategory: 'Savory Bakery Favorites',
    price: 6.50,
    description: 'Hearty slow-simmered Alberta beef, tender potatoes, and aromatic onions baked in a flaky double butter crust.',
    image: dutchMeatPieImg,
    tags: ['Lunch Special', 'Warm & Hearty'],
    freshOutTime: '11:00 AM'
  },
  {
    id: 'm12',
    name: 'Dutch Hot Cocoa & Fresh Coffee',
    category: 'catering',
    subCategory: 'Continental Breakfast / Coffee Break',
    price: 3.25,
    description: 'Rich dark roasted Arabica coffee brewed fresh, or creamy cocoa made with genuine Dutch Droste cocoa powder.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    tags: ['Local Roast', 'Dutch Cocoa'],
    dietary: ['Vegetarian', 'Nut-Free']
  }
];

export const DAILY_SPECIALS: DailySpecial[] = [
  {
    id: 'ds-tue',
    day: 'Tuesday',
    title: 'Dutch Sausage Roll Tuesday',
    dutchHighlight: 'Saucijzenbroodjes Actie',
    discountText: 'Buy 4 Famous Sausage Rolls, get 1 FREE!',
    items: [MENU_ITEMS[0]]
  },
  {
    id: 'ds-wed',
    day: 'Wednesday',
    title: 'Donut & Sweet Roll Bonanza',
    dutchHighlight: 'Verse Donut Dag',
    discountText: '$1.00 Off any Half-Dozen Assorted Donuts or Sweet Rolls',
    items: [MENU_ITEMS[0]]
  },
  {
    id: 'ds-thu',
    day: 'Thursday',
    title: 'Specialty Cake & Pastry Day',
    dutchHighlight: 'Hollands Gebak Feest',
    discountText: 'Special release of fresh Eclairs, Cream Puffs & Specialty Slices',
    items: [MENU_ITEMS[0]]
  },
  {
    id: 'ds-fri',
    day: 'Friday',
    title: 'Weekend Bread & Meat Pie Feast',
    dutchHighlight: 'Weekend Brood & Hartig',
    discountText: 'Fresh Tijgerbrood and Savory Meat Pies fresh out of oven at 11 AM',
    items: [MENU_ITEMS[0]]
  },
  {
    id: 'ds-sat',
    day: 'Saturday',
    title: 'Family Breakfast & Treat Box',
    dutchHighlight: 'Familie Ontbijt Box',
    discountText: 'Weekend Special: 2 Sausage Rolls + 2 Cream Puffs + 2 Donuts for $22.00',
    items: [MENU_ITEMS[0]]
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Mark Van Den Berg',
    location: 'Lethbridge, AB',
    rating: 5,
    date: '3 days ago',
    content: 'Hands down the BEST sausage rolls in Alberta! Every time I drive through Coaldale I have to stop here. The crust on their Tijgerbrood bread is unbelievable, and the staff are always smiling and welcoming.',
    favoriteItem: 'Coaldale Famous Dutch Sausage Roll',
    verifiedCustomer: true
  },
  {
    id: 'r2',
    author: 'Sarah Jenkins',
    location: 'Coaldale, AB',
    rating: 5,
    date: '1 week ago',
    content: 'We ordered our daughter’s 10th birthday cake from Coaldale Bakery and it was stunning! Moist sponge, real whipped cream, not overly sweet. They have been our go-to family bakery for over 15 years.',
    favoriteItem: 'Custom Decorated Birthday Cake',
    verifiedCustomer: true
  },
  {
    id: 'r3',
    author: 'Dirk & Anika DeJong',
    location: 'Taber, AB',
    rating: 5,
    date: '2 weeks ago',
    content: 'Being originally from the Netherlands, finding authentic Banketstaaf and Stroopwafels here in Alberta feels like home. The quality and taste are authentic scratch baking at its finest!',
    favoriteItem: 'Almond Banket Log',
    verifiedCustomer: true
  },
  {
    id: 'r4',
    author: 'Emily Thorne',
    location: 'Coaldale, AB',
    rating: 5,
    date: '1 month ago',
    content: 'The cream donuts here are legendary. You can taste real butter and fresh ingredients in every single item. Plus 4.8 stars with nearly 500 reviews speaks for itself!',
    favoriteItem: 'Glazed Dutch Cream Donut',
    verifiedCustomer: true
  },
  {
    id: 'r5',
    author: 'Brent Klassen',
    location: 'Coaldale, AB',
    rating: 5,
    date: '1 month ago',
    content: 'Friendly service, amazing sourdough bread, and the takeout order process was so smooth. Picked it up piping hot right on time. A local gem!',
    favoriteItem: 'Rustic Country Sourdough Boule',
    verifiedCustomer: true
  }
];
