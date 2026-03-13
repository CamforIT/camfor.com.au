import Image from "next/image";
import { generatePageMetadata, generateFAQJsonLd } from "@/lib/seo";
import ServiceInquiryForm from "@/components/ServiceInquiryForm";
import { siteConfig } from "@/lib/constants";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Services — IT Infrastructure, Security & IoT Solutions",
  description:
    "IT infrastructure services, security solutions, and custom IoT embedded systems (ESP32, LoRa) for agriculture and rural Victoria.",
  path: "/services",
});

const faqs = [
  {
    question: "Do you install CCTV and alarm systems in remote areas like Bendigo and Ballarat?",
    answer: "Yes, Camfor specializes in deploying high-definition CCTV, access control, and alarm systems across rural Victoria, including remote agricultural properties where standard connectivity might be a challenge."
  },
  {
    question: "How do your Agricultural Sensor Networks work?",
    answer: "We utilize long-range, low-power LoRaWAN wireless telemetry to monitor soil moisture, temperature, and water flow over vast distances. This allows farm monitoring without relying on traditional 4G/5G connections."
  },
  {
    question: "Can I upgrade my existing IT network without throwing out my current hardware?",
    answer: "Absolutely. Our 'Brownfields' IT service focuses on analyzing your existing digital infrastructure and pinpointing areas for improvement, seamlessly integrating modern speed enhancements and security upgrades."
  }
];

const iotServices = [
  {
    title: "Agricultural Sensor Networks",
    image: "/images/security-stock.jpg",
    subtitle: "Precision Telemetry & Monitoring",
    description:
      "Leverage long-range wireless telemetry and low-power edge nodes to gather real-time environmental data across vast agricultural landscapes. Ideal for soil moisture, temperature tracking, and water flow analysis.",
  },
  {
    title: "Embedded Hardware Design",
    image: "/images/rural-landscape.jpg",
    subtitle: "Custom Hardware & Sensor Integration",
    description:
      "From concept to field-ready hardware, we develop custom firmware and rugged sensor integrations tailored for harsh rural environments. Our embedded solutions are built to be robust, power-efficient, and easily deployable.",
  },
  {
    title: "Data Orchestration & APIs",
    image: "/images/about-rural.jpg",
    subtitle: "Cloud Architecture & Data Platforms",
    description:
      "Transform raw sensor data into actionable insights. We build automated control systems, robust APIs, and scalable data platforms to power custom analytics dashboards like our HarvestPro intelligence suite.",
  },
];

const itServices = [
  {
    title: "New Installation (Greenfields)",
    image: "/images/server-rack-greenfields.jpg",
    description:
      "New Installations service is designed for those venturing into digital connectivity for the first time or looking to establish a new premise. From the ground up, we offer comprehensive solutions that begin with a detailed assessment of your unique needs. Our team expertly designs a tailored connectivity infrastructure that not only meets today's requirements but is scalable for tomorrow's growth. With full project management, we ensure a seamless implementation process, guiding you from concept to completion with precision and care. Let us build your digital foundation, ensuring every connection counts.",
  },
  {
    title: "Updating Existing (Brownfields)",
    image: "/images/server-rack-brownfields.jpg",
    description:
      "This service is tailored for businesses and communities seeking to enhance, expand, or modernise their existing digital infrastructure. Recognising the rapid pace of technological advancement, Camfor provides expert analysis to pinpoint areas for improvement, from speed enhancements to security upgrades. Our holistic approach includes designing a customised upgrade plan that integrates seamlessly with your current setup, managed meticulously from start to finish. With Camfor, upgrading means not just keeping pace with change but leading the charge, ensuring your connectivity infrastructure propels you forward.",
  },
];

const securityServices = [
  {
    title: "CCTV",
    image: "/images/cctv-camera.jpg",
    subtitle: "Secure Your Perimeter with Advanced CCTV Solutions",
    description:
      "Elevate your farm's security to the next level with our state-of-the-art CCTV installation services. Designed to provide comprehensive coverage of your property, our high-definition camera systems offer real-time monitoring and recording capabilities, ensuring constant vigilance over your land, livestock, and assets. Tailored to meet the unique challenges of rural security, our CCTV solutions bring you peace of mind, day and night.",
  },
  {
    title: "Access Control",
    image: "/images/access-control.jpg",
    subtitle: "Customised Access Control Systems",
    description:
      "Take control of who enters and exits your property with our bespoke access control solutions. From gate entry systems to secured building access, we offer a range of smart, scalable options to protect your farm's most sensitive areas. Our technology ensures authorised access is seamlessly managed while keeping unauthorised visitors at bay, safeguarding your operations against potential threats.",
  },
  {
    title: "Alarm Systems",
    image: "/images/alarm-system.jpg",
    subtitle: "Comprehensive Alarm Solutions",
    description:
      "Guard against intrusions with sophisticated alarm systems, designed to provide the ultimate protection for farms and rural properties. Our alarm solutions are customised to detect and alert you to unauthorised access, fires, and other emergencies, offering immediate peace of mind. With easy integration and 24/7 monitoring options, you can rest assured that your farm is always under vigilant watch, ready to respond to any situation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Technology and connectivity"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-wide">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            IT Infrastructure, Security &amp; IoT
          </h1>
        </div>
      </section>

      {/* IT Infrastructure Services */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              IT Infrastructure Services
            </h2>
            <p className="mt-4 text-lg text-sky-700 font-medium">
              Connecting Rural Communities
            </p>
          </div>

          <div className="space-y-16">
            {itServices.map((service, i) => (
              <div
                key={service.title}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Security Services
            </h2>
            <p className="mt-4 text-lg text-sky-700 font-medium">
              Protecting Rural Communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {securityServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-sky-700 font-medium mt-1">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT & Embedded Systems */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              IoT & Embedded Systems
            </h2>
            <p className="mt-4 text-lg text-sky-700 font-medium">
              Agricultural Tech & Remote Telemetry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {iotServices.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="relative h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-sky-700 font-medium mt-1">
                    {service.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="bg-sky-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Project Management
          </h2>
          <p className="mt-2 text-sky-200 font-medium">
            ALL services include full project management.
          </p>
          <p className="mt-6 text-sky-100 max-w-2xl mx-auto">
            At Camfor, project management is the cornerstone of our approach to
            delivering custom solutions. This comprehensive service encompasses
            every phase of the project lifecycle, from initial consultation and
            design through to implementation, testing, and ongoing support.
          </p>
          <p className="mt-4 text-sky-100 max-w-2xl mx-auto">
            Our dedicated team act as your single point of contact, ensuring
            clear communication, streamlined processes, and a cohesive strategy
            that aligns with your objectives.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Get in Touch
              </h2>
              <p className="mt-4 text-gray-600">
                Ready to discuss your IT or security needs? Send us a message and
                we&apos;ll be in touch.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-sky-700" />
                  <span>Serving {siteConfig.serviceAreas.join(", ")} & beyond</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-sky-700" />
                  <a
                    href={`tel:${siteConfig.phone.replace(/\D/g,'')}`}
                    className="hover:text-sky-700 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-sky-700" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-sky-700 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Facebook className="w-5 h-5 text-sky-700" />
                  <a
                    href={siteConfig.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-700 transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Service Inquiry
              </h3>
              <ServiceInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQJsonLd(faqs)) }}
      />
    </>
  );
}
