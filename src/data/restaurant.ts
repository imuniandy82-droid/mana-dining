// ============================================================
// MANA RESTAURANT — Centralized Configuration
// Edit this file to update all restaurant information across the site.
// ============================================================

// ── Image Note ─────────────────────────────────────────────
// All images use local PNG files from public/images/.
// Replace any file in public/images/ to update the site.

export const restaurant = {
  name: "MANA",
  tagline: "Come for the food.\nStay for the atmosphere.",
  description:
    "Familiar comfort, reimagined with prestige. Rich, melt-in-your-mouth texture with a bold depth of flavour. At Mana, the best meals are shared — dishes crafted with care, savoured in good company, paired with the kind of conversation that only happens when time slows down.",
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
  bookingUrl: "https://api.whatsapp.com/send/?phone=60124538979&text=&type=phone_number&app_absent=0&wame_ctl=1&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAUCLyxwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp2qXiGp9tY0eZEwHLWjtmFKxapsIxBBKtvuqS5gicU2drQFCtKTAZUVHz396_aem_t6QquumJ_sQxShLGgy374w",

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
  heroImage: "/images/hero.jpg",

  // ── Introduction ─────────────────────────────────────────
  introImage: "/images/intro.jpg",
  introHeading: "A place worth slowing down for.",
  introText:
    "Mana lives inside a pre-war shophouse on Jalan Hang Kasturi — once a place for trade, now a place for the table. Intimate corners, warm lighting, and curated bites create an atmosphere worlds away from the hustle outside. Every wall tells a story, every dish carries intention, and every evening unfolds at its own pace.",

  // ── Signature Dishes ─────────────────────────────────────
  signatureDishes: [
    {
      name: "ANGUS PICANHA",
      tagline: "This month the table bows to one cut",
      description:
        "Flame-seared to juicy perfection, this prized cut is finished with a vibrant herb chimichurri and paired with golden, crispy potatoes for a bold, mouthwatering bite.",
      image: "/images/dish-angus-picanha.jpg",
    },
    {
      name: "PAELLA",
      tagline: "A nod to tradition or a toast to innovation?",
      description:
        "A masterpiece of premium bomba rice simmered in a rich, slow-cooked broth, loaded with fresh prawns and clams to share the true essence of coastal passion in every bite.",
      image: "/images/dish-paella.jpg",
    },
  ],

  // ── Experience ───────────────────────────────────────────
  experienceImages: [
    {
      src: "/images/experience-1.jpg",
      alt: "Mana grand opening — where refined flavours meet timeless ambience on Jalan Hang Kasturi",
    },
    {
      src: "/images/experience-2.jpg",
      alt: "Intimate corners, warm lighting, curated bites — wine and atmosphere worlds away from the bustle outside",
    },
    {
      src: "/images/experience-3.jpg",
      alt: "An atmosphere designed to be shared, for those who savour both the moment and the company",
    },
  ],
  experienceText:
    "Mana lives inside a pre-war shophouse on Jalan Hang Kasturi — once a place for trade, now a place for the table. Intimate corners, warm lighting, and curated bites create an atmosphere worlds away from the bustle outside. Every wall tells a story, every dish carries intention, and every evening unfolds at its own pace.",

  // ── Story ────────────────────────────────────────────────
  storyImage: "/images/story.jpg",
  storyHeading: "Come for the food.\nStay for the atmosphere.",
  storyText:
    "Familiar comfort, reimagined with prestige. Rich, melt-in-your-mouth texture with a bold depth of flavour. At Mana, the best meals are shared — dishes crafted with care, savoured in good company, paired with the kind of conversation that only happens when time slows down.",

  // ── Gallery ──────────────────────────────────────────────
  galleryImages: [
    // ── FOOD ──────────────────────────────────────────────
    { src: "/images/food-1.jpg", alt: "Experience our new creations — five new dishes each with its own story to tell", category: "food" },
    { src: "/images/food-2.jpg", alt: "What's your verdict? A Culinary Purist or a Flavor Explorer?", category: "food" },
    { src: "/images/food-3.jpg", alt: "Behold our glorious paella — bringing the taste of Spain to your table", category: "food" },
    { src: "/images/food-4.jpg", alt: "Inspiration of Pulled Lamb Paella paired with Don Mendo Reserva wine", category: "food" },
    { src: "/images/food-5.jpg", alt: "Some dinners are about the food — cocktails and Chef Jeff's kitchen creations", category: "food" },
    { src: "/images/food-6.jpg", alt: "The team showed up, the kitchen delivered — a night of great food and company", category: "food" },
    { src: "/images/food-7.jpg", alt: "Wagyu Daging Berbola starter — fragrant wok-fried truffle rice with marinated wagyu and holy basil", category: "food" },
    { src: "/images/food-8.jpg", alt: "At Mesa on 51, the Mero brings a clean, grilled grouper cooked to retain its natural moisture", category: "food" },
    { src: "/images/food-9.jpg", alt: "Canelones de Wagyu y Trufa — a rich, slow-braised wagyu pasta dish", category: "food" },
    { src: "/images/food-10.jpg", alt: "Three new pasta dishes arrive at Mana — where new flavors meet the table", category: "food" },
    { src: "/images/food-11.jpg", alt: "Chechen Ravioli — spicy and hearty, an explosion of flavour in every bite", category: "food" },
    { src: "/images/food-12.jpg", alt: "Our dream lamb chops crusted in za'atar with creamy mashed potatoes and asparagus", category: "food" },
    { src: "/images/food-13.jpg", alt: "A little change of scenery — the warmth, good food, and familiar atmosphere", category: "food" },
    // ── SPACE ─────────────────────────────────────────────
    { src: "/images/space-1.jpg", alt: "Hidden fusion gem in KL — Mana Dining on Jalan Hang Kasturi", category: "space" },
    { src: "/images/space-2.jpg", alt: "Chinatown's new Mana — a pan-Asian lunch spot with punch on Hang Kasturi Road", category: "space" },
    { src: "/images/space-3.jpg", alt: "An evening gathered around the table — discover a new favourite at Mana Dining", category: "space" },
    { src: "/images/space-4.jpg", alt: "Date night at Mana — a hidden dining spot with cosy ambience and beautiful interiors", category: "space" },
    { src: "/images/space-5.jpg", alt: "Valentine's at Mana — celebrate love with refined flavours and timeless ambience", category: "space" },
    { src: "/images/space-6.jpg", alt: "Mana at a glance — the warmth, good food, and familiar atmosphere in Chinatown KL", category: "space" },
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
          description: "Parmesan, baby spinach, grilled chicken breast.",
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
