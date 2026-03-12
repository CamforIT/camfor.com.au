export const siteConfig = {
  name: "Camfor PTY LTD",
  shortName: "Camfor",
  domain: "www.camfor.com.au",
  url: "https://www.camfor.com.au",
  tagline: "Connecting & Protecting Rural Communities",
  description:
    "Camfor is a pioneering IT infrastructure and full security hardware provider dedicated to empowering rural Victoria with cutting-edge connectivity and security solutions.",
  email: "inquiries@camfor.com.au",
  phone: "0476 598 141",
  phoneHref: "tel:+61476598141",
  location: "Macedon Ranges, Victoria, Australia",
  locationShort: "Macedon, Victoria",
  facebook: "https://www.facebook.com/profile.php?id=100090029043402",
  copyrightStart: 2022,
  founder: "Gerard",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
