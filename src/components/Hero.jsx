import React from "react";
import mockup from "../assets/mockup.png";

const Hero = ({ mockupImageSrc }) => {
  const accentColorClasses =
    "text-indigo-600 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";
  const primaryTextColor = "text-gray-900";
  const secondaryTextColor = "text-gray-600";

  return (
    <section className="bg-white pt-20 pb-20 sm:pt-28 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-x-12 lg:gap-x-16 items-center">
          {/* === COLUMN 1: Text and CTA === */}
          <div className="md:col-span-6 lg:col-span-6 text-center md:text-left mb-12 md:mb-0">
            <div className="space-y-6">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-black ${primaryTextColor} leading-tight`}
              >
                <span className="block text-red-600 text-6xl">
                  We build High-Conversion Fitness Website Systems
                </span>
                <span
                  className={`block ${
                    accentColorClasses.split(" ")[0]
                  } font-extrabold mt-1 text-5xl`}
                >
                  that turn passive visitors into premium, committed coaching
                  clients.
                </span>
              </h1>

              <p
                className={`mt-4 max-w-xl text-xl ${secondaryTextColor} font-semibold mx-auto md:mx-0`}
              >
                Let us handle the funnels, bookings, & onboarding — you focus
                100% on training.
              </p>
            </div>

            <div className="mt-10 sm:flex sm:justify-center md:justify-start">
              <a
                href="/audit-application#contact"
                className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white ${accentColorClasses} transition duration-300 shadow-2xl transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-opacity-70`}
              >
                👉 Get a Free Website Audit (no calls required) &rarr;
              </a>
            </div>
          </div>

          {/* === COLUMN 2: Image Mockup === */}
          <div className="md:col-span-6 lg:col-span-6 flex justify-center md:justify-end">
            <img
              src={mockupImageSrc || mockup} // ✅ This line changed
              alt="High-Conversion Fitness Website System Mockup"
              className="w-full max-w-lg lg:max-w-xl h-auto rounded-xl shadow-2xl transition duration-500 hover:shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
