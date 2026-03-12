import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { FolderOpen } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Projects — Camfor PTY LTD",
  description:
    "Explore Camfor's portfolio of IT infrastructure and security projects across rural Victoria.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-wide">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Projects</h1>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-6">
            <FolderOpen className="w-10 h-10 text-sky-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
          <p className="mt-4 text-gray-600">
            We&apos;re preparing detailed case studies and project highlights
            showcasing our IT infrastructure and security solutions across rural
            Victoria. Check back soon!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
            >
              View Our Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-sky-700 text-sky-700 font-semibold rounded-md hover:bg-sky-700 hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
