"use client"

import React, { useRef } from 'react';
import { plansData  } from './plansData';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InvestmentPlans = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
        // Ensure elements exist before animating
        const header = container.current?.querySelector('.products-header');
        
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
        ScrollTrigger.batch(".product-card", {
            onEnter: (batch) => {
                gsap.fromTo(batch, 
                    { y: 60, opacity: 0 }, 
                    { 
                        y: 0, 
                        opacity: 1, 
                        stagger: 0.12, 
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

  return (
    <section ref={container} className="py-16 md:py-24 bg-white flex flex-col items-center">
      {/* Container matches Hero Section alignment (max-w-6xl) */}
      <div className="w-[90%] max-w-6xl mx-auto px-0 md:px-0">
        
        {/* Section Title */}
        <div className="mb-12 text-center md:text-left products-header">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Explore our range of plans designed for every investor's goal.
          </p>
        </div>

        {/* --- INVESTMENT CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plansData.map((plan, index) => (
            // Card Container
            <div 
              key={index} 
              className="product-card p-6 bg-gray-50 border border-gray-200 shadow-xl rounded-2xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-green-600 hover:-translate-y-2 group"
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
                  <span className="text-xl font-extrabold text-green-600"> 
                    {plan.interest}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 mt-2 mb-6 grow">
                {plan.description}
              </p>

              {/* Contact Link - Dynamic routing to detail page */}
              <Link
                href={`/products/${plan.id}`}
                className="
                  block w-full py-3 rounded-full text-center text-white font-bold 
                  bg-linear-to-r from-green-600 to-green-800 
                  hover:from-green-500 hover:to-green-700 
                  transition-all duration-300 transform hover:-translate-y-1
                  shadow-md hover:shadow-lg mt-auto
                "
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;