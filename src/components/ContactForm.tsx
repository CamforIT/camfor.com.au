import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function ContactForm() {
  return (
    <div className="space-y-6 text-center">
      <p className="text-gray-600">
        Send us an email and we&apos;ll get back to you as soon as possible.
      </p>
      <a
        href={`mailto:${siteConfig.email}?subject=Website%20Enquiry`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
      >
        <Mail className="w-5 h-5" />
        Email Us
      </a>
      <p className="text-sm text-gray-500">
        Or email us directly at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sky-700 hover:text-sky-800 underline"
        >
          {siteConfig.email}
        </a>
      </p>
      {/* TODO: Replace this component with an embedded Google Form */}
    </div>
  );
}
