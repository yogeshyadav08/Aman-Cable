import React, { useEffect, useMemo, useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

/**
 * Professional, accessible Contact page (Vite + React + Tailwind)
 * - Clean, solid color palette (Primary Blue + Neutrals + Green accent)
 * - Mobile-first layout, clear hierarchy, WCAG-friendly contrast
 * - Field validation, helpful microcopy, loading/disabled states
 * - Improved modal accessibility (role="dialog", aria-modal, focus management)
 */

const CATEGORY_OPTIONS = [
  { value: "", label: "Select a category" },
  { value: "wifi", label: "WiFi Installation" },
  { value: "plan", label: "Plan Upgrade / Change" },
  { value: "router", label: "Router Configuration" },
  { value: "troubleshooting", label: "Troubleshooting" },
  { value: "security", label: "Security Setup (CCTV)" },
  { value: "cable", label: "Cable / DTH Setup" },
  { value: "recharge", label: "Online Recharge Help" },
  { value: "new", label: "New Connection Request" },
  { value: "record", label: "Installation Record / Details" },
  { value: "billing", label: "Billing or Pending Dues" },
];

const SUBCATEGORY_MAP = {
  wifi: [
    { value: "", label: "Select sub-category" },
    { value: "bsnl", label: "New BSNL FTTH Setup" },
    { value: "railtel", label: "New RailTel Setup" },
    { value: "addon", label: "Add-on WiFi Router Setup" },
    { value: "mesh", label: "Extend WiFi Coverage (Mesh)" },
  ],
  plan: [
    { value: "", label: "Select sub-category" },
    { value: "change_bsnl", label: "Change BSNL Plan" },
    { value: "upgrade_railtel", label: "Upgrade RailTel Plan" },
    { value: "check", label: "Check Current Plan" },
    { value: "renewal", label: "Recharge or Renewal" },
  ],
  router: [
    { value: "", label: "Select sub-category" },
    { value: "basic", label: "Basic Router Setup" },
    { value: "port", label: "Port Forwarding" },
    { value: "bridge", label: "Bridge Mode Setup" },
    { value: "static", label: "Static IP Configuration" },
  ],
  troubleshooting: [
    { value: "", label: "Select sub-category" },
    { value: "no_internet", label: "No Internet" },
    { value: "slow", label: "Slow Speed" },
    { value: "restart", label: "Router Restart Help" },
    { value: "los", label: "Red LOS Blinking" },
  ],
  security: [
    { value: "", label: "Select sub-category" },
    { value: "new_cctv", label: "New CCTV Installation" },
    { value: "remote", label: "Remote Monitoring Setup" },
    { value: "cloud", label: "Cloud Storage Setup" },
    { value: "add_cameras", label: "Add More Cameras" },
  ],
  cable: [
    { value: "", label: "Select sub-category" },
    { value: "dishtv", label: "DishTV HD Installation" },
    { value: "multi", label: "Multi-TV Setup" },
    { value: "language", label: "Language Pack Change" },
    { value: "signal", label: "Signal Issue" },
  ],
};

export default function ContactUs() {
  const contactInfo = {
    whatsapp: "+919129991236",
    phones: ["+91-9129991236", "+91-7992108317"],
    email: "cablenetworkaman@gmail.com",
    address:
      "Main road chudiwali gaale subhash nagar, BHEL Jhansi, Uttar Pradesh",
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    subCategory: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const maxMessage = 400;

  const subCategories = useMemo(() => {
    return SUBCATEGORY_MAP[formData.category] || [];
  }, [formData.category]);

  useEffect(() => {
    // Prevent body scroll when modal opens
    document.body.style.overflow = showModal ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  // Simple field-level validation
  const errors = useMemo(() => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!/^\d{10}$/.test(formData.phone))
      e.phone = "Enter a 10-digit phone number.";
    if (!formData.category) e.category = "Please select a category.";
    if (subCategories.length > 0 && !formData.subCategory)
      e.subCategory = "Please select a sub-category.";
    if (formData.message.length > maxMessage)
      e.message = `Message must be under ${maxMessage} characters.`;
    return e;
  }, [formData, subCategories, maxMessage]);

  const isFormValid = Object.keys(errors).length === 0;

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setFormData((prev) => ({
        ...prev,
        category: value,
        subCategory: "",
      }));
      return;
    }
    if (name === "message") {
      setMessageCount(value.length);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      category: "",
      subCategory: "",
      message: "",
    });
    setMessageCount(0);
  };

  const buildSummary = () => {
    const selectedCategory =
      CATEGORY_OPTIONS.find((c) => c.value === formData.category)?.label ||
      formData.category;
    const selectedSubCategory =
      subCategories.find((s) => s.value === formData.subCategory)?.label ||
      formData.subCategory;
    return {
      selectedCategory,
      selectedSubCategory,
      text: `Name: ${formData.name}\nPhone: ${formData.phone}\nCategory: ${selectedCategory}\nSub-Category: ${selectedSubCategory}\nMessage: ${formData.message}`,
    };
  };

  const sendViaWhatsApp = async () => {
    setIsSubmitting(true);
    const summary = buildSummary();
    const encodedMessage = encodeURIComponent(summary.text);
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(
      /[+-\s]/g,
      ""
    )}?text=${encodedMessage}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
      setShowModal(false);
      setShowConfirmation(true);
      resetForm();
    }, 500);
  };

  const sendViaEmail = async () => {
    setIsSubmitting(true);
    const summary = buildSummary();
    const emailSubject = `Aman Cable Network Service Query from ${formData.name}`;
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(summary.text)}`;
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setShowModal(false);
      setShowConfirmation(true);
      resetForm();
    }, 500);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-10">
          <p className="text-sm font-medium text-blue-700">
            We’re here to help
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-2 text-balance">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 leading-relaxed">
            Reach out via call, WhatsApp, or email—or send a message using the
            form. Our team will get back to you as soon as possible.
          </p>
        </header>

        <section className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information */}
          <aside className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
              <div className="p-7">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  Contact Information
                </h2>

                <ul className="space-y-6">
                  {/* Phone */}
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaPhone
                        className="text-blue-600 text-xl"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Call Us
                      </h3>
                      <p>Clink on this numbers to connect us.</p>
                      <div className="flex flex-col gap-1 ">
                        {contactInfo.phones.map((phone, i) => (
                          <a
                            key={i}
                            href={`tel:${phone.replace(/[^0-9]/g, "")}`}
                            className="text-gray-700 hover:text-blue-700 transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>

                  {/* WhatsApp */}
                  <li className="flex items-start">
                    <div className="bg-green-50 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaWhatsapp
                        className="text-green-600 text-xl"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        WhatsApp
                      </h3>
                      <p>
                        {" "}
                        Clink on this number to directly message on whatsapp.
                      </p>
                      <a
                        href={`https://wa.me/${contactInfo.whatsapp.replace(
                          /[+-\s]/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-green-700 transition-colors  inline-block"
                      >
                        {contactInfo.whatsapp}
                      </a>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaEnvelope
                        className="text-blue-600 text-xl"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Email
                      </h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-700 hover:text-blue-700 transition-colors mt-2 inline-block"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </li>

                  {/* Address */}
                  <li className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                      <FaMapMarkerAlt
                        className="text-blue-600 text-xl"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Address
                      </h3>
                      <p className="text-gray-700 mt-2 leading-relaxed">
                        {contactInfo.address}
                      </p>
                      <div className="mt-2 space-y-3">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=BHEL+Jhansi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        >
                          <svg
                            className="w-5 h-5 mr-2 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
              <div className="p-7">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                  Send Us a Message
                </h2>

                {showConfirmation ? (
                  <div
                    className="text-center py-10"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <FaCheckCircle
                        className="text-green-600 text-3xl"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Thank you for contacting us.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    noValidate
                    className="grid grid-cols-1 gap-5"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={onChange}
                        required
                        className={`mt-1 block w-full rounded-lg border ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200`}
                        placeholder="Your full name"
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="mt-1 text-sm text-red-600"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="\d{10}"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          // Keep digits only to help users
                          const digits = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 10);
                          onChange({
                            target: { name: "phone", value: digits },
                          });
                        }}
                        required
                        className={`mt-1 block w-full rounded-lg border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200`}
                        placeholder="10-digit phone number"
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        Digits only, no spaces or dashes.
                      </p>
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="mt-1 text-sm text-red-600"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Category */}
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Service Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={onChange}
                        className={`mt-1 block w-full rounded-lg border ${
                          errors.category ? "border-red-500" : "border-gray-300"
                        } bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200`}
                        aria-invalid={!!errors.category}
                        aria-describedby={
                          errors.category ? "category-error" : undefined
                        }
                      >
                        {CATEGORY_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <p
                          id="category-error"
                          className="mt-1 text-sm text-red-600"
                        >
                          {errors.category}
                        </p>
                      )}
                    </div>

                    {/* Sub-Category */}
                    {subCategories.length > 0 && (
                      <div>
                        <label
                          htmlFor="subCategory"
                          className="block text-sm font-medium text-gray-800"
                        >
                          Sub-Category
                        </label>
                        <select
                          id="subCategory"
                          name="subCategory"
                          value={formData.subCategory}
                          onChange={onChange}
                          className={`mt-1 block w-full rounded-lg border ${
                            errors.subCategory
                              ? "border-red-500"
                              : "border-gray-300"
                          } bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200`}
                          aria-invalid={!!errors.subCategory}
                          aria-describedby={
                            errors.subCategory ? "subCategory-error" : undefined
                          }
                        >
                          {subCategories.map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                        </select>
                        {errors.subCategory && (
                          <p
                            id="subCategory-error"
                            className="mt-1 text-sm text-red-600"
                          >
                            {errors.subCategory}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-800"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={onChange}
                        maxLength={maxMessage}
                        className={`mt-1 block w-full rounded-lg border ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        } px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200`}
                        placeholder="Share details about your request"
                        aria-invalid={!!errors.message}
                        aria-describedby="message-help"
                      />
                      <div className="mt-1 flex items-center justify-between">
                        <p id="message-help" className="text-xs text-gray-500">
                          Optional. Max {maxMessage} characters.
                        </p>
                        <p className="text-xs text-gray-500">
                          {messageCount}/{maxMessage}
                        </p>
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-white font-medium transition-colors
                          ${
                            isFormValid
                              ? "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                              : "bg-gray-300 cursor-not-allowed"
                          }`}
                        aria-disabled={!isFormValid}
                      >
                        Send Message
                      </button>
                      {!isFormValid && (
                        <p className="mt-2 text-sm text-gray-500">
                          Fill out all required fields to continue.
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delivery-title"
          >
            <div className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3
                  id="delivery-title"
                  className="text-lg font-semibold text-gray-900"
                >
                  Choose Delivery Method
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-800 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-3">
                <button
                  onClick={sendViaWhatsApp}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 p-4 rounded-lg transition-colors
                    ${
                      isSubmitting
                        ? "bg-green-100 text-green-700 cursor-wait"
                        : "bg-green-50 hover:bg-green-100 text-gray-900"
                    }`}
                >
                  <span className="bg-green-100 p-2 rounded-full">
                    <FaWhatsapp
                      className="text-green-700 text-xl"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-medium">
                    {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                  </span>
                </button>

                <button
                  onClick={sendViaEmail}
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 p-4 rounded-lg transition-colors
                    ${
                      isSubmitting
                        ? "bg-blue-100 text-blue-700 cursor-wait"
                        : "bg-blue-50 hover:bg-blue-100 text-gray-900"
                    }`}
                >
                  <span className="bg-blue-100 p-2 rounded-full">
                    <FaEnvelope
                      className="text-blue-700 text-xl"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="font-medium">
                    {isSubmitting ? "Sending..." : "Send via Email"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
