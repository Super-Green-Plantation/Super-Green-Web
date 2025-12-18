import { ChevronRight, Mail, Recycle, Sprout, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


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
const BACKGROUND_IMAGE_PATH = '/hero.png'; 

// --- Feature Card Component ---
const FeatureCard = ({ icon: Icon, title, description, bgColor }:any) => (
  // Positioning and styling for the floating cards
  <div className={`
    ${bgColor} p-6 rounded-xl shadow-2xl backdrop-blur-sm 
    max-w-xs transition-transform duration-300 hover:scale-[1.02]
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
  return (
    // Main Container with Background Image
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image (Using Next/Image for optimization) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={BACKGROUND_IMAGE_PATH}
          alt="Lush green tea plantation fields in Sri Lanka"
          fill // Makes the image fill the entire container
          style={{ objectFit: 'cover' }} // Ensures image covers the area without stretching
          priority // Load image early as it's the main hero image
        />
      </div>

      {/* Dark Overlay for Text Readability (optional, but helps with contrast) */}
      <div className="absolute inset-0 bg-black opacity-30 z-5"></div>
      
      {/* Content Layer */}
      <div className="relative z-10 w-[90%] max-w-6xl mx-auto py-20 md:py-32 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* --- LEFT SIDE: Main Heading and CTAs --- */}
        <div className="md:col-span-2 text-white space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Growing Quality. <br/>Cultivating Trust.
          </h1>
          <p className="text-lg md:text-xl font-medium ">
            Sustainable plantation solutions powering Sri Lanka’s future harvest.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            
            {/* Contact Us Button */}
            <Link 
              href="/contact" 
              className="
                flex items-center justify-center space-x-2 py-3 px-8 rounded-lg 
                bg-transparent border-2 border-white text-white font-bold 
                hover:bg-white hover:text-green-800 transition-all duration-300 
                shadow-xl
              "
            >
              <Mail /> <span>Contact Us</span> 
            </Link>

            {/* Get Started Button (Prominent Green) */}
            <Link 
              href="/auth/register" 
              className="
                py-3 px-8 rounded-lg bg-green-600 text-white font-bold 
                hover:bg-green-700 transition-colors duration-300 
                shadow-xl flex gap-2 items-center justify-center
              "
            >
              Get Started
               <ChevronRight />
            </Link>
          </div>
        </div>

        {/* --- RIGHT SIDE: Feature Cards --- */}
        <div className="md:col-span-1 flex flex-col items-end space-y-6 mt-10 md:mt-0">
          {/* Use specific positioning to mimic the staggered look */}
          <div className="self-start md:self-auto md:mr-20 transition-all duration-300 hover:shadow-2xl">
            <FeatureCard {...featureCards[0]} />
          </div>
          
          <div className="md:ml-20 transition-all duration-300 hover:shadow-2xl">
            <FeatureCard {...featureCards[1]} />
          </div>

          <div className="self-start md:self-auto md:mr-20 transition-all duration-300 hover:shadow-2xl ">
            <FeatureCard {...featureCards[2]} />
          </div>
        </div>

      </div>
    </section>
  );
}