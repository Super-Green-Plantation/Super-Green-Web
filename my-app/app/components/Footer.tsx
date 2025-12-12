import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

const LOGO_PATH = '/logo.png';

const quickLinks = [
  { name: 'Customer support', href: '/contact' },
  { name: 'Investment inquiries', href: '/contact' },
  { name: 'Micro Loan', href: '/micro-loans' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=61585115335181', color: 'hover:bg-green-600/10' },
  { icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-green-600/10' },
];

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-4 md:px-8 flex justify-center">
      
      <div className="w-[90%] max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-700">
          
          {/* --- Column 1: Logo and About Text --- */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image 
                src={LOGO_PATH} 
                alt="Super Green Plantation Logo" 
                width={50} 
                height={50} 
                className="rounded-md"
              />
              <span className="text-xl font-bold text-gray-900">
                Super Green Plantation
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-6">
              Sustainable plantation solutions powering Sri Lanka’s future harvest.


            </p>

            {/* Social Icons */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-3 rounded-full text-green-600 bg-gray-100 transition-colors duration-200 
                    ${social.color} hover:text-green-700
                  `}
                  aria-label={social.icon.displayName}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* --- Column 2: Quick Links --- */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-sm hover:text-green-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Working Time --- */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Working Time</h3>
            <ul className="text-sm space-y-3">
              <li>Mon - Fri: <span className="font-medium">9:00am - 5:00pm</span></li>
              <li>Saturday: <span className="font-medium">9:00am - 12:00pm</span></li>
              <li>Sunday: <span className="font-medium">Closed</span></li>
            </ul>
          </div>

          {/* --- Column 4: Our Address --- */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Our Address</h3>
            <address className="not-italic text-sm space-y-1">
              <p>598 M, Hirimbura Road, Karapitiya, </p>
              <p>Galle, Sri Lanka, 80000</p>
            </address>
          </div>
        </div>

        {/* --- Copyright/Divider (Optional) --- */}
        <div className="pt-8 mt-12 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Super Green Plantation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}