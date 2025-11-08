import React, { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mblqrgkr";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    url: "",
    monthlyRevenue: "",
    clientCount: "",
    biggestChallenge: "",
    leadSources: "",
    budget: "",
    timeline: "",
    readyToStart: "",
    shortPitch: "",
  });

  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // --- FORM HANDLER: Submits data to Formspree via fetch ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // 🛑 CRITICAL: Stop the browser's default HTML submission
    setSubmitted(true);

    // 1. Calculate Internal Score
    let currentScore = 0;

    if (formData.monthlyRevenue === ">$5k") {
      currentScore += 2;
    }
    if (["$4k-$7k", "$7k-$15k", "$15k+"].includes(formData.budget)) {
      currentScore += 3;
    }
    if (formData.readyToStart === "Yes") {
      currentScore += 2;
    }
    if (
      formData.biggestChallenge.length > 20 &&
      formData.shortPitch.length > 20
    ) {
      currentScore += 2;
    }

    setScore(currentScore);

    // 2. Prepare data for submission to Formspree
    const data = new FormData(e.target);
    data.append("Internal_Score", currentScore); // Append the calculated score

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success: Force client-side redirect to the thank-you page
        // This bypasses the Netlify server redirect entirely.
        window.location.href = "/audit-thank-you";
      } else {
        // Handle Formspree API errors (e.g., rate limits, invalid fields)
        alert("Submission failed. Please check the form and try again.");
        setSubmitted(false);
      }
    } catch (error) {
      // Handle network errors
      console.error("Submission error:", error);
      alert("A network error occurred. Please check your connection.");
      setSubmitted(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const BudgetOptions = [
    { value: "<$4k", label: "Under $4,000" },
    { value: "$4k-$7k", label: "$4,000 - $7,000 (Launchpad Range)" },
    { value: "$7k-$15k", label: "$7,000 - $15,000" },
    { value: "$15k+", label: "$15,000+" },
  ];

  const RevenueOptions = [
    { value: "<$5k", label: "Under $5,000/mo" },
    { value: ">$5k", label: "$5,000+/mo" },
  ];

  const accentColorClasses =
    "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Application for a Free Website Audit
      </h2>
      <p className="mb-8 text-lg text-gray-600 text-center">
        Fill this out to get your personalized video audit within 24-48 hours.
        No calls, ever.
      </p>

      {/* 🚨 Form no longer has Netlify attributes 🚨 */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* === SECTION 1: CONTACT INFORMATION === */}
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
          1. Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="input-field"
          />
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Business Name"
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="input-field"
          />
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Website/Instagram URL (Crucial for Audit)"
            required
            className="input-field"
          />
        </div>

        {/* === SECTION 2: QUALIFICATION QUESTIONS === */}
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 pt-6">
          2. Qualification & Budget
        </h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Monthly Revenue
          </label>
          <select
            name="monthlyRevenue"
            value={formData.monthlyRevenue}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select an estimate</option>
            {RevenueOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget for this project
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select a range</option>
            {BudgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Are you ready to start in the next 30 days?
          </label>
          <select
            name="readyToStart"
            value={formData.readyToStart}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* === SECTION 3: PROJECT GOALS === */}
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 pt-6">
          3. Goals & Challenges
        </h3>
        <textarea
          name="biggestChallenge"
          value={formData.biggestChallenge}
          onChange={handleChange}
          placeholder="What is your single biggest business challenge right now?"
          rows="3"
          required
          className="input-field"
        ></textarea>
        <textarea
          name="shortPitch"
          value={formData.shortPitch}
          onChange={handleChange}
          placeholder="If we could solve one thing in the next 90 days, what specific outcome would that be?"
          rows="3"
          required
          className="input-field"
        ></textarea>

        {/* === SECTION 4: ADDITIONAL INFO (Optional Context) === */}
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4 pt-6">
          4. Context (Optional)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="number"
            name="clientCount"
            value={formData.clientCount}
            onChange={handleChange}
            placeholder="Monthly Paid Clients"
            className="input-field"
          />
          <input
            type="text"
            name="leadSources"
            value={formData.leadSources}
            onChange={handleChange}
            placeholder="Current Lead Sources"
            className="input-field"
          />
          <input
            type="text"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="Ideal Launch Timeline"
            className="input-field"
          />
        </div>

        {/* --- SUBMIT BUTTON --- */}
        <button
          type="submit"
          className={`w-full py-4 px-6 ${accentColorClasses} text-white font-extrabold text-xl rounded-xl transition duration-200 shadow-xl transform hover:scale-[1.01]`}
          disabled={submitted} // Disable after first click to prevent double submission
        >
          {submitted ? "Processing..." : "Submit Application & Start Audit"}
        </button>
      </form>

      <style jsx="true">{`
        .input-field {
          @apply w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-150;
        }
      `}</style>
    </div>
  );
};

export default ApplicationForm;
