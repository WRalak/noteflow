


"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-[#061212] to-[#0E2E2E] w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href={'/'}>   <Image src="/logo.png" width={150} height={150} alt="Logo" /></Link>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Pricing", "About", "Community"].map((item) => (
              <a key={item} href="#" className="hover:shadow-[0_0_20px_5px_rgba(68,229,231,0.8)] transition-all duration-300 ">
                {item}
              </a>
            ))}
          </div>

          {/* Right Buttons (Login & Get Started) */}
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setLoginOpen(true)}
              className="border-2 border-white px-6 py-2 rounded-3xl hover:bg-white hover:text-black"
            >
              Login
            </button>
            <button
              onClick={() => setSignupOpen(true)}
              className="text-gray-700 px-6 py-4 rounded-4xl bg-[#44E5E7] hover:shadow-[0_0_20px_5px_rgba(68,229,231,0.8)] transition-all duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-white">
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <Dialog open={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="relative z-50">
          <div className="fixed inset-0 min-h-screen bg-gradient-to-t from-[#061212] to-[#0E2E2E] bg-opacity-30" />
          <div className="fixed inset-y-0 right-0 w-64 bg-[#074e4e] shadow-lg p-4 text-white">
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <AiOutlineClose size={24} />
            </button>
            <nav className="mt-6 flex flex-col space-y-4">
              {["Home", "Pricing", "About", "Community"].map((item) => (
                <a key={item} href="#" className="hover:text-gray-300 font-medium">
                  {item}
                </a>
              ))}
              <button
                onClick={() => setLoginOpen(true)}
                className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black"
              >
                Login
              </button>
              <button
                onClick={() => setSignupOpen(true)}
                className="bg-[#44E5E7] text-gray-700 px-4 py-2 rounded-2xl hover:opacity-90"
              >
                Get Started
              </button>
            </nav>
          </div>
        </Dialog>
      )}

      {/* Login Modal */}
      <Dialog open={isLoginOpen} onClose={() => setLoginOpen(false)} className="relative z-50">
        <div className="fixed inset-0 min-h-screen bg-gradient-to-t from-[#061212] to-[#0E2E2E]  flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <h2 className="text-xl font-semibold text-black mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg text-black px-3 py-2 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg text-black px-3 py-2 mb-3"
            />
            <button className="bg-[#44E5E7] w-full text-gray-700 px-4 py-2 rounded-lg hover:opacity-90">
              Login
            </button>
            <button
              onClick={() => setLoginOpen(false)}
              className="mt-2 w-full text-gray-700 text-xs hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>

      {/* Signup Modal */}
      <Dialog open={isSignupOpen} onClose={() => setSignupOpen(false)} className="relative z-50">
        <div className="fixed inset-0 min-h-screen bg-gradient-to-t from-[#061212] to-[#0E2E2E] flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <h2 className="text-xl font-semibold text-black mb-4">Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg text-black px-3 py-2 mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 text-black py-2 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-3 text-black py-2 mb-3"
            />
            <button className="bg-[#44E5E7] w-full text-gray-700 px-4 py-2 rounded-lg hover:opacity-90">
              Sign Up
            </button>
            <button
              onClick={() => setSignupOpen(false)}
              className="mt-2 w-full text-gray-700 text-xs hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </nav>
  );
}
