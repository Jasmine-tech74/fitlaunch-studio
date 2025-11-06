import React from "react";
import ApplicationForm from "./ApplicationForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Ready for Premium Clients?
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Apply for Your Exclusive Agency Partnership Audit
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Tell us about your business to unlock your custom, no-call audit and
            project blueprint.
          </p>
        </div>

        <ApplicationForm />
      </div>
    </section>
  );
};

export default Contact;
