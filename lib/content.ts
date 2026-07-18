// Central place for site copy/data. The values below are the DEFAULT/seed content —
// once the admin panel saves changes, the live site reads from the content store
// (see lib/store.ts) instead, falling back to these defaults if storage is empty.

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Therapies", href: "#therapies" },
  { label: "Conditions", href: "#conditions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export const CALENDLY_URL = "https://calendly.com/qrhealthltd";

export const THERAPY_ICONS = ["needle", "point", "cup", "hand", "energy", "wave", "flame"] as const;
export type TherapyIcon = (typeof THERAPY_ICONS)[number];

export type Therapy = {
  name: string;
  description: string;
  icon: TherapyIcon;
  photoUrl?: string;
};

export type PriceRow = {
  treatment: string;
  duration: string;
  price: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
};

export type SiteContent = {
  site: {
    name: string;
    tagline: string;
    welcomeParagraphs: string[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    photoUrl: string;
  };
  therapies: Therapy[];
  conditions: string[];
  priceList: PriceRow[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  disclaimer: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
    instagram: string;
    facebook: string;
  };
  photoBreakImage: string;
};

export const DEFAULT_CONTENT: SiteContent = {
  site: {
    name: "QR Health",
    tagline: "Restore Balance. Renew Wellbeing.",
    welcomeParagraphs: [
      "At QR Health, ancient wisdom meets modern care. With 20 years of experience in Traditional Chinese Medicine from both the UK and China, we offer a range of holistic therapies designed to restore balance, ease pain and support your body's natural ability to heal.",
      "Every treatment plan is bespoke - built around you, your symptoms and your goal of balance and lasting wellbeing.",
    ],
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "With over 20 years of experience in Traditional Chinese Medicine, trained and practised in both the UK and China, I bring a depth of knowledge that bridges ancient wisdom and modern clinical care.",
      "My approach is simple: listen first, treat the root cause, and build a plan that is entirely personal to you. Every person who walks through the door is different — and so is every treatment.",
    ],
    photoUrl: "",
  },
  therapies: [
    {
      name: "Traditional Chinese Medicine Acupuncture",
      description:
        "A time-honoured practice using fine, sterile needles to stimulate specific points on the body, encouraging the free flow of Qi (energy) and restoring balance. Acupuncture is widely used to manage pain, reduce stress, and support the body's natural healing processes.",
      icon: "needle",
    },
    {
      name: "Origin Point Medicine (Yuan Shi Dian)",
      description:
        "A specialised and precise form of point therapy rooted in classical Chinese medical theory, targeting root-cause imbalances rather than just symptoms. This refined technique works to recalibrate the body's internal systems for deeper, longer-lasting results.",
      icon: "point",
    },
    {
      name: "Cupping Jar Massage",
      description:
        "Using suction cups along the muscles and meridians, cupping helps release tension, improve circulation, and draw out stagnation. It's a deeply relaxing yet powerful therapy, often used alongside acupuncture for enhanced results.",
      icon: "cup",
    },
    {
      name: "Acupressure",
      description:
        "A gentle, needle-free therapy using targeted finger pressure on the body's acupuncture points. Acupressure eases tension, promotes relaxation, and is a wonderful option for those seeking a softer approach to TCM.",
      icon: "hand",
    },
    {
      name: "Reiki",
      description:
        "A gentle Japanese healing technique that channels energy to promote relaxation, emotional balance, and a deep sense of calm. Reiki works on the body's energetic level to support overall wellbeing.",
      icon: "energy",
    },
    {
      name: "Sound Therapy",
      description:
        "Immersive, soothing sound vibrations help guide the body and mind into deep relaxation. Sound therapy is ideal for stress relief, mental clarity, and restoring inner calm.",
      icon: "wave",
    },
    {
      name: "Moxibustion",
      description:
        "A warming therapy using the herb mugwort, burned near the skin to stimulate circulation and Qi flow. Often used alongside acupuncture, moxibustion is especially effective for cold-related conditions and improving overall vitality.",
      icon: "flame",
    },
  ],
  conditions: [
    "Sleep disorders and insomnia",
    "Stress and anxiety",
    "Digestive disorders including IBS, bloating and acid reflux",
    "Pain management from injury, arthritis or fibromyalgia",
    "Fertility support and assisted IVF treatment",
    "Tennis elbow",
    "Frozen shoulder",
    "Migraines and tension headaches",
    "Lower back pain and sciatica",
    "Neck and shoulder tension",
    "Sciatica and nerve pain",
    "Menstrual and hormonal imbalances",
    "Menopause symptoms",
    "Allergies and hay fever",
    "Chronic fatigue",
    "Sports injuries",
    "Anxiety-related insomnia",
    "Skin conditions such as eczema and acne",
    "Weight management support",
    "Postnatal recovery",
    "Immune support and recurrent colds",
    "Carpal tunnel syndrome",
    "Knee pain and osteoarthritis",
    "Jaw tension and TMJ disorders",
    "General wellbeing maintenance",
  ],
  priceList: [
    { treatment: "Acupuncture – Initial Consultation", duration: "70 mins", price: "£90" },
    { treatment: "Acupuncture – Follow Up", duration: "50 mins", price: "£80" },
    { treatment: "Origin Point Therapy – Initial Consultation", duration: "70 mins", price: "£90" },
    { treatment: "Origin Point Therapy – Follow Up", duration: "50 mins", price: "£80" },
    { treatment: "Cupping Jar Massage", duration: "40 mins", price: "£60" },
    { treatment: "Reiki", duration: "40 mins", price: "£60" },
    { treatment: "Sound Therapy", duration: "40 mins", price: "£60" },
    { treatment: "Moxibustion", duration: "40 mins", price: "£60" },
  ],
  testimonials: [
    {
      quote:
        "After months of back pain, a few sessions here made a bigger difference than anything else I'd tried. I can't recommend it enough.",
      name: "Placeholder — replace with a real testimonial",
    },
    {
      quote:
        "The most relaxing and professional experience. I always leave feeling lighter, calmer and pain-free.",
      name: "Placeholder — replace with a real testimonial",
    },
  ],
  faqs: [
    {
      question: "What should I expect during my first visit?",
      answer:
        "Your first appointment includes a full consultation covering your medical history, symptoms and goals, followed by your treatment. Please allow a little extra time for this initial session.",
    },
    {
      question: "How many sessions will I need?",
      answer:
        "This varies from person to person and depends on your condition. Many people notice improvement within a few sessions — your practitioner will discuss a recommended plan with you at your first visit.",
    },
    {
      question: "Does acupuncture hurt?",
      answer:
        "The needles used are extremely fine — most people feel little more than a slight tingling sensation, and many find the treatment deeply relaxing.",
    },
  ],
  disclaimer:
    "The therapies offered at QR Health are complementary in nature and are not intended to replace any medications, treatments, or advice prescribed by a medical doctor. Please continue to follow guidance from your GP or healthcare provider alongside any treatment received here. If you have a medical condition, are pregnant, or are currently undergoing medical treatment, please inform your practitioner prior to booking.",
  contact: {
    phone: "+44 7597 773444",
    email: "info@qrhealth.co.uk",
    address: "West London",
    hours: "[Opening hours]",
    instagram: "#",
    facebook: "#",
  },
  photoBreakImage: "/images/candles-on-beige.avif",
};
