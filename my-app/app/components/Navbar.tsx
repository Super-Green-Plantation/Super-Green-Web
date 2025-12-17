'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Utility component for the hamburger icon lines
const HamburgerLine = () => (
    <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
);

const LOGO_PATH = '/logo.png'; 
const navItems = [
  { name: 'Home', href: '/' },
//   { name: 'Micro Loans', href: '/micro-loans' },
  { name: 'Estates', href: '/estates' },
  { name: 'About us', href: '/about-us' },
  { name: 'Contact us', href: '/contact' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full p-2 md:p-3 bg-linear-to-r from-green-700/70 to-green-800/70 shadow-2xl shadow-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-[100]">
        
        <nav className="w-full max-w-6xl mx-auto">
      
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
                <div className="hidden md:flex space-x-3">
                   
                    <Link 
                        href="/register" 
                        className="py-2 px-4 rounded-lg text-white font-bold text-sm bg-green-600 hover:bg-green-700 shadow-md shadow-black/40"
                    >
                        Register
                    </Link>
                </div>

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
                <div className="w-full pt-3 border-t border-green-700/50 flex flex-col space-y-3">
                    
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
        )}
    </div>
  );
}