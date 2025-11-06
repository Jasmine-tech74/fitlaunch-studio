import React from "react";
// 1. Import routing components
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  // Original logic for smooth scrolling/refs can be simplified or managed here if needed.
  // We'll keep the components simple for routing purposes.
  return (
    <>
      <Navbar />
      <main>
        {/* All landing page sections */}
        <Hero />
        <Packages />
        <CaseStudies />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

// --- Main App Component with Routing ---
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* BrowserRouter enables routing across the application */}
      <BrowserRouter>
        <Routes>
          {/* 1. Main Landing Page Route (Path: /) */}
          {/* This route renders the entire original one-page site */}
          <Route path="/" element={<LandingPage />} />

          {/* 2. Audit Application Route (Path: /audit-application) */}
          {/* This page only renders the Navbar and the Application Form */}
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
          {/* This page only renders the Navbar and the Confirmation Message */}
          <Route
            path="/audit-thank-you"
            element={
              <>
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
                <h1>404 Not Found</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
