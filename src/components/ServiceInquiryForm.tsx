"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serviceInquiryFormSchema, type ServiceInquiryFormData } from "@/lib/schemas";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ACCESS_KEY = "e3854c11-c539-42a5-903d-813da8f47e84";

export default function ServiceInquiryForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ServiceInquiryFormData>({
    resolver: zodResolver(serviceInquiryFormSchema),
  });

  const onSubmit = async (data: ServiceInquiryFormData) => {
    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "[Website] Service Enquiry");
    formData.append("name", data.name);
    formData.append("email", data.email);
    if (data.phone) formData.append("phone", data.phone);
    formData.append("message", data.message);

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
        <h3 className="text-xl font-semibold text-gray-900">Enquiry Sent!</h3>
        <p className="text-gray-600">We&apos;ll be in touch with you shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sky-700 hover:text-sky-800 underline text-sm"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="si-name" className="block text-sm font-medium text-gray-700 mb-1">
          Full name <span className="text-red-500">*</span>
        </label>
        <input
          id="si-name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          placeholder="Jane Smith"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="si-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          id="si-email"
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
        <label htmlFor="si-phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="si-phone"
          type="tel"
          autoComplete="tel"
          {...register("phone")}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          placeholder="04xx xxx xxx"
        />
      </div>

      <div>
        <label htmlFor="si-message" className="block text-sm font-medium text-gray-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="si-message"
          rows={4}
          {...register("message")}
          className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          placeholder="Tell us about the service you're interested in..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
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
        {isSubmitting ? "Sending…" : "Enquire Now"}
      </button>
    </form>
  );
}
