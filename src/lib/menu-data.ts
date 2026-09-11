export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const coffeeCategories: MenuCategory[] = [
  {
    id: "classic",
    title: "Classic",
    subtitle: "The everyday cups — pulled clean, no fuss.",
    items: [
      {
        name: "Espresso",
        description: "Double shot, chocolate finish, short and exact.",
        price: "₹180",
      },
      {
        name: "Americano",
        description: "Espresso lengthened with hot water; bright and honest.",
        price: "₹200",
      },
      {
        name: "Cappuccino",
        description: "Equal parts espresso, steamed milk, and foam.",
        price: "₹260",
      },
      {
        name: "Flat White",
        description: "Velvet microfoam over a rich double shot.",
        price: "₹280",
      },
      {
        name: "Café Latte",
        description: "Softer milk, longer sip — quiet morning fuel.",
        price: "₹280",
      },
      {
        name: "Macchiato",
        description: "Espresso marked with a spoon of foam.",
        price: "₹220",
      },
      {
        name: "Mocha",
        description: "Espresso, dark cocoa, steamed milk.",
        price: "₹320",
      },
      {
        name: "Cold Brew",
        description: "Sixteen-hour steep, low acid, over ice.",
        price: "₹300",
      },
    ],
  },
  {
    id: "louies",
    title: "Louie’s",
    subtitle: "Darker, richer, bolder — spice, smoke, deep fruit.",
    items: [
      {
        name: "Louie’s Shadow",
        description: "Double ristretto, demerara, hint of smoked cacao.",
        price: "₹340",
      },
      {
        name: "Midnight Flat",
        description: "Flat white with a charcoal-roasted single origin.",
        price: "₹360",
      },
      {
        name: "Ink & Spice",
        description: "Espresso, black cardamom syrup, oat milk.",
        price: "₹350",
      },
      {
        name: "Lodhi Dark",
        description: "Long black with a float of cold brew concentrate.",
        price: "₹320",
      },
      {
        name: "Velvet Ember",
        description: "Mocha with bittersweet 70% cocoa and sea salt.",
        price: "₹380",
      },
      {
        name: "Persian Night",
        description: "Espresso, date molasses, warm milk, cracked pepper.",
        price: "₹370",
      },
      {
        name: "Passionfruit Espresso",
        description: "Tart passionfruit cordial over a chilled double shot.",
        price: "₹380",
      },
      {
        name: "Blackberry Espresso Tonic",
        description: "Blackberry shrub, tonic, espresso float.",
        price: "₹390",
      },
      {
        name: "Coconut Coffee",
        description: "Espresso, coconut milk, toasted coconut flakes.",
        price: "₹370",
      },
    ],
  },
  {
    id: "lunas",
    title: "Luna’s",
    subtitle: "Lighter, floral, creamy — bright fruit welcome.",
    items: [
      {
        name: "Luna’s Pearl",
        description: "Honey-processed espresso, steamed milk, orange blossom.",
        price: "₹340",
      },
      {
        name: "Jasmine Cortado",
        description: "Equal parts espresso and jasmine-scented milk.",
        price: "₹330",
      },
      {
        name: "Rose Latte",
        description: "Soft rose syrup, espresso, feather-light foam.",
        price: "₹350",
      },
      {
        name: "Chamomile Affogato",
        description: "Vanilla gelato drowned in chamomile espresso.",
        price: "₹390",
      },
      {
        name: "Lavender Fog",
        description: "Espresso, lavender honey, steamed milk.",
        price: "₹360",
      },
      {
        name: "White Moon",
        description: "White chocolate, espresso, cream, edible flower.",
        price: "₹380",
      },
      {
        name: "Orange Espresso",
        description: "Fresh orange oil, espresso, sparkling water.",
        price: "₹360",
      },
      {
        name: "Strawberry Coffee",
        description: "Roasted strawberry syrup, espresso, cold foam.",
        price: "₹380",
      },
      {
        name: "Peach Coffee",
        description: "White peach puree, iced latte, soft cream.",
        price: "₹380",
      },
      {
        name: "Mango Cold Foam",
        description: "Cold brew crowned with Alphonso mango foam.",
        price: "₹390",
      },
      {
        name: "Yuzu Americano",
        description: "Bright yuzu, sparkling americano, crushed ice.",
        price: "₹360",
      },
    ],
  },
  {
    id: "seasonal",
    title: "Seasonal",
    subtitle: "Always rotating — come back for the next one.",
    items: [
      {
        name: "Monsoon Cardamom Cold Brew",
        description: "Rainy-day cold brew with green cardamom and jaggery.",
        price: "₹370",
        note: "Monsoon",
      },
      {
        name: "Winter Saffron Latte",
        description: "Espresso, saffron milk, a whisper of pistachio.",
        price: "₹420",
        note: "Winter",
      },
      {
        name: "Foggy Morning Chai Affogato",
        description: "Masala chai gelato under a hot espresso pour.",
        price: "₹400",
        note: "Delhi winter",
      },
      {
        name: "Spring Guava Espresso",
        description: "Pink guava shrub over iced espresso.",
        price: "₹380",
        note: "Limited",
      },
    ],
  },
];

export type FoodSection = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const foodSections: FoodSection[] = [
  {
    id: "plates",
    title: "Breakfast & all day",
    subtitle: "Plates that hold up from morning through a long afternoon.",
    items: [
      {
        name: "Herb Omelette & Toast",
        description: "Soft eggs, garden herbs, sourdough, cultured butter.",
        price: "₹420",
      },
      {
        name: "Masala Scramble",
        description: "Eggs with onion, tomato, green chilli; buttered toast.",
        price: "₹390",
      },
      {
        name: "Mushroom Toast",
        description: "Wild mushrooms, crème fraîche, thyme on rye.",
        price: "₹480",
      },
      {
        name: "Avocado & Soft Egg",
        description: "Sourdough, chilli flakes, lemon, olive oil.",
        price: "₹460",
      },
      {
        name: "Croque Madame",
        description: "Ham, Gruyère, béchamel, sunny egg.",
        price: "₹560",
      },
      {
        name: "Seasonal Quiche",
        description: "Buttery pastry, changing filling, green salad.",
        price: "₹490",
      },
      {
        name: "Niçoise Salad",
        description: "Tuna, soft egg, olives, beans, mustard vinaigrette.",
        price: "₹540",
      },
      {
        name: "Granola Bowl",
        description: "House granola, yoghurt, honey, seasonal fruit.",
        price: "₹380",
      },
    ],
  },
  {
    id: "shareables",
    title: "To share",
    subtitle: "Small plates for the table while you decide on another coffee.",
    items: [
      {
        name: "Marinated Olives",
        description: "Citrus peel, rosemary, warm olive oil.",
        price: "₹280",
      },
      {
        name: "Hummus & Flatbread",
        description: "Sesame, lemon, paprika; soft warm bread.",
        price: "₹360",
      },
      {
        name: "Cheese Plate",
        description: "Three cheeses, fruit preserve, crackers.",
        price: "₹520",
      },
      {
        name: "Spiced Nuts",
        description: "Roasted with chilli, jaggery, and sea salt.",
        price: "₹260",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Something sweet with the last cup — or the next one.",
    items: [
      {
        name: "Dark Chocolate Tart",
        description: "70% ganache, flaky shell, crème fraîche.",
        price: "₹380",
      },
      {
        name: "Lemon Posset",
        description: "Set cream, shortbread, candied peel.",
        price: "₹340",
      },
      {
        name: "Almond Olive-Oil Cake",
        description: "Light, fragrant, served with cream.",
        price: "₹360",
      },
      {
        name: "Vanilla Affogato",
        description: "Gelato, hot espresso. Simple and right.",
        price: "₹320",
      },
    ],
  },
];

/** @deprecated use foodSections */
export const diningItems: MenuItem[] = foodSections.flatMap((s) => s.items);
