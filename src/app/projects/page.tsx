import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { FolderOpen, Cpu, Wifi, Database } from "lucide-react";
import Image from "next/image";

export const metadata = generatePageMetadata({
  title: "Projects — Camfor PTY LTD",
  description:
    "Explore Camfor's portfolio of IT infrastructure, security projects, and IoT agricultural technology across rural Victoria.",
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

      {/* Case Study Feature */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Context Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold mb-6">
                <Cpu className="w-4 h-4" />
                Featured Case Study
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                WaterSense &amp; HarvestPro Architecture
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                CamforIT actively develops advanced IoT irrigation management
                systems designed for precision agriculture and automated wicking bed
                irrigation across rural environments.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                    <Wifi className="w-6 h-6 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Long-Range Wireless Telemetry</h3>
                    <p className="mt-2 text-gray-600">
                      Using rugged sensor nodes communicating over long-range wireless networks to central processing gateways, mapping vast farms without 4G/5G dependency.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                    <Database className="w-6 h-6 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Real-time Data Orchestration</h3>
                    <p className="mt-2 text-gray-600">
                      Telemetry is aggregated via specialized backend services and stored in optimized time-series platforms, providing analytics for soil moisture, temperature, and automated water dispensing.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="mt-10 text-gray-600 italic border-l-4 border-sky-400 pl-4">
                "Our embedded systems bridge the gap between rugged agricultural hardware and modern cloud analytics, optimizing plant health and water usage."
              </p>
            </div>

            {/* Visuals */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gray-900 overflow-hidden shadow-2xl relative">
                 <Image
                    src="/images/about-rural.jpg"
                    alt="Agricultural Technology"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-gray-900/90 to-transparent">
                      <h4 className="text-white text-2xl font-bold">IoT Edge Computing</h4>
                      <p className="text-gray-300 mt-2">Containerized environments deploying intelligent control logic directly to field network controllers.</p>
                  </div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -left-6 top-1/4 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
                 <div className="text-3xl font-bold text-sky-700">Custom Firmware</div>
                 <div className="text-sm text-gray-600 mt-1 font-medium">Hardware & Cloud Integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects Prep */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-6">
            <FolderOpen className="w-8 h-8 text-sky-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            More Projects Coming Soon
          </h2>
          <p className="mt-4 text-gray-600">
            We&apos;re preparing additional detailed case studies highlighting our
            standard IT infrastructure installations and CCTV deployments across
            Victoria.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
