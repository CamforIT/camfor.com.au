import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function SecurityAssessmentForm() {
  return (
    <div className="space-y-4 text-center">
      <p className="text-gray-600">
        Tell us about your security needs and we&apos;ll get back to you with
        customised options.
      </p>
      <a
        href={`mailto:${siteConfig.email}?subject=Security%20Assessment%20Request`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
      >
        <Mail className="w-5 h-5" />
        Request an Assessment
      </a>
      {/* TODO: Replace this component with an embedded Google Form */}
    </div>
  );
}
