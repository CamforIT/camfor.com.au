import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Page Not Found — Camfor",
  description: "The page you're looking for doesn't exist.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-6xl font-bold text-sky-700">404</p>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-sky-700 text-sky-700 font-semibold rounded-md hover:bg-sky-700 hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
