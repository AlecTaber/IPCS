import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CTADropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference to dropdown content

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Close dropdown when user clicks outside of it
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
    
      useEffect(() => {
        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          // Cleanup event listener on unmount
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);


    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            {/* Dropdown button */}
            <button
                onClick={toggleDropdown}
                className="bg-black hover:bg-slate-900 text-white font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out"
            >
                Schedule a Consultaion
            </button>

            {/* Dropdown content */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                    <ul className="text-slate-700">
                        <li>
                            <Link
                                to="/contact"
                                className="block px-4 py-2 hover:bg-slate-200 transition"
                                onClick={() => setIsOpen(false)} // Close dropdown when link is clicked
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/calendar"
                                className="block px-4 py-2 hover:bg-slate-200 transition"
                                onClick={() => setIsOpen(false)} // Close dropdown when link is clicked
                            >
                                Calendar
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="block px-4 py-2 hover:bg-slate-200 transition"
                                onClick={() => setIsOpen(false)} // Close dropdown when link is clicked
                            >
                                Our Services
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CTADropdown;