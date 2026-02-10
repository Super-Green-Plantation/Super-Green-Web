"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Estate {
  id: string;
  location: string;
  description: string;
  image: string;
}

export default function EstateContent({ estate }: { estate: Estate }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

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
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div ref={heroRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <Image
            src={estate.image}
            alt={`${estate.location} Estate`}
            fill
            style={{ objectFit: "cover" }}
            className="brightness-[0.65]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
            {estate.location} Estate
          </h1>
          <p ref={textRef} className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            {estate.description}
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="w-[90%] max-w-6xl mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Sustainable Practices
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our {estate.location} estate uses advanced sustainable farming techniques,
          ensuring premium quality harvests while preserving the environment and supporting local communities.
        </p>
      </div>
    </div>
  );
}
