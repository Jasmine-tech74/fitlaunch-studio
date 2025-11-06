import React, { useEffect, useRef, useState } from "react";

const CaseStudyCard = ({
  title,
  subtitle,
  demoLink,
  problem,
  strategy,
  design,
  result,
}) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Optional simple fade-in when component mounts (no Anime.js)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // short delay for a smooth mount effect
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { title: "Problem", content: problem, icon: "❓" },
    { title: "Strategy", content: strategy, icon: "💡" },
    { title: "Design Choices", content: design, icon: "🎨" },
    { title: "Predicted/Expected Result", content: result, icon: "📈" },
  ];

  return (
    <article
      ref={cardRef}
      className={`${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } bg-gray-50 p-8 md:p-12 rounded-xl shadow-2xl transition-all duration-700 ease-out hover:shadow-3xl`}
    >
      <div className="md:flex md:justify-between md:items-start mb-8 border-b pb-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Case Study
          </h3>
          <h4 className="mt-1 text-4xl font-extrabold text-gray-900">
            {title}
          </h4>
          <p className="mt-2 text-xl text-gray-600">{subtitle}</p>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 shadow-md transition duration-150"
          >
            View Live Demo &rarr;
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <p className="text-3xl mb-2">{section.icon}</p>
            <h5 className="text-lg font-bold text-gray-900 mb-2">
              {section.title}
            </h5>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default CaseStudyCard;
