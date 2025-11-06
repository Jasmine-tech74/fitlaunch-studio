import React from "react";
import PackageTier from "./PackageTier";

const packages = [
  {
    name: "Launchpad",
    price: "$4,000",
    description: "The foundational package for a professional online presence.",
    features: [
      "5-page website",
      "Basic booking integration",
      "On-page SEO optimization",
      "Fast-track design",
    ],
    terms: "50% deposit to start",
    isPopular: false,
  },
  {
    name: "Authority Builder",
    price: "$9,500",
    description:
      "Our most popular package to generate leads and optimize conversions.",
    features: [
      "Lead magnet funnel setup",
      "Conversion Rate Optimization (CRO)",
      "A/B Testing setup",
      "1 month post-launch support",
      "Advanced Analytics",
    ],
    terms: "50% deposit, 30% design approval, 20% launch",
    isPopular: true,
  },
  {
    name: "The Scaler",
    price: "$18,000",
    description:
      "The complete system for complex revenue models and client management.",
    features: [
      "Membership site integration",
      "E-commerce setup (Shopify/WooCommerce)",
      "Custom client portal",
      "3 months dedicated support",
      "Advanced security and performance",
    ],
    terms: "50% deposit, 30% design approval, 20% launch",
    isPopular: false,
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Productized Services
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Frameworks That Get Results
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Choose the clear path to scale. Clients hire frameworks, not custom
            uncertainty.
          </p>
        </div>

        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg, index) => (
            <PackageTier key={index} {...pkg} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Maintenance & Support
          </h3>
          <p className="text-lg text-gray-600">
            Keep your engine running smoothly with a monthly retainer.
          </p>
          <p className="mt-2 text-xl font-semibold text-indigo-600">
            $300 – $1,500+/mo (Maintenance, updates, & ongoing support)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
