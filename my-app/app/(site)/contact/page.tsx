import { Mail, Phone, Clock, MapPin, MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-[45vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.png" // Ensure this image path is correct
          alt="Lush green tea plantation fields"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-5"></div>
        
        <div className="relative z-10 w-[90%] max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
            Have questions about our sustainable farming? Reach out to our head office directly.
          </p>
        </div>
      </div>

      {/* Content Section (Contact Details) */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b pb-6 border-gray-200">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Head Office</h2>
            <p className="text-gray-500 mt-2">Connect with us through any of these channels.</p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500 transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-500 mb-4">Monday - Friday</p>
            <a href="tel:0911111111" className="text-xl font-bold text-green-700 hover:underline">
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
            <a href="mailto:head@supergreen.com" className="text-lg font-bold text-green-700 hover:underline break-all">
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
            <a href="#" className="text-xl font-bold text-green-700 hover:underline">
              091 111 1111
            </a>
          </div>
        </div>

        {/* Office Hours & Location Banner */}
        <div className="bg-green-700 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl overflow-hidden relative mb-16">
            <MapPin size={200} className="absolute -right-10 -bottom-10 text-green-600 opacity-20" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="bg-green-600/50 p-4 rounded-full">
                    <Clock size={40} className="text-green-100" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-2">Office Hours</h3>
                    <div className="space-y-1 opacity-90">
                        <p className="text-lg font-medium">Mon - Fri: <span className="font-light">9:00am - 5:00pm</span></p>
                        <p className="text-lg font-medium">Saturday: <span className="font-light">9:00am - 12:00pm</span></p>
                    </div>
                </div>
            </div>

            <button className="relative z-10 bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg">
                View on Google Maps
            </button>
        </div>


        {/* Inquiry Form Section (New Addition) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            
            {/* Form Column (Left - 2/3 width on large screen) */}
            <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-500 mb-8">Tell us about your project or partnership idea, and we'll get back to you within one business day.</p>

                <form className="space-y-6">
                    {/* Topic Dropdown */}
                    <div>
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                    </div>
                    
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="block w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-md text-lg font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                        >
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </div>

            {/* Image/CTA Column (Right - 1/3 width on large screen) */}
            <div className="lg:col-span-1 flex flex-col items-center pt-8 lg:pt-0">
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg mb-6">
                    <Image
                        src="/inquiry.png" // Placeholder: Use the image from the original design or similar
                        alt="A young green seedling growing in dark soil"
                        fill
                        className="object-cover"
                    />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Join the Green Movement</h3>
                <p className="text-gray-500 text-center text-sm">
                    Join us in cultivating a greener future. Whether you're a farmer, or just passionate about agriculture, we love to hear your ideas and collaborate.
                </p>
                <Link href="/about-us" className="mt-6 text-green-700 font-medium hover:text-green-800 transition-colors flex items-center gap-1">
                    Learn About Our Mission
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
        {/* End Inquiry Form Section */}

      </div>
    </div>
  );
};

export default ContactPage;