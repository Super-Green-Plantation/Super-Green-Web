"use client";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Estate = () => {
  const BACKGROUND_IMAGE_PATH = "/pl3.png";
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const estate = [
    {
      id: 1,
      img: "/sample-1.jpg",
      location: "Galle",
    },
    {
      id: 2,
      img: "/sample-2.png",
      location: "Matara",
    },
    {
      id: 3,
      img: "/sample-3.png",
      location: "Hambantota",
    },
    {
      id: 4,
      img: "/sample-4.png",
      location: "Rathnapura",
    },
    {
      id: 5,
      img: "/sample-5.jpg",
      location: "Thanamalwila",
    },
  ];

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

    // Grid Animation
    ScrollTrigger.batch(".estate-card", {
        onEnter: (batch) => {
            gsap.fromTo(batch, 
                { y: 60, opacity: 0 }, 
                { y: 0, opacity: 1, stagger: 0.15, duration: 1.5, ease: "expo.out", clearProps: "all" }
            );
        },
        start: "top 85%",
        once: true
    });

  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div ref={heroRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
            <Image
            src={BACKGROUND_IMAGE_PATH}
            alt="Lush green tea plantation fields"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="brightness-[0.65]"
            />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Our Estates
          </h2>
          <p ref={textRef} className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md text-gray-100">
            Discover the premier lands that power our sustainable operations across Sri Lanka.
          </p>
        </div>
      </div>

      <div className="py-20 w-[90%] max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Cultivating Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each estate is managed with precision, care, and a commitment to sustainable agricultural practices.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {estate.map((es) => (
            <Link 
                href={`/estates/${es.id}`} 
                key={es.id}
                className="estate-card group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 border border-gray-100"
            >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                    <Image
                        src={es.img} 
                        alt={`Image of ${es.location}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Location Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-green-800 uppercase tracking-wide shadow-sm">
                        {es.location}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                        {es.location} Estate
                    </h3>
                    <p className="text-gray-500 text-sm mb-6">
                        Experience sustainable agriculture and premium harvests from our {es.location} plantation.
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-sm font-semibold text-green-600 group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                            Explore Estate <span className="ml-2">→</span>
                        </span>
                    </div>
                </div>
            </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Estate;
