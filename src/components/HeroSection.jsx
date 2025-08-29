import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  get,
} from "firebase/database";
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
import { app } from "./firebase";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [customerData, setCustomerData] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setError("");
    setCustomerData(null);
    setCustomerId("");
    document.body.classList.add("no-scroll");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCustomerId("");
    setError("");
    setCustomerData(null);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setCustomerData(null);

    const trimmedCustomerId = customerId.trim();
    if (!trimmedCustomerId) {
      setError("Please enter a valid Customer ID or CUXID.");
      setLoading(false);
      return;
    }

    try {
      const db = getDatabase(app);
      const customersRef = ref(db, "customers");

      // Query for CustomerID
      const customerIdQuery = query(
        customersRef,
        orderByChild("CustomerID"),
        equalTo(trimmedCustomerId)
      );
      const customerIdSnapshot = await get(customerIdQuery);

      // Query for CUXID
      const cuxIdQuery = query(
        customersRef,
        orderByChild("CUXID"),
        equalTo(trimmedCustomerId)
      );
      const cuxIdSnapshot = await get(cuxIdQuery);

      if (customerIdSnapshot.exists()) {
        const data = customerIdSnapshot.val();
        const customerKey = Object.keys(data)[0];
        setCustomerData(data[customerKey]);
        console.log("Customer Data (CustomerID):", data[customerKey]);
      } else if (cuxIdSnapshot.exists()) {
        const data = cuxIdSnapshot.val();
        const customerKey = Object.keys(data)[0];
        setCustomerData(data[customerKey]);
        console.log("Customer Data (CUXID):", data[customerKey]);
      } else {
        setError("No customer found with this ID or CUXID.");
      }
    } catch (err) {
      console.error("Error fetching customer data:", err);
      if (err.message.includes("Index not defined")) {
        setError("Database configuration error. Please contact support.");
      } else {
        setError("Failed to fetch customer data. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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
          <button
            onClick={handleOpenModal}
            className="inline-block ml-5 bg-white text-blue-500 font-semibold text-base sm:text-lg px-6 py-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            SEE OUR ACTIVE PLAN
          </button>
        </div>
      </section>

      {/* Modalbox section*/}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/50 overflow-y-auto p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto my-8 overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Check Your Active Plan</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-white hover:text-gray-200 text-2xl bg-blue-800 hover:bg-blue-900 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                >
                  &times;
                </button>
              </div>
              <p className="text-blue-100 text-sm mt-1">
                Enter your Customer ID or CUXID to view your plan details
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="customerId"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Customer ID or CUXID
                  </label>
                  <input
                    type="text"
                    id="customerId"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your Customer ID or CUXID"
                    required
                  />
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {error}
                    </p>
                  </div>
                )}

                {loading && (
                  <div className="mb-4 flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                )}

                {customerData && (
                  <div className="mb-5 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                      Customer Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">CUXID:</span>
                        <span className="font-medium">
                          {customerData.CUXID}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Customer ID:</span>
                        <span className="font-medium">{customerId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{customerData.Name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mobile No:</span>
                        <span className="font-medium">
                          {customerData.MobileNo}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bill Amount:</span>
                        <span className="font-medium">
                          ₹{customerData.BillAmount}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Due Date:</span>
                        <span className="font-medium">
                          {new Date(customerData.DueDate).toLocaleDateString(
                            "en-IN"
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Payment:</span>
                        <span className="font-medium">
                          ₹{customerData.LastPayment}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Last Payment Date:
                        </span>
                        <span className="font-medium">
                          {new Date(
                            customerData.LastPaymentDate
                          ).toLocaleDateString("en-IN")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span
                          className={`font-medium ${
                            customerData.Status === "Due"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {customerData.Status}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-5 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center ${
                      loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>

              {customerData?.BillAmount && (
                <div className="mt-6 pt-5 border-t border-gray-200">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Pay Your Bill
                    </h3>
                    <p className="text-sm text-gray-600">
                      Scan the QR code to make payment
                    </p>
                  </div>

                  <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 to-gray-50 p-5 rounded-xl border border-gray-200">
                    {/* QR Code */}
                    <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                      <QRCodeCanvas
                        value={`upi://pay?pa=akshatvishnuyadav-1@oksbi&pn=Aman Cable&am=${customerData.BillAmount}&cu=INR`}
                        size={180}
                        includeMargin={true}
                      />
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-700 font-medium mb-2">
                        Scan to pay with Google Pay, PhonePe, Paytm, or any UPI
                        app
                      </p>
                      <div className="flex items-center justify-center text-sm text-gray-600 bg-blue-50 p-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-blue-500 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Share payment screenshot on:{" "}
                        <strong className="text-blue-600 ml-1">
                          8081656353
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
    </>
  );
}
