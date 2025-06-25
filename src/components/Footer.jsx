import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 px-6">
      <div className="lg:max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-lg">Subscribe to our newsletter and stay updated on winter wellness tips and offers!</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-1/3 text-black"
            />
            <button className="px-6 py-2 bg-teal-500 text-white rounded-r-lg hover:bg-teal-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-teal-300 transition">About Us</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Contact</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="https://facebook.com" className="hover:text-teal-300 transition"><FaFacebook size={24} /></a>
              <a href="https://instagram.com" className="hover:text-teal-300 transition"><FaInstagram size={24} /></a>
              <a href="https://twitter.com" className="hover:text-teal-300 transition"><FaTwitter size={24} /></a>
              <a href="https://linkdin.com" className="hover:text-teal-300 transition"><FaLinkedin size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul>
              <li><a href="#" className="hover:text-teal-300 transition">Blog</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-teal-300 transition">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <p>Email: support@winterwellness.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-8 border-t border-teal-200 pt-6">
          <p>&copy; 2025 Winter Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
