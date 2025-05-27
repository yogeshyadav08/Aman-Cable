import React from "react";
import Services from "./Services";
import PricingTable from "./PricingTable";
import PricingTable2 from "./PricingTable2";
import PriceTable3 from "./PriceTable3";
import ContactUs from "./ContactUs";
import MapSection from "./MapSection";
import Footer from "./Footer";
import { Link } from "react-scroll";
import pylogo from "../images/railtel_logo.png";
import logo from "../images/weblogo.png";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white scroll-smooth h-[100vh] w-full sm:w-50 md:w-full lg:w-full flex items-center justify-start px-6 md:px-12"
        style={{
          backgroundImage: "url('/bg-imageaman.png')",
          height: "750px",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0"></div>

        {/* Logo */}
        <div className="absolute top-5 left-6 z-20">
          <img
            src={logo}
            alt="Aman Cable Logo"
            className="w-30 sm:w-30 md:w-32 lg:w-36"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-wide drop-shadow-xl">
            AMAN CABLE & BROADBAND
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 tracking-wide">
            Reliable Broadband. Clear TV. Secure Homes.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            offset={-80}
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 text-white font-semibold text-base sm:text-lg px-6 py-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            CONTACT US NOW
          </Link>
        </div>
      </section>

      {/* Services and Pricing */}
      <Services />
      <PricingTable />
      <PricingTable2 />
      <PriceTable3 />

      {/* Contact Section */}
      <section id="contact">
        <ContactUs />
      </section>

      {/* Map Section */}
      <div className="p-4">
        <MapSection
          title="BHEL Jhansi"
          location="Jhansi, Uttar Pradesh, India"
          rating={4.5}
          mapQuery="BHEL Jhansi"
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Play Store Coming Soon Badge */}
      <div>
        <a
          href="https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE_NAME"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-50 flex  items-center space-x-2 bg-white/90 backdrop-blur-md shadow-md rounded-full px-4 py-2 border border-gray-300">
            <img
              src={pylogo}
              alt="Google Play"
              className="w-17 h-10 md:w-25 md:h-15"
            />
            <h2 className="text-sm md:text-base font-medium text-gray-800">
              Coming Soon
            </h2>
          </div>
        </a>
      </div>
    </>
  );
}
