import Image from "next/image";
import Link from "next/link";

const Loan = () => {
  const IMG = "/ml bg.png";
  return (
    <div>
      <section className="w-[90%]  mx-auto py-16 md:py-24 bg-white flex flex-col items-center">
        {/* --- Micro Loan Container (Matches Hero/Estates alignment) --- */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0">
          <div
            className="
              w-full h-100 md:h-96 rounded-2xl p-8 md:p-12
              bg-[url('/ml bg.png')] bg-cover bg-center bg-no-repeat 
              shadow-2xl flex flex-col justify-center relative overflow-hidden
            "
          >
            <Image
              src={IMG}
              alt="plantation fields in Sri Lanka"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

            <div className="py-10 relative z-10 text-white max-w-xl">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-snug">
                Micro Loans for Growing Communities
              </h2>
              <p className="text-base md:text-lg mb-6">
                We offer flexible micro-loans to support small businesses,
                farmers, and individuals in need of financial assistance. Quick
                approvals, low requirements, and plans designed for real-life
                needs.
              </p>

              {/* Link button styling matching Navbar/Investments */}
              <Link
                href="/#" //micro-loans
                className="
                  inline-block bg-green-600 py-3 px-8 rounded-lg text-white font-semibold 
                  hover:bg-green-700 transition-colors duration-200 shadow-lg
                "
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loan;
