import React from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const contactInfo = {
    whatsapp: "+919129991236",
    phones: ["+91-9129991236", "+91-7992108317"],
    email: "cablenetworkkaman@gmail.com",
    address: "Main road chudiwali gaale subhash nagar, BHEL Jhansi",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Reach out to us anytime via phone, WhatsApp, email, or visit our
            address.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start group animate-fade-in-up">
                <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Call Us
                  </h3>
                  <div className="mt-2 flex space-x-4">
                    {contactInfo.phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.replace(/-/g, "")}`}
                        className="text-gray-700 text-base hover:text-blue-600 transition-colors duration-300"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start group animate-fade-in-up animation-delay-200">
                <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors duration-300">
                  <FaWhatsapp className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    WhatsApp
                  </h3>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(
                      /-/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 text-base hover:text-green-600 transition-colors duration-300 mt-2"
                  >
                    {contactInfo.whatsapp}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group animate-fade-in-up animation-delay-400">
                <div className="bg-red-100 p-3 rounded-full mr-4 group-hover:bg-red-200 transition-colors duration-300">
                  <FaEnvelope className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="block text-gray-700 text-base hover:text-red-600 transition-colors duration-300 mt-2"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start group animate-fade-in-up animation-delay-600">
                <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Address
                  </h3>
                  <p className="text-gray-700 text-base mt-2 leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
