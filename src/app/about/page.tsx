import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { Users, Lightbulb, ShieldCheck, Shuffle } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "About Us — Camfor PTY LTD",
  description:
    "Learn about Camfor's mission to connect and protect rural communities in Victoria, Australia. Founded by Gerard with decades of global connectivity expertise.",
  path: "/about",
});

const values = [
  {
    icon: Users,
    title: "Community",
    description:
      "Dedication to not just delivering services, but also enriching lives and fostering community growth through enhanced digital connectivity.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We are committed to bringing cutting-edge solutions and the highest standards.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We are about building trust with clients by being transparent about processes, pricing and expectations.",
  },
  {
    icon: Shuffle,
    title: "Adaptability",
    description:
      "Flexibility and the ability to tailor solutions to individual requirements.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-rural.jpg"
            alt="Rural Victoria landscape"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-wide">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Connecting &amp; Protecting
            <br />
            Rural Communities
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-700 font-semibold text-sm uppercase tracking-wide">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Global Expertise, Local Mission
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                <p>
                  Camfor was founded by Gerard, who brings decades of experience leading significant connectivity projects worldwide back to the heart of the Macedon Ranges.
                </p>
                <p>
                  After years of contributing to global advancements in digital
                  infrastructure, Gerard sought to make a more meaningful impact closer to
                  home. Settling in the Macedon Ranges and starting a hobby farm,
                  he witnessed firsthand the connectivity challenges faced by
                  rural communities.
                </p>
                <p>
                  Driven by a desire to apply his extensive expertise where
                  it is most needed, Gerard founded Camfor. Our goal is
                  straightforward: to provide both rural and urban Victoria with access
                  to reliable, high-speed connectivity. Transitioning from
                  international projects to focusing on local needs,
                  Gerard&apos;s journey underpins Camfor&apos;s commitment to
                  enhancing digital accessibility for all.
                </p>
                <p>
                  Through Camfor, we are turning Gerard&apos;s vision into
                  reality, ensuring no community is left behind in today&apos;s
                  digital world.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
            <div className="relative h-80 md:h-[28rem] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/server-rack-brownfields.jpg"
                alt="Camfor data project installation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-sky-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sky-200 font-semibold text-sm uppercase tracking-wide">
            Our Mission
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Connecting Rural Communities
          </h2>
          <p className="mt-6 text-sky-100 text-lg max-w-2xl mx-auto">
            We bridge the digital divide by bringing world-class connectivity
            and security solutions to every corner of rural Victoria.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-sky-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
