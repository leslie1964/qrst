import React from 'react';
import { MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import PlayStore from "../../../public/assets/googlePlay.png.png"
import AppStore from  "../../../public/assets/appStore.png.png"

const Footer = () => {
  return (
    <footer className="bg-[#13254B] text-white relative overflow-hidden">
      {/* Green curved top accent */}
      <div className="relative w-full overflow-hidden leading-none  ">
         {/* Gradient Wave Layer */}
      
      {/* Gradient Wave */}
       <svg
       border={2}
        className="w-full h-32 "
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
        className='border-2 border-green-500'
          fill="white"
          d="M0,192 C360,100 1080,300 1440,160 L1440,0 L0,0 Z"
        />
        <path
            fill="none"
            stroke="#10b981"
            strokeWidth="50"
            d="M0,192 C360,100 1080,300 1440,160"
          />
      </svg>
      
     

      
    </div>
      
      <div className="relative pt-20 pb-8">
        {/* Main hero section */}
        <div className="text-center mb-12 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Be happy, healthy, and<br />
            financially wise for life.
          </h1>
          
          {/* Contact info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <MapPin size={16} />
              <span>Find a location</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Phone size={16} />
              <span>(757) 928-8850 · (800) 928-8801</span>
            </div>
          </div>
          
          {/* Main navigation */}
          <nav className="mb-12">
            <div className="flex flex-wrap justify-center gap-6 text-green-400 font-medium">
              <a href="#" className="hover:text-white transition-colors">Financial Wellness</a>
              <a href="#" className="hover:text-white transition-colors">Bank</a>
              <a href="#" className="hover:text-white transition-colors">Borrow</a>
              <a href="#" className="hover:text-white transition-colors">Insure</a>
              <a href="#" className="hover:text-white transition-colors">Invest</a>
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Business</a>
              <a href="#" className="hover:text-white transition-colors">Join BayPort</a>
            </div>
          </nav>
        </div>

        {/* Footer sections grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Financial Wellness */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Financial Wellness</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Money Education</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Free Credit Score</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Virtual Workshops</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Workshops & Events</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Youth & School Programs</a></li>
              </ul>
            </div>

            {/* Bank */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Bank</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Checking</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Savings</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Mobile Banking</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Try Zelle®</a></li>
              </ul>
            </div>

            {/* Borrow */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Borrow</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Auto & Vehicle Loans</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Credit Cards</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Personal Loans</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Take-Back® Loans <span className="bg-green-600 text-xs px-1 rounded">NEW</span></a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Skip-A-Payment</a></li>
              </ul>
            </div>

            {/* Home */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Home</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">Mortgages</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Home Equity</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Estimate Payment</a></li>
              </ul>
            </div>

            {/* Why BayPort */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Why BayPort</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">The CU Difference</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Who We Are</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">News & Press</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">BayPort Foundation</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Help & Support */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Help & Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-400 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Online Loan Pay</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Security Center</a></li>
              </ul>
            </div>
          </div>

          {/* App downloads and social media */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              {/* BayPort logo placeholder */}
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BP</span>
              </div>
              
              {/* App store buttons */}
              <div className="flex gap-3">
                <Image src={PlayStore}/>
                <Image src={AppStore}/>
                
                
              </div>
            </div>

            {/* Social media icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="font-bold">𝕏</span>
              </a>
            </div>
          </div>

          {/* Bottom section with routing and insurance info */}
          <div className="border-t border-blue-700 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
              <div className="text-sm leading-relaxed">
                <p className="mb-4">
                  Our website contains links to websites owned and operated by third parties. If you use these links, 
                  you leave our website. BayPort Credit Union has no control over the contents of such linked websites 
                  or third parties and is not responsible for these websites, their content, or availability.
                </p>
              </div>
              
              <div className="text-sm">
                <div className="mb-4">
                  <strong>Routing Number: 251481368</strong>
                </div>
                <p className="mb-4">
                  Your savings federally insured to at least $250,000 and backed by the full faith and credit of the 
                  United States Government. National Credit Union Administration, a U.S. Government Agency.
                </p>
                
                {/* Regulatory logos */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-900 text-xs font-bold">EQUAL<br/>HOUSING<br/>LENDER</span>
                  </div>
                  <div className="w-16 h-12 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-900 text-xs font-bold">NCUA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer links */}
            <div className="flex flex-wrap gap-6 text-sm mb-6">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policies & Disclosures</a>
              <a href="#" className="hover:text-green-400 transition-colors">Fee Schedule</a>
              <a href="#" className="hover:text-green-400 transition-colors">Rates</a>
              <a href="#" className="hover:text-green-400 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-green-400 transition-colors">Accessibility</a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-300">
              Copyright © 2025 BayPort Credit Union. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;