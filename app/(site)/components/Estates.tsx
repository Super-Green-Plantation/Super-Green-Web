'use client'
import Image from 'next/image';

const Estates = () => {

  const images = {
    // NOTE: Ensure these image paths are correct in your public folder
    main: { src: '/cinnamon tree.png', alt: 'Cinnamon leaves' },
    nutmeg: { src: '/sadikks.JPG', alt: 'Nutmeg fruit' },
    pepper: { src: '/b p.jfif', alt: 'Pepper plant' },
    tea: { src: '/tea.jfif', alt: 'Tea leaves' },
    bell_pepper: { src: '/bell pepper.jfif', alt: 'Red bell peppers' },
  };


  return (
    <section className="py-16 md:py-24 bg-gray-50 flex flex-col items-center">
      
      <div className="w-[90%] max-w-6xl mx-auto px-0 md:px-0"> 
        

        <div className="mb-12 text-center md:text-left">
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2'>
            Explore Our Estates
          </h2>
          <p className='text-lg text-gray-600'>
            Sustainable plantation solutions powering Sri Lanka’s future harvest.
          </p>
        </div>

         <div className="w-full rounded-3xl  p-4 md:p-6">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div className="md:col-span-3 relative h-80 md:h-140 shadow-xl rounded-2xl overflow-hidden">
              <Image
                src={images.main.src}
                alt={images.main.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </div>

            <div className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-4 h-full">
              <div className="relative h-40 md:h-68 shadow-lg rounded-xl overflow-hidden">
                <Image
                  src={images.nutmeg.src}
                  alt={images.nutmeg.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Image 2: Pepper (Top Right) */}
              <div className="relative h-40 md:h-68 shadow-lg rounded-xl overflow-hidden">
                <Image
                  src={images.pepper.src}
                  alt={images.pepper.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Image 3: Tea (Bottom Left) */}
              <div className="relative h-40 md:h-68 shadow-lg rounded-xl overflow-hidden">
                <Image
                  src={images.tea.src}
                  alt={images.tea.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>

              {/* Image 4: Bell Pepper (Bottom Right) */}
              <div className="relative h-40 md:h-68 shadow-lg rounded-xl overflow-hidden">
                <Image
                  src={images.bell_pepper.src}
                  alt={images.bell_pepper.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
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