import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const LOGO_PATH = '/logo.png';

const quickLinks = [
  { name: 'Customer support', href: '/contact' },
  { name: 'Investment inquiries', href: '/contact' },
  { name: 'Micro Loan', href: '/micro-loans' },
  { name: 'Estates', href: '/estates' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61585115335181', name: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', name: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 md:px-8 border-t border-gray-800">
      
      <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* --- Column 1: Brand --- */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group w-fit">
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                <Image 
                    src={LOGO_PATH} 
                    alt="Super Green Plantation Logo" 
                    width={50} 
                    height={50} 
                    className="transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-wide group-hover:text-green-400 transition-colors">
                Super Green 
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Sustainable plantation solutions powering Sri Lanka’s future harvest. Join us in cultivating a greener, wealthier tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2.5 rounded-full bg-gray-800 text-gray-400 
                    hover:bg-green-600 hover:text-white hover:scale-110
                    transition-all duration-300 shadow-md hover:shadow-green-500/30
                  "
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* --- Column 2: Quick Links --- */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-green-600 pl-3">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-sm hover:text-green-400 hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Working Time --- */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-green-600 pl-3">Working Time</h3>
            <ul className="text-sm space-y-3 text-gray-400">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Fri:</span> 
                <span className="font-medium text-gray-200">9:00am - 5:00pm</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Saturday:</span> 
                <span className="font-medium text-gray-200">9:00am - 12:00pm</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sunday:</span> 
                <span className="font-medium text-red-400">Closed</span>
              </li>
            </ul>
          </div>

          {/* --- Column 4: Our Address --- */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-l-4 border-green-600 pl-3">Contact Us</h3>
            <address className="not-italic text-sm space-y-4 text-gray-400">
              <p className="flex items-start space-x-3">
                <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></span>
                <span>598 M, Hirimbura Road,<br/> Karapitiya, Galle,<br/> Sri Lanka, 80000</span>
              </p>
              <p className="flex items-center space-x-3 group cursor-pointer hover:text-green-400 transition-colors">
                 <span className="block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                 <span>+94 77 123 4567</span>
              </p>
              <p className="flex items-center space-x-3 group cursor-pointer hover:text-green-400 transition-colors">
                 <span className="block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                 <span>info@supergreen.lk</span>
              </p>
            </address>
          </div>
        </div>

        {/* --- Copyright/Divider  --- */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Super Green Plantation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}