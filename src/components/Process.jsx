import React from "react";

const steps = [
  {
    step: 1,
    title: "Qualify & Audit",
    description:
      "You fill out our application form. If you're a fit (score ≥6), we offer a free website audit to define the exact transformation.",
    icon: "✅",
  },
  {
    step: 2,
    title: "Strategy & Deposit",
    description:
      "We align on the perfect framework (Launchpad, Authority Builder, or Scaler). You pay the 50% deposit to lock in your project slot.",
    icon: "🤝",
  },
  {
    step: 3,
    title: "Design & Approval",
    description:
      "We productize your offer into a custom design prototype. On design approval, you pay the 30% milestone payment.",
    icon: "🖥️",
  },
  {
    step: 4,
    title: "Build & Launch",
    description:
      "We transform the design into a fully functional, lead-generating machine. After final testing and QA, the final 20% payment is due at launch.",
    icon: "🚀",
  },
  {
    step: 5,
    title: "Support & Scale",
    description:
      "Depending on your package, we provide 1-3 months of dedicated support, with optional monthly retainers for ongoing maintenance and CRO.",
    icon: "⚙️",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 sm:py-32 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            How We Work
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Your 5-Step Path to Conversion
          </p>
          <p className="mt-4 text-xl text-gray-500">
            A defined process ensures clarity, speed, and predictable results.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`mb-12 flex relative ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Step Content */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-lg shadow-xl bg-white border-t-4 border-indigo-600 transition duration-300 hover:shadow-2xl ${
                  index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                }`}
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>

              {/* Step Circle Marker */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-xl ring-8 ring-indigo-50 shadow-lg">
                {item.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
