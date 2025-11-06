import React from "react";

const PackageTier = ({
  name,
  price,
  description,
  features,
  terms,
  isPopular,
}) => {
  return (
    <div
      className={`p-8 rounded-2xl shadow-2xl transition duration-300 ${
        isPopular
          ? "bg-indigo-600 text-white transform scale-[1.02] border-4 border-yellow-400"
          : "bg-gray-50 text-gray-900 hover:shadow-3xl border border-gray-200"
      }`}
    >
      {isPopular && (
        <p className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-yellow-400 text-indigo-900 mb-4">
          Most Popular
        </p>
      )}

      <h3
        className={`text-3xl font-bold ${
          isPopular ? "text-white" : "text-gray-900"
        }`}
      >
        {name}
      </h3>
      <p
        className={`mt-4 text-xl font-extrabold ${
          isPopular ? "text-yellow-400" : "text-gray-900"
        }`}
      >
        {price}
      </p>
      <p
        className={`mt-4 text-sm ${
          isPopular ? "text-indigo-200" : "text-gray-500"
        }`}
      >
        {description}
      </p>

      <ul className="mt-6 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`flex-shrink-0 h-6 w-6 ${
                isPopular ? "text-yellow-400" : "text-indigo-600"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p
              className={`ml-3 text-base ${
                isPopular ? "text-indigo-100" : "text-gray-500"
              }`}
            >
              {feature}
            </p>
          </li>
        ))}
      </ul>

      <div
        className={`pt-6 mt-6 border-t ${
          isPopular ? "border-indigo-400" : "border-gray-200"
        }`}
      >
        <p
          className={`text-sm italic ${
            isPopular ? "text-indigo-200" : "text-gray-600"
          }`}
        >
          {terms}
        </p>
      </div>

      <a
        href="#contact"
        className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-lg text-center font-medium transition duration-200 ${
          isPopular
            ? "bg-white text-indigo-600 hover:bg-gray-100 shadow-md"
            : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
      >
        Start with {name}
      </a>
    </div>
  );
};

export default PackageTier;
