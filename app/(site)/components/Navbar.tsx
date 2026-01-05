"use client";

import { supabase } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LOGO_PATH = "/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Estates", href: "/estates" },
  { name: "About us", href: "/about-us" },
  { name: "Contact us", href: "/contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [firstName, setFirstName] = useState<string | null>(null);

  const firstLetter = firstName?.[0]?.toUpperCase();

  /* 🔐 Get Supabase user */
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        const fullName =
          data.user.user_metadata?.full_name ||
          data.user.user_metadata?.name ||
          "User";
        setFirstName(fullName.split(" ")[0]);
      }
    };
    getUser();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    setFirstName(null);
    setProfileOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="mx-5 lg:mx-70 rounded-2xl md:my-5 my-3 fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-green-700/30 to-green-700/40 backdrop-blur-sm shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-3 mt-0 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={LOGO_PATH} alt="Logo" width={38} height={38} />
          <span className="text-white font-semibold text-base sm:text-lg">
            Super Green Plantation
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-sm font-medium hover:text-gray-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center relative">
          {firstName ? (
            <>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center"
              >
                {firstLetter}
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-12 w-44 bg-white rounded-lg shadow-xl overflow-hidden">
                  {/* <Link
                    href="/profile"
                    className="block px-4 py-3 text-sm hover:bg-gray-100"
                    onClick={() => setProfileOpen(false)}
                  >
                    Dashboard
                  </Link> */}
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link
              href="/auth/register"
              className="px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Register Now
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-900/95 rounded-b-2xl backdrop-blur-md px-4 pb-6">
          <div className="flex flex-col gap-3 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white py-2 text-center rounded-md hover:bg-green-700/60"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t border-green-700 pt-4">
              {firstName ? (
                <>
                  <Link
                    href="/profile"
                    className="block text-center py-2 rounded-md bg-green-600 text-white font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="w-full mt-2 py-2 rounded-md bg-red-600 text-white font-bold"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/login"
                  className="block text-center py-2 rounded-md bg-green-600 text-white font-bold"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
