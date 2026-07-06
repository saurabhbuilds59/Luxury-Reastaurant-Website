import { MenuItem, Testimonial, GalleryItem } from './types';

// Let's import the specific images we generated
export const RESTAURANT_IMAGES = {
  hero: '/src/assets/images/hero_1783331515816.jpg',
  gallery1: '/src/assets/images/gallery_1_1783331532766.jpg',
  gallery2: '/src/assets/images/gallery_2_1783331551247.jpg',
  gallery3: '/src/assets/images/gallery_3_1783331566590.jpg',
  menuFeature: '/src/assets/images/menu_feature_1783331584764.jpg',
};

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: 'app-1',
    name: 'Caviar Impérial',
    description: 'Petrossian Daurenki Caviar served on chilled marble with fresh warm blinis, house-made crème fraîche, and finely minced shallots.',
    price: 145,
    category: 'Appetizers',
    tags: ['Signature', 'Gluten Free Option'],
    isSpecial: true
  },
  {
    id: 'app-2',
    name: 'Foie Gras de Canard poêlé',
    description: 'Pan-seared duck foie gras, blood orange gelée, caramelized heirloom figs, toasted artisanal brioche, aged balsamic reduction.',
    price: 42,
    category: 'Appetizers',
    tags: ['House Special']
  },
  {
    id: 'app-3',
    name: 'Carpaccio de Saint-Jacques',
    description: 'Thinly sliced Hokkaido scallops, black truffle pearls, sea buckthorn vinaigrette, finger lime, wild micro-herbs.',
    price: 38,
    category: 'Appetizers',
    tags: ['Gluten Free', 'Raw Bar']
  },
  {
    id: 'app-4',
    name: 'Asperges Blanches en Sabayon',
    description: 'Poached white asparagus, warm champagne sabayon, crispy jamón ibérico, shaved toasted hazelnuts.',
    price: 34,
    category: 'Appetizers',
    tags: ['Seasonal']
  },

  // Mains
  {
    id: 'main-1',
    name: 'Filet de Bœuf Wagyu A5',
    description: 'Miyazaki Wagyu beef fillet, black truffle potato purée, glazed wild chanterelles, rich 48-hour bone marrow demi-glace.',
    price: 165,
    category: 'Mains',
    tags: ['Signature', 'Michelin Star Plating'],
    isSpecial: true
  },
  {
    id: 'main-2',
    name: 'Homard Thermidor Moderne',
    description: 'Maine lobster tail butter-poached, cognac-infused tarragon cream sauce, parmesan-herb crust, baby sea fennel.',
    price: 85,
    category: 'Mains',
    tags: ['Shellfish', 'Classic French']
  },
  {
    id: 'main-3',
    name: 'Canard de Challans Rôti',
    description: 'Spiced honey roasted duck breast, parsnip velvet, blackberry reduction, braised endive, lavender smoke aroma.',
    price: 68,
    category: 'Mains',
    tags: ['Rich Taste']
  },
  {
    id: 'main-4',
    name: 'Turbot Sauvage et Caviar',
    description: 'Wild turbot fillet, white butter emulsion infused with Oscietra caviar, roasted leek hearts, crisp sea asparagus.',
    price: 78,
    category: 'Mains',
    tags: ['Seafood', 'Gluten Free']
  },

  // Desserts
  {
    id: 'des-1',
    name: 'Le Sphère d\'Or',
    description: 'Dark chocolate sphere with 24-karat gold leaf, molten salted caramel infusion, Tahitian vanilla bean gelato, hot chocolate pour-over.',
    price: 28,
    category: 'Desserts',
    tags: ['Signature', 'Showstopper'],
    isSpecial: true
  },
  {
    id: 'des-2',
    name: 'Soufflé au Grand Marnier',
    description: 'Classic airy orange liqueur soufflé, candied orange peel, homemade Madagascar vanilla bean crème anglaise.',
    price: 24,
    category: 'Desserts',
    tags: ['Classic']
  },
  {
    id: 'des-3',
    name: 'Tarte Tatine de Figues',
    description: 'Upside-down caramelized fig tart on buttery puff pastry, spiced cardamom cream, rosemary-infused lavender honey.',
    price: 22,
    category: 'Desserts',
    tags: ['Charming']
  },

  // Cellar & Bar
  {
    id: 'cell-1',
    name: 'Château Margaux Premier Cru 2015',
    description: 'Grand Vin with elegant dark berry bouquet, hints of violet, fine velvet tannins, exceptional complex finish.',
    price: 320,
    category: 'Cellar & Bar',
    tags: ['Vintage', 'Red Wine']
  },
  {
    id: 'cell-2',
    name: 'Dom Pérignon Plénitude 2 2004',
    description: 'Toasted almond, dried apricot, intense citrus freshness, long savory finish with beautiful minerality.',
    price: 190,
    category: 'Cellar & Bar',
    tags: ['Champagne', 'Glass Serving']
  },
  {
    id: 'cell-3',
    name: 'L\'Étoile Dorée Cocktail',
    description: 'Louis XIII cognac, gold-infused honey syrup, fresh lemon, Angostura, champagne float, served with a smoke cloche.',
    price: 45,
    category: 'Cellar & Bar',
    tags: ['Signature Cocktail', 'Gold Flecks']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Lady Genevieve Sterling',
    role: 'Connoisseur & Patron',
    comment: 'The Wagyu A5 was absolute poetry, melting effortlessly on the palate. But what truly sets this place apart is the discrete, anticipating service. An experience that stays with you long after the final course.',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Chef Marcus Dupont',
    role: 'Gastronomy Critic',
    comment: 'The scallop carpaccio balanced with finger limes and truffle pearls is a masterclass in culinary balance. Playful acidity meeting deep earthy luxury. A masterpiece.',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Alexander Sterling',
    role: 'Oenophile',
    comment: 'Their private sommelier vault is unparalleled. Matching a Grand Cru with the Modern Duck breast smoked in lavender was a revelation. Unmatched atmosphere and lighting.',
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    url: RESTAURANT_IMAGES.gallery1,
    caption: 'Gourmet steak plated in a Michelin-star style on matte black slate with elegant gold cutlery.',
    category: 'Plating'
  },
  {
    id: 'gal-2',
    url: RESTAURANT_IMAGES.gallery2,
    caption: 'Charming pasta and premium vintage wines paired under romantic golden candlelight.',
    category: 'Plating'
  },
  {
    id: 'gal-3',
    url: RESTAURANT_IMAGES.gallery3,
    caption: 'Our culinary artists composing masterworks within the pristine, open-concept kitchen theater.',
    category: 'Atmosphere'
  },
  {
    id: 'gal-4',
    url: RESTAURANT_IMAGES.hero,
    caption: 'The majestic main dining salon, framed by elegant golden arches and deep black velvet accents.',
    category: 'Atmosphere'
  }
];
