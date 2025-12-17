import Image from 'next/image';
import Link from 'next/link';
import { estates } from '../estateData'; 

interface DetailBoxProps {
  label: string;
  value: string | number;
}

const DetailBox: React.FC<DetailBoxProps> = ({ label, value }) => (
  <div className="bg-green-800 text-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center h-full min-h-[100px] transition duration-300 hover:bg-green-700">
    <p className="text-xl sm:text-2xl font-bold">{value}</p>
    <p className="text-sm sm:text-base opacity-90 mt-1">{label}</p>
  </div>
);

export default function EstateDetailsPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  console.log("ID →", params.id);

  const estateDetails = estates.find(es => es.id === id);

  if (!estateDetails) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">404 - Estate Not Found</h1>
        <p className="mt-4">The requested estate with ID: {params.id} does not exist.</p>
        <Link href="/" className="text-green-600 hover:text-green-700 mt-2 block">
          Go back to Home
        </Link>
      </div>
    );
  }

  const mapSource = estateDetails.mapEmbedUrl;

  return (
    <div className="min-h-screen bg-white">
      {/* --- HEADER/HERO SECTION --- */}
      <header className="relative h-96 overflow-hidden">
        <Image
          src={estateDetails.heroImg}
          alt={`${estateDetails.name} Plantation`}
          layout="fill"
          objectFit="cover"
          className="filter brightness-75"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-wide">
            {estateDetails.name}
          </h1>
          <p className="text-lg sm:text-xl font-light">{estateDetails.location}</p>
        </div>
      </header>

      {/* --- ESTATE DETAILS (STAT BOXES) --- */}
      <section className="container mx-auto px-4 -mt-10 sm:-mt-16 relative z-10 flex justify-center items-center ">
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <DetailBox label="Total Area" value={estateDetails.details.totalArea} />
          <DetailBox label="Workers Count" value={estateDetails.details.workersCount} />
          <DetailBox label="Crop Types" value={estateDetails.details.cropTypes.join(', ')} />
          <DetailBox label="Year Established" value={estateDetails.details.yearEstablished} />
        </div>
      </section>

      {/* --- DESCRIPTION --- */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          {estateDetails.description}
        </p>
      </section>

      {/* --- GALLERY --- */}
      <section className="container mx-auto px-4 py-8 ">
        <h2 className="text-2xl font-semibold text-center mb-8 text-green-800">Gallery</h2>
        <div className="flex justify-center">
          {/* Using the first image from gallery as the main display as per the original image */}
          {estateDetails.galleryImages.length > 0 && (
            <div className="w-full max-w-5xl h-96 relative rounded-xl shadow-2xl overflow-hidden">
              <Image
                src={estateDetails.galleryImages[0]}
                alt={`Gallery View of ${estateDetails.name}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* --- LOCATION MAP --- */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8 text-green-800">Location</h2>
        <div className="w-full max-w-5xl mx-auto h-96 bg-gray-200 rounded-xl overflow-hidden shadow-xl">
          {/* Map Embed - **Note on Security:** Iframes can pose security risks. 
             In a production app, ensure your map source is trusted. */}
          <iframe
            src={mapSource}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${estateDetails.name} Map`}
          ></iframe>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <footer className="bg-green-800 text-white text-center py-33">
        <h3 className="text-xl mb-12">
          Interested in visiting or learning more about our estates?
        </h3>
        <a 
          href={`mailto:${estateDetails.contactEmail}`}
          className="bg-white text-green-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Contact Estate Officer
        </a>
      </footer>
    </div>
  );
}