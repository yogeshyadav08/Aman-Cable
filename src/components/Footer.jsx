import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../images/weblogo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="flex justify-center lg:justify-start lg:ml-25">
        <img
          src={logo}
          alt="Aman Cable Logo"
          className="w-24 sm:w-28 md:w-32 lg:w-36"
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold mb-4">AMAN CABLE & BROADBAND</h2>
          <p className="text-sm text-gray-400 max-w-sm">
            Reliable Broadband. Clear TV. Secure Homes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-gray-400 text-xl">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AMAN CABLE & BROADBAND. All rights
        reserved.
      </div>
    </footer>
  );
}
