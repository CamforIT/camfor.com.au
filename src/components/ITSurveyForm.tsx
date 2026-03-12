"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { itSurveySchema, type ITSurveyData } from "@/lib/schemas";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ACCESS_KEY = "e3854c11-c539-42a5-903d-813da8f47e84";

const userTypeLabels: Record<ITSurveyData["userType"], string> = {
  homeowner: "Homeowner",
  commercial: "Commercial",
  industrial: "Industrial",
  "primary-producer": "Primary Producer (Farm/Agriculture)",
};

export default function ITSurveyForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ITSurveyData>({
    resolver: zodResolver(itSurveySchema),
  });

  const onSubmit = async (data: ITSurveyData) => {
    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "[Website] IT Survey Response");
    formData.append("name", `${data.firstName} ${data.lastName}`);
    formData.append("email", data.email);
    formData.append("postcode", data.postcode);
    formData.append("user_type", userTypeLabels[data.userType]);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500" />
        <h3 className="text-xl font-semibold text-gray-900">Survey Submitted!</h3>
        <p className="text-gray-600">Thanks! We&apos;ll analyse your requirements and be in touch with tailored recommendations.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sky-700 hover:text-sky-800 underline text-sm"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="it-firstname" className="block text-sm font-medium text-gray-700 mb-1">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            id="it-firstname"
            type="text"
            autoComplete="given-name"
            {...register("firstName")}
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="Jane"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="it-lastname" className="block text-sm font-medium text-gray-700 mb-1">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            id="it-lastname"
            type="text"
            autoComplete="family-name"
            {...register("lastName")}
            className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="it-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          id="it-email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="it-postcode" className="block text-sm font-medium text-gray-700 mb-1">
          Postcode <span className="text-red-500">*</span>
        </label>
        <input
          id="it-postcode"
          type="text"
          inputMode="numeric"
          autoComplete="postal-code"
          {...register("postcode")}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          placeholder="3440"
          maxLength={4}
        />
        {errors.postcode && (
          <p className="mt-1 text-sm text-red-600">{errors.postcode.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="it-usertype" className="block text-sm font-medium text-gray-700 mb-1">
          I am a… <span className="text-red-500">*</span>
        </label>
        <select
          id="it-usertype"
          {...register("userType")}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 bg-white"
        >
          <option value="">Select an option…</option>
          <option value="homeowner">Homeowner</option>
          <option value="commercial">Commercial</option>
          <option value="industrial">Industrial</option>
          <option value="primary-producer">Primary Producer (Farm/Agriculture)</option>
        </select>
        {errors.userType && (
          <p className="mt-1 text-sm text-red-600">{errors.userType.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 px-6 py-3 bg-sky-700 text-white font-semibold rounded-md hover:bg-sky-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4" />
        {isSubmitting ? "Sending…" : "Get in Touch"}
      </button>
    </form>
  );
}
