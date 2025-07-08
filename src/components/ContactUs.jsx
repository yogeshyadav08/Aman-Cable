import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

const ContactUs = () => {
  const contactInfo = {
    whatsapp: "+919129991236",
    phones: ["+91-9129991236", "+91-7992108317"],
    email: "cablenetworkaman@gmail.com",
    address: "Main road chudiwali gaale subhash nagar, BHEL Jhansi",
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const sendViaWhatsApp = () => {
    const { name, phone, message } = formData;
    const whatsappMessage = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(
      /[+-\s]/g,
      ""
    )}?text=${encodedMessage}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", phone: "", message: "" });
      setShowModal(false);
      setIsSubmitted(false);
    }, 500);
  };

  const sendViaEmail = () => {
    const { name, phone, message } = formData;
    const emailSubject = `Aman Cable Network Service Query from ${name}`;
    const emailBody = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    setIsSubmitted(true);
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setFormData({ name: "", phone: "", message: "" });
      setShowModal(false);
      setIsSubmitted(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're here to help! Reach out to us through any of these channels or
            send us a message directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full lg:w-1/2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-100">
                Contact Information
              </h2>
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-blue-50 p-4 rounded-xl mr-4 flex-shrink-0">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <div className="flex flex-col space-y-2 mt-2">
                      {contactInfo.phones.map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:${phone.replace(/-/g, "")}`}
                          className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="bg-green-50 p-4 rounded-xl mr-4 flex-shrink-0">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(
                        /[+-\s]/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-green-600 transition-colors duration-300 flex items-center mt-2"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-red-50 p-4 rounded-xl mr-4 flex-shrink-0">
                    <FaEnvelope className="text-red-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-700 hover:text-red-500 transition-colors duration-300 flex items-center mt-2"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-purple-50 p-4 rounded-xl mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full lg:w-1/2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-100">
                Send Us a Message
              </h2>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <FaCheckCircle className="text-green-600 text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">Thank you for contacting us.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 placeholder-gray-400"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 placeholder-gray-400"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center cursor-pointer items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Choose Delivery Method
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="space-y-4">
                <button
                  onClick={sendViaWhatsApp}
                  className="w-full flex items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-300 cursor-pointer"
                >
                  <div className="bg-green-100 p-3 rounded-full mr-4 ">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <span className="font-medium text-gray-900 ">
                    Send via WhatsApp
                  </span>
                </button>
                <button
                  onClick={sendViaEmail}
                  className="w-full flex items-center justify-center p-4 bg-red-50 hover:bg-red-100 rounded-lg transition-colors duration-300 cursor-pointer"
                >
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-red-500 text-xl" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Send via Email
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
