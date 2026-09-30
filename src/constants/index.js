// NEVIX Digital Technology & Growth Agency — Official Brand, 20 Services, Pricing, Portfolio, 13 Industries & Complete SEO Data

export const BRAND = {
  name: "NEVIX",
  tagline: "BUILD • AUTOMATE • GROW",
  secondaryTagline: "ONE PARTNER. ALL DIGITAL SOLUTIONS.",
  category: "Digital Technology & Growth Agency",
  domain: "https://www.nevix.in",
  location: "Ahmedabad, Gujarat, India",
  email: "nevix0000@gmail.com",
  phone: "+91 91066 02538",
  phoneRaw: "+919106602538",
  logo: "/nevix-logo.jpeg",
  instagram: "https://www.instagram.com/nevix.digital/",
  instagramHandle: "@nevix.digital",
  whatsapp:
    "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business.",
  whatsappMessages: {
    general:
      "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20a%20digital%20project%20for%20my%20business.",
    website:
      "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business.",
    seo: "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20am%20interested%20in%20SEO%20services%20for%20my%20business.",
    automation:
      "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20AI%2Fbusiness%20automation.",
    offer2199:
      "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20a%20website%20starting%20from%20%E2%82%B92%2C199%20for%20my%20business.",
  },
  address: {
    locality: "Ahmedabad",
    region: "Gujarat",
    country: "IN",
  },
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/nevix.digital/" },
    { name: "WhatsApp", href: "https://wa.me/919106602538" },
    { name: "Email", href: "mailto:nevix0000@gmail.com" },
  ],
};

export const NAV_LINKS = [
  { label: "SERVICES", href: "/#services" },
  { label: "WORK", href: "/#work" },
  { label: "PRICING", href: "/#pricing" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" },
];

export const PILLARS = [
  {
    id: "build",
    word: "BUILD",
    index: "01",
    accent: "#C97A67",
    pastelBg: "#F3CFC2",
    secondaryAccent: "#E6D5B8",
    headline: "ENGINEERED DIGITAL PRESENCE & SOFTWARE",
    subtitle:
      "Business websites, custom websites, e-commerce stores, landing pages, portfolios, and custom software solutions built for speed and clarity.",
    description:
      "We help businesses build a stronger online presence with responsive, SEO-friendly, and performance-optimized websites and custom applications.",
    capabilities: [
      { name: "Website Development", slug: "/services/website-development", code: "BLD-01" },
      { name: "Custom Website Development", slug: "/services/website-redesign", code: "BLD-02" },
      { name: "E-commerce Development", slug: "/services/ecommerce-development", code: "BLD-03" },
      { name: "Landing Page Design", slug: "/services/website-development", code: "BLD-04" },
      { name: "Portfolio Websites", slug: "/services/website-development", code: "BLD-05" },
      { name: "Custom Software Development", slug: "/services/custom-software", code: "BLD-06" },
    ],
    architectureNodes: ["Responsive UI", "SEO Structure", "CMS & API", "Speed Optimization", "Support"],
  },
  {
    id: "automate",
    word: "AUTOMATE",
    index: "02",
    accent: "#746291",
    pastelBg: "#DCD3EA",
    secondaryAccent: "#E7A99A",
    headline: "AI CHATBOTS, AGENTS & WORKFLOW AUTOMATION",
    subtitle:
      "Automate repetitive business work with AI chatbots, AI agents, WhatsApp integration, CRM/ERP solutions, and custom business workflows.",
    description:
      "We connect your website, WhatsApp, lead capture, and internal operations so customer inquiries and follow-ups happen automatically.",
    capabilities: [
      { name: "AI Chatbots", slug: "/services/ai-chatbots", code: "AUT-01" },
      { name: "AI Agents", slug: "/services/ai-agents", code: "AUT-02" },
      { name: "Business Automation", slug: "/services/business-automation", code: "AUT-03" },
      { name: "CRM / ERP Solutions", slug: "/services/crm-development", code: "AUT-04" },
      { name: "WhatsApp Integration", slug: "/services/business-automation", code: "AUT-05" },
    ],
    architectureNodes: ["Lead Capture", "AI Chatbot", "WhatsApp Flow", "CRM / ERP", "Auto Follow-Up"],
  },
  {
    id: "grow",
    word: "GROW",
    index: "03",
    accent: "#4B7A63",
    pastelBg: "#DCE9E2",
    secondaryAccent: "#E6D5B8",
    headline: "SEARCH VISIBILITY, LOCAL SEO & DIGITAL MARKETING",
    subtitle:
      "Improve your search rankings, Google Maps visibility, and lead generation with SEO, Local SEO, Google Business Profile, Google Ads, and Social Media.",
    description:
      "We help businesses in Ahmedabad, Gujarat, and across India get discovered online and turn search and social visibility into qualified inquiries.",
    capabilities: [
      { name: "SEO", slug: "/services/seo", code: "GRW-01" },
      { name: "Local SEO", slug: "/services/local-seo", code: "GRW-02" },
      { name: "Google Business Profile", slug: "/services/google-business-profile", code: "GRW-03" },
      { name: "Digital Marketing", slug: "/services/digital-marketing", code: "GRW-04" },
      { name: "Social Media Marketing", slug: "/services/social-media-marketing", code: "GRW-05" },
      { name: "Google Ads / PPC", slug: "/services/google-ads", code: "GRW-06" },
    ],
    architectureNodes: ["On-Page & Tech SEO", "Google Maps / GBP", "Google Ads", "Social Campaigns", "Lead Systems"],
  },
];

// ALL 20 OFFICIAL NEVIX SERVICES ORGANIZED ACROSS 4 CATEGORIES: BUILD, GROW, AUTOMATE, SUPPORT
export const SERVICE_CATEGORIES = [
  {
    category: "BUILD",
    code: "CAT // 01",
    tagline: "Websites, E-commerce, Landing Pages, Portfolios & Custom Software",
    accent: "#C97A67",
    surfaceTint: "#F3CFC2",
    services: [
      {
        number: "01",
        title: "WEBSITE DEVELOPMENT",
        slug: "/services/website-development",
        icon: "lucide:globe",
        shortDesc:
          "Responsive, SEO-friendly, and performance-optimized business and corporate websites built to strengthen your online presence.",
        tags: [
          "Business websites",
          "Corporate websites",
          "Dynamic websites",
          "Responsive websites",
          "SEO-friendly websites",
          "Performance-optimized websites",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20a%20website%20for%20my%20business.",
      },
      {
        number: "02",
        title: "CUSTOM WEBSITE DEVELOPMENT",
        slug: "/services/website-redesign",
        icon: "lucide:code-2",
        shortDesc:
          "Custom business websites, CMS development, dynamic architectures, complete website redesigns, and performance optimization.",
        tags: [
          "Custom business websites",
          "CMS development",
          "Dynamic websites",
          "Website redesign",
          "Performance optimization",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20custom%20website%20development%20for%20my%20business.",
      },
      {
        number: "03",
        title: "E-COMMERCE DEVELOPMENT",
        slug: "/services/ecommerce-development",
        icon: "lucide:shopping-bag",
        shortDesc:
          "Professional online stores with payment integration, product catalogs, order management, and reporting.",
        tags: [
          "E-commerce websites",
          "Payment integration",
          "Product management",
          "Order management",
          "Analytics and reports",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20an%20e-commerce%20website%20for%20my%20business.",
      },
      {
        number: "04",
        title: "LANDING PAGE DESIGN",
        slug: "/services/website-development",
        icon: "lucide:layout-template",
        shortDesc:
          "Conversion-focused landing pages engineered for ad campaigns, lead generation, product launches, and sales funnels.",
        tags: [
          "High-converting landing pages",
          "Lead-generation pages",
          "Product landing pages",
          "Sales funnel pages",
          "A/B testing support",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20need%20a%20high-converting%20landing%20page%20for%20my%20business.",
      },
      {
        number: "05",
        title: "PORTFOLIO WEBSITES",
        slug: "/services/website-development",
        icon: "lucide:sparkles",
        shortDesc:
          "Distinguished portfolio websites for creatives, professionals, photographers, artists, agencies, and businesses.",
        tags: [
          "Creative portfolios",
          "Personal portfolios",
          "Business portfolios",
          "Photographer portfolios",
          "Artist / agency portfolios",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20build%20a%20portfolio%20website.",
      },
      {
        number: "06",
        title: "CUSTOM SOFTWARE DEVELOPMENT",
        slug: "/services/custom-software",
        icon: "lucide:cpu",
        shortDesc:
          "Tailored web applications, business software, CRM/ERP solutions, API development, and ongoing technical support.",
        tags: [
          "Web applications",
          "Business software",
          "CRM / ERP solutions",
          "API development",
          "Maintenance and support",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20custom%20software%20development.",
      },
    ],
  },
  {
    category: "GROW",
    code: "CAT // 02",
    tagline: "SEO, Local SEO, Google Business Profile, Digital Marketing & Lead Generation",
    accent: "#4B7A63",
    surfaceTint: "#DCE9E2",
    services: [
      {
        number: "07",
        title: "SEO",
        slug: "/services/seo",
        icon: "lucide:search-check",
        shortDesc:
          "Comprehensive search engine optimization covering on-page, technical, off-page, keyword research, audits, and reporting.",
        tags: [
          "On-page SEO",
          "Technical SEO",
          "Off-page SEO",
          "Keyword research",
          "Backlink strategy",
          "SEO audits",
          "SEO reporting",
          "Content optimization",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20am%20interested%20in%20SEO%20services%20for%20my%20business.",
      },
      {
        number: "08",
        title: "LOCAL SEO",
        slug: "/services/local-seo",
        icon: "lucide:map-pin",
        shortDesc:
          "Improve local search rankings, Google Maps visibility, local listings, review strategies, and city-specific keyword targeting.",
        tags: [
          "Local search optimization",
          "Google Business Profile optimization",
          "Google Maps visibility",
          "Local listings",
          "Review strategy",
          "Local keyword targeting",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20am%20interested%20in%20Local%20SEO%20services%20for%20my%20business.",
      },
      {
        number: "09",
        title: "GOOGLE BUSINESS PROFILE",
        slug: "/services/google-business-profile",
        icon: "lucide:building-2",
        shortDesc:
          "Complete Google Business Profile setup, category and business information optimization, local visibility, and review management.",
        tags: [
          "Google Business Profile setup",
          "Profile optimization",
          "Business category optimization",
          "Business information optimization",
          "Local visibility",
          "Review management",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20need%20Google%20Business%20Profile%20optimization%20for%20my%20business.",
      },
      {
        number: "10",
        title: "DIGITAL MARKETING",
        slug: "/services/digital-marketing",
        icon: "lucide:trending-up",
        shortDesc:
          "Strategic digital marketing, campaign planning, content strategy, lead generation, performance marketing, and conversion optimization.",
        tags: [
          "Digital marketing strategy",
          "Campaign planning",
          "Content strategy",
          "Lead generation",
          "Performance marketing",
          "Conversion optimization",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20am%20interested%20in%20Digital%20Marketing%20services.",
      },
      {
        number: "11",
        title: "SOCIAL MEDIA MARKETING",
        slug: "/services/social-media-marketing",
        icon: "lucide:share-2",
        shortDesc:
          "Social media setup, content creation, post scheduling, page growth, social campaigns, and targeted advertising.",
        tags: [
          "Social media setup",
          "Content creation",
          "Post scheduling",
          "Page growth",
          "Social campaigns",
          "Advertising campaigns",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20am%20interested%20in%20Social%20Media%20Marketing%20services.",
      },
      {
        number: "12",
        title: "GOOGLE ADS / PPC",
        slug: "/services/google-ads",
        icon: "lucide:target",
        shortDesc:
          "Google Ads setup, search and display campaigns, remarketing, keyword targeting, campaign optimization, and conversion tracking.",
        tags: [
          "Google Ads setup",
          "Search campaigns",
          "Display campaigns",
          "Remarketing",
          "Keyword targeting",
          "Campaign optimization",
          "Conversion tracking",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20run%20Google%20Ads%20for%20my%20business.",
      },
      {
        number: "13",
        title: "LEAD GENERATION SYSTEMS",
        slug: "/services/digital-marketing",
        icon: "lucide:filter",
        shortDesc:
          "End-to-end lead capture systems combining landing pages, lead forms, WhatsApp integration, CRM sync, and follow-up workflows.",
        tags: [
          "Lead capture",
          "Landing pages",
          "Lead forms",
          "WhatsApp integration",
          "CRM integration",
          "Lead qualification",
          "Follow-up workflows",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20build%20a%20lead%20generation%20system%20for%20my%20business.",
      },
    ],
  },
  {
    category: "AUTOMATE",
    code: "CAT // 03",
    tagline: "AI Chatbots, AI Agents, Business Automation, CRM/ERP & WhatsApp Workflows",
    accent: "#746291",
    surfaceTint: "#DCD3EA",
    services: [
      {
        number: "14",
        title: "AI CHATBOTS",
        slug: "/services/ai-chatbots",
        icon: "lucide:message-square-dot",
        shortDesc:
          "AI-powered chatbots for websites, customer support, lead qualification, FAQ automation, and AI-assisted customer conversations.",
        tags: [
          "Website AI chatbot",
          "Customer support chatbot",
          "Lead qualification chatbot",
          "FAQ automation",
          "AI-assisted customer conversations",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20AI%2Fbusiness%20automation.",
      },
      {
        number: "15",
        title: "AI AGENTS",
        slug: "/services/ai-agents",
        icon: "lucide:bot",
        shortDesc:
          "Intelligent AI business agents built for lead qualification, customer support, information retrieval, and workflow assistance.",
        tags: [
          "AI business agents",
          "Lead qualification",
          "Customer support",
          "Information retrieval",
          "Workflow assistance",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20AI%2Fbusiness%20automation.",
      },
      {
        number: "16",
        title: "BUSINESS AUTOMATION",
        slug: "/services/business-automation",
        icon: "lucide:workflow",
        shortDesc:
          "Automate repetitive business workflows including lead automation, customer follow-up, WhatsApp triggers, notifications, and tasks.",
        tags: [
          "Lead automation",
          "Customer follow-up",
          "WhatsApp workflows",
          "Notifications",
          "Task automation",
          "Business workflows",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20AI%2Fbusiness%20automation.",
      },
      {
        number: "17",
        title: "CRM / ERP SOLUTIONS",
        slug: "/services/crm-development",
        icon: "lucide:database",
        shortDesc:
          "Custom CRM and ERP systems for dealer management, customer pipelines, order management, inventory workflows, and analytics.",
        tags: [
          "CRM systems",
          "ERP systems",
          "Dealer management",
          "Customer management",
          "Order management",
          "Inventory workflows",
          "Reports and analytics",
          "Custom business systems",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20CRM%20or%20ERP%20solutions%20for%20my%20business.",
      },
      {
        number: "18",
        title: "WHATSAPP INTEGRATION",
        slug: "/services/business-automation",
        icon: "lucide:message-circle",
        shortDesc:
          "WhatsApp enquiry buttons, lead capture, automated responses, customer follow-up, and business communication workflows.",
        tags: [
          "WhatsApp enquiry buttons",
          "WhatsApp lead capture",
          "Automated responses",
          "Customer follow-up",
          "Business communication workflows",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20WhatsApp%20integration%20and%20automation.",
      },
    ],
  },
  {
    category: "SUPPORT",
    code: "CAT // 04",
    tagline: "Ongoing Website Maintenance, Security, Mobile Usability & Speed Optimization",
    accent: "#9E7B47",
    surfaceTint: "#E6D5B8",
    services: [
      {
        number: "19",
        title: "WEBSITE MAINTENANCE",
        slug: "/services/website-maintenance",
        icon: "lucide:shield-check",
        shortDesc:
          "Reliable website maintenance, security updates, bug fixing, content updates, technical support, and performance improvements.",
        tags: [
          "Website maintenance",
          "Security updates",
          "Bug fixing",
          "Content updates",
          "Technical support",
          "Performance improvements",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20need%20website%20maintenance%20and%20support%20services.",
      },
      {
        number: "20",
        title: "MOBILE & SPEED OPTIMIZATION",
        slug: "/services/website-maintenance",
        icon: "lucide:zap",
        shortDesc:
          "Responsive optimization, Core Web Vitals enhancements, page-speed optimization, and mobile usability improvements.",
        tags: [
          "Responsive optimization",
          "Core Web Vitals",
          "Page-speed optimization",
          "Mobile usability",
          "Performance optimization",
        ],
        whatsappHref:
          "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20optimize%20my%20website%20mobile%20usability%20and%20speed.",
      },
    ],
  },
];

// PRICING & ₹2,199 PROMOTIONAL OFFER DATA
export const PRICING_DATA = {
  promoOffer: {
    badge: "SPECIAL LAUNCH OFFER",
    headline: "WEBSITE STARTING FROM ₹2,199",
    priceLabel: "STARTING FROM",
    price: "₹2,199",
    billing: "ONE TIME",
    description:
      "Get your business online with a professionally designed website starting from ₹2,199.",
    disclaimerPrimary:
      "Basic business website packages start from ₹2,199. Final pricing depends on requirements, pages, features, integrations and customization.",
    disclaimerSecondary:
      "Final pricing depends on pages, design requirements, functionality, integrations and customization.",
    suitableFor: [
      "Small businesses",
      "Local businesses",
      "Professionals",
      "Personal brands",
      "Startups",
      "Service businesses",
    ],
  },
  plans: [
    {
      id: "starter",
      name: "STARTER",
      badge: "STARTING FROM",
      price: "₹2,199",
      billing: "ONE TIME",
      accent: "#C97A67",
      pastel: "#F3CFC2",
      featured: true,
      description:
        "Ideal for small businesses, local shops, professionals, personal brands, and startups getting online with a clean professional presence.",
      features: [
        "Professional Business Website Setup",
        "Mobile-First Responsive Layout",
        "Essential Business & Contact Information",
        "WhatsApp Enquiry Button Integration",
        "Basic On-Page SEO Structure",
      ],
      ctaText: "GET YOUR WEBSITE",
      whatsappHref:
        "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20the%20Starter%20Website%20package%20(starting%20from%20%E2%82%B92%2C199).",
    },
    {
      id: "business",
      name: "BUSINESS",
      badge: "TAILORED SCOPE",
      price: "Custom Quote",
      billing: "BASED ON REQUIREMENTS",
      accent: "#9E7B47",
      pastel: "#E6D5B8",
      featured: false,
      description:
        "Designed for growing companies needing multi-page corporate websites, dynamic content, SEO setup, and lead generation forms.",
      features: [
        "Multi-Page Corporate or Dynamic Website",
        "Custom UI/UX & Brand Presentation",
        "SEO & Local Search Architecture",
        "Lead Forms & WhatsApp Integration",
        "Speed & Core Web Vitals Optimization",
      ],
      ctaText: "GET A QUOTE",
      whatsappHref:
        "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20a%20custom%20quote%20for%20a%20Business%20website%20project.",
    },
    {
      id: "growth",
      name: "GROWTH",
      badge: "COMMERCE & MARKETING",
      price: "Custom Quote",
      billing: "BASED ON REQUIREMENTS",
      accent: "#4B7A63",
      pastel: "#DCE9E2",
      featured: false,
      description:
        "Built for brands scaling online sales and visibility with e-commerce, SEO, Local SEO, Google Ads, and lead generation workflows.",
      features: [
        "E-commerce or High-Growth Web Platform",
        "Payment, Product & Order Management",
        "Comprehensive SEO / Local SEO / GBP",
        "Google Ads & Social Media Funnels",
        "Automated Lead Capture & Follow-Up",
      ],
      ctaText: "GET A QUOTE",
      whatsappHref:
        "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20a%20custom%20quote%20for%20the%20Growth%20package.",
    },
    {
      id: "custom",
      name: "CUSTOM",
      badge: "ENTERPRISE & AI",
      price: "Custom Quote",
      billing: "CUSTOM ARCHITECTURE",
      accent: "#746291",
      pastel: "#DCD3EA",
      featured: false,
      description:
        "Complete custom digital transformation including bespoke software, CRM/ERP systems, AI chatbots, AI agents, and business automation.",
      features: [
        "Custom Software / Web Applications",
        "Tailored CRM & ERP Business Systems",
        "Custom AI Chatbots & AI Business Agents",
        "End-to-End Business & WhatsApp Automation",
        "Dedicated Maintenance & Technical Support",
      ],
      ctaText: "GET A QUOTE",
      whatsappHref:
        "https://wa.me/919106602538?text=Hi%20NEVIX%2C%20I%20want%20to%20discuss%20a%20Custom%20Software%20%2F%20AI%20Automation%20solution.",
    },
  ],
};

export const WHY_NEVIX_CONCEPTS = [
  {
    number: "01",
    title: "VISIBILITY",
    subtitle: "BUILT TO BE FOUND IN SEARCH & LOCAL MAPS",
    description:
      "Every website and digital solution we build is structured with clean semantic HTML, schema markup, Core Web Vitals optimization, and local search signals.",
    metricsLabel: "SEO & LOCAL VISIBILITY",
    accent: "#C97A67",
    surfaceBg: "#F3CFC2",
  },
  {
    number: "02",
    title: "CONVERSION",
    subtitle: "DESIGNED TO TURN VISITORS INTO ENQUIRIES",
    description:
      "We focus on clear service presentation, high-converting landing pages, intuitive mobile navigation, and direct WhatsApp and lead form integration.",
    metricsLabel: "CONVERSION-FOCUSED UX",
    accent: "#9E7B47",
    surfaceBg: "#E6D5B8",
  },
  {
    number: "03",
    title: "AUTOMATION",
    subtitle: "BUILT TO AUTOMATE REPETITIVE WORK",
    description:
      "With AI chatbots, AI agents, automated WhatsApp responses, and CRM workflows, your business can respond to leads and manage follow-ups effortlessly.",
    metricsLabel: "AI & WORKFLOW AUTOMATION",
    accent: "#746291",
    surfaceBg: "#DCD3EA",
  },
  {
    number: "04",
    title: "SCALABILITY",
    subtitle: "ONE PARTNER FOR ALL DIGITAL SOLUTIONS",
    description:
      "From your first business website starting from ₹2,199 to e-commerce, SEO, digital marketing, and custom CRM/ERP software, NEVIX supports every stage of growth.",
    metricsLabel: "BUILD • AUTOMATE • GROW",
    accent: "#4B7A63",
    surfaceBg: "#DCE9E2",
  },
];

export const SEO_ECOSYSTEM = {
  steps: [
    {
      stage: "01",
      name: "SEARCH",
      detail:
        "Customers search on Google and Google Maps for products and services in Ahmedabad, Gujarat, and across India.",
    },
    {
      stage: "02",
      name: "VISIBILITY",
      detail:
        "Technical SEO, on-page optimization, and Google Business Profile signals help your business appear prominently.",
    },
    {
      stage: "03",
      name: "TRAFFIC",
      detail:
        "Relevant visitors land on fast, mobile-friendly, and SEO-optimized service or product pages.",
    },
    {
      stage: "04",
      name: "LEADS",
      detail:
        "Clear calls-to-action, lead forms, WhatsApp integration, and AI chatbots capture and qualify enquiries.",
    },
    {
      stage: "05",
      name: "CUSTOMERS",
      detail:
        "Structured CRM follow-up workflows help your team convert enquiries into long-term customers.",
    },
  ],
  capabilities: [
    {
      title: "On-Page SEO",
      desc: "Heading hierarchy, keyword placement, semantic HTML structure, internal linking, and content optimization.",
    },
    {
      title: "Technical SEO",
      desc: "Crawlability, XML sitemap, robots.txt, canonical URLs, Core Web Vitals, and mobile-first performance.",
    },
    {
      title: "Local SEO",
      desc: "Local search optimization, Google Maps visibility, local listings, review strategy, and local keyword targeting.",
    },
    {
      title: "Google Business Profile",
      desc: "Profile setup, category optimization, business information optimization, local visibility, and review management.",
    },
    {
      title: "Keyword Research",
      desc: "Identifying relevant business, service, product, and local search terms used by your customers.",
    },
    {
      title: "Off-Page SEO & Backlinks",
      desc: "Backlink strategy, local directory listings, and authority building for sustainable search visibility.",
    },
    {
      title: "SEO Audits & Reporting",
      desc: "Complete technical and on-page SEO audits paired with transparent SEO reporting.",
    },
    {
      title: "Content Optimization",
      desc: "Structuring service pages, landing pages, and educational insights to match search intent.",
    },
  ],
};

export const AI_WORKFLOW_STEPS = [
  {
    id: "lead",
    step: "01",
    label: "LEAD",
    sublabel: "Website / Ads / WhatsApp / Search",
    description:
      "An enquiry arrives from your website, Google Search, Google Ads campaign, or direct WhatsApp button.",
    accent: "#C97A67",
    pastel: "#F3CFC2",
  },
  {
    id: "ai",
    step: "02",
    label: "AI",
    sublabel: "AI Chatbot & Agent Response",
    description:
      "NEVIX AI chatbots and agents assist customers immediately, answering FAQs and guiding conversations.",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
  },
  {
    id: "qualification",
    step: "03",
    label: "QUALIFICATION",
    sublabel: "Lead Qualification",
    description:
      "The system captures key requirement details, service interest, and contact information.",
    accent: "#746291",
    pastel: "#DCD3EA",
  },
  {
    id: "crm",
    step: "04",
    label: "CRM",
    sublabel: "CRM / ERP Entry",
    description:
      "Enquiry details are organized into your CRM or business workflow for clear tracking.",
    accent: "#C97A67",
    pastel: "#F3CFC2",
  },
  {
    id: "followup",
    step: "05",
    label: "FOLLOW-UP",
    sublabel: "WhatsApp & Automated Workflows",
    description:
      "Automated WhatsApp responses, notifications, and follow-up workflows keep customers engaged.",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
  },
  {
    id: "conversion",
    step: "06",
    label: "CONVERSION",
    sublabel: "Customer Onboarding & Growth",
    description:
      "Your team connects with qualified leads with complete context to close business smoothly.",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
  },
];

// VERIFIED REAL NEVIX PORTFOLIO PROJECTS (Zero fake numbers, traffic, or revenue claims)
export const PROJECTS = [
  {
    id: 1,
    slug: "deep-krishna-zaveri",
    name: "DEEP KRISHNA ZAVERI",
    category: "Jewellery",
    location: "Ahmedabad, Gujarat",
    year: "Jewellery Brand Website & Digital Showcase",
    accent: "#9E7B47",
    bgGradient: "linear-gradient(135deg, #FFFDF8 0%, #E6D5B8 55%, #F8F5EF 100%)",
    summary:
      "NEVIX built a responsive jewellery showcase website and collection presentation platform for Deep Krishna Zaveri, designed to highlight fine jewellery craftsmanship and enable direct customer enquiries.",
    servicesProvided: [
      "Website Development",
      "Collection Showcase Design",
      "Responsive Mobile UX",
      "Local SEO Structure",
    ],
    caseStudy: {
      challenge:
        "Deep Krishna Zaveri needed a professional digital presence that reflected the quality of their jewellery showroom and allowed customers to explore collections easily on mobile and desktop.",
      strategy:
        "We structured a clean collection-focused website architecture with intuitive category navigation and direct WhatsApp and showroom enquiry options.",
      design:
        "Designed an elegant, warm visual presentation that highlights fine jewellery details while maintaining clear navigation.",
      development:
        "Built a responsive, fast-loading website with optimized image presentation and clean semantic HTML.",
      seoMarketing:
        "Implemented on-page SEO foundations and local search structure to support showroom discoverability.",
      result:
        "Delivered a polished, professional jewellery website that showcases Deep Krishna Zaveri's collections and simplifies customer enquiries.",
    },
  },
  {
    id: 2,
    slug: "rajdeep-gold-palace",
    name: "RAJDEEP GOLD Palace",
    category: "Jewellery",
    location: "Gujarat, India",
    year: "Jewellery Website & Local Visibility",
    accent: "#C97A67",
    bgGradient: "linear-gradient(135deg, #FFFDF8 0%, #F3CFC2 55%, #F8F5EF 100%)",
    summary:
      "NEVIX built a modern digital presence for Rajdeep Gold Palace to present gold and traditional jewellery collections with seamless customer communication.",
    servicesProvided: [
      "Website Development",
      "Responsive Jewellery Catalogue",
      "WhatsApp Integration",
      "Local Search Optimization",
    ],
    caseStudy: {
      challenge:
        "Rajdeep Gold Palace wanted a dedicated website to present their gold jewellery offerings clearly and connect online visitors with their showroom.",
      strategy:
        "Created a structured jewellery showcase paired with clear business information and direct WhatsApp enquiry buttons.",
      design:
        "Crafted a refined, warm gold-and-ivory interface that makes browsing ornament categories simple across all devices.",
      development:
        "Developed a mobile-responsive website with fast page loading and clean category layouts.",
      seoMarketing:
        "Structured page headings, metadata, and local business details for search visibility.",
      result:
        "Provided Rajdeep Gold Palace with an accessible, professional online presence that supports showroom enquiries.",
    },
  },
  {
    id: 3,
    slug: "shree-harikrupa-jewellers",
    name: "SHREE HARIKRUPA JEWELLERS",
    category: "Jewellery",
    location: "Gujarat, India",
    year: "Digital Jewellery Showcase & Brand Website",
    accent: "#9E7B47",
    bgGradient: "linear-gradient(135deg, #F8F5EF 0%, #E6D5B8 50%, #F3CFC2 100%)",
    summary:
      "NEVIX designed and developed a responsive website for Shree Harikrupa Jewellers to organize jewellery collections and streamline customer contact.",
    servicesProvided: [
      "Website Development",
      "UI/UX Design",
      "Catalogue Presentation",
      "SEO-Friendly Structure",
    ],
    caseStudy: {
      challenge:
        "Shree Harikrupa Jewellers needed a unified website where customers could view jewellery categories and reach out directly for enquiries.",
      strategy:
        "Organized collections into clear sections with mobile-first browsing and straightforward contact pathways.",
      design:
        "Built a clean, modern layout with warm tones that complement fine jewellery photography.",
      development:
        "Engineered a responsive, SEO-friendly website optimized for mobile usability and performance.",
      seoMarketing:
        "Configured foundational on-page SEO and clean URLs for better search indexing.",
      result:
        "Established a professional digital identity for Shree Harikrupa Jewellers that presents their jewellery offerings clearly.",
    },
  },
  {
    id: 4,
    slug: "chitra-crop-science",
    name: "CHITRA CROP SCIENCE",
    category: "Agriculture",
    location: "India",
    year: "Agricultural Product Platform & Corporate Website",
    accent: "#4B7A63",
    bgGradient: "linear-gradient(135deg, #FFFDF8 0%, #DCE9E2 58%, #F8F5EF 100%)",
    summary:
      "NEVIX built a structured corporate and product showcase website for Chitra Crop Science, organizing crop protection solutions and dealer enquiry channels.",
    servicesProvided: [
      "Website Development",
      "Product Category Structure",
      "Lead & Dealer Enquiry Forms",
      "On-Page SEO",
    ],
    caseStudy: {
      challenge:
        "Chitra Crop Science needed to organize its range of agricultural and crop protection products into a clear, accessible digital catalog for dealers, distributors, and farmers.",
      strategy:
        "Designed a structured product catalog with clear categorization and dedicated enquiry forms for business partners.",
      design:
        "Created a clean, trustworthy corporate interface in soft mint and warm ivory with easy-to-read product details.",
      development:
        "Developed a responsive, performance-optimized website capable of presenting extensive product information cleanly.",
      seoMarketing:
        "Implemented semantic HTML and product category SEO structure for search discoverability.",
      result:
        "Delivered a comprehensive corporate website that communicates Chitra Crop Science's product portfolio and supports dealer enquiries.",
    },
  },
  {
    id: 5,
    slug: "pujya-agritech",
    name: "PUJYA AGRITECH",
    category: "Agriculture & Manufacturing",
    location: "Gujarat, India",
    year: "B2B Agritech & Manufacturing Website",
    accent: "#4B7A63",
    bgGradient: "linear-gradient(135deg, #F8F5EF 0%, #DCE9E2 50%, #E6D5B8 100%)",
    summary:
      "NEVIX developed a business website for Pujya Agritech to present agricultural solutions, manufacturing capabilities, and distributor contact workflows.",
    servicesProvided: [
      "Website Development",
      "B2B Product Presentation",
      "WhatsApp & Enquiry Integration",
      "SEO Foundation",
    ],
    caseStudy: {
      challenge:
        "Pujya Agritech required a professional B2B website to showcase its agricultural products and connect with dealers and buyers.",
      strategy:
        "Focused on clear product presentation, company credibility, and accessible enquiry channels.",
      design:
        "Designed a structured, responsive layout tailored for clarity across both desktop and mobile devices.",
      development:
        "Built a fast, mobile-friendly website with integrated contact and WhatsApp enquiry buttons.",
      seoMarketing:
        "Added clean metadata, heading structure, and crawlable pages for organic visibility.",
      result:
        "Equipped Pujya Agritech with a professional digital platform to showcase its offerings and receive business enquiries.",
    },
  },
  {
    id: 6,
    slug: "omkaar-associates",
    name: "OMKAAR ASSOCIATES",
    category: "Professional Services",
    location: "Ahmedabad, Gujarat",
    year: "Corporate Website & Consultation Platform",
    accent: "#746291",
    bgGradient: "linear-gradient(135deg, #FFFDF8 0%, #DCD3EA 58%, #F8F5EF 100%)",
    summary:
      "NEVIX built a professional corporate website for Omkaar Associates to communicate their services clearly and streamline client consultation enquiries.",
    servicesProvided: [
      "Corporate Website Development",
      "Service Information Architecture",
      "Lead Capture & WhatsApp Integration",
      "Local SEO",
    ],
    caseStudy: {
      challenge:
        "Omkaar Associates needed a clear, credible corporate website that explained their professional services and made it easy for clients to get in touch.",
      strategy:
        "Created a structured service layout with clear calls-to-action for phone, email, and WhatsApp consultations.",
      design:
        "Crafted a clean, executive layout with strong readability and responsive mobile formatting.",
      development:
        "Developed a fast, SEO-friendly business website with smooth navigation and enquiry forms.",
      seoMarketing:
        "Configured local search signals and semantic page structure for professional service visibility in Ahmedabad.",
      result:
        "Delivered a trustworthy corporate web presence for Omkaar Associates that simplifies client enquiries.",
    },
  },
];

// ALL 13 OFFICIAL INDUSTRIES WE WORK WITH
export const INDUSTRIES = [
  {
    name: "Jewellery",
    slug: "/industries/jewellery",
    hasDedicatedPage: true,
    code: "IND-01",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
    headline: "Websites, Digital Catalogues & Local SEO for Jewellery Businesses",
    description:
      "We help jewellery showrooms and brands showcase their collections online, improve Google Maps and local search visibility, and capture customer enquiries via WhatsApp.",
    solutions: [
      "Jewellery Collection Websites",
      "WhatsApp Enquiry Integration",
      "Local SEO & Google Business Profile",
      "Digital Marketing Campaigns",
    ],
    featuredClients: [
      "Deep Krishna Zaveri",
      "Rajdeep Gold Palace",
      "Shree Harikrupa Jewellers",
    ],
  },
  {
    name: "Manufacturing",
    slug: "/industries/manufacturing",
    hasDedicatedPage: true,
    code: "IND-02",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    headline: "Corporate Websites, SEO & Custom Software for Manufacturers",
    description:
      "We build responsive B2B websites, product catalogs, SEO strategies, and custom CRM/ERP software for manufacturing companies in Ahmedabad, Gujarat, and India.",
    solutions: [
      "B2B Product & Corporate Websites",
      "Search Engine Optimization (SEO)",
      "Dealer & Distributor Lead Systems",
      "Custom CRM / ERP Software",
    ],
    featuredClients: ["Pujya Agritech"],
  },
  {
    name: "Agriculture",
    slug: "/industries/agriculture",
    hasDedicatedPage: true,
    code: "IND-03",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    headline: "Digital Platforms & Product Showcases for Agriculture & Agritech",
    description:
      "We work with crop science and agritech businesses to present product portfolios clearly, support dealer networks, and streamline business enquiries.",
    solutions: [
      "Agricultural Product Websites",
      "Dealer & Distributor Enquiry Forms",
      "Mobile-First Responsive Design",
      "WhatsApp & Lead Automation",
    ],
    featuredClients: ["Chitra Crop Science", "Pujya Agritech"],
  },
  {
    name: "Healthcare",
    slug: "/industries/healthcare",
    hasDedicatedPage: true,
    code: "IND-04",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    headline: "Clinic & Hospital Websites, Local SEO & Patient Enquiry Automation",
    description:
      "We help clinics, hospitals, doctors, and healthcare providers build clear, patient-friendly websites, improve local visibility, and automate appointment enquiries.",
    solutions: [
      "Healthcare & Clinic Websites",
      "Local SEO & Google Maps Visibility",
      "WhatsApp & Chatbot Enquiry Flows",
      "Patient Lead Management",
    ],
    featuredClients: [],
  },
  {
    name: "Real Estate",
    slug: "/industries/real-estate",
    hasDedicatedPage: true,
    code: "IND-05",
    accent: "#746291",
    pastel: "#DCD3EA",
    headline: "Property Websites, Landing Pages & Lead Generation for Real Estate",
    description:
      "We build project websites, high-converting landing pages, Google/Meta ad funnels, and WhatsApp/CRM lead workflows for real estate businesses.",
    solutions: [
      "Real Estate Project Websites & Landing Pages",
      "Google Ads & Social Media Campaigns",
      "AI Chatbot & WhatsApp Lead Capture",
      "CRM Lead Follow-Up Workflows",
    ],
    featuredClients: [],
  },
  {
    name: "Education",
    slug: "/industries/education",
    hasDedicatedPage: false,
    code: "IND-06",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
    headline: "Websites, Admission Landing Pages & Inquiry Automation for Education",
    description:
      "Responsive websites, admission landing pages, AI chatbots for student FAQs, and digital marketing for schools, institutes, and educational organizations.",
    solutions: [
      "Educational & Institute Websites",
      "Admission Lead Landing Pages",
      "AI FAQ & Inquiry Chatbots",
      "Local SEO & Digital Marketing",
    ],
    featuredClients: [],
  },
  {
    name: "Retail",
    slug: "/industries/retail",
    hasDedicatedPage: false,
    code: "IND-07",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    headline: "E-Commerce Stores, Local Visibility & Social Marketing for Retail",
    description:
      "Help your retail store sell online and attract local shoppers with e-commerce development, Google Business Profile optimization, and WhatsApp integration.",
    solutions: [
      "E-Commerce Website Development",
      "Google Business Profile Optimization",
      "Social Media Marketing",
      "WhatsApp Customer Workflows",
    ],
    featuredClients: [],
  },
  {
    name: "Professional Services",
    slug: "/industries/professional-services",
    hasDedicatedPage: false,
    code: "IND-08",
    accent: "#746291",
    pastel: "#DCD3EA",
    headline: "Corporate Websites & Lead Systems for Professional Service Firms",
    description:
      "Professional websites, Local SEO, and consultation inquiry systems for consultants, CA firms, legal practices, architects, and service agencies.",
    solutions: [
      "Corporate & Advisory Websites",
      "Consultation Lead Capture",
      "SEO & Local Search Visibility",
      "WhatsApp & CRM Integration",
    ],
    featuredClients: ["Omkaar Associates"],
  },
  {
    name: "Wholesalers",
    slug: "/industries/wholesalers",
    hasDedicatedPage: false,
    code: "IND-09",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
    headline: "Digital Product Catalogs & Bulk Enquiry Systems for Wholesalers",
    description:
      "Showcase wholesale product lines online, capture bulk buyer enquiries, and automate WhatsApp and CRM follow-ups.",
    solutions: [
      "Wholesale Product Websites",
      "Bulk Enquiry & Lead Forms",
      "WhatsApp Business Integration",
      "Search Engine Optimization",
    ],
    featuredClients: [],
  },
  {
    name: "Distributors",
    slug: "/industries/distributors",
    hasDedicatedPage: false,
    code: "IND-10",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    headline: "Dealer Management, CRM/ERP & Web Platforms for Distributors",
    description:
      "Organize product catalogs, manage dealer networks, and streamline order workflows with custom websites and CRM/ERP solutions.",
    solutions: [
      "Distributor Websites & Portals",
      "Dealer & Order Management CRM/ERP",
      "Automated WhatsApp Notifications",
      "Regional SEO Visibility",
    ],
    featuredClients: [],
  },
  {
    name: "Exporters",
    slug: "/industries/exporters",
    hasDedicatedPage: false,
    code: "IND-11",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    headline: "Global-Ready Websites & Search Visibility for Exporters",
    description:
      "Present your export products and company credentials to international buyers with fast, responsive websites, SEO, and 24/7 AI chatbots.",
    solutions: [
      "Export Showcase Websites",
      "Technical & On-Page SEO",
      "24/7 Website AI Chatbots",
      "Lead Capture & CRM Workflows",
    ],
    featuredClients: [],
  },
  {
    name: "Personal Brands",
    slug: "/industries/personal-brands",
    hasDedicatedPage: false,
    code: "IND-12",
    accent: "#746291",
    pastel: "#DCD3EA",
    headline: "Portfolio Websites, Landing Pages & Social Presence for Personal Brands",
    description:
      "Build a strong personal brand with custom portfolio websites, landing pages, social media marketing, and automated enquiry capture.",
    solutions: [
      "Personal & Creative Portfolio Websites",
      "Lead-Generation Landing Pages",
      "Social Media Setup & Content",
      "WhatsApp Enquiry Integration",
    ],
    featuredClients: [],
  },
  {
    name: "Local Businesses",
    slug: "/industries/local-businesses",
    hasDedicatedPage: false,
    code: "IND-13",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    headline: "Affordable Business Websites (Starting from ₹2,199) & Local SEO",
    description:
      "Get your local business online with a professionally designed website starting from ₹2,199, paired with Google Business Profile and Local SEO.",
    solutions: [
      "Business Websites Starting from ₹2,199",
      "Google Business Profile Setup & Optimization",
      "Google Maps & Local SEO",
      "WhatsApp Enquiry Buttons",
    ],
    featuredClients: [],
  },
];

// COMPLETE SEO SERVICE, LOCATION & INDUSTRY PAGES WITH EXACT TITLES, METAS, H1s & INTERNAL LINKING
export const SEO_PAGES = {
  "/services/website-development": {
    type: "service",
    category: "CATEGORY 1 — BUILD",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    title: "Website Development Company in Ahmedabad | NEVIX",
    metaDescription:
      "NEVIX builds responsive, SEO-friendly and performance-focused business websites in Ahmedabad, designed to create a stronger digital presence.",
    h1: "Website Development in Ahmedabad",
    subtitle: "BUILD // WEBSITE DEVELOPMENT",
    lead: "NEVIX builds responsive, SEO-friendly and performance-focused business websites in Ahmedabad, designed to create a stronger digital presence. Basic business website packages start from ₹2,199, with custom solutions tailored to your requirements.",
    problemHeadline: "WHY YOUR BUSINESS NEEDS A PROFESSIONAL WEBSITE",
    problemText:
      "Customers search online before contacting a business. An outdated, slow, or non-responsive website makes it harder for customers to trust your brand or reach out. NEVIX builds modern websites structured for clarity, speed, mobile usability, and search visibility.",
    deliverables: [
      {
        title: "Business & Corporate Websites",
        desc: "Professional business websites and corporate platforms designed to present your services, products, and company profile clearly.",
      },
      {
        title: "Dynamic & Custom Websites",
        desc: "Custom business websites, CMS development, and dynamic content architectures tailored to your operational needs.",
      },
      {
        title: "Responsive Mobile-First Design",
        desc: "Seamless layouts that adapt cleanly across smartphones, tablets, laptops, and large desktop screens.",
      },
      {
        title: "SEO-Friendly Website Structure",
        desc: "Built with proper heading hierarchy, semantic HTML, clean URLs, image alt attributes, and metadata.",
      },
      {
        title: "Landing Pages & Portfolio Websites",
        desc: "High-converting landing pages, lead-generation pages, sales funnel pages, and creative/business portfolio websites.",
      },
      {
        title: "Performance-Optimized Engineering",
        desc: "Fast loading speeds, Core Web Vitals optimization, and direct WhatsApp and contact form integration.",
      },
    ],
    process: [
      { step: "01", name: "Requirement & Planning", desc: "Understanding your business goals, pages, content, and target audience." },
      { step: "02", name: "UI/UX & Responsive Design", desc: "Designing a clean, modern, and brand-aligned visual layout." },
      { step: "03", name: "Website Development & SEO", desc: "Building responsive pages with SEO-friendly code and WhatsApp/form integration." },
      { step: "04", name: "Testing & Launch", desc: "Checking mobile responsiveness, page speed, and launching your website smoothly." },
    ],
    relatedServices: [
      { title: "SEO Services in Ahmedabad", slug: "/services/seo" },
      { title: "E-commerce Website Development", slug: "/services/ecommerce-development" },
      { title: "Custom Software Development", slug: "/services/custom-software" },
      { title: "Custom Website Development & Redesign", slug: "/services/website-redesign" },
      { title: "Website Maintenance & Speed Optimization", slug: "/services/website-maintenance" },
    ],
    faqs: [
      {
        q: "How much does a business website cost?",
        a: "Basic business website packages at NEVIX start from ₹2,199 (one time). Final pricing depends on your project requirements, number of pages, features, integrations, and level of customization.",
      },
      {
        q: "What is included in a business website?",
        a: "A business website includes responsive mobile and desktop layouts, service or product presentation pages, contact details, direct WhatsApp enquiry integration, and foundational on-page SEO structure.",
      },
      {
        q: "Is the website mobile responsive?",
        a: "Yes. Every website we build is engineered mobile-first so it adapts cleanly across smartphones, tablets, laptops, and desktop monitors.",
      },
      {
        q: "Can you redesign an existing website?",
        a: "Yes. We redesign outdated websites with modern UI/UX, faster mobile performance, clean navigation, and SEO-friendly URL preservation.",
      },
      {
        q: "Is the website SEO-friendly?",
        a: "Yes. All NEVIX websites are built with crawlable semantic HTML, proper heading hierarchy (H1–H3), clean URLs, descriptive metadata, and fast Core Web Vitals performance.",
      },
    ],
  },

  "/services/seo": {
    type: "service",
    category: "CATEGORY 2 — GROW",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    title: "SEO Services in Ahmedabad | SEO Company | NEVIX",
    metaDescription:
      "Grow your online visibility with SEO services from NEVIX in Ahmedabad. Get technical SEO, on-page SEO, local SEO, keyword strategy and search optimization.",
    h1: "SEO Services in Ahmedabad",
    subtitle: "GROW // SEARCH ENGINE OPTIMIZATION",
    lead: "Grow your online visibility with SEO services from NEVIX in Ahmedabad. We provide on-page SEO, technical SEO, off-page SEO, keyword research, SEO audits, content optimization, and transparent reporting designed to improve how customers find your business on Google.",
    problemHeadline: "A GREAT WEBSITE NEEDS SEARCH VISIBILITY TO BRING IN CUSTOMERS",
    problemText:
      "When potential customers search on Google for the products or services you provide in Ahmedabad or across India, clear technical structure and relevant service pages help your business compete for organic visibility and qualified enquiries.",
    deliverables: [
      {
        title: "On-Page SEO",
        desc: "Optimizing titles, meta descriptions, heading hierarchy (H1–H3), internal linking, and page relevance.",
      },
      {
        title: "Technical SEO",
        desc: "Improving site crawlability, XML sitemaps, robots.txt, canonical URLs, Core Web Vitals, and page speed.",
      },
      {
        title: "Keyword Research",
        desc: "Identifying high-intent business, service, product, and local search terms that your customers actively use.",
      },
      {
        title: "Off-Page SEO & Backlink Strategy",
        desc: "Building domain relevance through clean backlink strategies, business citations, and off-page signals.",
      },
      {
        title: "Content Optimization",
        desc: "Refining website copy, service pages, and answer-focused insights so they clearly address customer search intent.",
      },
      {
        title: "SEO Audits & SEO Reporting",
        desc: "Detailed technical and on-page SEO audits paired with regular progress and search visibility reports.",
      },
    ],
    process: [
      { step: "01", name: "SEO Audit & Research", desc: "Reviewing your current website structure, technical health, and target keywords." },
      { step: "02", name: "On-Page & Technical Fixes", desc: "Optimizing metadata, headings, schema markup, internal links, and page speed." },
      { step: "03", name: "Content & Local Signals", desc: "Strengthening service pages, local relevance, and off-page authority." },
      { step: "04", name: "Monitoring & SEO Reporting", desc: "Tracking keyword visibility and refining pages for continuous growth." },
    ],
    relatedServices: [
      { title: "Local SEO Services in Ahmedabad", slug: "/services/local-seo" },
      { title: "Google Business Profile Optimization", slug: "/services/google-business-profile" },
      { title: "Website Development in Ahmedabad", slug: "/services/website-development" },
      { title: "Digital Marketing Services", slug: "/services/digital-marketing" },
    ],
    faqs: [
      {
        q: "What is SEO?",
        a: "Search Engine Optimization (SEO) is the process of improving your website's technical health, page structure, content relevance, and authority so search engines like Google can understand and display your pages for relevant searches.",
      },
      {
        q: "How long does SEO take?",
        a: "SEO is an ongoing, cumulative process. While technical fixes and on-page improvements can be indexed within weeks, building sustained organic search visibility typically develops over 3 to 6 months depending on industry competition and website history.",
      },
      {
        q: "What does SEO cost in Ahmedabad?",
        a: "SEO pricing in Ahmedabad depends on your website size, number of target service/product categories, local vs. national scope, and content requirements. NEVIX provides custom quotes tailored to your business goals.",
      },
      {
        q: "What does an SEO audit include?",
        a: "An SEO audit evaluates your website's crawlability, indexing status, canonical tags, sitemap/robots configuration, Core Web Vitals, mobile usability, heading hierarchy, on-page keyword alignment, and internal linking.",
      },
      {
        q: "What is technical SEO?",
        a: "Technical SEO focuses on the underlying website architecture—including fast page speed, mobile responsiveness, crawlable HTML, structured data (JSON-LD), canonical URLs, and XML sitemaps—so search engines can index your site without errors.",
      },
    ],
  },

  "/services/local-seo": {
    type: "service",
    category: "CATEGORY 2 — GROW",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    title: "Local SEO Services in Ahmedabad | Google Maps & GBP | NEVIX",
    metaDescription:
      "Improve your local visibility with Local SEO, Google Business Profile optimization and Google Maps-focused search strategy from NEVIX in Ahmedabad.",
    h1: "Local SEO Services in Ahmedabad",
    subtitle: "GROW // LOCAL SEARCH & GOOGLE MAPS",
    lead: "Improve your local search visibility with Local SEO, Google Business Profile optimization, and Google Maps-focused search strategy from NEVIX in Ahmedabad. We help showrooms, clinics, offices, and local businesses connect with nearby customers.",
    problemHeadline: "WHAT IS LOCAL SEO & WHY LOCAL SEO MATTERS FOR AHMEDABAD BUSINESSES",
    problemText:
      "Local SEO focuses on helping your business appear when customers search for products or services with local intent on Google Search and Google Maps. According to Google, local results are primarily influenced by relevance, distance, and prominence—making accurate business information, a complete Google Business Profile, and location-relevant website pages essential.",
    deliverables: [
      {
        title: "What is Local SEO & Why It Matters",
        desc: "Aligning your online presence with local search intent so customers in Ahmedabad and nearby areas can discover, call, or visit your business.",
      },
      {
        title: "Google Business Profile Optimization",
        desc: "Completing and optimizing your profile categories, services, business description, photos, posts, and website connection.",
      },
      {
        title: "Google Maps Visibility",
        desc: "Strengthening local relevance, accurate location signals, and profile activity to improve your visibility in Google Maps searches.",
      },
      {
        title: "Local Keyword Research",
        desc: "Identifying service + location queries and natural local search phrases used by customers in Ahmedabad and Gujarat.",
      },
      {
        title: "NAP Consistency & Local Citations",
        desc: "Maintaining consistent business Name, Address/Location, and Phone (NAP) information across your website and trusted directories.",
      },
      {
        title: "Reviews & Reputation Management",
        desc: "Implementing ethical workflows to request genuine customer reviews and respond professionally to build local prominence.",
      },
      {
        title: "Local Landing Pages & Local Content",
        desc: "Structuring helpful, location-relevant service pages and local content without thin doorway spam.",
      },
      {
        title: "Technical Local SEO",
        desc: "Implementing valid LocalBusiness and Organization JSON-LD schema markup, mobile speed optimization, and crawlable contact details.",
      },
      {
        title: "Local Reporting",
        desc: "Clear tracking of profile actions, calls, direction requests, website clicks, and local search queries.",
      },
    ],
    process: [
      { step: "01", name: "Local Presence Audit", desc: "Reviewing your Google Business Profile, NAP consistency, website local signals, and citations." },
      { step: "02", name: "GBP & Website Alignment", desc: "Optimizing categories, services, local landing pages, and LocalBusiness schema markup." },
      { step: "03", name: "Citations & Review Workflow", desc: "Building consistent local citations and structured review response practices." },
      { step: "04", name: "Local Reporting & Updates", desc: "Monitoring local search visibility, customer actions, and ongoing profile updates." },
    ],
    relatedServices: [
      { title: "Google Business Profile Optimization", slug: "/services/google-business-profile" },
      { title: "SEO Services in Ahmedabad", slug: "/services/seo" },
      { title: "Website Development in Ahmedabad", slug: "/services/website-development" },
      { title: "Digital Solutions in Ahmedabad", slug: "/locations/ahmedabad" },
    ],
    faqs: [
      {
        q: "What is Local SEO?",
        a: "Local SEO is the practice of optimizing your website, Google Business Profile, and local citations so your business is more visible for location-based searches on Google Search and Google Maps.",
      },
      {
        q: "How does Google Maps ranking work?",
        a: "Google states that local search and Google Maps results are primarily based on three factors: Relevance (how well your profile and website match what someone searches), Distance (how close the business or service area is to the searcher), and Prominence (how well-known and trusted the business is online through reviews, links, and citations).",
      },
      {
        q: "What is Google Business Profile optimization?",
        a: "Google Business Profile optimization involves accurately completing every part of your business profile—including primary and secondary categories, services, description, phone number, website link, photos, posts, and review responses.",
      },
      {
        q: "How does local SEO help businesses?",
        a: "Local SEO helps nearby customers find your phone number, WhatsApp, website, and location when they are actively looking for a local showroom, clinic, office, or service provider in Ahmedabad.",
      },
      {
        q: "What affects local search visibility?",
        a: "Key factors include Google Business Profile completeness, accurate business categories, website relevance and on-page local SEO, NAP consistency across citations, genuine customer reviews, and proximity to the searcher.",
      },
    ],
  },

  "/services/google-business-profile": {
    type: "service",
    category: "CATEGORY 2 — GROW",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    title: "Google Business Profile Optimization Ahmedabad | NEVIX",
    metaDescription:
      "Optimize your Google Business Profile for better local visibility, relevant searches and customer actions with NEVIX in Ahmedabad.",
    h1: "Google Business Profile Optimization",
    subtitle: "GROW // GOOGLE BUSINESS PROFILE",
    lead: "Optimize your Google Business Profile for better local visibility, relevant searches and customer actions with NEVIX in Ahmedabad. We align your profile with Google's relevance and prominence best practices—without false ranking guarantees.",
    problemHeadline: "COMPLETE, CONSISTENT PROFILE INFORMATION DRIVES CUSTOMER ACTIONS",
    problemText:
      "Google states that local ranking is influenced by relevance, distance, and prominence, and there is no way to pay or request a guaranteed local ranking. However, maintaining a complete, accurate, and active Google Business Profile connected to a well-structured website significantly improves how customers discover and contact your business.",
    deliverables: [
      {
        title: "Profile Completeness & Setup",
        desc: "Ensuring every applicable section of your Google Business Profile is accurately filled out and verified.",
      },
      {
        title: "Business Category Selection",
        desc: "Selecting the most accurate primary business category and relevant secondary categories matching your actual services.",
      },
      {
        title: "Services & Business Description",
        desc: "Writing clear, natural descriptions of your business and structuring your service list for local relevance.",
      },
      {
        title: "Photos, Posts & Q&A",
        desc: "Publishing authentic business photos, regular profile updates/posts, and helpful Q&A information where applicable.",
      },
      {
        title: "Website Connection & Consistency",
        desc: "Linking your profile to fast, mobile-friendly website pages with matching business name, location, and phone details.",
      },
      {
        title: "Review Response Process",
        desc: "Establishing a professional workflow to encourage genuine customer reviews and respond thoughtfully to feedback.",
      },
    ],
    process: [
      { step: "01", name: "Profile Completeness Audit", desc: "Checking categories, business information consistency, and website connection." },
      { step: "02", name: "Category, Services & Description", desc: "Structuring accurate categories, service items, and business description." },
      { step: "03", name: "Photos, Posts & Website Sync", desc: "Updating visual assets, posts, and matching website LocalBusiness schema." },
      { step: "04", name: "Review Response & Maintenance", desc: "Supporting ongoing review responses and accurate business updates." },
    ],
    relatedServices: [
      { title: "Local SEO Services in Ahmedabad", slug: "/services/local-seo" },
      { title: "SEO Services in Ahmedabad", slug: "/services/seo" },
      { title: "Website Development in Ahmedabad", slug: "/services/website-development" },
      { title: "Digital Marketing Services", slug: "/services/digital-marketing" },
    ],
    faqs: [
      {
        q: "Can anyone guarantee a #1 Google Maps ranking?",
        a: "No. Google explicitly states that there is no way to request or pay for a better local ranking, as results depend on relevance, distance, and prominence. Our service focuses on legitimate optimization of your profile completeness, categories, website relevance, and review practices to improve your local visibility.",
      },
      {
        q: "How does my website affect my Google Business Profile?",
        a: "Google uses information on your linked website—such as service descriptions, location context, and consistent contact details—to better understand your business relevance and prominence.",
      },
    ],
  },

  "/services/digital-marketing": {
    type: "service",
    category: "CATEGORY 2 — GROW",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    title: "Digital Marketing Company in Ahmedabad | NEVIX",
    metaDescription:
      "Grow your business online with digital marketing services from NEVIX, including social media, Google Ads, content, lead generation and conversion-focused campaigns.",
    h1: "Digital Marketing Services in Ahmedabad",
    subtitle: "GROW // DIGITAL MARKETING & LEAD GENERATION",
    lead: "Grow your business online with digital marketing services from NEVIX, including social media, Google Ads, content, lead generation and conversion-focused campaigns tailored to your business goals.",
    problemHeadline: "CONNECT YOUR MARKETING CAMPAIGNS WITH REAL LEAD GENERATION",
    problemText:
      "Effective digital marketing combines clear messaging, targeted campaigns, high-converting landing pages, and smooth lead follow-up via WhatsApp and CRM.",
    deliverables: [
      {
        title: "Digital Marketing Strategy",
        desc: "Creating a clear roadmap across search, social media, and paid campaigns based on your industry and audience.",
      },
      {
        title: "Campaign Planning & Execution",
        desc: "Structuring seasonal, product, and service campaigns with clear objectives.",
      },
      {
        title: "Content Strategy",
        desc: "Developing relevant website, landing page, and social content that communicates your value clearly.",
      },
      {
        title: "Lead Generation Systems",
        desc: "Combining landing pages, lead forms, WhatsApp integration, and CRM workflows to capture enquiries.",
      },
      {
        title: "Performance Marketing",
        desc: "Targeted Google Ads and social media advertising focused on generating business enquiries.",
      },
      {
        title: "Conversion Optimization",
        desc: "Improving page layouts, calls-to-action, and enquiry flows so more visitors get in touch.",
      },
    ],
    process: [
      { step: "01", name: "Business & Audience Discovery", desc: "Understanding your offerings, ideal customers, and growth priorities." },
      { step: "02", name: "Funnel & Landing Setup", desc: "Preparing conversion-ready pages, lead forms, and WhatsApp triggers." },
      { step: "03", name: "Campaign Execution", desc: "Launching coordinated SEO, Google Ads, and social media initiatives." },
      { step: "04", name: "Refinement & Optimization", desc: "Reviewing campaign performance and improving conversion pathways." },
    ],
    relatedServices: [
      { title: "SEO Services in Ahmedabad", slug: "/services/seo" },
      { title: "Google Ads / PPC", slug: "/services/google-ads" },
      { title: "Social Media Marketing", slug: "/services/social-media-marketing" },
      { title: "Website Development", slug: "/services/website-development" },
    ],
    faqs: [
      {
        q: "Can NEVIX handle both our website and our digital marketing?",
        a: "Yes. As one partner for all digital solutions, we build your website/landing pages and manage your SEO, Google Ads, social media, and lead automation.",
      },
    ],
  },

  "/services/ecommerce-development": {
    type: "service",
    category: "CATEGORY 1 — BUILD",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    title: "E-commerce Website Development in Ahmedabad | NEVIX",
    metaDescription:
      "Build a professional e-commerce website with NEVIX. Get product management, payment integration, order management and responsive online-store development.",
    h1: "E-commerce Website Development in Ahmedabad",
    subtitle: "BUILD // E-COMMERCE DEVELOPMENT",
    lead: "Build a professional e-commerce website with NEVIX. Get product management, payment integration, order management, analytics, and responsive online-store development tailored for retail and B2B businesses.",
    problemHeadline: "A SMOOTH SHOPPING EXPERIENCE HELPS CUSTOMERS BUY WITH CONFIDENCE",
    problemText:
      "An online store needs clear product organization, mobile-friendly browsing, reliable payment integration, and simple order management so you can manage products and customers effortlessly.",
    deliverables: [
      {
        title: "Responsive E-commerce Websites",
        desc: "Mobile-first online stores designed for smooth product discovery and checkout across all devices.",
      },
      {
        title: "Payment Integration",
        desc: "Secure payment gateway integration supporting UPI, cards, net banking, and standard checkout methods.",
      },
      {
        title: "Product Management",
        desc: "Easy-to-manage product catalogs, categories, images, variants, and pricing.",
      },
      {
        title: "Order Management",
        desc: "Structured dashboard workflows to track customer orders, statuses, and enquiries.",
      },
      {
        title: "Analytics and Reports",
        desc: "Clear visibility into product views, customer orders, and store performance.",
      },
      {
        title: "SEO & WhatsApp Integration",
        desc: "SEO-friendly product/category URLs and direct WhatsApp support buttons for customer assistance.",
      },
    ],
    process: [
      { step: "01", name: "Store & Catalog Planning", desc: "Organizing your product categories, attributes, and checkout flow." },
      { step: "02", name: "Storefront UI/UX Design", desc: "Designing a clean, trustworthy shopping interface." },
      { step: "03", name: "Payment & Order Setup", desc: "Integrating payment gateways, product management, and order workflows." },
      { step: "04", name: "Testing & Store Launch", desc: "Verifying mobile checkout, speed, and launching your online store." },
    ],
    relatedServices: [
      { title: "Website Development", slug: "/services/website-development" },
      { title: "SEO Services", slug: "/services/seo" },
      { title: "Digital Marketing", slug: "/services/digital-marketing" },
      { title: "AI Chatbots & WhatsApp Automation", slug: "/services/business-automation" },
    ],
    faqs: [
      {
        q: "Can I manage products and orders easily on my e-commerce website?",
        a: "Yes. We build e-commerce websites with intuitive product management, order management, payment integration, and reporting.",
      },
    ],
  },

  "/services/business-automation": {
    type: "service",
    category: "CATEGORY 3 — AUTOMATE",
    accent: "#746291",
    pastel: "#DCD3EA",
    title: "AI Automation Company in Ahmedabad | NEVIX",
    metaDescription:
      "Automate repetitive business workflows with AI chatbots, AI agents, lead automation, WhatsApp workflows and custom business automation from NEVIX in Ahmedabad.",
    h1: "AI & Business Automation in Ahmedabad",
    subtitle: "AUTOMATE // WORKFLOWS, WHATSAPP & AI",
    lead: "Automate repetitive business workflows with AI chatbots, AI agents, lead automation, WhatsApp workflows and custom business automation from NEVIX in Ahmedabad.",
    problemHeadline: "SAVE TIME AND RESPOND FASTER BY AUTOMATING REPETITIVE WORK",
    problemText:
      "Manual lead tracking, delayed customer replies, and repetitive follow-ups slow down your team. NEVIX connects your website, WhatsApp, AI assistants, and CRM into streamlined workflows.",
    deliverables: [
      {
        title: "Lead Automation",
        desc: "Automatically capturing leads from your website, landing pages, and campaigns into structured workflows.",
      },
      {
        title: "Customer Follow-Up Workflows",
        desc: "Automated responses and scheduled follow-up reminders so no customer enquiry is missed.",
      },
      {
        title: "WhatsApp Integration & Workflows",
        desc: "WhatsApp enquiry buttons, WhatsApp lead capture, automated responses, and business communication workflows.",
      },
      {
        title: "AI Chatbots & AI Agents",
        desc: "AI-powered assistants for customer support, FAQ automation, and lead qualification.",
      },
      {
        title: "Notifications & Task Automation",
        desc: "Instant team notifications and automated task assignments when new enquiries or orders arrive.",
      },
      {
        title: "CRM / ERP Workflow Connectivity",
        desc: "Connecting lead capture directly with CRM and ERP systems for unified business operations.",
      },
    ],
    process: [
      { step: "01", name: "Workflow Review", desc: "Identifying repetitive communication and lead-handling tasks in your business." },
      { step: "02", name: "Automation Design", desc: "Mapping triggers, WhatsApp messages, AI responses, and CRM actions." },
      { step: "03", name: "Integration & Setup", desc: "Connecting your website, WhatsApp, and business tools." },
      { step: "04", name: "Testing & Handover", desc: "Ensuring smooth, reliable execution across all customer touchpoints." },
    ],
    relatedServices: [
      { title: "AI Chatbots", slug: "/services/ai-chatbots" },
      { title: "AI Agents", slug: "/services/ai-agents" },
      { title: "CRM / ERP Solutions", slug: "/services/crm-development" },
      { title: "Custom Software Development", slug: "/services/custom-software" },
    ],
    faqs: [
      {
        q: "What is AI business automation?",
        a: "AI business automation uses artificial intelligence and connected software workflows to handle repetitive tasks such as answering common customer questions, capturing lead details, sending notifications, and organizing CRM entries.",
      },
      {
        q: "What can an AI chatbot do?",
        a: "An AI chatbot can greet website visitors 24/7, answer frequently asked questions about your services or products, collect visitor contact information, and route enquiries to your team.",
      },
      {
        q: "Can AI qualify leads?",
        a: "Yes. AI chatbots and agents can ask structured questions—such as what service or product a customer needs, their location, and their phone/WhatsApp number—so your team receives organized lead details.",
      },
      {
        q: "Can AI automate WhatsApp workflows?",
        a: "Yes. We integrate WhatsApp enquiry triggers, automated initial responses, lead capture, and structured follow-up workflows connected to your website and CRM.",
      },
    ],
  },

  "/services/ai-chatbots": {
    type: "service",
    category: "CATEGORY 3 — AUTOMATE",
    accent: "#746291",
    pastel: "#DCD3EA",
    title: "AI Chatbot Development Company in Ahmedabad | NEVIX",
    metaDescription:
      "Build AI-powered chatbots for customer support, lead qualification, FAQs and business workflows with NEVIX.",
    h1: "AI Chatbot Development",
    subtitle: "AUTOMATE // AI CHATBOTS",
    lead: "Build AI-powered chatbots for customer support, lead qualification, FAQs and business workflows with NEVIX in Ahmedabad.",
    problemHeadline: "ASSIST WEBSITE VISITORS AND QUALIFY LEADS 24/7",
    problemText:
      "Visitors often have quick questions about your services, products, timings, or pricing. An AI chatbot answers common questions immediately and captures lead details even outside working hours.",
    deliverables: [
      {
        title: "Website AI Chatbot",
        desc: "Interactive AI chatbot integrated directly into your website to greet and assist visitors.",
      },
      {
        title: "Customer Support Chatbot",
        desc: "Helping customers find information about your products, services, and support processes.",
      },
      {
        title: "Lead Qualification Chatbot",
        desc: "Collecting visitor name, phone/WhatsApp, and service requirements in a natural conversation.",
      },
      {
        title: "FAQ Automation",
        desc: "Automatically answering frequently asked questions based on your verified business information.",
      },
      {
        title: "AI-Assisted Customer Conversations",
        desc: "Guiding visitors toward booking a consultation, submitting an enquiry, or chatting on WhatsApp.",
      },
      {
        title: "WhatsApp & CRM Handoff",
        desc: "Routing qualified chatbot enquiries directly to your team via WhatsApp or CRM.",
      },
    ],
    process: [
      { step: "01", name: "Knowledge & FAQ Setup", desc: "Gathering your services, FAQs, and lead qualification questions." },
      { step: "02", name: "Chatbot Configuration", desc: "Designing conversation flows and training the AI assistant." },
      { step: "03", name: "Website & Lead Integration", desc: "Embedding the chatbot on your site and connecting lead notifications." },
      { step: "04", name: "Review & Refinement", desc: "Testing responses to ensure helpful, accurate customer interactions." },
    ],
    relatedServices: [
      { title: "AI & Business Automation", slug: "/services/business-automation" },
      { title: "AI Agents", slug: "/services/ai-agents" },
      { title: "CRM / ERP Solutions", slug: "/services/crm-development" },
      { title: "Website Development", slug: "/services/website-development" },
    ],
    faqs: [
      {
        q: "What can a NEVIX AI chatbot do on my website?",
        a: "It can answer customer FAQs, explain your services, qualify leads by capturing their contact details and requirements, and guide them to WhatsApp or your sales team.",
      },
    ],
  },

  "/services/custom-software": {
    type: "service",
    category: "CATEGORY 1 — BUILD",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    title: "Custom Software Development Company in Ahmedabad | NEVIX",
    metaDescription:
      "NEVIX develops custom business software, web applications, CRM, ERP and API-based solutions tailored to business requirements.",
    h1: "Custom Software Development",
    subtitle: "BUILD // CUSTOM SOFTWARE & WEB APPLICATIONS",
    lead: "NEVIX develops custom business software, web applications, CRM, ERP and API-based solutions tailored to business requirements in Ahmedabad and across India.",
    problemHeadline: "SOFTWARE TAILORED TO HOW YOUR BUSINESS ACTUALLY WORKS",
    problemText:
      "Every business has unique workflows. When generic software doesn't fit your operations, custom web applications and CRM/ERP solutions centralize your data, dealers, orders, and reporting.",
    deliverables: [
      {
        title: "Custom Web Applications",
        desc: "Browser-based applications and portals designed around your specific business processes.",
      },
      {
        title: "Business Software",
        desc: "Internal operations software for managing teams, tasks, customers, and business records.",
      },
      {
        title: "CRM / ERP Solutions",
        desc: "Custom CRM and ERP systems for dealer management, customer management, orders, and inventory workflows.",
      },
      {
        title: "API Development & Integration",
        desc: "Building and connecting APIs to link your website, software, payment systems, and communication tools.",
      },
      {
        title: "Reports and Analytics",
        desc: "Custom dashboards and business reports that give you clear visibility into operations.",
      },
      {
        title: "Maintenance and Support",
        desc: "Ongoing technical support, security updates, bug fixing, and feature enhancements.",
      },
    ],
    process: [
      { step: "01", name: "Requirement Analysis", desc: "Mapping your business workflows, user roles, and software objectives." },
      { step: "02", name: "System Architecture & UI", desc: "Designing database structures and clean, easy-to-use interfaces." },
      { step: "03", name: "Development & API Integration", desc: "Building the software modules and connecting required APIs." },
      { step: "04", name: "Deployment & Support", desc: "Testing, launching, and providing ongoing maintenance and support." },
    ],
    relatedServices: [
      { title: "CRM Development", slug: "/services/crm-development" },
      { title: "ERP Development", slug: "/services/erp-development" },
      { title: "AI & Business Automation", slug: "/services/business-automation" },
      { title: "Website Development", slug: "/services/website-development" },
    ],
    faqs: [
      {
        q: "What types of custom software does NEVIX build?",
        a: "We build web applications, custom business software, CRM and ERP systems, dealer and order management portals, and API integrations.",
      },
    ],
  },

  "/services/website-redesign": {
    type: "service",
    category: "CATEGORY 1 — BUILD",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
    title: "Custom Website Development & Website Redesign in Ahmedabad | NEVIX",
    metaDescription:
      "Upgrade or build a custom website with NEVIX in Ahmedabad. Custom business websites, CMS development, dynamic websites, website redesign, and performance optimization.",
    h1: "Custom Website Development & Redesign",
    subtitle: "BUILD // CUSTOM WEBSITES & REDESIGN",
    lead: "Whether you need a custom CMS website built from scratch or a complete redesign of an existing website, NEVIX delivers responsive, SEO-friendly, and performance-optimized web solutions.",
    problemHeadline: "MODERNIZE YOUR ONLINE PRESENCE FOR TODAY'S CUSTOMERS",
    problemText:
      "If your current website is hard to update, slow on mobile, or no longer reflects your brand quality, a custom website or redesign gives your business a fresh, high-performing foundation.",
    deliverables: [
      { title: "Custom Business Websites", desc: "Tailored layouts and page structures designed around your specific brand and industry." },
      { title: "CMS Development", desc: "Easy-to-manage content systems so you can update pages, products, and announcements." },
      { title: "Dynamic Websites", desc: "Interactive, data-driven pages for catalogs, services, and portfolios." },
      { title: "Website Redesign", desc: "Refreshing outdated websites with modern UI/UX, mobile responsiveness, and clear CTAs." },
      { title: "Performance Optimization", desc: "Improving page load speed, Core Web Vitals, and mobile usability." },
      { title: "SEO-Friendly Migration", desc: "Preserving your URLs, headings, and search visibility during a redesign." },
    ],
    process: [
      { step: "01", name: "Current Website Audit", desc: "Reviewing your existing site or custom project requirements." },
      { step: "02", name: "Custom UI/UX Design", desc: "Creating a clean, modern, and responsive visual design." },
      { step: "03", name: "CMS & Dynamic Development", desc: "Developing the custom website with fast performance and SEO structure." },
      { step: "04", name: "Quality Check & Launch", desc: "Testing across devices and launching smoothly." },
    ],
    relatedServices: [
      { title: "Website Development", slug: "/services/website-development" },
      { title: "SEO Services", slug: "/services/seo" },
      { title: "Website Maintenance & Speed", slug: "/services/website-maintenance" },
      { title: "E-commerce Development", slug: "/services/ecommerce-development" },
    ],
    faqs: [
      {
        q: "Can you redesign my existing website without losing my current content?",
        a: "Yes. We carefully structure your content, improve the design and mobile experience, and maintain SEO-friendly URLs and metadata.",
      },
    ],
  },

  "/services/google-ads": {
    type: "service",
    category: "CATEGORY 2 — GROW",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
    title: "Google Ads Agency in Ahmedabad | NEVIX",
    metaDescription:
      "Generate qualified business enquiries with Google Ads and PPC management in Ahmedabad from NEVIX. Search campaigns, display campaigns, remarketing, and conversion tracking.",
    h1: "Google Ads & PPC Services in Ahmedabad",
    subtitle: "GROW // GOOGLE ADS & PPC",
    lead: "Reach customers actively searching for your products or services with Google Ads and PPC campaigns managed by NEVIX in Ahmedabad.",
    problemHeadline: "REACH HIGH-INTENT CUSTOMERS AT THE EXACT MOMENT THEY SEARCH",
    problemText:
      "Well-structured Google Ads campaigns pair targeted keywords with high-converting landing pages and clear conversion tracking so your advertising budget focuses on real business enquiries.",
    deliverables: [
      { title: "Google Ads Setup", desc: "Complete account setup, campaign structuring, and ad group organization." },
      { title: "Search Campaigns", desc: "Text ads targeting high-intent keywords searched by prospective buyers." },
      { title: "Display Campaigns", desc: "Visual banner campaigns to build brand awareness across Google's network." },
      { title: "Remarketing", desc: "Re-engaging visitors who have previously browsed your website or landing pages." },
      { title: "Keyword Targeting & Optimization", desc: "Focused keyword selection, negative keywords, and ongoing campaign optimization." },
      { title: "Conversion Tracking", desc: "Tracking form submissions, phone calls, and WhatsApp clicks accurately." },
    ],
    process: [
      { step: "01", name: "Keyword & Campaign Planning", desc: "Selecting target keywords, locations, and campaign structure." },
      { step: "02", name: "Landing Page & Tracking", desc: "Aligning landing pages and setting up conversion tracking." },
      { step: "03", name: "Campaign Launch", desc: "Publishing search, display, or remarketing ads." },
      { step: "04", name: "Campaign Optimization", desc: "Refining keywords, bids, and ads for better enquiry quality." },
    ],
    relatedServices: [
      { title: "Digital Marketing Services", slug: "/services/digital-marketing" },
      { title: "Website & Landing Page Development", slug: "/services/website-development" },
      { title: "SEO Services in Ahmedabad", slug: "/services/seo" },
      { title: "Social Media Marketing", slug: "/services/social-media-marketing" },
    ],
    faqs: [
      {
        q: "Do you also design landing pages for Google Ads campaigns?",
        a: "Yes. We design high-converting landing pages and lead-generation pages tailored specifically for Google Ads and marketing funnels.",
      },
    ],
  },

  "/services/social-media-marketing": {
    type: "service",
    category: "CATEGORY 2 — GROW",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    title: "Social Media Marketing Agency in Ahmedabad | NEVIX",
    metaDescription:
      "Build your brand and grow customer engagement with social media marketing in Ahmedabad from NEVIX. Social media setup, content creation, scheduling, and ad campaigns.",
    h1: "Social Media Marketing in Ahmedabad",
    subtitle: "GROW // SOCIAL MEDIA MARKETING",
    lead: "Build a consistent, professional brand presence and reach your target audience with social media marketing and advertising campaigns from NEVIX.",
    problemHeadline: "STAY ACTIVE AND VISIBLE WHERE YOUR CUSTOMERS SPEND TIME",
    problemText:
      "Consistent social media content and targeted social advertising help customers discover your brand, explore your products or services, and message you directly.",
    deliverables: [
      { title: "Social Media Setup", desc: "Setting up and optimizing your business profiles across key social platforms." },
      { title: "Content Creation", desc: "Designing brand-aligned posts, graphics, and informational content." },
      { title: "Post Scheduling", desc: "Maintaining a consistent publishing calendar for your business." },
      { title: "Page Growth", desc: "Strategies focused on building an engaged, relevant audience." },
      { title: "Social Campaigns", desc: "Thematic campaigns for product showcases, services, and seasonal offers." },
      { title: "Advertising Campaigns", desc: "Targeted paid social ads designed for awareness, traffic, and lead generation." },
    ],
    process: [
      { step: "01", name: "Profile & Brand Alignment", desc: "Optimizing social pages and defining content themes." },
      { step: "02", name: "Content Creation & Calendar", desc: "Preparing visual posts and scheduling regular updates." },
      { step: "03", name: "Social & Ad Campaigns", desc: "Running organic and paid campaigns to reach target audiences." },
      { step: "04", name: "Lead & WhatsApp Routing", desc: "Connecting social enquiries with your WhatsApp or website." },
    ],
    relatedServices: [
      { title: "Digital Marketing Services", slug: "/services/digital-marketing" },
      { title: "Google Ads / PPC", slug: "/services/google-ads" },
      { title: "Website Development", slug: "/services/website-development" },
      { title: "WhatsApp & Business Automation", slug: "/services/business-automation" },
    ],
    faqs: [
      {
        q: "Can social media campaigns be linked to WhatsApp enquiries?",
        a: "Yes. We connect social campaigns and landing pages with WhatsApp integration so prospects can message your business directly.",
      },
    ],
  },

  "/services/ai-agents": {
    type: "service",
    category: "CATEGORY 3 — AUTOMATE",
    accent: "#746291",
    pastel: "#DCD3EA",
    title: "AI Agents Development in Ahmedabad | Business AI Automation | NEVIX",
    metaDescription:
      "Deploy AI business agents for lead qualification, customer support, information retrieval, and workflow assistance with NEVIX in Ahmedabad.",
    h1: "AI Agents for Business Workflows",
    subtitle: "AUTOMATE // AI BUSINESS AGENTS",
    lead: "NEVIX builds AI business agents designed to assist with lead qualification, customer support, information retrieval, and repetitive workflow assistance.",
    problemHeadline: "INTELLIGENT AI AGENTS THAT ASSIST YOUR TEAM EVERY DAY",
    problemText:
      "AI agents help businesses handle incoming questions, organize lead details, retrieve product or service information, and support internal workflows efficiently.",
    deliverables: [
      { title: "AI Business Agents", desc: "Custom AI agents configured around your business processes and knowledge base." },
      { title: "Lead Qualification", desc: "Engaging incoming enquiries and organizing key requirement details for your sales team." },
      { title: "Customer Support Assistance", desc: "Assisting customers with accurate responses and routing complex requests to your staff." },
      { title: "Information Retrieval", desc: "Helping teams or customers quickly find relevant product, service, or policy details." },
      { title: "Workflow Assistance", desc: "Connecting AI assistance with notifications, CRM updates, and follow-up tasks." },
      { title: "WhatsApp & Web Integration", desc: "Deploying AI agents across your website and business communication channels." },
    ],
    process: [
      { step: "01", name: "Use-Case Mapping", desc: "Identifying where an AI agent can save time for your team or customers." },
      { step: "02", name: "Agent Setup & Guardrails", desc: "Structuring verified business information and response guidelines." },
      { step: "03", name: "Workflow Integration", desc: "Connecting the agent with your website, WhatsApp, or CRM." },
      { step: "04", name: "Testing & Support", desc: "Monitoring interactions and refining accuracy." },
    ],
    relatedServices: [
      { title: "AI Chatbots", slug: "/services/ai-chatbots" },
      { title: "AI & Business Automation", slug: "/services/business-automation" },
      { title: "CRM / ERP Solutions", slug: "/services/crm-development" },
      { title: "Custom Software Development", slug: "/services/custom-software" },
    ],
    faqs: [
      {
        q: "How do AI agents help small and growing businesses?",
        a: "AI agents handle initial lead qualification, answer common customer questions, retrieve information quickly, and assist with routine workflow steps.",
      },
    ],
  },

  "/services/crm-development": {
    type: "service",
    category: "CATEGORY 3 — AUTOMATE",
    accent: "#746291",
    pastel: "#DCD3EA",
    title: "CRM Development Company in Ahmedabad | Custom CRM & ERP | NEVIX",
    metaDescription:
      "Custom CRM and ERP solutions in Ahmedabad by NEVIX. Dealer management, customer management, order management, inventory workflows, and business analytics.",
    h1: "CRM & ERP Solutions in Ahmedabad",
    subtitle: "AUTOMATE // CRM & ERP SOLUTIONS",
    lead: "NEVIX builds custom CRM and ERP systems for customer management, dealer management, order management, inventory workflows, and business reporting.",
    problemHeadline: "ORGANIZE EVERY LEAD, CUSTOMER, DEALER AND ORDER IN ONE PLACE",
    problemText:
      "Managing enquiries and orders across scattered spreadsheets and chat threads leads to missed follow-ups. A custom CRM or ERP gives your business a clean, centralized system.",
    deliverables: [
      { title: "CRM Systems", desc: "Centralized lead tracking, customer management, and sales follow-up pipelines." },
      { title: "ERP Systems", desc: "Integrated operational modules for orders, inventory, and business workflows." },
      { title: "Dealer Management", desc: "Dedicated workflows for managing dealers, distributors, and partner enquiries." },
      { title: "Order & Inventory Workflows", desc: "Tracking customer orders, stock updates, and fulfillment stages." },
      { title: "Reports and Analytics", desc: "Clear dashboards showing enquiries, orders, and team activity." },
      { title: "Website & WhatsApp Integration", desc: "Capturing leads directly from your website and WhatsApp into your CRM." },
    ],
    process: [
      { step: "01", name: "Workflow Mapping", desc: "Understanding how your team manages leads, customers, dealers, and orders." },
      { step: "02", name: "System Design", desc: "Designing a clean, role-based interface tailored to your staff." },
      { step: "03", name: "Development & Integration", desc: "Building the CRM/ERP modules and connecting website/WhatsApp lead capture." },
      { step: "04", name: "Onboarding & Support", desc: "Deploying the system and supporting your team." },
    ],
    relatedServices: [
      { title: "ERP Development", slug: "/services/erp-development" },
      { title: "Custom Software Development", slug: "/services/custom-software" },
      { title: "AI & Business Automation", slug: "/services/business-automation" },
      { title: "Website Development", slug: "/services/website-development" },
    ],
    faqs: [
      {
        q: "Can NEVIX customize the CRM around our specific business workflow?",
        a: "Yes. We build custom CRM and ERP systems tailored to your exact fields, stages, dealer workflows, and reporting requirements.",
      },
    ],
  },

  "/services/erp-development": {
    type: "service",
    category: "CATEGORY 3 — AUTOMATE",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
    title: "ERP Development Company in Ahmedabad | Custom Business Systems | NEVIX",
    metaDescription:
      "Streamline business operations with custom ERP development in Ahmedabad from NEVIX. Order management, dealer management, inventory workflows, and reporting.",
    h1: "ERP Development in Ahmedabad",
    subtitle: "AUTOMATE // CUSTOM ERP SYSTEMS",
    lead: "NEVIX develops custom ERP systems and business software in Ahmedabad to help businesses manage dealers, orders, inventory workflows, and analytics.",
    problemHeadline: "CONNECT YOUR INVENTORY, ORDERS AND OPERATIONS",
    problemText:
      "When growing businesses outgrow manual spreadsheets, a modular custom ERP brings order management, dealer tracking, inventory workflows, and reporting under one roof.",
    deliverables: [
      { title: "Custom ERP Systems", desc: "Modular ERP software built around your company's operational structure." },
      { title: "Order Management", desc: "Tracking orders from initial placement through processing and dispatch." },
      { title: "Inventory Workflows", desc: "Organizing product stock, categories, and warehouse updates." },
      { title: "Dealer & Customer Management", desc: "Managing B2B dealer networks, customer records, and account histories." },
      { title: "Reports and Analytics", desc: "Actionable operational reports for management visibility." },
      { title: "API & Software Integration", desc: "Connecting your ERP with your website, e-commerce store, or CRM." },
    ],
    process: [
      { step: "01", name: "Operations Discovery", desc: "Reviewing your current order, inventory, and dealer processes." },
      { step: "02", name: "Modular Architecture", desc: "Planning the database, user permissions, and core ERP screens." },
      { step: "03", name: "Software Engineering", desc: "Developing and testing each operational module." },
      { step: "04", name: "Deployment & Maintenance", desc: "Rolling out the system with ongoing technical support." },
    ],
    relatedServices: [
      { title: "CRM / ERP Solutions", slug: "/services/crm-development" },
      { title: "Custom Software Development", slug: "/services/custom-software" },
      { title: "AI & Business Automation", slug: "/services/business-automation" },
      { title: "Website Development", slug: "/services/website-development" },
    ],
    faqs: [
      {
        q: "Can we start with core ERP modules and expand later?",
        a: "Yes. Our custom ERP solutions can be built around your immediate priorities—such as order and inventory workflows—and expanded as your business grows.",
      },
    ],
  },

  "/services/website-maintenance": {
    type: "service",
    category: "CATEGORY 4 — SUPPORT",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
    title: "Website Maintenance & Speed Optimization in Ahmedabad | NEVIX",
    metaDescription:
      "Keep your website fast, secure, and updated with NEVIX website maintenance and mobile speed optimization services in Ahmedabad.",
    h1: "Website Maintenance & Speed Optimization",
    subtitle: "SUPPORT // MAINTENANCE & CORE WEB VITALS",
    lead: "NEVIX provides ongoing website maintenance, security updates, bug fixing, content updates, Core Web Vitals enhancements, and mobile speed optimization.",
    problemHeadline: "KEEP YOUR WEBSITE FAST, SECURE AND ALWAYS UP TO DATE",
    problemText:
      "Websites require regular care to stay secure, load quickly on mobile devices, and reflect updated business content. Our support services keep your digital presence running smoothly.",
    deliverables: [
      { title: "Website Maintenance", desc: "Regular health checks, backups, and ongoing technical care for your website." },
      { title: "Security Updates & Bug Fixing", desc: "Resolving technical issues, fixing broken elements, and maintaining security." },
      { title: "Content Updates", desc: "Updating text, images, products, services, and announcements when needed." },
      { title: "Core Web Vitals & Page-Speed Optimization", desc: "Improving loading speed, asset compression, and rendering performance." },
      { title: "Responsive & Mobile Usability Optimization", desc: "Ensuring smooth layout and tap targets across all mobile screen sizes." },
      { title: "Technical Support", desc: "Direct support via WhatsApp, phone, and email whenever you need assistance." },
    ],
    process: [
      { step: "01", name: "Performance & Health Audit", desc: "Checking page speed, mobile usability, and technical issues." },
      { step: "02", name: "Fixes & Optimization", desc: "Resolving bugs and optimizing images, code, and Core Web Vitals." },
      { step: "03", name: "Content & Security Updates", desc: "Applying required content changes and security best practices." },
      { step: "04", name: "Ongoing Monitoring", desc: "Keeping your website fast and reliable over time." },
    ],
    relatedServices: [
      { title: "Website Development", slug: "/services/website-development" },
      { title: "Custom Website Development", slug: "/services/website-redesign" },
      { title: "SEO Services in Ahmedabad", slug: "/services/seo" },
      { title: "Contact NEVIX", slug: "/contact" },
    ],
    faqs: [
      {
        q: "Can NEVIX maintain and optimize an existing website?",
        a: "Yes. We provide website maintenance, bug fixing, content updates, and mobile/speed optimization for both NEVIX-built websites and existing websites.",
      },
    ],
  },

  "/locations/ahmedabad": {
    type: "location",
    category: "LOCATION HUB — AHMEDABAD, GUJARAT",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    title: "Digital Marketing, SEO & Web Development Company in Ahmedabad | NEVIX",
    metaDescription:
      "NEVIX is an Ahmedabad digital technology and growth agency offering website development, SEO, local SEO, digital marketing, AI automation, e-commerce and custom software solutions.",
    h1: "Digital Solutions for Businesses in Ahmedabad",
    subtitle: "AHMEDABAD, GUJARAT, INDIA",
    lead: "Based in Ahmedabad, Gujarat, NEVIX helps businesses build their digital presence, improve search and Google Maps visibility, automate repetitive workflows, and grow online. One Partner. All Digital Solutions.",
    problemHeadline: "COMPLETE DIGITAL, SEO & SOFTWARE SOLUTIONS FOR AHMEDABAD BUSINESSES",
    problemText:
      "Whether your business operates in Bopal, South Bopal, Satellite, Bodakdev, Vastrapur, Prahlad Nagar, SG Highway, Thaltej, Sola, Science City, Gota, Chandkheda, Navrangpura, Naranpura, CG Road, Ashram Road, Maninagar, Vejalpur, Shilaj, Memnagar, Paldi, Ellisbridge, or Ambawadi, NEVIX provides website development, SEO, Local SEO, digital marketing, and AI automation under one roof.",
    deliverables: [
      {
        title: "SEO & Local SEO in Ahmedabad",
        desc: "Technical SEO, on-page SEO, Local SEO, Google Maps visibility, and Google Business Profile optimization designed to improve search discovery.",
      },
      {
        title: "Website Development & E-commerce",
        desc: "Business websites starting from ₹2,199, custom corporate websites, landing pages, and full e-commerce stores with payment and order management.",
      },
      {
        title: "Digital Marketing & Google Ads",
        desc: "Conversion-focused digital marketing, Google Ads / PPC management, social media marketing, and lead generation systems.",
      },
      {
        title: "AI Automation & AI Chatbots",
        desc: "Website AI chatbots, AI business agents, WhatsApp enquiry automation, and automated customer follow-up workflows.",
      },
      {
        title: "CRM / ERP & Custom Software",
        desc: "Custom business software, web applications, dealer management, inventory workflows, and CRM/ERP solutions.",
      },
      {
        title: "Ahmedabad & Gujarat Business Support",
        desc: "Supporting businesses across all major commercial and industrial areas of Ahmedabad as well as Gandhinagar, Surat, Vadodara, and Rajkot.",
      },
    ],
    process: [
      { step: "01", name: "Consultation", desc: "Discuss your business goals with NEVIX in Ahmedabad via phone, WhatsApp, or email." },
      { step: "02", name: "Build", desc: "Launch a responsive, SEO-friendly website, online store, or custom software platform." },
      { step: "03", name: "Automate", desc: "Connect WhatsApp, AI chatbots, AI agents, and CRM lead workflows." },
      { step: "04", name: "Grow", desc: "Improve visibility with SEO, Local SEO, Google Business Profile, and digital marketing." },
    ],
    relatedServices: [
      { title: "SEO Services in Ahmedabad", slug: "/services/seo" },
      { title: "Local SEO Services in Ahmedabad", slug: "/services/local-seo" },
      { title: "Google Business Profile Optimization", slug: "/services/google-business-profile" },
      { title: "Website Development in Ahmedabad", slug: "/services/website-development" },
      { title: "E-commerce Website Development", slug: "/services/ecommerce-development" },
      { title: "Digital Marketing in Ahmedabad", slug: "/services/digital-marketing" },
      { title: "Google Ads Agency in Ahmedabad", slug: "/services/google-ads" },
      { title: "AI & Business Automation", slug: "/services/business-automation" },
      { title: "Custom Software & CRM/ERP", slug: "/services/custom-software" },
    ],
    faqs: [
      {
        q: "What digital services does NEVIX provide in Ahmedabad?",
        a: "NEVIX provides Website Development, Custom Websites, E-commerce Development, SEO, Local SEO, Google Business Profile Optimization, Digital Marketing, Google Ads, Social Media Marketing, AI Chatbots, AI Agents, Business Automation, CRM/ERP Solutions, Custom Software Development, and Website Maintenance.",
      },
      {
        q: "Which areas in Ahmedabad does NEVIX serve?",
        a: "We work with businesses across all commercial, retail, and industrial areas of Ahmedabad—including SG Highway, Prahlad Nagar, Satellite, Bodakdev, Bopal, South Bopal, Vastrapur, Thaltej, Sola, Science City, Gota, Chandkheda, Navrangpura, CG Road, Ashram Road, Maninagar, Paldi, Ellisbridge, and Ambawadi—as well as across Gujarat and India.",
      },
      {
        q: "How can I contact NEVIX in Ahmedabad?",
        a: "You can call or WhatsApp NEVIX at +91 91066 02538 or email nevix0000@gmail.com to discuss your project.",
      },
    ],
  },

  "/industries/jewellery": {
    type: "industry",
    category: "INDUSTRY // JEWELLERY",
    accent: "#9E7B47",
    pastel: "#E6D5B8",
    title: "Website Development, Local SEO & Digital Marketing for Jewellery | NEVIX",
    metaDescription:
      "NEVIX builds jewellery showcase websites, Local SEO, Google Business Profile optimization, and WhatsApp enquiry systems for jewellers in Ahmedabad and Gujarat.",
    h1: "Digital Solutions for Jewellery Businesses",
    subtitle: "INDUSTRY // JEWELLERY & SHOWROOMS",
    lead: "With portfolio experience including Deep Krishna Zaveri, Rajdeep Gold Palace, and Shree Harikrupa Jewellers, NEVIX helps jewellery brands present collections online and attract showroom enquiries.",
    problemHeadline: "SHOWCASE YOUR JEWELLERY COLLECTIONS AND ATTRACT LOCAL BUYERS",
    problemText:
      "Jewellery buyers explore designs and check local showroom credibility online before visiting. A refined collection website paired with Google Maps visibility helps customers choose your showroom.",
    deliverables: [
      { title: "Jewellery Collection Websites", desc: "Elegant, mobile-friendly websites showcasing gold, silver, diamond, and bridal collections." },
      { title: "Local SEO & Google Business Profile", desc: "Improving visibility when buyers search for jewellers in your city." },
      { title: "WhatsApp Enquiry Integration", desc: "Direct WhatsApp buttons on collections for showroom enquiries and appointments." },
      { title: "E-commerce & Catalogue Systems", desc: "Product management and online ordering options where required." },
      { title: "Social Media & Festive Campaigns", desc: "Digital marketing and social campaigns for wedding and festive seasons." },
      { title: "Speed & Mobile Optimization", desc: "Fast-loading high-resolution jewellery galleries on mobile devices." },
    ],
    process: [
      { step: "01", name: "Collection Planning", desc: "Organizing your jewellery categories and brand story." },
      { step: "02", name: "Luxury Website Design", desc: "Creating a warm, refined digital showcase." },
      { step: "03", name: "Local SEO & WhatsApp Setup", desc: "Connecting Google Business Profile and WhatsApp enquiry flows." },
      { step: "04", name: "Launch & Growth", desc: "Supporting ongoing collection updates and marketing." },
    ],
    relatedServices: [
      { title: "Website Development", slug: "/services/website-development" },
      { title: "Local SEO Services", slug: "/services/local-seo" },
      { title: "Google Business Profile", slug: "/services/google-business-profile" },
      { title: "Social Media Marketing", slug: "/services/social-media-marketing" },
    ],
    faqs: [
      {
        q: "Has NEVIX worked with jewellery businesses?",
        a: "Yes. Our portfolio includes Deep Krishna Zaveri, Rajdeep Gold Palace, and Shree Harikrupa Jewellers.",
      },
    ],
  },

  "/industries/manufacturing": {
    type: "industry",
    category: "INDUSTRY // MANUFACTURING",
    accent: "#C97A67",
    pastel: "#F3CFC2",
    title: "Website Development, SEO & Custom CRM/ERP for Manufacturing | NEVIX",
    metaDescription:
      "NEVIX builds B2B websites, product catalogs, SEO strategies, and custom CRM/ERP software for manufacturing companies in Ahmedabad and Gujarat.",
    h1: "Digital & Software Solutions for Manufacturers",
    subtitle: "INDUSTRY // MANUFACTURING & INDUSTRIAL",
    lead: "NEVIX partners with manufacturing businesses in Ahmedabad, Gujarat, and across India to build professional product websites, improve search visibility, and automate dealer and order workflows.",
    problemHeadline: "PRESENT YOUR MANUFACTURING CAPABILITIES TO B2B BUYERS & DEALERS",
    problemText:
      "Industrial buyers, dealers, and distributors evaluate your product range and credibility through your website. Clear product specifications, SEO, and structured inquiry capture help generate qualified B2B enquiries.",
    deliverables: [
      { title: "B2B Corporate & Product Websites", desc: "Structured websites presenting machinery, industrial products, and technical specifications." },
      { title: "SEO for Manufacturers", desc: "On-page and technical SEO targeting industrial and B2B product search terms." },
      { title: "Lead & Dealer Enquiry Systems", desc: "RFQ forms, WhatsApp integration, and automated enquiry routing." },
      { title: "Custom CRM & ERP Solutions", desc: "Dealer management, order tracking, and inventory workflows." },
      { title: "AI Chatbots for Product Queries", desc: "Assisting visitors with product information and capturing B2B leads 24/7." },
      { title: "Ongoing Maintenance & Support", desc: "Keeping product catalogs and technical pages updated and fast." },
    ],
    process: [
      { step: "01", name: "Product & Workflow Review", desc: "Structuring your industrial product lines and enquiry requirements." },
      { step: "02", name: "Platform Design & Build", desc: "Developing a responsive, fast B2B website or software system." },
      { step: "03", name: "SEO & Automation Setup", desc: "Implementing search optimization and WhatsApp/CRM lead capture." },
      { step: "04", name: "Launch & Scale", desc: "Supporting ongoing B2B growth and software operations." },
    ],
    relatedServices: [
      { title: "Website Development", slug: "/services/website-development" },
      { title: "Custom Software Development", slug: "/services/custom-software" },
      { title: "CRM / ERP Solutions", slug: "/services/crm-development" },
      { title: "SEO Services", slug: "/services/seo" },
    ],
    faqs: [
      {
        q: "Can NEVIX build both a B2B website and a dealer CRM/ERP system?",
        a: "Yes. We develop both corporate/product websites and custom CRM/ERP systems for dealer, order, and inventory management.",
      },
    ],
  },

  "/industries/agriculture": {
    type: "industry",
    category: "INDUSTRY // AGRICULTURE",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    title: "Websites, Product Catalogs & Digital Solutions for Agriculture | NEVIX",
    metaDescription:
      "NEVIX builds websites, product catalogs, dealer enquiry systems, and SEO for agriculture, crop science, and agritech companies.",
    h1: "Digital Solutions for Agriculture & Agritech",
    subtitle: "INDUSTRY // AGRICULTURE & CROP SCIENCE",
    lead: "Having worked with Chitra Crop Science and Pujya Agritech, NEVIX understands how to organize agricultural product portfolios and dealer inquiry channels online.",
    problemHeadline: "CLEAR PRODUCT CATALOGS FOR DEALERS, DISTRIBUTORS & FARMERS",
    problemText:
      "Agricultural and crop science companies often have diverse product categories that need to be easy to browse on mobile phones by dealers, distributors, and farmers.",
    deliverables: [
      { title: "Agricultural Product Websites", desc: "Clean, categorized product showcases for crop protection, seeds, fertilizers, and agritech." },
      { title: "Dealer & Distributor Enquiry Forms", desc: "Dedicated B2B inquiry capture and WhatsApp integration." },
      { title: "Mobile-First Speed Optimization", desc: "Fast-loading pages optimized for mobile users across regions." },
      { title: "Search Engine Optimization", desc: "Helping dealers and buyers find your agricultural products on Google." },
      { title: "CRM & Dealer Management", desc: "Organizing dealer inquiries, orders, and follow-up workflows." },
      { title: "AI Chatbot Assistance", desc: "Answering common product and dealership questions automatically." },
    ],
    process: [
      { step: "01", name: "Product Taxonomy Planning", desc: "Organizing your agricultural products into clear categories." },
      { step: "02", name: "Responsive Web Development", desc: "Building a fast, mobile-friendly corporate and product platform." },
      { step: "03", name: "Enquiry & WhatsApp Setup", desc: "Connecting dealer forms and WhatsApp communication." },
      { step: "04", name: "SEO & Ongoing Support", desc: "Optimizing for search visibility and maintaining product updates." },
    ],
    relatedServices: [
      { title: "Website Development", slug: "/services/website-development" },
      { title: "SEO Services", slug: "/services/seo" },
      { title: "CRM / ERP Solutions", slug: "/services/crm-development" },
      { title: "AI & Business Automation", slug: "/services/business-automation" },
    ],
    faqs: [
      {
        q: "What agriculture projects has NEVIX built?",
        a: "NEVIX has built digital platforms for Chitra Crop Science and Pujya Agritech.",
      },
    ],
  },

  "/industries/healthcare": {
    type: "industry",
    category: "INDUSTRY // HEALTHCARE",
    accent: "#4B7A63",
    pastel: "#DCE9E2",
    title: "Healthcare & Clinic Website Development, Local SEO & Automation | NEVIX",
    metaDescription:
      "NEVIX builds patient-friendly websites, Local SEO, Google Business Profile optimization, and WhatsApp enquiry automation for clinics and healthcare providers.",
    h1: "Digital Solutions for Healthcare & Clinics",
    subtitle: "INDUSTRY // HEALTHCARE & MEDICAL",
    lead: "We help clinics, hospitals, diagnostic centers, and healthcare professionals build clear websites, improve local search visibility, and simplify patient enquiries.",
    problemHeadline: "MAKE IT EASY FOR PATIENTS TO FIND YOUR CLINIC AND GET IN TOUCH",
    problemText:
      "Patients searching for medical specialists or clinics rely on Google Search, Google Maps, and clear mobile websites to check treatments, timings, and contact details.",
    deliverables: [
      { title: "Clinic & Hospital Websites", desc: "Clean, accessible websites presenting doctors, specialties, treatments, and timings." },
      { title: "Local SEO & Google Maps", desc: "Optimizing your clinic's visibility for local medical and specialty searches." },
      { title: "Google Business Profile Optimization", desc: "Accurate clinic categories, hours, directions, and review management." },
      { title: "WhatsApp & Appointment Enquiries", desc: "Simple appointment request forms and WhatsApp enquiry buttons." },
      { title: "AI FAQ Chatbots", desc: "Answering common patient questions about timings, location, and services." },
      { title: "Mobile & Speed Optimization", desc: "Ensuring fast load times and easy one-tap calling on mobile phones." },
    ],
    process: [
      { step: "01", name: "Specialty & Patient Planning", desc: "Organizing your medical services, doctor profiles, and contact options." },
      { step: "02", name: "Healthcare Website Build", desc: "Developing a clean, trustworthy, and mobile-responsive website." },
      { step: "03", name: "Local SEO & GBP Setup", desc: "Optimizing local search and Google Business Profile signals." },
      { step: "04", name: "Enquiry Automation", desc: "Connecting appointment forms and WhatsApp notifications." },
    ],
    relatedServices: [
      { title: "Website Development", slug: "/services/website-development" },
      { title: "Local SEO Services", slug: "/services/local-seo" },
      { title: "Google Business Profile", slug: "/services/google-business-profile" },
      { title: "AI Chatbots", slug: "/services/ai-chatbots" },
    ],
    faqs: [
      {
        q: "Can patients send appointment enquiries via WhatsApp from the website?",
        a: "Yes. We integrate direct WhatsApp enquiry buttons and appointment forms so patients can reach your clinic easily.",
      },
    ],
  },

  "/industries/real-estate": {
    type: "industry",
    category: "INDUSTRY // REAL ESTATE",
    accent: "#746291",
    pastel: "#DCD3EA",
    title: "Real Estate Website Development, Landing Pages & Lead Systems | NEVIX",
    metaDescription:
      "NEVIX builds real estate websites, high-converting project landing pages, Google Ads, Local SEO, and WhatsApp/CRM lead automation in Ahmedabad.",
    h1: "Digital Solutions for Real Estate",
    subtitle: "INDUSTRY // REAL ESTATE & PROPERTY",
    lead: "NEVIX helps real estate developers, property consultants, and builders showcase projects online, run lead-generation campaigns, and automate buyer follow-ups.",
    problemHeadline: "PRESENT YOUR PROJECTS CLEARLY AND CAPTURE BUYER ENQUIRIES",
    problemText:
      "Property buyers want to view project details, amenities, locations, and floor plans on their phones and connect immediately via WhatsApp or call.",
    deliverables: [
      { title: "Real Estate & Project Websites", desc: "Responsive websites showcasing residential and commercial properties." },
      { title: "High-Converting Landing Pages", desc: "Dedicated lead-generation pages for new project launches and ad campaigns." },
      { title: "Google Ads & Social Campaigns", desc: "Targeted campaigns to generate property buyer enquiries." },
      { title: "WhatsApp Integration & Lead Capture", desc: "Instant WhatsApp enquiry triggers and automated responses." },
      { title: "AI Lead Qualification Chatbots", desc: "Engaging property visitors 24/7 and capturing buyer preferences." },
      { title: "CRM Follow-Up Workflows", desc: "Organizing property leads and site-visit follow-ups in a structured CRM." },
    ],
    process: [
      { step: "01", name: "Project & Funnel Planning", desc: "Structuring project highlights, location advantages, and lead capture." },
      { step: "02", name: "Website / Landing Page Build", desc: "Designing and developing fast, mobile-first property pages." },
      { step: "03", name: "CRM & WhatsApp Automation", desc: "Connecting lead forms with WhatsApp and CRM tracking." },
      { step: "04", name: "Marketing & Lead Generation", desc: "Supporting search visibility and paid campaign funnels." },
    ],
    relatedServices: [
      { title: "Website Development", slug: "/services/website-development" },
      { title: "Google Ads / PPC", slug: "/services/google-ads" },
      { title: "Digital Marketing", slug: "/services/digital-marketing" },
      { title: "AI & Business Automation", slug: "/services/business-automation" },
    ],
    faqs: [
      {
        q: "Can NEVIX build dedicated landing pages for real estate ad campaigns?",
        a: "Yes. We design high-converting landing pages integrated with lead forms, WhatsApp buttons, and CRM workflows.",
      },
    ],
  },
};

// ALL 8 REQUIRED BLOG / INSIGHTS ARTICLES (Zero fake case-study statistics)
export const INSIGHTS_ARTICLES = [
  {
    slug: "how-much-does-a-business-website-cost-in-ahmedabad",
    title: "How Much Does a Business Website Cost in Ahmedabad?",
    category: "WEBSITE DEVELOPMENT",
    readTime: "4 MIN READ",
    date: "2026",
    excerpt:
      "Understand how business website pricing works in Ahmedabad—from starter websites starting from ₹2,199 to custom corporate and e-commerce platforms.",
    content: [
      "One of the most common questions business owners ask before going online is: how much should a professional business website cost in Ahmedabad? The honest answer is that website pricing depends on the scope, number of pages, design requirements, functionality, integrations, and level of customization your business needs.",
      "At NEVIX, basic business website packages start from ₹2,199 (one time). This starter option is designed to help small businesses, local businesses, professionals, personal brands, and startups establish a clean, responsive online presence without unnecessary complexity.",
      "As your business requirements grow—such as needing a multi-page corporate website, dynamic CMS management, e-commerce product and payment integration, multilingual content, or custom CRM/ERP software—pricing is tailored through a custom quote based on the exact features required.",
      "When evaluating website cost, always look for essentials that support long-term growth: mobile-first responsiveness, SEO-friendly heading and URL structure, fast page loading, and direct WhatsApp or enquiry form integration.",
    ],
  },
  {
    slug: "seo-services-in-ahmedabad-what-businesses-should-know",
    title: "SEO Services in Ahmedabad: What Businesses Should Know",
    category: "SEARCH ENGINE OPTIMIZATION",
    readTime: "5 MIN READ",
    date: "2026",
    excerpt:
      "A practical guide to on-page SEO, technical SEO, local search, and keyword strategy for businesses looking to improve visibility in Ahmedabad.",
    content: [
      "Search Engine Optimization (SEO) helps your website appear when potential customers search on Google for the products or services you provide. Rather than relying on keyword stuffing or shortcuts, effective SEO is built on clear structure, technical health, and relevant content.",
      "1. Technical SEO: Search engines need to crawl and index your website cleanly. Proper sitemap.xml, robots.txt, canonical URLs, mobile responsiveness, and Core Web Vitals form the foundation.",
      "2. On-Page SEO & Keyword Research: Every core service or product category should have a dedicated page with a clear H1 heading, descriptive title and meta description, and helpful information matching what customers actually search for.",
      "3. Local & Off-Page Signals: Combining website SEO with Google Business Profile optimization and consistent local listings helps businesses in Ahmedabad build lasting search visibility.",
    ],
  },
  {
    slug: "how-to-improve-google-maps-visibility-for-your-business",
    title: "How to Improve Google Maps Visibility for Your Business",
    category: "LOCAL SEO & GBP",
    readTime: "4 MIN READ",
    date: "2026",
    excerpt:
      "Learn how Google Business Profile optimization and Local SEO help showrooms, clinics, and local businesses appear in Google Maps searches.",
    content: [
      "When customers search for a nearby showroom, clinic, office, or service provider, Google Maps and the Local Pack are often the first results they see. Improving your Google Maps visibility makes it easier for local customers to call you, message you on WhatsApp, or visit your location.",
      "Start with complete Google Business Profile optimization: choose the most accurate primary and secondary business categories, verify your address and phone number, list your services clearly, and keep business hours updated.",
      "Pair your profile with local search optimization on your website—including consistent Name, Address, and Phone (NAP) details, location-relevant service pages, LocalBusiness schema markup, and an active review management strategy.",
    ],
  },
  {
    slug: "why-your-business-needs-a-professional-website",
    title: "Why Your Business Needs a Professional Website",
    category: "DIGITAL PRESENCE",
    readTime: "4 MIN READ",
    date: "2026",
    excerpt:
      "Why a responsive, SEO-friendly website remains the digital foundation for credibility, search discovery, and customer enquiries.",
    content: [
      "Before calling a business or visiting a showroom, customers routinely look up the company online. A professional website acts as your 24/7 digital headquarters—presenting your services, portfolio, and contact details with clarity and credibility.",
      "Unlike scattered listings, a website gives you full control over your brand presentation, service explanations, lead capture forms, and WhatsApp enquiry flows.",
      "With packages starting from ₹2,199 at NEVIX, even small and local businesses can launch a professional, mobile-friendly website and expand into SEO, digital marketing, and automation as they grow.",
    ],
  },
  {
    slug: "website-vs-social-media-why-businesses-need-both",
    title: "Website vs Social Media: Why Businesses Need Both",
    category: "DIGITAL STRATEGY",
    readTime: "4 MIN READ",
    date: "2026",
    excerpt:
      "Social media builds engagement and awareness, while your website captures search intent and converts visitors. Here is how they work together.",
    content: [
      "Many businesses wonder whether a social media page is enough or if they still need a dedicated website. In practice, websites and social media serve two different—and complementary—roles in your digital growth.",
      "Social media platforms are ideal for regular updates, visual storytelling, page growth, and targeted advertising campaigns. However, social posts quickly scroll out of view and rarely rank for high-intent Google searches.",
      "Your website is your permanent, searchable asset. When someone searches on Google for a specific service or product in Ahmedabad, your SEO-optimized website captures that intent, while your social media presence reinforces brand activity and trust.",
    ],
  },
  {
    slug: "how-ai-automation-can-help-small-businesses",
    title: "How AI Automation Can Help Small Businesses",
    category: "AI & AUTOMATION",
    readTime: "5 MIN READ",
    date: "2026",
    excerpt:
      "Practical ways small and growing businesses can use AI chatbots, AI agents, and WhatsApp workflows to save time and respond faster to leads.",
    content: [
      "AI automation is no longer limited to large corporations. Small and mid-sized businesses can use practical AI tools and workflow automation to eliminate repetitive work and improve customer response times.",
      "A website AI chatbot or AI agent can answer common customer FAQs 24/7, collect a visitor's contact details and service requirements, and route qualified enquiries directly to your team.",
      "When combined with WhatsApp integration and CRM workflows, automated responses and follow-up reminders ensure every prospective customer receives prompt attention while your team focuses on core business work.",
    ],
  },
  {
    slug: "how-to-choose-a-website-development-company-in-ahmedabad",
    title: "How to Choose a Website Development Company in Ahmedabad",
    category: "WEB DEVELOPMENT GUIDE",
    readTime: "5 MIN READ",
    date: "2026",
    excerpt:
      "Key factors to evaluate when selecting a web development and digital partner in Ahmedabad—from mobile speed and SEO structure to ongoing support.",
    content: [
      "Choosing the right website development partner in Ahmedabad goes beyond looking at visual layouts alone. A business website should be built to load quickly, work smoothly on mobile phones, rank on search engines, and turn visitors into enquiries.",
      "Check whether the agency builds with responsive mobile-first layouts, clean semantic HTML, proper heading hierarchy, and Core Web Vitals optimization.",
      "It is also valuable to work with a partner like NEVIX that offers complete digital solutions—including SEO, Local SEO, digital marketing, WhatsApp integration, AI automation, and ongoing website maintenance—so your website and growth strategy work seamlessly together.",
    ],
  },
  {
    slug: "local-seo-guide-for-ahmedabad-businesses",
    title: "Local SEO Guide for Ahmedabad Businesses",
    category: "LOCAL SEO",
    readTime: "5 MIN READ",
    date: "2026",
    excerpt:
      "Step-by-step Local SEO essentials for Ahmedabad businesses looking to attract local customers through Google Search and Google Maps.",
    content: [
      "For businesses serving customers in Ahmedabad—whether in retail, jewellery, healthcare, real estate, manufacturing, or professional services—Local SEO is one of the most effective ways to generate consistent enquiries.",
      "Local SEO connects three elements: an optimized Google Business Profile, consistent local directory listings, and location-optimized website pages with LocalBusiness schema markup.",
      "By aligning your service keywords with Ahmedabad search intent and maintaining active customer review management, your business becomes easier to discover whenever local buyers search.",
    ],
  },
];
