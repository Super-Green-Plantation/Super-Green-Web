'use client'
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Estates = () => {
    const container = useRef<HTMLDivElement>(null);
    const textSection = useRef<HTMLDivElement>(null);
    const mainImage = useRef<HTMLDivElement>(null);
    const gridImages = useRef<HTMLDivElement>(null);

  const images = {
    // NOTE: Ensure these image paths are correct in your public folder
    main: { src: '/cinnamon tree.png', alt: 'Cinnamon leaves' },
    nutmeg: { src: '/nutmeg.png', alt: 'Nutmeg fruit' },
    pepper: { src: '/black-paper.png', alt: 'Pepper plant' },
    tea: { src: '/tea.png', alt: 'Tea leaves' },
    bell_pepper: { src: '/bell-paper.png', alt: 'Red bell peppers' },
  };


  useGSAP(() => {
    // 1. Text Reveal
    gsap.from(textSection.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: textSection.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });

    // 2. Main Image Reveal (Scale Up)
    gsap.from(mainImage.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: mainImage.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
        },
    });

     // 3. Grid Images Staggered Reveal
     if (gridImages.current) {
         gsap.fromTo(gridImages.current.children, 
             { y: 60, opacity: 0 },
             {
                 y: 0,
                 opacity: 1,
                 duration: 1.2,
                 stagger: 0.15,
                 ease: "expo.out",
                 scrollTrigger: {
                     trigger: gridImages.current,
                     start: "top 85%",
                     once: true
                 },
                 clearProps: "all"
             }
         );
     }

  }, { scope: container });


  return (
    <section ref={container} className="py-16 md:py-24 bg-gray-50 flex flex-col items-center">
      
      <div className="w-[90%] max-w-6xl mx-auto px-0 md:px-0"> 
        

        <div ref={textSection} className="mb-12 text-center md:text-left">
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2'>
            Explore Our Estates
          </h2>
          <p className='text-lg text-gray-600'>
            Sustainable plantation solutions powering Sri Lanka’s future harvest.
          </p>
        </div>

         <div className="w-full rounded-3xl  p-4 md:p-6">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div ref={mainImage} className="md:col-span-3 relative h-80 md:h-140 shadow-xl rounded-2xl overflow-hidden group">
              <Image
                src={images.main.src}
                alt={images.main.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
               {/* Overlay on hover */}
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div ref={gridImages} className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-4 h-full">
              <div className="relative h-40 md:h-68 shadow-lg rounded-xl overflow-hidden group">
                <Image
                  src={images.nutmeg.src}
                  alt={images.nutmeg.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Image 2: Pepper (Top Right) */}
              <div className="relative h-40 md:h-68 shadow-lg rounded-xl overflow-hidden group">
                <Image
                  src={images.pepper.src}
                  alt={images.pepper.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Image 3: Tea (Bottom Left) */}
              <div className="relative h-40 md:h-68 shadow-lg rounded-xl overflow-hidden group">
                <Image
                  src={images.tea.src}
                  alt={images.tea.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Image 4: Bell Pepper (Bottom Right) */}
              <div className="relative h-40 md:h-68 shadow-lg rounded-xl overflow-hidden group">
                <Image
                  src={images.bell_pepper.src}
                  alt={images.bell_pepper.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Estates