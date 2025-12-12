"use client";

import Link from "next/link";
import React from "react";

const Investment = () => {
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
    <section className="py-16 md:py-24 bg-white flex flex-col items-center">
      {/* Container matches Hero Section alignment (max-w-6xl) */}
      <div className="w-[90%] max-w-6xl mx-auto px-0 md:px-0"> 
        
        {/* Section Title */}
        <div className="mb-12 text-center md:text-left">
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
            <div 
              key={index} 
              className="p-6 bg-gray-50 border border-gray-200 shadow-xl rounded-2xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-green-600"
            >
              <div className="flex justify-between items-start mb-3">
                
                {/* Plan Name & Duration */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">
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

              {/* Contact Link */}
              <Link
                href={"/contact"}
                className="
                  bg-green-700 py-3 rounded-xl text-center text-white font-semibold 
                  hover:bg-green-800 transition-colors duration-200 
                  mt-auto 
                "
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investment;