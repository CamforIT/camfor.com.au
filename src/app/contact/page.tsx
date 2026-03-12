import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Contact Us — Camfor PTY LTD",
  description:
    "Get in touch with Camfor for your IT infrastructure and security needs. Located in Macedon, Victoria.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-wide">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Get In Touch</h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Have a question about our IT or security services? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Contact Details
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sky-700 hover:text-sky-800 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-sky-700 hover:text-sky-800 transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Find Us</h3>
                    <p className="text-gray-600">{siteConfig.locationShort}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-sky-50 rounded-xl">
                <h3 className="font-semibold text-gray-900">
                  Business Hours
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Monday – Friday: 8:00 AM – 5:00 PM AEST
                </p>
                <p className="text-sm text-gray-600">
                  Emergency support available 24/7
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a message
              </h2>
              <p className="text-gray-600 mb-6">
                Send us a message with your IT needs and let&apos;s chat!
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
