import Image from "next/image";
import Link from "next/link";
import SecurityAssessmentForm from "@/components/SecurityAssessmentForm";
import ITSurveyForm from "@/components/ITSurveyForm";
import {
  Shield,
  Wifi,
  Clock,
  Award,
  Users,
  Heart,
  CheckCircle,
} from "lucide-react";

const features = [
  { icon: Wifi, label: "Tailored Connectivity Solutions" },
  { icon: Award, label: "Local Expertise, Global Standards" },
  { icon: CheckCircle, label: "Proven Reliability" },
  { icon: Clock, label: "Ongoing 24/7 Support" },
  { icon: Shield, label: "20+ Years Experience" },
  { icon: Users, label: "Personalised Service" },
  { icon: Heart, label: "Supporting Victorian Farmers" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-tech.jpg"
            alt="Technology connectivity"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Connecting &amp; Protecting Rural Communities
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Camfor is a pioneering IT infrastructure and full security hardware
              provider dedicated to empowering rural Victoria with cutting-edge
              connectivity and security solutions.
            </p>
            <p className="mt-4 text-gray-300">
              Specialising in the design, deployment, and management of
              comprehensive IT networks and security solutions, we ensure that
              all Victorians can thrive and feel safe.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sky-700 font-semibold text-sm uppercase tracking-wide">
                Camfor Security
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Custom Security Solution Assessment
              </h2>
              <p className="mt-4 text-gray-600">
                Everyone has unique security needs. To get started on your new
                security systems, fill out our free assessment and we will be in
                touch ASAP!
              </p>
              <div className="relative mt-8 h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/security-assessment.jpg"
                  alt="Security solutions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Book Your Free Security Assessment
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                We&apos;ll visit your property and provide a no-obligation quote with customised options.
              </p>
              <SecurityAssessmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* IT Survey Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-sky-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-sky-700 mb-1">
                Free IT Needs Assessment
              </h3>
              <p className="text-sm text-gray-500 mb-4">2 minutes · No obligation</p>
              <ITSurveyForm />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sky-700 font-semibold text-sm uppercase tracking-wide">
                Camfor IT
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Not sure where to start?
              </h2>
              <p className="mt-4 text-gray-600">
                Tell us a bit about yourself and we&apos;ll come back to you with tailored IT recommendations for your specific situation — whether you&apos;re a homeowner, farmer, or business.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">1</span>
                  Tell us who you are and where you&apos;re located
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">2</span>
                  We assess the best connectivity options for your area
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-xs">3</span>
                  We get back to you with a personalised recommendation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Where Connections Meet Solutions: Our Valued Clients
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            <Image
              src="/images/affinity-logo.png"
              alt="Affinity client logo"
              width={200}
              height={70}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/m2s-logo.png"
              alt="M2S client logo"
              width={175}
              height={60}
              className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Why Camfor */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/rural-landscape.jpg"
            alt="Rural Victorian landscape"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Why CAMFOR?
          </h2>
          <p className="mt-6 text-gray-300 text-center max-w-3xl mx-auto">
            Choosing Camfor for your IT or security needs means choosing a local
            partner who not only understands the unique challenges of rural
            communities but also prioritises personalised service, community
            engagement, and solutions that are tailored specifically for you.
          </p>
          <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto">
            Unlike other companies, Camfor offers the flexibility, attention, and
            commitment necessary to ensure your connectivity needs are met with
            precision and care. As a small local business, we love nothing more
            than helping our farming community.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-12 h-12 rounded-full bg-sky-700/30 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-sky-400" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What We Do
              </h2>
              <p className="mt-6 text-gray-600">
                We provide holistic IT solutions to fit every purpose, budget and
                situation, whether it is a new build with complex data planning,
                or an upgraded system to help you level up. We work with you to
                achieve a realistic plan that will enhance connectivity.
              </p>
              <p className="mt-4 text-gray-600">
                We also offer full security planning and implementation. Starting
                with a comprehensive consultation to work out the best
                requirements for your protection. This includes alarm, access
                control and CCTV options.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border-2 border-sky-700 text-sky-700 font-semibold rounded-md hover:bg-sky-700 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/data-installation.jpg"
                alt="Data installation services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
