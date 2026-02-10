'use client'

import { ChevronRight, Mail, Recycle, Sprout, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const IconSustainable = () => <div className="text-3xl text-green-600"><Recycle width={40}/></div>;
const IconQuality = () => <div className="text-3xl text-green-600"><Sprout width={40}/></div>;
const IconCommunity = () => <div className="text-3xl text-green-600"><Users width={40}/></div>;

// --- Feature Card Data ---
const featureCards = [
  { 
    icon: IconSustainable, 
    title: 'Sustainable Practices', 
    description: 'Solutions powering Sri Lanka’s future harvest at our greens.', 
    bgColor: 'bg-white' 
  },
  { 
    icon: IconQuality, 
    title: 'Quality Produce', 
    description: 'Quality has stay and distinct quality produce in Sri Lanka’s future harvest.', 
    bgColor: 'bg-white'
  },
  { 
    icon: IconCommunity, 
    title: 'Community Impact', 
    description: 'Community impact to support cato shamu and our chunctity.', 
    bgColor: 'bg-white' 
  },
];

// Assuming your background image is in the public folder
const BACKGROUND_IMAGE_PATH = '/land.jpg'; 

// --- Feature Card Component ---
const FeatureCard = ({ icon: Icon, title, description, bgColor }:any) => (
  // Positioning and styling for the floating cards
  <div className={`
    feature-card
    ${bgColor} p-6 rounded-xl shadow-2xl backdrop-blur-sm 
    max-w-xs transition-transform duration-300 hover:scale-[1.02]
    cursor-pointer
  `}>
    <div className="flex items-center space-x-3 mb-2">
      <Icon />
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);


// --- Main Hero Section Component ---
export default function HeroSection() {
  const container = useRef(null);
  const bgImage = useRef(null);
  const textContent = useRef<HTMLDivElement>(null);
  const rightSide = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Parallax Effect for Background
    gsap.to(bgImage.current, {
      yPercent: 30, // Move image down by 30% of its height
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // 2. Text Entrance Animation
    if (textContent.current) {
        gsap.from(textContent.current.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2, // Animate one by one
            ease: "power3.out",
        });
    }

    // 3. Right Side (Cards) Entrance
    if (rightSide.current) {
        gsap.fromTo(rightSide.current.children, 
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: "expo.out",
                delay: 0.3,
                clearProps: "all"
            }
        );
    }

  }, { scope: container });

  return (
    // Main Container with Background Image
    <section ref={container} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image (Using Next/Image for optimization) */}
      <div ref={bgImage} className="absolute inset-0 z-0 scale-110"> {/* Scale up slightly to allow for parallax movement */}
        <Image 
          src={BACKGROUND_IMAGE_PATH}
          alt="Lush green tea plantation fields in Sri Lanka"
          fill // Makes the image fill the entire container
          style={{ objectFit: 'cover' }} // Ensures image covers the area without stretching
          priority // Load image early as it's the main hero image
        />
      </div>

      {/* Dark Overlay for Text Readability (optional, but helps with contrast) */}
      <div className="absolute inset-0 bg-black/40 z-5"></div>
      
      {/* Content Layer */}
      <div className="relative z-10 w-[90%] max-w-6xl mx-auto py-20 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* --- LEFT SIDE: Main Heading and CTAs --- */}
        <div ref={textContent} className="md:col-span-2 text-white space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
            Growing Quality. <br/>Cultivating Trust.
          </h1>
          <p className="text-lg md:text-xl font-medium drop-shadow-md max-w-lg">
            Sustainable plantation solutions powering Sri Lanka’s future harvest.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            
            {/* Contact Us Button */}
            <Link 
              href="/contact" 
              className="
                flex items-center justify-center space-x-2 py-3 px-8 rounded-full 
                bg-white/10 border border-white/30 text-white font-semibold 
                hover:bg-white hover:text-green-900 transition-all duration-300 
                shadow-lg backdrop-blur-md hover:shadow-white/20
              "
            >
              <Mail size={20} /> <span>Contact Us</span> 
            </Link>

            {/* Get Started Button (Prominent Green) */}
            <Link 
              href="/about-us" 
              className="
                flex items-center justify-center gap-2 py-3 px-8 rounded-full 
                bg-gradient-to-r from-green-500 to-green-700 text-white font-bold 
                hover:from-green-400 hover:to-green-600 transition-all duration-300 
                shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1
              "
            >
              About Us
               <ChevronRight size={20} />
            </Link>
          </div>
        </div>

        {/* --- RIGHT SIDE: Feature Cards --- */}
        <div ref={rightSide} className="md:col-span-1 flex flex-col items-center md:items-end space-y-6 mt-10 md:mt-0 perspective-[1000px]">
          {/* Use specific positioning to mimic the staggered look */}
          <div className="md:mr-20">
            <FeatureCard {...featureCards[0]} />
          </div>
          
          <div className="md:ml-20">
            <FeatureCard {...featureCards[1]} />
          </div>

          <div className="md:mr-20">
            <FeatureCard {...featureCards[2]} />
          </div>
        </div>

      </div>
    </section>
  );
}