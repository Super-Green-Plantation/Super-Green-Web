"use client";

import Link from "next/link";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Investment = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Ensure elements exist before animating
        const header = container.current?.querySelector('.investment-header');
        
        // Header Reveal
        if (header) {
            gsap.fromTo(header, 
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: header,
                        start: "top 90%",
                        toggleActions: "play none none none", // Only play once, don't reverse
                    }
                }
            );
        }

        // Cards Batch Reveal
        // This ensures each card animates when it actually enters the viewport
        ScrollTrigger.batch(".investment-card", {
            onEnter: (batch) => {
                gsap.fromTo(batch, 
                    { y: 60, opacity: 0 }, 
                    { 
                        y: 0, 
                        opacity: 1, 
                        stagger: 0.15, 
                        duration: 1.2,
                        ease: "expo.out",
                        clearProps: "all"
                    }
                );
            },
            start: "top 85%",
            once: true 
        });

    }, { scope: container });

  // 1. RESTRUCTURED DATA ARRAY
  const investmentPlans = [
    {
      name: "Super Experiment Plan",
      duration: "6 Months",
      interest: "12.5%",
      description:
        "A short-term starter plan designed for new investors who want quick, reliable returns with minimal commitment.",
      href: "/contact-experiment", // Added unique link for the first plan
    },
    {
      name: "Super Plus Plan",
      duration: "1 Year",
      interest: "32%",
      description:
        "A balanced one-year investment offering attractive annual growth for steady, confident investors.",
      href: "/contact-plus",
    },
    {
      name: "Super Gold Plan",
      duration: "1.5 Year",
      interest: "34%",
      description:
        "A medium-term plan that delivers stronger returns, ideal for investors building long-term financial stability.",
      href: "/contact-gold",
    },
    {
      name: "Super Gold Plus Plan",
      duration: "2 Years",
      interest: "36%",
      description:
        "A powerful two-year investment option crafted for those seeking higher returns with secure performance.",
      href: "/contact-gold-plus",
    },
    {
      name: "Super Diamond Plan",
      duration: "3 Years",
      interest: "38%",
      description:
        "A premium plan offering long-term value and exceptional growth for committed investors.",
      href: "/contact-diamond",
    },
    {
      name: "Super Diamond Plus Plan",
      duration: "5 Years",
      interest: "40%",
      description:
        "Our highest-earning investment plan, designed for long-term wealth building and maximum returns.",
      href: "/contact-diamond-plus",
    },
  ];

  return (
    <section ref={container} className="py-16 md:py-24 bg-white flex flex-col items-center">
      {/* Container matches Hero Section alignment (max-w-6xl) */}
      <div className="w-[90%] max-w-6xl mx-auto px-0 md:px-0"> 
        
        {/* Section Title */}
        <div className="mb-12 text-center md:text-left investment-header">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            Investment Plans
          </h2>
          <p className="text-lg text-gray-600">
            Explore our range of plans designed for every investor's goal.
          </p>
        </div>

        {/* --- INVESTMENT CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investmentPlans.map((plan, index) => (
            // Card Container
            <Link 
              href={plan.href}
              key={index} 
              className="investment-card p-6 bg-gray-50 border border-gray-200 shadow-xl rounded-2xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-green-600 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                
                {/* Plan Name & Duration */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug group-hover:text-green-700 transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.duration}</p>
                </div>

                {/* Interest Rate (in a different color) */}
                <div className="shrink-0 ml-4">
                  <span className="text-2xl font-extrabold text-green-600"> 
                    {plan.interest}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mt-2 mb-6 grow">
                {plan.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
            <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/30 hover:scale-105"
            >
                Learn More
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Investment;