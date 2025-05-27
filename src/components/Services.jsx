import { FaWifi, FaTv } from "react-icons/fa";
import {
  MdOutlineDevices,
  MdOutlineSecurity,
  MdOutlineRouter,
} from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const services = [
  {
    icon: <MdOutlineDevices size={40} />,
    title: "Broadband",
    description:
      "Enjoy blazing-fast BSNL FTTH fiber broadband with reliable connectivity for both home and office needs.",
  },
  {
    icon: <MdOutlineRouter size={40} />,
    title: "WiFi Setup",
    description:
      "Professional WiFi installation, signal optimization, and router configuration for seamless connectivity.",
  },
  {
    icon: <MdOutlineSecurity size={40} />,
    title: "Security",
    description:
      "Install high-resolution CCTV systems with cloud storage, night vision, and remote monitoring via mobile.",
  },
  {
    icon: <FaTv size={40} />,
    title: "Cable Setup",
    description:
      "Setup and support for DishTV HD and other cable providers with multi-language channel packs.",
  },
  {
    icon: <BiSolidOffer size={40} />,
    title: "Combo Offers",
    description:
      "Affordable combo packages for broadband, cable, and security installations with great discounts.",
  },
];

export default function Services() {
  return (
    <div className="py-12 px-6 md:px-16 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7 perspective-[1000px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-5 border rounded-2xl bg-white shadow-md  shadow-blue-900 transition-all duration-200 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:rotate-[0deg] text-left overflow-hidden border-blue-900"
          >
            <div className="relative z-10">
              <div className="mb-4 text-blue-900">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
