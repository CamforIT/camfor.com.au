export const siteConfig = {
  name: "Camfor PTY LTD",
  shortName: "Camfor",
  domain: "www.camfor.com.au",
  url: "https://www.camfor.com.au",
  tagline: "Connecting & Protecting Rural Victoria",
  description:
    "Camfor is a pioneering IT infrastructure, IoT, and security hardware provider dedicated to empowering rural Victoria with cutting-edge technology.",
  email: "inquiries@camfor.com.au",
  phone: "0476 598 141",
  phoneHref: "tel:+61476598141",
  location: "Macedon Ranges, Victoria, Australia",
  locationShort: "Macedon, Victoria",
  facebook: "https://www.facebook.com/profile.php?id=100090029043402",
  copyrightStart: 2022,
  founder: "Gerard",

  // SEO Expansion
  serviceAreas: [
    "Macedon Ranges",
    "Woodend",
    "Kyneton",
    "Daylesford",
    "Bendigo",
    "Ballarat",
    "Castlemaine",
    "Gisborne",
    "Melbourne",
    "Continental Australia",
    "Global Remote Infrastructure",
  ],

  navItems: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
