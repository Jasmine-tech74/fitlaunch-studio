import React from "react";
import CaseStudyCard from "./CaseStudyCard";

const caseStudiesData = [
  {
    title: "Alex Trains Strong",
    subtitle:
      "Transforming a static portfolio into a scalable fitness booking platform.",
    demoLink: "https://alex-trains-strong.vercel.app/",
    problem:
      "Alex had a basic portfolio site that required manual email bookings and scattered payment collection, limiting his growth and wasting time.",
    strategy:
      "Implemented the Launchpad framework: integrated a dedicated booking system, streamlined the service pages, and optimized for local SEO.",
    design:
      "Used a high-contrast, motivational design focused on immediate action buttons and clear service tiers.",
    result:
      "Predicted/Expected: 200% increase in qualified booking inquiries and reduction of administrative time by 10 hours/week.",
  },
  {
    title: "IronBody Academy",
    subtitle: "Building a full-stack membership site for recurring revenue.",
    demoLink: "https://ironbody-academy.lovable.app",
    problem:
      "The client wanted to transition from 1:1 coaching to a high-volume online course and membership model, requiring protected content and e-commerce.",
    strategy:
      "Implemented The Scaler framework: built a custom client portal, integrated Stripe for subscription payments, and developed a tiered content membership structure.",
    design:
      "A dark, modern aesthetic conveying strength and exclusivity, with clear UI for content navigation.",
    result:
      "Predicted/Expected: Launched with 50+ founding members, generating a predictable **$4k+ in monthly recurring revenue**.",
  },
];

const CaseStudies = () => {
  return (
    <section id="casestudies" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Proven Results
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            See Our Client Transformations
          </p>
          <p className="mt-4 text-xl text-gray-500">
            We don't just build sites; we solve business problems with strategic
            frameworks.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
