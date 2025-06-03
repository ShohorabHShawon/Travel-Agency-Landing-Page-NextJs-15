'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 text-black md:p-2 font-medium bg-white/5 backdrop-blur-md border-b border-gray-200/30 shadow-sm">
      <nav className="flex flex-col lg:flex-row justify-between items-center max-w-5xl mx-auto px-4 py-2">
        <div className="flex items-center space-x-6 w-full lg:w-auto justify-between">
          <Link href="#home" className="text-3xl md:text-4xl">
            <h1 className="text-green-800 font-extrabold hover:text-green-700 uppercase">
              Travoo
            </h1>
          </Link>
          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-800 hover:text-green-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Options moved to the right */}
        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-end lg:items-center font-semibold text-[18px]">
          <div className="space-x-12 hidden lg:flex">
            <Link
              href="#destinations"
              className="text-md hover:bg-green-800 hover:text-white px-3 py-1 rounded-md ease-in-out duration-300"
            >
              Destinations
            </Link>
            <Link
              href="#services"
              className="text-md hover:bg-green-800 hover:text-white px-3 py-1 rounded-md ease-in-out duration-300"
            >
              Service
            </Link>
            <Link
              href="#offers"
              className="text-md hover:bg-green-800 hover:text-white px-3 py-1 rounded-md ease-in-out duration-300"
            >
              Offers
            </Link>
            <Link
              href="#booking"
              className="text-md hover:bg-green-800 hover:text-white px-3 py-1 rounded-md ease-in-out duration-300"
            >
              Bookings
            </Link>
            <Link
              href="#contact"
              className="text-md hover:bg-green-800 hover:text-white px-3 py-1 rounded-md ease-in-out duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="#login"
              className="text-md text-black px-3 py-1 border hover:border-green-700 hover:bg-green-700 hover:text-white rounded-md ease-in-out duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/20 backdrop-blur-md rounded-md border border-gray-100 text-black text-center space-y-4 py-10">
          <Link
            href="#home"
            className="block hover:underline"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="#destinations"
            className="block hover:underline"
            onClick={closeMenu}
          >
            Destinations
          </Link>
          <Link
            href="#services"
            className="block hover:underline"
            onClick={closeMenu}
          >
            Service
          </Link>
          <Link
            href="#offers"
            className="block hover:underline"
            onClick={closeMenu}
          >
            Offers
          </Link>
          <Link
            href="#booking"
            className="block hover:underline"
            onClick={closeMenu}
          >
            Booking
          </Link>
          <Link
            href="#contact"
            className="block hover:underline"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="/"
            className="bg-green-800 text-white rounded-md font-bold px-4 py-2 inline-block mt-4"
            onClick={closeMenu}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
