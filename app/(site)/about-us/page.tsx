"use client";

import { Leaf, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
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

     // Mission Section Animation
     gsap.from(".mission-content", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: ".mission-section",
            start: "top 80%",
        }
     });

     gsap.from(".mission-image", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".mission-section",
            start: "top 80%",
        }
     });

     // Values Grid Animation
     ScrollTrigger.batch(".value-card", {
        onEnter: (batch) => {
            gsap.fromTo(batch, 
                { y: 60, opacity: 0 }, 
                { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "expo.out", clearProps: "all" }
            );
        },
        start: "top 85%",
        once: true
    });

    // Stats Animation
    ScrollTrigger.batch(".stat-item", {
        onEnter: (batch) => {
            gsap.fromTo(batch, 
                { scale: 0.8, opacity: 0 }, 
                { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.7)" }
            );
        },
        start: "top 85%",
        once: true
    });

  }, []);

  const values = [
    {
      icon: <Leaf className="text-green-600 h-8 w-8" />,
      title: "Sustainability First",
      description:
        "Every decision we make is rooted in protecting the earth for future generations.",
    },
    {
      icon: <Target className="text-green-600 h-8 w-8" />,
      title: "Precision Farming",
      description:
        "Using data-driven techniques to maximize yield while minimizing waste.",
    },
    {
      icon: <Users className="text-green-600 h-8 w-8" />,
      title: "Community Driven",
      description:
        "We empower local farmers by providing them with the tools to succeed.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section - Matches Estate Hero Structure */}
      <section className="relative w-full text-center min-h-[60vh] flex justify-center items-center overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
            <Image
            src="/land.jpg"
            alt="Lush agricultural landscape"
            fill
            className="object-cover brightness-[0.65]"
            priority
            />
        </div>
        
        <div className="relative z-10 w-[90%] max-w-6xl mx-auto py-20 md:py-32 text-white flex flex-col items-center">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Our Story
          </h1>
          <p ref={textRef} className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md text-gray-100">
            Cultivating a greener future through innovation, tradition, and a
            deep respect for the land.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="mission-section py-20 md:py-32">
        <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="mission-content">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm bg-green-50 px-3 py-1 rounded-full">
              Since 1998
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-8 leading-tight">
              Growing Beyond <br/> Boundaries
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              SuperGreen started with a single plot of land and a vision: to
              prove that high-scale agriculture could coexist with environmental
              preservation. Today, we are leaders in organic export and
              sustainable irrigation techniques.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe that food should not only be healthy for the consumer
              but also healthy for the soil. By blending ancient wisdom with
              modern technology, we ensure our harvests are second to none.
            </p>
          </div>
          <div className="mission-image relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/inquiry.png"
              alt="Our farming process"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-gray-50 py-24">
        <div className="w-[90%] max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-green-200 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact Statistics Banner */}
      <section className="bg-green-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          <div className="stat-item">
            <p className="text-5xl font-bold mb-2 text-green-400">15k+</p>
            <p className="text-green-100 text-sm uppercase tracking-widest font-medium">
              Acres Managed
            </p>
          </div>
          <div className="stat-item">
            <p className="text-5xl font-bold mb-2 text-green-400">100%</p>
            <p className="text-green-100 text-sm uppercase tracking-widest font-medium">
              Organic Certified
            </p>
          </div>
          <div className="stat-item">
            <p className="text-5xl font-bold mb-2 text-green-400">500+</p>
            <p className="text-green-100 text-sm uppercase tracking-widest font-medium">
              Local Farmers
            </p>
          </div>
          <div className="stat-item">
            <p className="text-5xl font-bold mb-2 text-green-400">24</p>
            <p className="text-green-100 text-sm uppercase tracking-widest font-medium">
              Export Countries
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center mt-16 pb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Ready to grow with us?</h3>
            <Link href={'/contact'} className="bg-white text-green-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-100 hover:scale-105 transition-all shadow-xl hover:shadow-white/20">
              Contact Our Team
            </Link>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;
