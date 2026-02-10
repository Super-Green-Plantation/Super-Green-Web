"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface User {
  firstName: string;
}

// Utility component for the hamburger icon lines
const HamburgerLine = () => (
  <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
);

const LOGO_PATH = "/logo.png";
const navItems = [
  { name: "Home", href: "/" },
  //   { name: 'Micro Loans', href: '/micro-loans' },
  { name: "Estates", href: "/estates" },
  { name: "About us", href: "/about-us" },
  { name: "Contact us", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token"); // token can be null

    if (!token) return; // Exit early if no token

   
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /* GSAP scroll effect for dynamic background and text color */
  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "body",
            start: "top -10",
            end: "top -50",
            toggleActions: "play none none reverse",
            scrub: true,
        }
    });

    tl.to("#navbar-bg", {
        backgroundColor: "rgba(23, 85, 48, 0.95)", // Deep green
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        duration: 0.3,
    })
    .to(".nav-text", { color: "#ffffff", duration: 0.3 }, "<")
    .to(".nav-item", { color: "#e5e7eb", duration: 0.3 }, "<") // gray-200
    .to(".login-btn", { 
        borderColor: "rgba(255,255,255,0.3)", 
        color: "#ffffff", 
        backgroundColor: "rgba(255,255,255,0.1)",
        duration: 0.3 
    }, "<")
    .to(".hamburger-line", { backgroundColor: "#ffffff", duration: 0.3 }, "<");

  }, []);

  return (
    // Initial state: White background, Green text
    <div id="navbar-bg" className="w-full fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-green-100">
      <nav className="w-full max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-sm group-hover:shadow-green-200 transition-all duration-300">
                <Image
                src={LOGO_PATH}
                alt="Super Green Plantation Logo"
                width={45}
                height={45}
                className="transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <span className="nav-text text-green-900 text-xl font-bold tracking-wide drop-shadow-sm transition-colors">
              Super Green
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative nav-item text-green-800 text-sm font-medium tracking-wide hover:text-green-600 transition-colors duration-300 py-2 group"
              >
                {item.name}
                {/* Animated Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
           
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-green-50 transition-all duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className={`hamburger-line w-5 h-0.5 bg-green-800 mb-1.5 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`hamburger-line w-5 h-0.5 bg-green-800 mb-1.5 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`hamburger-line w-5 h-0.5 bg-green-800 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Glassmorphic Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-2xl py-6 animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col items-center space-y-4 px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="w-full text-center py-3 text-green-900 font-medium hover:text-green-700 hover:bg-green-50 rounded-xl transition-all duration-200"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
             
          </div>
        </div>
      )}
    </div>
  );
}
