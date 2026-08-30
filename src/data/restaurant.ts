// ============================================================
// MANA RESTAURANT — Centralized Configuration
// Edit this file to update all restaurant information across the site.
// ============================================================

export const restaurant = {
  name: "MANA",
  tagline: "Good food. Good company. A place to linger.",
  description:
    "A cozy, intimate dining destination in the heart of Kuala Lumpur — where good food, warm company, and unhurried evenings come together.",

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
  // Replace with your own Google Maps share link when available
  googleMapsUrl: "https://maps.app.goo.gl/b9DoKukdddt8Yin28",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Mana+66-1+Jalan+Hang+Kasturi+City+Centre+50050+Kuala+Lumpur",

  // ── Booking ──────────────────────────────────────────────
  // Set to a real booking URL when available (e.g., Chope, OpenTable)
  // If empty, the CTA falls back to the phone number
  bookingUrl: "",

  // ── Social Media ─────────────────────────────────────────
  // Replace with real URLs when available
  social: {
    instagram: "https://www.instagram.com/manadining?igsi=MTl3Z3lmdjduajhzMw==",
    facebook: "https://www.facebook.com/share/1FRj4S9wfZ/",
  },

  // ── Opening Hours ────────────────────────────────────────
  // Edit these values when confirmed
  openingHours: [
    { day: "Monday", hours: "Please check our latest opening hours before visiting." },
    { day: "Tuesday", hours: "Please check our latest opening hours before visiting." },
    { day: "Wednesday", hours: "Please check our latest opening hours before visiting." },
    { day: "Thursday", hours: "Please check our latest opening hours before visiting." },
    { day: "Friday", hours: "Please check our latest opening hours before visiting." },
    { day: "Saturday", hours: "Please check our latest opening hours before visiting." },
    { day: "Sunday", hours: "Please check our latest opening hours before visiting." },
  ],

  // ── Reviews ──────────────────────────────────────────────
  rating: "4.9",
  ratingSource: "Based on current public business listing information.",
  reviewsUrl: "", // Replace with Google Maps review URL

  // ── Navigation ───────────────────────────────────────────
  nav: [
    { label: "HOME", href: "#home" },
    { label: "MENU", href: "#menu" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "GALLERY", href: "#gallery" },
    { label: "FIND US", href: "#find-us" },
  ],

  // ── Hero Images ──────────────────────────────────────────
  heroImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&auto=format",

  // ── Introduction ─────────────────────────────────────────
  introImage:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format",
  introHeading: "A place worth slowing down for.",
  introText:
    "Nestled along Jalan Hang Kasturi in the heart of Kuala Lumpur, Mana is a place to slow down and savour. A cozy, wood-lined space where the food takes centre stage and the evening unfolds at its own pace. Whether it is a weeknight dinner, a long weekend lunch, or a quiet date night, Mana invites you to stay a while.",

  // ── Signature Dishes ─────────────────────────────────────
  signatureDishes: [
    {
      name: "Lamb Ribs",
      description:
        "A standout dish — rich, tender, and full of depth. Slow-cooked to perfection, the lamb ribs are a must-try for any visitor.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80&auto=format",
    },
    {
      name: "Nam Yu Fried Chicken",
      description:
        "Crispy, tempura-style coating with a distinctive fermented soy bean flavour. A textural delight that keeps you coming back for more.",
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80&auto=format",
    },
  ],

  // ── Experience ───────────────────────────────────────────
  experienceImages: [
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&auto=format",
      alt: "Warm restaurant interior with ambient lighting",
    },
    {
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80&auto=format",
      alt: "Cozy dining space with wooden accents",
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80&auto=format",
      alt: "Intimate evening atmosphere at Mana",
    },
  ],
  experienceText:
    "Wood-lined walls, warm ambient lighting, and an intimacy that makes every table feel like the best seat in the house. Mana is designed for lingering — for conversations that stretch past dessert, for dates that run late, for meals that become memories.",

  // ── Story ────────────────────────────────────────────────
  storyImage:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format",
  storyHeading: "Come for the food.\nStay for the atmosphere.",
  storyText:
    "At Mana, we believe the best meals are shared. Discover dishes crafted with care, savoured in good company, and accompanied by the kind of conversation that only happens when time slows down. This is dining without the rush — unhurried, uncomplicated, and entirely satisfying.",

  // ── Gallery ──────────────────────────────────────────────
  galleryImages: [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format",
      alt: "Elegantly plated dish",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format",
      alt: "Restaurant interior ambiance",
      category: "space",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format",
      alt: "Close-up of a signature dish",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80&auto=format",
      alt: "Cozy dining corner",
      category: "space",
    },
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80&auto=format",
      alt: "Fresh seasonal ingredients",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80&auto=format",
      alt: "Guests enjoying a meal",
      category: "people",
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format",
      alt: "Artisan pizza fresh from the oven",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format",
      alt: "Beautifully presented dessert",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&auto=format",
      alt: "Evening dining atmosphere",
      category: "space",
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&auto=format",
      alt: "Grilled meat preparation",
      category: "food",
    },
    {
      src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80&auto=format",
      alt: "Friends sharing a meal together",
      category: "people",
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80&auto=format",
      alt: "Cocktail and drink preparation",
      category: "food",
    },
  ],

  // ── Menu Categories ──────────────────────────────────────
  // When menu data is available, replace the placeholder message
  // with actual items in this structure:
  menuCategories: [
    {
      name: "Starters",
      items: null as null | { name: string; description?: string; price: string }[],
    },
    {
      name: "Mains",
      items: null as null | { name: string; description?: string; price: string }[],
    },
    {
      name: "Sides",
      items: null as null | { name: string; description?: string; price: string }[],
    },
    {
      name: "Desserts",
      items: null as null | { name: string; description?: string; price: string }[],
    },
    {
      name: "Drinks",
      items: null as null | { name: string; description?: string; price: string }[],
    },
  ],
  menuNote:
    "Our menu is being updated. Please contact Mana for the latest selection.",

  // ── Footer ───────────────────────────────────────────────
  copyrightYear: 2026,
} as const;
