import { Leaf, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const values = [
    {
      icon: <Leaf className="text-green-600" />,
      title: "Sustainability First",
      description:
        "Every decision we make is rooted in protecting the earth for future generations.",
    },
    {
      icon: <Target className="text-green-600" />,
      title: "Precision Farming",
      description:
        "Using data-driven techniques to maximize yield while minimizing waste.",
    },
    {
      icon: <Users className="text-green-600" />,
      title: "Community Driven",
      description:
        "We empower local farmers by providing them with the tools to succeed.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section - Matches Estate Hero Structure */}
      <section className="relative w-full text-center min-h-[40vh] flex justify-center items-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Lush agricultural landscape"
          fill
          className="object-cover"
          priority
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/50 z-5"></div>
        <div className="relative z-10 w-[90%] max-w-6xl mx-auto py-20 md:py-32 text-white flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            Cultivating a greener future through innovation, tradition, and a
            deep respect for the land.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Section - Width adjusted to w-[90%] max-w-6xl */}
      <section className="py-20 md:py-24">
        <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">
              Since 1998
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Growing Beyond Boundaries
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              SuperGreen started with a single plot of land and a vision: to
              prove that high-scale agriculture could coexist with environmental
              preservation. Today, we are leaders in organic export and
              sustainable irrigation techniques.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that food should not only be healthy for the consumer
              but also healthy for the soil. By blending ancient wisdom with
              modern technology, we ensure our harvests are second to none.
            </p>
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/inquiry.png"
              alt="Our farming process"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid - Width adjusted to w-[90%] max-w-6xl */}
      <section className="bg-gray-50 py-20">
        <div className="w-[90%] max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Impact Statistics Banner - Width adjusted to w-[90%] max-w-6xl */}
      <section className="bg-green-700 py-16 text-white">
        <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">15k+</p>
            <p className="text-green-100 text-sm uppercase tracking-wide font-medium">
              Acres Managed
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">100%</p>
            <p className="text-green-100 text-sm uppercase tracking-wide font-medium">
              Organic Certified
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">500+</p>
            <p className="text-green-100 text-sm uppercase tracking-wide font-medium">
              Local Farmers
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">24</p>
            <p className="text-green-100 text-sm uppercase tracking-wide font-medium">
              Export Countries
            </p>
          </div>
        </div>
      </section>

      {/* 5. Call to Action - Width adjusted to w-[90%] max-w-6xl */}
      <section className="py-20 text-center">
        <div className="w-[90%] max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in our processes?
          </h2>
          <p className="text-gray-600 mb-10 text-lg font-light">
            We believe in full transparency. Learn more about how we handle our
            crops or reach out to partner with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={'/contact'} className="bg-green-600 text-white px-10 py-4 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg text-center">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;