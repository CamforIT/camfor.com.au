import Link from "next/link";
import Image from "next/image";
import { siteConfig, navLinks } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightRange =
    siteConfig.copyrightStart === currentYear
      ? `${currentYear}`
      : `${siteConfig.copyrightStart}–${currentYear}`;

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA banner */}
      <div className="bg-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Image
              src="/images/camfor-logo.png"
              alt={`${siteConfig.shortName} Logo`}
              width={100}
              height={100}
              className="w-24 h-24 object-contain hidden md:block brightness-0 invert"
            />
            <div>
              <h2 className="text-2xl font-bold">Connecting Rural Communities</h2>
              <p className="mt-2 text-sky-100 max-w-lg">
                We have over 20 years of successfully delivering wireless
                networks, wireless point-to-point links and data capturing to
                industry.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-sky-700 font-semibold rounded-md hover:bg-sky-50 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/camfor-logo.png"
              alt={`${siteConfig.shortName} Logo`}
              width={80}
              height={80}
              className="w-20 h-20 object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Explore links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.locationShort}</li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-400">
          © {copyrightRange} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
