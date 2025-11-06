import React, { useState } from "react";

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
  const [submitted, setSubmitted] = useState(false); // To prevent double submission/show loading

  // --- FORM HANDLER: Sends data to Netlify and redirects on success ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Calculate Internal Score (Kept for console logging/internal use)
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

    // --- 2. SUBMIT DATA TO NETLIFY ---
    try {
      // Use FormData to capture all fields, including the hidden netlify-related fields
      const formElement = e.target;

      const response = await fetch(formElement.action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(formElement)).toString(),
      });

      if (response.ok) {
        // SUCCESS: Redirects to your confirmation page
        window.location.href = formElement.action;
      } else {
        alert("Submission failed. Please check your inputs and try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed due to a network error.");
    }

    setSubmitted(true);
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

  // Using Dark Teal for consistency with premium aesthetic
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

      {/* 🚨 CRITICAL: NETLIFY FORM ATTRIBUTES ADDED HERE 🚨 */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
        name="website-audit-application"
        method="POST"
        data-netlify="true"
        action="/audit-thank-you" // Redirect URL for your Success Page
      >
        {/* Hidden field is required by Netlify to identify the form */}
        <input
          type="hidden"
          name="form-name"
          value="website-audit-application"
        />

        {/* === SECTION 1: CONTACT INFORMATION === */}
        <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
          1. Contact Information
        </h3>
        {/* ... (Input fields remain the same) ... */}
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
        {/* ... (Select fields remain the same) ... */}
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
