'use client'

import React, { useRef } from 'react'
import Link from "next/link";
import Image from "next/image";
import { plansData } from '../plansData';
import { CircleAlert, Calendar, TrendingUp, Wallet, Coins, CheckCircle2, ArrowRight } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- Reusable Stats Component ---
const DetailBox = ({ label, value, icon: Icon }: { label: string; value: string | number; icon: any }) => (
  <div className="detail-box bg-green-950 border border-green-900/50 p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:bg-green-900 hover:scale-105 group">
    <div className="p-3 bg-green-500/10 rounded-xl mb-4 group-hover:bg-green-500/20 transition-colors">
        <Icon className="w-6 h-6 text-green-400" />
    </div>
    <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{value}</p>
    <p className="text-sm font-bold text-green-400 uppercase tracking-widest mt-2">{label}</p>
  </div>
);

const PlanDetailsPage = ({ params }: { params: { id: string } }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const id = params.id;
  
  // Find the plan
  const plan = plansData.find((pl) => pl.id === id);

  useGSAP(() => {
    if (!plan) return;

    // Hero Parallax
    gsap.to(heroRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Entrance Animations
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, delay: 0.2 })
      .fromTo(descRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, "-=0.8")
      .fromTo(".detail-box", { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 1.2 }, "-=0.8");

    // Section Triggers
    const sections = gsap.utils.toArray('.reveal-section');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          clearProps: "all"
        }
      );
    });

  }, { scope: containerRef, dependencies: [id] });

  // --- 404 State ---
  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 bg-gray-50">
        <h1 className="text-3xl font-bold text-red-600">
          404 - Plan Not Found
        </h1>
        <p className="mt-4 text-gray-600">
          The requested plan with ID: {id} does not exist.
        </p>
        <Link
          href="/"
          className="text-green-600 hover:text-green-700 mt-4 font-semibold border border-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition"
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH PARALLAX */}
      <section className="hero-section relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
          <Image
            src={plan.img || "/hero.png"}
            alt={plan.name}
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl">
            {plan.name}
          </h1>
          <p ref={descRef} className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg text-gray-100">
            {plan.description}
          </p>
        </div>
      </section>

      {/* 2. CORE STATS */}
      <section className="relative z-20 -mt-20 px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <DetailBox label="Duration" value={plan.duration} icon={Calendar} />
            <DetailBox label="Interest Rate" value={plan.interest} icon={TrendingUp} />
            <DetailBox label="Paying Term" value={plan.payingTerm} icon={Wallet} />
            <DetailBox label="Min Premium" value={`Rs. ${plan.minPremium}`} icon={Coins} />
          </div>
        </div>
      </section>

      {/* 3. PREMIUM OPTIONS */}
      <section className="reveal-section container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Options</h2>
          <div className="h-1.5 w-20 bg-green-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plan.premiums?.map((prem, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:border-green-200 transition-all duration-500 text-center flex flex-col group">
                    <h3 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-4 group-hover:text-green-600 transition-colors">
                      {prem.type}
                    </h3>
                    <div className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tighter">
                      Rs. {prem.amount}
                    </div>
                    <div className="mt-auto py-2 px-4 bg-green-50 text-green-700 rounded-2xl font-semibold text-sm">
                        Commission: {prem.commission}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 4. MATURITY & RULES GRID */}
      <section className="reveal-section bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Maturity Benefits */}
                {plan.maturityBenefits && (
                <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-600 rounded-2xl shadow-lg shadow-green-200">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Maturity Benefits</h2>
                    </div>
                    
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="p-8">
                            <ul className="space-y-6">
                                {plan.maturityBenefits.map((benefit, index) => (
                                    <li key={index} className="flex justify-between items-center group">
                                        <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">
                                          {benefit.type}
                                        </span>
                                        <div className="flex items-center space-x-3">
                                          <span className="h-px w-8 bg-gray-100"></span>
                                          <span className="text-green-700 font-bold text-xl">{benefit.rate}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                )}

                {/* Withdrawal Rules */}
                <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-red-500 rounded-2xl shadow-lg shadow-red-100">
                        <CircleAlert className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">Withdrawal Rules</h2>
                    </div>
                    
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                        <ul className="space-y-5">
                            {plan.rules?.map((rule, index) => (
                                <li key={index} className="flex items-start group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 mr-4 shrink-0 group-hover:scale-150 transition-transform"></div>
                                    <span className="text-gray-600 text-sm md:text-base leading-relaxed group-hover:text-gray-900 transition-colors">
                                      {rule}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="reveal-section relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-green-900 z-0">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-300 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to secure your future with the <span className="text-green-400">{plan.name}</span>?
            </h2>
            <p className="text-xl text-green-100/80 mb-12 max-w-2xl mx-auto px-4 font-light">
                Our specialized agents are ready to walk you through the process and help you customize a plan that fits your financial goals perfectly.
            </p>
            <Link 
                href="/contact"
                className="group inline-flex items-center space-x-3 bg-white text-green-900 font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1"
            >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>
      </section>

    </div>
  )
}

export default PlanDetailsPage
