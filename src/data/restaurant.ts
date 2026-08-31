// ============================================================
// MANA RESTAURANT — Centralized Configuration
// Edit this file to update all restaurant information across the site.
// ============================================================

// ── Image Note ─────────────────────────────────────────────
// Currently using curated Unsplash images that match Mana's dark
// moody amber aesthetic. To use your real Mana photos:
// 1. Save each photo from Google Maps to public/images/
// 2. Replace the URLs below with "/images/your-filename.jpg"
// See public/images/IMAGE_GUIDE.md for the full mapping.

export const restaurant = {
  name: "MANA",
  tagline: "Good food. Good company. A place to linger.",
  description:
    "A cozy, intimate dining destination in the heart of Kuala Lumpur — where good food, warm company, and unhurried evenings come together.",
  dietary: "Pork Free & Lard Free",

  // ── Contact ──────────────────────────────────────────────
  address: {
    street: "66-1, Jalan Hang Kasturi",
    area: "City Centre",
    postcode: "50050",
    city: "Kuala Lumpur",
    state: "Wilayah Persekutuan Kuala Lumpur",
    country: "Malaysia",
    full:
      "66-1, Jalan Hang Kasturi, City Centre, 50050 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
  },
  phone: "+60 12-453 8979",
  phoneTel: "tel:+60124538979",

  // ── Google Maps ──────────────────────────────────────────
  googleMapsUrl: "https://maps.app.goo.gl/b9DoKukdddt8Yin28",
  directionsUrl: "https://maps.app.goo.gl/b9DoKukdddt8Yin28",

  // ── Booking ──────────────────────────────────────────────
  bookingUrl: "",

  // ── Social Media ─────────────────────────────────────────
  social: {
    instagram:
      "https://www.instagram.com/manadining?igsi=MTl3Z3lmdjduajhzMw==",
    facebook: "https://www.facebook.com/share/1FRj4S9wfZ/",
  },

  // ── Opening Hours ────────────────────────────────────────
  openingHours: [
    { day: "Monday", hours: "11:00 AM – 4:00 PM · 5:30 PM – 11:00 PM" },
    { day: "Tuesday", hours: "Closed" },
    { day: "Wednesday", hours: "11:00 AM – 4:00 PM · 5:30 PM – 11:00 PM" },
    { day: "Thursday", hours: "11:00 AM – 4:00 PM · 5:30 PM – 11:00 PM" },
    { day: "Friday", hours: "11:00 AM – 4:00 PM · 5:30 PM – 11:00 PM" },
    { day: "Saturday", hours: "11:00 AM – 4:00 PM · 5:30 PM – 11:00 PM" },
    { day: "Sunday", hours: "11:00 AM – 4:00 PM · 5:30 PM – 11:00 PM" },
  ],

  // ── Reviews ──────────────────────────────────────────────
  rating: "4.9",
  ratingSource: "Based on current public business listing information.",
  reviewsUrl: "",

  // ── Navigation ───────────────────────────────────────────
  nav: [
    { label: "HOME", href: "#home" },
    { label: "MENU", href: "#menu" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "GALLERY", href: "#gallery" },
    { label: "FIND US", href: "#find-us" },
  ],

  // ── Hero Image ───────────────────────────────────────────
  // Replace: /images/hero.jpg — Mana dark evening interior with fabric ceiling drapes
  heroImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&auto=format",

  // ── Introduction ─────────────────────────────────────────
  // Replace: /images/intro.jpg — Mana orange wall, globe light, cane chairs
  introImage:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80&auto=format",
  introHeading: "A place worth slowing down for.",
  introText:
    "Nestled along Jalan Hang Kasturi in the heart of Kuala Lumpur, Mana is a place to slow down and savour. Bold orange walls, flowing fabric drapes, and warm globe lighting create an atmosphere that is at once industrial and intimate. The food takes centre stage and the evening unfolds at its own pace. Whether it is a weeknight dinner, a long weekend lunch, or a quiet date night, Mana invites you to stay a while.",

  // ── Signature Dishes ─────────────────────────────────────
  signatureDishes: [
    {
      name: "Lamb Ribs",
      description:
        "A standout dish — rich, tender, and full of depth. Slow-cooked to perfection, the lamb ribs are a must-try for any visitor.",
      // Replace: /images/dish-lamb-ribs.jpg — Mana lamb ribs closeup
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format",
    },
    {
      name: "Nam Yu Fried Chicken",
      description:
        "Crispy, tempura-style coating with a distinctive fermented soy bean flavour. A textural delight that keeps you coming back for more.",
      // Replace: /images/dish-fried-chicken.jpg — Mana fried chicken on green-striped plate
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80&auto=format",
    },
  ],

  // ── Experience ───────────────────────────────────────────
  experienceImages: [
    {
      // Replace: /images/experience-1.jpg — Mana orange walls, fabric drapes, circular window
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&auto=format",
      alt: "Mana dining hall with warm amber lighting and industrial details",
    },
    {
      // Replace: /images/experience-2.jpg — Mana bar area, exposed beams, globe lights
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80&auto=format",
      alt: "Intimate table setting under pendant lights",
    },
    {
      // Replace: /images/experience-3.jpg — Mana dark moody evening interior
      src: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1200&q=80&auto=format",
      alt: "Evening atmosphere with exposed beams and warm glow",
    },
  ],
  experienceText:
    "Bold orange walls meet flowing fabric drapes overhead. Globe pendants cast a warm amber glow across dark wood tables, while exposed beams and raw concrete remind you this is a space with character. Mana is built for lingering — for conversations that stretch past dessert, for dates that run late, for meals that become memories.",

  // ── Story ────────────────────────────────────────────────
  // Replace: /images/story.jpg — Mana daytime interior with fabric drapes
  storyImage:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80&auto=format",
  storyHeading: "Come for the food.\nStay for the atmosphere.",
  storyText:
    "At Mana, we believe the best meals are shared. Discover dishes crafted with care, savoured in good company, and accompanied by the kind of conversation that only happens when time slows down. This is dining without the rush — unhurried, uncomplicated, and entirely satisfying.",

  // ── Gallery ──────────────────────────────────────────────
  // Replace each src with /images/food-N.jpg or /images/space-N.jpg
  // See public/images/IMAGE_GUIDE.md for the full mapping
  galleryImages: [
    // ── FOOD ──────────────────────────────────────────────
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format",
      alt: "Elegantly plated fine dining dish",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format",
      alt: "Beautifully presented signature dish",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format",
      alt: "Close-up of a signature dish",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80&auto=format",
      alt: "Pasta dish with fresh ingredients",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80&auto=format",
      alt: "Creamy pasta with rich sauce",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80&auto=format",
      alt: "Fresh seafood dish",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80&auto=format",
      alt: "Oysters served fresh",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=80&auto=format",
      alt: "Artfully plated appetizer",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80&auto=format",
      alt: "Fresh seasonal ingredients",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&auto=format",
      alt: "Perfectly grilled steak",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80&auto=format",
      alt: "Grilled meat with herbs",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80&auto=format",
      alt: "Craft cocktail preparation",
      category: "food",
    },
    // ── SPACE ─────────────────────────────────────────────
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format",
      alt: "Warm pendant lighting over dark wood dining tables",
      category: "space",
    },
    {
      src: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80&auto=format",
      alt: "Dark moody restaurant interior with ambient lighting",
      category: "space",
    },
    {
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80&auto=format",
      alt: "Cozy dining corner with warm atmosphere",
      category: "space",
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80&auto=format",
      alt: "Restaurant interior with exposed beams and pendant lights",
      category: "space",
    },
    {
      src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&q=80&auto=format",
      alt: "Wine and dining atmosphere",
      category: "space",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format",
      alt: "Evening dining atmosphere with warm glow",
      category: "space",
    },
  ],

  // ── Menu ─────────────────────────────────────────────────
  menuCategories: [
    // ── STARTERS ─────────────────────────────────────────
    {
      name: "Starters",
      items: [
        {
          name: "Cauliflower Bakar",
          description:
            "Grilled cauliflower with cauliflower purée, somtam dressing, and crushed nuts.",
          price: "RM 26",
        },
        {
          name: "Jiu Cai Bakar",
          description: "Chargrilled leek with zesty mustard dressing.",
          price: "RM 18",
        },
        {
          name: "Oyster Jepun",
          description:
            "Selected sashimi-grade oysters served with passion fruit sauce. Guests with health concerns may opt for the grilled version.",
          price: "",
        },
        {
          name: "Tuna Tartare",
          description:
            "Akami tuna, chilli flakes, and signature mayo mix with crisps.",
          price: "RM 28",
        },
        {
          name: "Namyu Gai Yik (Chicken Wing)",
          description:
            "Fried chicken wings served with house sichuan chilli mayo.",
          price: "RM 26",
        },
        {
          name: "Rendang Croquettes",
          description:
            "Lamb rendang fold with mashed potato and sour cream.",
          price: "RM 30",
        },
        {
          name: "Wagyu Daging Berbola (Meatballs)",
          description:
            "Minced wagyu in shakshuka sauce (middle eastern style), served with sourdough bread.",
          price: "RM 32",
        },
        {
          name: "Udang Bakar",
          description:
            "Grilled with planta and herbs, topped with fried leek on a bed of house-smoked peri sauce.",
          price: "RM 34",
        },
        {
          name: "Smoke Spuds",
          description:
            "Shredded potatoes fried in smoke butter, topped with tartar sauce and ebiko.",
          price: "RM 28",
        },
      ],
    },
    // ── MAINS ────────────────────────────────────────────
    {
      name: "Mains",
      items: [
        {
          name: "Tong Zi Gai (Spring Chicken)",
          description:
            "Spring chicken slow cook & grilled, side with pickled capsicum, orange & coriander sauce.",
          price: "RM 38",
        },
        {
          name: "Grilled Pata Margret (Duck Breast)",
          description:
            "Duck breast sourced from family farm in Ipoh, minimal seasoned, grilled to perfection, cherry sauce.",
          price: "RM 55",
        },
        {
          name: "Pan Seared Norwegian Salmon",
          description:
            "Minimal seasoned, side with burnt chilli sauce & burnt kailan, green oil dressing.",
          price: "RM 55",
        },
        {
          name: "Denver Lamb Ribs",
          description:
            "Marinated in chef's special recipe for 5 days, slow cook 8 hours and finish in grill, side with fermented grilled pineapple, homemade balsamic glaze sauce.",
          price: "RM 85",
        },
        {
          name: "Oxtail",
          description:
            "Tomato chilli flakes solution slow braised 5 hours, side with sourdough bread.",
          price: "RM 85",
        },
        {
          name: "Angus Short Ribs",
          description:
            "Tomato slow braised 5 hours and finish on grill, side with garlic mashed.",
          price: "RM 90",
        },
        {
          name: "Angus Ribeye (Selected Cut)",
          description:
            "200gm cut grilled to perfection (always recommend mid rare to mid) minimal season, side with fried kailan, smoked seasalt & fermented wasabi provided.",
          price: "RM 75",
        },
        {
          name: "Vongole Pasta",
          description:
            "Reduced grape vinegar, citrus fruits, garlic, chilli flakes, tossed with clams.",
          price: "RM 75",
        },
        {
          name: "Spanish Mun Fan (Paella)",
          description:
            "Homemade tomato sauce, premium bomba rice, tiger prawn, clams, good to share with 3 pax.",
          price: "RM 88",
        },
      ],
    },
    // ── CARBS ────────────────────────────────────────────
    {
      name: "Carbs",
      items: [
        {
          name: "Spanish Mun Fan (Paella)",
          description:
            "Homemade tomato sauce with premium bomba rice, tiger prawns, and clams. Good for sharing between 2–3 pax.",
          price: "RM 75",
        },
        {
          name: "Spanish Mun Fan V2",
          description:
            "Slow-braised lamb, premium bomba rice, laksa pesto, and fried curry leaves. Good for sharing between 3 pax.",
          price: "RM 90",
        },
        {
          name: "Linguine Ala Vongole",
          description:
            "Reduced grape vinegar, citrus fruits, garlic, and chilli flakes, tossed with clams.",
          price: "RM 38",
        },
        {
          name: "Pesto Gnocchi",
          description: "Spinach pesto with tons of parmesan cheese.",
          price: "RM 30",
        },
        {
          name: "Mushroom Pappardelle",
          description:
            "Butter-caramelised mushrooms with pappardelle and parmesan cheese.",
          price: "RM 32",
        },
      ],
    },
    // ── RICE ─────────────────────────────────────────────
    {
      name: "Rice",
      items: [
        {
          name: "Pad Kra Pao Rice",
          description: "Thai basil stir fry chicken.",
          price: "RM 18",
        },
        {
          name: "Japanese Chicken Katsu",
          description: "Panko breaded chicken, homemade japanese curry.",
          price: "RM 25",
        },
        {
          name: "Chicken Hamburg Rice",
          description: "Homemade chicken patty, brown stock, onsen egg.",
          price: "RM 18",
        },
      ],
    },
    // ── PASTA ────────────────────────────────────────────
    {
      name: "Pasta",
      items: [
        {
          name: "Beef Bolognese",
          description:
            "Wagyu minced beef, homemade tomato sauce, parmesan cheese.",
          price: "RM 26",
        },
        {
          name: "Pad Kra Pao Pasta",
          description: "Thai basil stir fry chicken, pasta.",
          price: "RM 24",
        },
        {
          name: "Pasta Masak Lemak",
          description: "Whole drumstick, lemak paste.",
          price: "RM 24",
        },
        {
          name: "Aglio Olio Pasta",
          description:
            "Extra virgin olive oil, cherry tomatoes, grilled chicken breast.",
          price: "RM 22",
        },
        {
          name: "Mushroom Cream Pasta",
          description: "Assorted mushroom, egg yolk, truffle oil.",
          price: "RM 24",
        },
        {
          name: "Pesto Pasta",
          description:
            "Parmesan, baby spinach, grilled chicken breast.",
          price: "RM 22",
        },
      ],
    },
    // ── OTHERS ───────────────────────────────────────────
    {
      name: "Others",
      items: [
        {
          name: "Gong Bao Rice",
          description: "Chicken cube, capsicum, carrot, onsen egg.",
          price: "RM 19",
        },
        {
          name: "Fish",
          description: "",
          price: "RM 18",
        },
        {
          name: "Chicken",
          description: "",
          price: "RM 20",
        },
      ],
    },
    // ── DINNER MENU ──────────────────────────────────────
    {
      name: "Dinner Menu",
      items: [
        {
          name: "Chicken Karaage",
          description: "",
          price: "RM 24",
        },
        {
          name: "Triple Cooked Fries",
          description: "",
          price: "RM 19",
        },
      ],
    },
    // ── LUNCH PROMO ──────────────────────────────────────
    {
      name: "Lunch Promo",
      items: [
        {
          name: "Aglio Olio w/ Grilled Chicken",
          description: "Includes cold brew tea.",
          price: "RM 15.90",
        },
        {
          name: "Pad Kra Pao Rice",
          description: "Includes cold brew tea.",
          price: "RM 15.90",
        },
        {
          name: "Scallion Oil Noodle",
          description: "Includes cold brew tea.",
          price: "RM 15.90",
        },
        {
          name: "Chicken Hamburg Rice",
          description: "Includes cold brew tea.",
          price: "RM 15.90",
        },
      ],
    },
    // ── ADD ONS ──────────────────────────────────────────
    {
      name: "Add Ons",
      items: [
        {
          name: "Extra Chicken Breast",
          description: "For aglio olio w/ grilled chicken.",
          price: "RM 8",
        },
        {
          name: "Extra Minced Chicken",
          description: "For pad kra pao rice.",
          price: "RM 8",
        },
        {
          name: "Extra Chicken Breast",
          description: "For scallion oil noodle.",
          price: "RM 8",
        },
        {
          name: "Passion Fruit Lemon Tea",
          description: "Drink upgrade.",
          price: "RM 5",
        },
      ],
    },
    // ── RED WINE ─────────────────────────────────────────
    {
      name: "Red Wine",
      items: [
        {
          name: "Valqueligoso VB",
          description: "",
          price: "RM 700",
        },
        {
          name: "Chateau Barrall",
          description:
            "Blend of merlot cabernet sauvignon cabernet franc from France Bordeaux. Ripe black fruits, velvety tannins.",
          price: "RM 280",
        },
        {
          name: "Cantine Sant'Agata Baby Barbera D'Asti Docg",
          description:
            "Barbera from Italy Piedmont. Bright cherry, lively acidity.",
          price: "RM 255",
        },
        {
          name: "Chakana Atorrante",
          description:
            "Malbec from Argentina Mendoza. Juicy plum, supple tannins.",
          price: "RM 200",
        },
        {
          name: "Bumblebee Organic",
          description:
            "Shiraz from Australia Monash Valley. Ripe dark berries, soft tannins.",
          price: "RM 190",
        },
        {
          name: "San Valero Don Mendo Reserva",
          description:
            "Blend of tempranillo grenache carignan from Spain Cariñena. Woody, soft dark fruit.",
          price: "RM 168",
        },
        {
          name: "Chateau Le Bournac Rouge",
          description:
            "Merlot cabernet sauvignon from Bordeaux. Fruity and savory with supple tannins.",
          price: "RM 165",
        },
        {
          name: "Yalumba Y-Series Cabernet Sauvignon",
          description:
            "Blend of tempranillo grenache carignan from Spain Cariñena. Medium bodied dark fruit notes with savory tannins.",
          price: "RM 155",
        },
        {
          name: "Yalumba Y-Series Shiraz Viognier",
          description:
            "Shiraz viognier from Barossa Valley. Full bodied with dark fruit characters.",
          price: "RM 155",
        },
        {
          name: "Yalumba Y-Series Pinot Noir",
          description:
            "Pinot noir from South Australia. Light bodied jammy red fruit notes.",
          price: "RM 155",
        },
      ],
    },
    // ── SPARKLING WINE ───────────────────────────────────
    {
      name: "Sparkling Wine",
      items: [
        {
          name: "Promosso Spumante Millesimato Doc",
          description: "Montelupo doc. Fresh pear citrus hints.",
          price: "",
        },
      ],
    },
    // ── SWEET WHITE WINE ─────────────────────────────────
    {
      name: "Sweet White",
      items: [
        {
          name: "Anna Ghione Moscato",
          description:
            "Moscato from Italy Piedmont (Asti) floral peach gentle bubbles.",
          price: "RM 188",
        },
      ],
    },
    // ── WHITE WINE ───────────────────────────────────────
    {
      name: "White Wine",
      items: [
        {
          name: "Botter Delle Venezie Doc",
          description:
            "Pinot grigio from Italy Veneto. Crisp apple, light floral.",
          price: "RM 165",
        },
        {
          name: "Yalumba Y-Series Viognier",
          description:
            "Viognier from Australia Wrattonbully. Floral notes with body.",
          price: "RM 155",
        },
      ],
    },
    // ── RED SPARKLING WINE ───────────────────────────────
    {
      name: "Red Sparkling",
      items: [
        {
          name: "Botter Lambrusco Rosso",
          description:
            "Lambrusco from Italy Emilia Romagna. Fizzy tart red fruit.",
          price: "RM 140",
        },
      ],
    },
  ],
  menuNote:
    "Our menu is being updated. Please contact Mana for the latest selection.",

  // ── Footer ───────────────────────────────────────────────
  copyrightYear: 2026,
} as const;
