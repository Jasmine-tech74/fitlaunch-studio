import React, { useEffect } from "react"; // Added useEffect
// 1. Import routing components and useLocation
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Added useLocation

// Standard components (Monolithic Landing Page)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Packages from "./components/Packages";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// New dedicated components (For the funnel)
import ApplicationForm from "./components/ApplicationForm";
import AuditThankYou from "./components/AuditThankYou";

// --- Component to render the full Landing Page (SPA) ---
const LandingPage = () => {
  const location = useLocation(); // Hook to access the current URL location

  // Logic to handle scrolling to a section based on the URL hash
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the leading '#'

      // Use setTimeout to ensure the DOM has finished rendering before attempting to scroll.
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [location]); // Rerun this effect every time the URL location changes

  return (
    <>
      <Navbar />
      <main>
        {/* All landing page sections MUST now have an ID that matches the Navbar links */}
        <Hero />
        <Packages id="packages" /> {/* 🚨 Added id="packages" */}
        <CaseStudies id="casestudies" /> {/* 🚨 Added id="casestudies" */}
        <Process id="process" /> {/* 🚨 Added id="process" */}
        <FAQ id="faq" /> {/* 🚨 Added id="faq" */}
        <Contact id="contact" />{" "}
        {/* 🚨 Added id="contact" (for the CTA button) */}
      </main>
      <Footer />
    </>
  );
};

// --- Main App Component with Routing ---
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* BrowserRouter is correctly placed here */}
      <BrowserRouter>
        <Routes>
          {/* 1. Main Landing Page Route (Path: /) */}
          <Route path="/" element={<LandingPage />} />

          {/* 2. Audit Application Route (Path: /audit-application) */}
          <Route
            path="/audit-application"
            element={
              <>
                <Navbar />
                <main className="pt-24 pb-20">
                  <ApplicationForm />
                </main>
                <Footer />
              </>
            }
          />

          {/* 3. Audit Thank You Route (Path: /audit-thank-you) */}
          <Route
            path="/audit-thank-you"
            element={
              <>
                {/* Navbar is rendered here, allowing navigation back to homepage */}
                <Navbar />
                <main className="pt-24 pb-20">
                  <AuditThankYou />
                </main>
                <Footer />
              </>
            }
          />

          {/* Optional: 404/Not Found Route */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <h1 className="text-center pt-32 text-4xl font-bold">
                  404 Not Found
                </h1>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
