"use client";

import Image from "next/image";
import Link from "next/link";
import { estates } from "../estateData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface DetailBoxProps {
  label: string;
  value: string | number;
}

const DetailBox: React.FC<DetailBoxProps> = ({ label, value }) => (
  <div className="detail-box bg-white p-6 rounded-2xl shadow-xl border border-green-50 flex flex-col justify-center items-center text-center h-full min-h-[120px] transition duration-300 hover:shadow-2xl hover:border-green-200 group">
    <p className="text-2xl sm:text-3xl font-bold text-green-800 group-hover:scale-110 transition-transform duration-300">{value}</p>
    <p className="text-sm sm:text-base font-medium text-gray-500 mt-2 uppercase tracking-wide">{label}</p>
  </div>
);

export default function EstateDetailsPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const estateDetails = estates.find((es) => es.id === id);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Parallax
    if (heroRef.current) {
        gsap.to(heroRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current.parentElement,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }

    // Animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-text", { y: 50, opacity: 0, duration: 1, stagger: 0.2, delay: 0.3 })
      .from(".detail-box", { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.5")
      .from(contentRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");

  }, []);

  if (!estateDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Estate Not Found</h1>
        <p className="text-gray-600 mb-8">The requested estate could not be located.</p>
        <Link href="/estates" className="px-6 py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
          Return to Estates
        </Link>
      </div>
    );
  }

  const mapSource = estateDetails.mapEmbedUrl;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- HEADER/HERO SECTION --- */}
      <header className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div ref={heroRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
            <Image
            src={estateDetails.heroImg}
            alt={`${estateDetails.name} Plantation`}
            fill
            priority
            className="object-cover brightness-50"
            />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="hero-text text-5xl sm:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">
            {estateDetails.name}
          </h1>
          <p className="hero-text text-xl sm:text-2xl font-light text-green-50 uppercase tracking-widest">
            {estateDetails.location}
          </p>
        </div>
      </header>

      {/* --- ESTATE DETAILS (STAT BOXES) --- */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <DetailBox label="Total Area" value={estateDetails.details.totalArea} />
          <DetailBox label="Workers Count" value={estateDetails.details.workersCount} />
          <DetailBox label="Crop Types" value={estateDetails.details.cropTypes.join(", ")} />
          <DetailBox label="Established" value={estateDetails.details.yearEstablished} />
        </div>
      </section>

      <div ref={contentRef} className="max-w-5xl mx-auto px-6 pb-20">
        {/* --- DESCRIPTION --- */}
        <section className="py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Estate</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {estateDetails.description}
            </p>
        </section>

        {/* --- GALLERY --- */}
        <section className="py-8">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                    src={estateDetails.galleryImages[0] || estateDetails.heroImg}
                    alt={`Gallery View of ${estateDetails.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold">Scenic Views</h3>
                    <p className="text-gray-200">Experience the beauty of {estateDetails.name}</p>
                </div>
            </div>
        </section>

        {/* --- LOCATION MAP --- */}
        <section className="py-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Location
            </h2>
            <div className="w-full h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
                src={mapSource}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${estateDetails.name} Map`}
                className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
            </div>
        </section>
      </div>

      {/* --- CTA FOOTER --- */}
      <footer className="bg-green-900 text-white text-center py-20 px-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">
          Interested in this estate?
        </h3>
        <a
          href={`mailto:${estateDetails.contactEmail}`}
          className="inline-block bg-white text-green-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-50 hover:scale-105 hover:shadow-green-500/20 transition-all duration-300"
        >
          Contact Estate Officer
        </a>
      </footer>
    </div>
  );
}
