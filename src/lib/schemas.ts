import { z } from "zod";

export const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const serviceInquiryFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ServiceInquiryFormData = z.infer<typeof serviceInquiryFormSchema>;

export const securityAssessmentSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  address: z.string().min(1, "Address is required"),
});

export type SecurityAssessmentData = z.infer<typeof securityAssessmentSchema>;

export const itSurveySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  postcode: z.string().min(4, "Please enter a valid postcode"),
  userType: z.enum(
    ["homeowner", "commercial", "industrial", "primary-producer"],
    {
      error: "Please select an option",
    }
  ),
});

export type ITSurveyData = z.infer<typeof itSurveySchema>;
