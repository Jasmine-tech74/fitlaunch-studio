import React, { useState, useRef } from "react";

const faqData = [
  {
    question: "Why do you use productized packages instead of custom quotes?",
    answer:
      "Clients hire frameworks, not custom uncertainty. Our productized packages are refined systems (Launchpad, Authority Builder, Scaler) designed to solve specific business problems quickly, ensuring a fixed scope, price, and timeline. This means predictable results for you.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "The timeline depends on the framework: Launchpad is typically 3-4 weeks. Authority Builder is 6-8 weeks. The Scaler is generally 8-12 weeks. This includes strategy, design, and build phases.",
  },
  {
    question: "Why do I need to fill out an application form?",
    answer:
      "Our time is limited, and we only work with clients we are 100% confident we can get significant results for. The application helps us pre-qualify you based on budget, readiness, and problem clarity. If you hit the qualification threshold (score ≥6), you get an immediate audit slot.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes. After the initial support included in your package (1-3 months), we offer flexible monthly retainer packages ($300–$1,500+/mo) for updates, security, performance, and ongoing conversion rate optimization.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "We require a 50% deposit to begin the project, 30% upon approval of the final design prototype, and the final 20% on launch day.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-900 hover:text-indigo-600">
          {question}
        </span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-indigo-600" : "rotate-0 text-gray-400"
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
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className={`mt-2 pr-12 text-gray-500 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pt-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-indigo-600 tracking-wide uppercase">
            FAQ
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
