'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" text-white p-8 font-[Poppins] text-[18px] font-light leading-[32px] tracking-[0%]">
      <div className="container px-6 mx-auto flex flex-col md:flex-row md:justify-between">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <img src="/logo.png" alt="Logo" className="h-20" />
        </div>
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Home</h3>
            <ul className="space-y-1 text-gray-400">
              <li>FAQ</li>
              <li>Features</li>
              <li>Companies</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Pricing</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Plans</li>
              <li>Billing</li>
              <li>Free Trial</li>
              <li>Refunds</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Careers</li>
              <li>Contacts</li>
              <li>Our Policy</li>
              <li>Our Story</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Community</h3>
            <ul className="space-y-1 text-gray-400 ">
              <li>Forum</li>
              <li>Stories</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
