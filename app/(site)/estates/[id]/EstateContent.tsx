"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Estate {
  id: number;
  name: string;
  location: string;
  heroImg: string;
  description: string;
  mapEmbedUrl: string;
}

export default function EstateContent({ estate }: { estate: Estate }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    ).fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.6"
    );

    // Map section animation
    if (mapSectionRef.current) {
      gsap.fromTo(
        mapSectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: mapSectionRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <div ref={heroRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <Image
            src={estate.heroImg}
            alt={`${estate.location} Estate`}
            fill
            style={{ objectFit: "cover" }}
            className="brightness-[0.7]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white/10 z-[1]"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            {estate.location}
          </h1>
          <p ref={textRef} className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            {estate.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sustainable Engineering & <span className="text-green-600">Pure Quality</span>
            </h2>
            <div className="w-20 h-1.5 bg-green-500 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our {estate.location} estate uses advanced sustainable farming techniques,
              ensuring premium quality harvests while preserving the environment and supporting local communities.
              We emphasize soil health, water conservation, and biodiversity to create a harmonious ecosystem.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={estate.heroImg}
              alt="Sustainable Farming"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Map Section */}
        <div ref={mapSectionRef} className="pt-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-2">
              <span className="text-green-600 font-semibold tracking-widest uppercase text-sm">Location</span>
              <h2 className="text-4xl font-bold text-gray-900">Find Us on the Map</h2>
            </div>
            <div className="bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Estate Address</p>
                <p className="text-gray-900 font-bold">{estate.location}, Sri Lanka</p>
              </div>
            </div>
          </div>
          
          <div className="w-full h-[600px] relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white">
            <iframe
              src={estate.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${estate.location} Estate Location`}
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
