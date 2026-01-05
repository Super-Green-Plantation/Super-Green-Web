import Image from "next/image";
import Link from "next/link";

const Estate = () => {
  const BACKGROUND_IMAGE_PATH = "/hero.png";

  const estate = [
    {
      id: 1,
      img: "/sample-1.jpg",
      location: "Galle",
    },
    {
      id: 2,
      img: "/sample-2.png",
      location: "Matara",
    },
    {
      id: 3,
      img: "/sample-3.png",
      location: "Hambantota",
    },
    {
      id: 4,
      img: "/sample-4.png",
      location: "Rathnapura",
    },
    {
      id: 5,
      img: "/sample-5.jpg",
      location: "Thanamalwila",
    },
  ];

  return (
    <div className=" mx-auto px-0 md:px-0 mb-20">
      <div className=" text-center w-full relative z-0 min-h-[40vh] flex justify-center">
        <Image
          src={BACKGROUND_IMAGE_PATH}
          alt="Lush green tea plantation fields in Sri Lanka"
          fill // Makes the image fill the entire container
          style={{ objectFit: "cover" }} // Ensures image covers the area without stretching
          priority // Load image early as it's the main hero image
        />
        <div className="absolute inset-0 bg-black/50  z-5"></div>
        <div className="relative z-10 w-[90%] flex-col flex justify-center max-w-6xl mx-auto py-20 md:py-32 text-white items-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Our Estates
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-light ">
            Discover the lands that power our plantation operations across Sri
            Lanka.
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24 w-[90%] max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Cultivating Excellence Across Every Estate
        </h2>
        <p className="mt-5 text-lg md:text-xl ">
          Our estates are strategically located across the country, each managed
          with care, sustainable practices, and modern agricultural methods.
          Explore our estate lands and learn how we grow quality from the ground
          up.
        </p>
      </div>

      <div className="w-[90%] max-w-6xl mx-auto px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {estate.map((es, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 border border-gray-200 shadow-xl rounded-2xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-green-600"
          >
            <div className="relative h-60 w-full overflow-hidden">
              {/* Use Next/Image for optimization */}
              <Image
                src={es.img}
                alt={`Image of ${es.location} Estate`}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-110 rounded-2xl hover:rounded-2xl"
                sizes="(max-width: 768px) 100vw, 33vw" // Optimization hint
              />
            </div>
            <div className="p-4 md:p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {es.location}
              </h2>
              <Link
                href={`/estates/${es.id}`}
                className="
        text-sm font-semibold text-green-600 hover:text-green-700 
        flex items-center space-x-1 mt-2 transition-colors
      "
              >
                View Details &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estate;
