'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Import useState hook

// Utility component for the hamburger icon lines
const HamburgerLine = () => (
    <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
);

const LOGO_PATH = '/logo.png'; 
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Micro Loans', href: '/micro-loans' },
  { name: 'Estates', href: '/estates' },
  { name: 'About us', href: '/about-us' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // OUTER WRAPPER: This container stretches to full width (`w-full`) 
    // and applies the background, shadow, and rounded corners.
    <div className="
      w-full p-2 md:p-3
      bg-gradient-to-r from-green-700/70 to-green-800/70 
      shadow-2xl shadow-black/60 backdrop-blur-md relative
    ">
        
        {/* INNER CONTAINER: This centers the content and restricts its width (`max-w-6xl`) */}
        <nav className="w-full max-w-6xl mx-auto">
      
            {/* Primary Row: Logo and Toggle Button (Mobile) or Links/Buttons (Desktop) */}
            <div className="flex justify-between items-center">
                
                {/* Logo and Brand Name */}
                <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <Image 
                        src={LOGO_PATH} 
                        alt="Super Green Plantation Logo" 
                        width={40} 
                        height={40} 
                        className="rounded-md"
                    />
                    <span className="
                        text-white text-lg font-semibold 
                    ">
                        Super Green Plantation
                    </span>
                </Link>

                {/* --- DESKTOP VIEW (md screen size and up) --- */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className="
                                text-white text-sm font-medium hover:text-gray-200 
                                transition duration-200 
                            "
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                
                <div className="hidden md:flex space-x-3">
                    {/* Action Buttons (Desktop) */}
                    <Link 
                        href="/contact" 
                        className="py-2 px-4 rounded-lg text-black font-bold text-sm bg-[#f5e07e] hover:bg-[#e6c96a] shadow-md shadow-black/40"
                    >
                        Contact
                    </Link>
                    <Link 
                        href="/register" 
                        className="py-2 px-4 rounded-lg text-white font-bold text-sm bg-green-600 hover:bg-green-700 shadow-md shadow-black/40"
                    >
                        Register
                    </Link>
                </div>

                {/* --- MOBILE TOGGLE BUTTON (Below md screen size) --- */}
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden flex flex-col justify-around w-6 h-6 z-50 focus:outline-none p-1"
                    aria-label="Toggle Menu"
                >
                    {/* Hamburger Icon */}
                    <HamburgerLine />
                    <HamburgerLine />
                    <HamburgerLine />
                </button>
            </div>

            {/* --- MOBILE MENU LINKS (Visible only when 'isOpen' is true) --- */}
            <div className={`
                md:hidden absolute top-full left-0 w-full rounded-b-xl 
                bg-green-800/90 shadow-lg z-40 
                transition-all duration-300 ease-in-out
                ${isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'}
            `}>
                <div className="flex flex-col items-center space-y-3 px-4">
                    
                    {/* Mobile Nav Links */}
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className="
                                w-full text-center py-2 text-white font-medium hover:bg-green-700/50 
                                rounded-md transition duration-200
                            "
                            onClick={toggleMenu} // Close menu on click
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Mobile Action Buttons (Displayed vertically) */}
                    <div className="w-full pt-3 border-t border-green-700/50 flex flex-col space-y-3">
                        <Link 
                            href="/contact" 
                            className="w-full text-center py-2 rounded-lg text-black font-bold bg-[#f5e07e] hover:bg-[#e6c96a] shadow-md"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                        <Link 
                            href="/register" 
                            className="w-full text-center py-2 rounded-lg text-white font-bold bg-green-600 hover:bg-green-700 shadow-md"
                            onClick={toggleMenu}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
}