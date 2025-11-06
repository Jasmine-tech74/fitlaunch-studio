import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const footerNav = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "#packages" },
    { name: "Case Studies", href: "#casestudies" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {footerNav.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-gray-300 hover:text-indigo-400"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {year} FitLaunch Studio. All rights reserved.
        </p>
        <p className="mt-2 text-center text-xs text-gray-500">
          Built with React, Tailwind CSS, and strategic frameworks.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
