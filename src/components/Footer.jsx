import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-2">Contact Us</h3>
            <ul>
              <li>Email: <a href="mailto:info@example.com" className="hover:text-white">info@example.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></li>
              <li>Address: <span>123 Main St, City, State</span></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-white font-semibold mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Interstate Polygraph and Consultation Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
