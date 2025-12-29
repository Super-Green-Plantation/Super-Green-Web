"use client";

import { getUserdata } from "@/lib/userData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [logged, setLogged] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [firstName, setFirstName] = useState<string | null>(null);
  const first_letter = firstName ? firstName.charAt(0).toUpperCase() : "";

  useEffect(() => {
    const token = localStorage.getItem("token"); // token can be null

    if (!token) return; // Exit early if no token

    const user: User | null = getUserdata(token);
    if (user) {
      setLogged(true);
      console.log(user.firstName);
      setFirstName(user.firstName);
    }

    if (user !== null) {
      setLogged(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full p-2 md:p-3 bg-linear-to-r from-green-700/70 to-green-800/70 shadow-2xl shadow-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-[100]">
      <nav className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={LOGO_PATH}
              alt="Super Green Plantation Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-white text-lg font-semibold">
              Super Green Plantation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-sm font-medium hover:text-gray-200 transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          {logged ? (
            <div className="hidden md:flex relative">
              {/* Avatar Button */}
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center hover:bg-green-700 transition"
              >
                {first_letter}
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-12 w-44 bg-white rounded-lg shadow-xl overflow-hidden z-50">
                  <Link
                    href="/dashboard"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setProfileOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      setLogged(false);
                      setFirstName(null);
                      setProfileOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex space-x-3">
              <Link
                href="/auth/login"
                className="py-2 px-4 rounded-lg text-white font-bold text-sm bg-green-600 hover:bg-green-700 shadow-md shadow-black/40"
              >
                Login
              </Link>
            </div>
          )}

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-around w-6 h-6 focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-green-800/95 shadow-xl backdrop-blur-sm py-4">
          <div className="flex flex-col items-center space-y-3 px-4">
            {/* Mobile Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="w-full text-center py-2 text-white font-medium hover:bg-green-700/50 rounded-md transition duration-200"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Action Buttons */}

            {/* Mobile Action Buttons */}
            <div className="w-full pt-3 border-t border-green-700/50 flex flex-col space-y-3">
              {logged ? (
                <Link
                  href="/dashboard"
                  className="w-full text-center py-2 rounded-lg text-white font-bold bg-green-600 hover:bg-green-700 shadow-md"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/auth/register"
                  className="w-full text-center py-2 rounded-lg text-white font-bold bg-green-600 hover:bg-green-700 shadow-md"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
