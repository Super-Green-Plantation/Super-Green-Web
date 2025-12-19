"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const inquirySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Invalid email address").optional(),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1 Validate using Zod
    const result = inquirySchema.safeParse({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // 2 If validation fails
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        fieldErrors[fieldName] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    // 3 Clear errors if valid
    setErrors({});

    // 4 Submit to API
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data), // ✅ validated data
      });

      if (response.ok) {
        toast.success("Inquiry Sent !");
      } else {
        toast.error("Failed to send inquiry.");
      }
    } catch (error) {
      toast.error("Failed to send inquiry.");
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero Section - Standardized to Estate/About style */}
      <div className="relative w-full min-h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Lush green tea plantation fields"
          fill
          className="object-cover"
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 z-5"></div>

        <div className="relative z-10 w-[90%] max-w-6xl text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            Have questions about our sustainable farming? Reach out to our head
            office directly.
          </p>
        </div>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="w-[90%] max-w-6xl mx-auto py-16 md:py-24">
        {/* Head Office Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b pb-6 border-gray-200">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Head Office
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              Connect with us through any of these channels.
            </p>
          </div>
        </div>

        {/* 3. Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Phone Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500 transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-500 mb-4">Monday - Friday</p>
            <a
              href="tel:0911111111"
              className="text-xl font-bold text-green-700 hover:underline"
            >
              091 111 1111
            </a>
          </div>

          {/* Email Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500 transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <p className="text-gray-500 mb-4">Direct Inquiry</p>
            <a
              href="mailto:head@supergreen.com"
              className="text-lg font-bold text-green-700 hover:underline break-all"
            >
              head@supergreen.com
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500 transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
            <p className="text-gray-500 mb-4">Instant Chat</p>
            <a
              href="#"
              className="text-xl font-bold text-green-700 hover:underline"
            >
              091 111 1111
            </a>
          </div>
        </div>

        {/* 4. Office Hours Banner */}
        <div className="bg-green-700 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl overflow-hidden relative mb-16">
          <MapPin
            size={200}
            className="absolute -right-10 -bottom-10 text-green-600 opacity-20"
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="bg-green-600/50 p-4 rounded-full">
              <Clock size={40} className="text-green-100" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Office Hours</h3>
              <div className="space-y-1 opacity-90">
                <p className="text-lg font-medium">
                  Mon - Fri: <span className="font-light">9:00am - 5:00pm</span>
                </p>
                <p className="text-lg font-medium">
                  Saturday: <span className="font-light">9:00am - 12:00pm</span>
                </p>
              </div>
            </div>
          </div>

          <a
            href="#"
            target="blank"
            className="relative z-10 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg"
          >
            View on Google Maps
          </a>
        </div>

        {/* 5. Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Send Us a Message
            </h2>
            <p className="text-gray-500 mb-8">
              Tell us about your project or partnership idea, and we'll get back
              to you within one business day.
            </p>

            <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-md text-lg font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          <div className="lg:col-span-1 flex flex-col items-center pt-8 lg:pt-0">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg mb-6">
              <Image
                src="/pl3.png"
                alt="A young green seedling growing in dark soil"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              Join the Green Movement
            </h3>
            <p className="text-gray-500 text-center text-sm">
              Join us in cultivating a greener future. Whether you're a farmer,
              or just passionate about agriculture, we love to hear your ideas
              and collaborate.
            </p>
            <Link
              href="/about-us"
              className="mt-6 text-green-700 font-medium hover:text-green-800 transition-colors flex items-center gap-1"
            >
              Learn About Our Mission &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
