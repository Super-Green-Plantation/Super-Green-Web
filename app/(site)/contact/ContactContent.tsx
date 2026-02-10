"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);


const ContactContent = () => {

  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Hero Parallax
    if (heroRef.current) {
        gsap.to(heroRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current.parentElement,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }

    // Hero Text Reveal
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
      .fromTo(textRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6");

    // Contact Cards Animation
    ScrollTrigger.batch(".contact-card", {
        onEnter: (batch) => {
            gsap.fromTo(batch, 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power2.out", overwrite: true }
            );
        },
        start: "top 85%",
        once: true
    });

    // Fade In Sections
    gsap.utils.toArray<HTMLElement>(".fade-in-section").forEach((section) => {
        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            }
        });
    });

  }, []);



  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero Section - Standardized to Estate/About style */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
            <Image
            src="/pl2.png"
            alt="Contact us banner"
            fill
            className="object-cover brightness-[0.65]"
            priority
            />
        </div>

        <div className="relative z-10 w-[90%] max-w-6xl text-center text-white">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Get in Touch
          </h1>
          <p ref={textRef} className="text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md text-gray-100">
            Have questions about our sustainable farming? Reach out to our head
            office directly.
          </p>
        </div>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="w-[90%] max-w-6xl mx-auto py-20 md:py-24">
        {/* Head Office Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b pb-6 border-gray-200 fade-in-section">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Head Office
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Connect with us through any of these channels.
            </p>
          </div>
        </div>

        {/* 3. Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="contact-card group bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-500 mb-4 text-sm uppercase tracking-wide">Monday - Friday</p>
            <a
              href="tel:0911111111"
              className="text-2xl font-bold text-green-700 hover:text-green-800"
            >
              091 111 1111
            </a>
          </div>

          {/* Email Card */}
          <div className="contact-card group bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <Mail size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-500 mb-4 text-sm uppercase tracking-wide">Direct Inquiry</p>
            <a
              href="mailto:head@supergreen.com"
              className="text-xl font-bold text-green-700 hover:text-green-800 break-all"
            >
              head@supergreen.com
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="contact-card group bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
            <p className="text-gray-500 mb-4 text-sm uppercase tracking-wide">Instant Chat</p>
            <a
              href="#"
              className="text-2xl font-bold text-green-700 hover:text-green-800"
            >
              091 111 1111
            </a>
          </div>
        </div>

        {/* 4. Office Hours Banner */}
        <div className="fade-in-section bg-green-800 rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl overflow-hidden relative mb-20 group">
          <MapPin
            size={300}
            className="absolute -right-16 -bottom-16 text-green-700 opacity-20 group-hover:scale-110 transition-transform duration-700"
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="bg-green-700/50 p-6 rounded-full backdrop-blur-sm">
              <Clock size={48} className="text-green-100" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 opacity-90">
                <p className="text-xl font-medium">
                  Mon - Fri: <span className="font-light">9:00am - 5:00pm</span>
                </p>
                <p className="text-xl font-medium">
                  Saturday: <span className="font-light">9:00am - 12:00pm</span>
                </p>
              </div>
            </div>
          </div>

          <a
            href="#"
            target="blank"
            className="relative z-10 bg-white text-green-900 px-10 py-5 rounded-full font-bold hover:bg-green-50 hover:scale-105 transition-all shadow-xl"
          >
            View on Google Maps
          </a>
        </div>


      </div>
    </div>
  );
};

export default ContactContent;
