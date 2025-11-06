import React from "react";

const AuditThankYou = () => {
  const accentColor = "text-indigo-600";
  const accentBg = "bg-indigo-600 hover:bg-indigo-700";

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 bg-white rounded-xl shadow-2xl border-t-8 border-teal-600">
          {/* Header Icon */}
          <svg
            className={`mx-auto h-16 w-16 ${accentColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          {/* Main Headline */}
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Application Received!
          </h1>

          {/* Core Value Proposition & Expectation Management */}
          <p className="mt-6 text-xl text-gray-700 font-medium">
            Your personalized Website System Audit is now being prepared.
          </p>

          <div className="mt-8 p-6 bg-teal-50 rounded-lg border-l-4 border-teal-400 shadow-inner">
            <p className="text-xl font-bold text-teal-800">
              The Audit Promise (No Calls Required)
            </p>
            <p className="mt-2 text-lg text-teal-700">
              We will email your custom 1-2 minute video audit and next steps to{" "}
              <span className="font-extrabold underline">
                your inbox within 24–48 hours.
              </span>
            </p>
            <p className="mt-2 text-sm text-teal-600">
              Please check your spam/promotions folder, as it often contains the
              high-value details!
            </p>
          </div>

          {/* Secondary CTA/Navigation (Optional, for next steps) */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              In the meantime, learn how our systems work:
            </h2>
            <a
              href="#process" // Link to your Process or Case Studies section
              className={`w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white ${accentBg} transition duration-300 shadow-md`}
            >
              See Our 5-Step System →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditThankYou;
