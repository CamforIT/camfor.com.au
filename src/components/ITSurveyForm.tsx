import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function ITSurveyForm() {
  return (
    <div className="space-y-4 text-center">
      <p className="text-gray-600">
        Not sure where to start? Get in touch and we&apos;ll help you find the
        right IT solution.
      </p>
      <a
        href={`mailto:${siteConfig.email}?subject=IT%20Survey%20Response`}
        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors"
      >
        <Mail className="w-5 h-5" />
        Get in Touch
      </a>
      {/* TODO: Replace this component with an embedded Google Form */}
    </div>
  );
}
