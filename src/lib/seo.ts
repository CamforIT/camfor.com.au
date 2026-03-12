import { siteConfig } from "./constants";
import type { Metadata } from "next";

interface PageSEO {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/images/camfor-logo.png",
}: PageSEO): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: image,
          width: 662,
          height: 662,
          alt: siteConfig.shortName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Macedon",
      addressRegion: "Victoria",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Place",
      name: "Rural Victoria, Australia",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    sameAs: [siteConfig.facebook],
  };
}
