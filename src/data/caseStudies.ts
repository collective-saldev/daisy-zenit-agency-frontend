export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: number;
  services: string[];
  tags: string[];
  cover: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  images: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-platform-redesign",
    title: "E-commerce Platform Redesign",
    client: "TechMart",
    year: 2024,
    services: ["UI/UX Design", "Web Development", "Performance Optimization"],
    tags: ["E-commerce", "React", "Design"],
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    summary:
      "Complete overhaul of an e-commerce platform resulting in 250% increase in conversions and 40% faster page load times.",
    challenge:
      "TechMart's existing platform had poor user experience, slow load times, and a confusing checkout process that led to high cart abandonment rates.",
    solution:
      "We redesigned the entire platform with a focus on user experience, implemented a modern tech stack with React and Next.js, and optimized all assets for performance. The new design featured an intuitive navigation system and streamlined checkout process.",
    outcomes: [
      "250% increase in conversion rate",
      "40% faster page load times",
      "60% reduction in cart abandonment",
      "Mobile sales increased by 180%",
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "brand-identity-startup",
    title: "Brand Identity for Tech Startup",
    client: "InnovateLab",
    year: 2023,
    services: ["Brand Strategy", "Logo Design", "Website Design"],
    tags: ["Branding", "Startup", "Design"],
    cover: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=500&fit=crop",
    summary:
      "Created a complete brand identity from scratch for a tech startup, helping them secure Series A funding.",
    challenge:
      "InnovateLab needed to establish a strong brand presence to compete with established players and attract investors for their Series A round.",
    solution:
      "We developed a comprehensive brand strategy, designed a modern logo system, and created a professional website that effectively communicated their value proposition. The brand identity conveyed innovation while maintaining approachability.",
    outcomes: [
      "Successfully secured $5M Series A funding",
      "Brand recognition increased by 300%",
      "Featured in major tech publications",
      "Attracted top-tier talent",
    ],
    images: [
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    ],
  },
  {
    slug: "enterprise-dashboard",
    title: "Enterprise Analytics Dashboard",
    client: "DataSync Corp",
    year: 2024,
    services: ["UI/UX Design", "Frontend Development", "Data Visualization"],
    tags: ["Enterprise", "Dashboard", "Analytics"],
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    summary:
      "Designed and developed a comprehensive analytics dashboard for enterprise clients, processing millions of data points in real-time.",
    challenge:
      "DataSync needed a powerful yet intuitive dashboard to help their enterprise clients make sense of complex data streams and make data-driven decisions quickly.",
    solution:
      "We created an enterprise-grade dashboard with advanced data visualization, real-time updates, customizable widgets, and role-based access control. The interface was designed to handle large datasets while remaining responsive and user-friendly.",
    outcomes: [
      "Processing 5M+ data points daily",
      "90% user satisfaction rate",
      "50% reduction in decision-making time",
      "Scaled to 10,000+ active users",
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    ],
  },
];
