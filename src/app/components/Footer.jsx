import Image from 'next/image'
import React from 'react'
import One from "../../../public/assets/legal-equal-housing-opp.png.png"
import Two from "../../../public/assets/legal-ncua-logo2.png.png"

const Footer = () => {
  return (
    <footer className="bg-[#13254B] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Links Section */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-8 text-sm">
          <a href="/disclosures" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">
            DISCLOSURES
          </a>
          <a href="/fee-schedule" className="text-blue-400 hover:underline  hover:text-blue-300 transition-colors">
            FEE SCHEDULE
          </a>
          <a href="/rates" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">
            RATES
          </a>
          <a href="/privacy" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">
            PRIVACY
          </a>
          <a href="/accessibility" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">
            ACCESSIBILITY
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center  gap-6">
          {/* Left Side - Logos */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            {/* Equal Housing Logo */}
            

            {/* NCUA Logo */}
            <Image
              src={One}
              alt="NCUA"
              width={50}
              height={50}
              className="w-20 h-24"
            />
            {/* FDIC Logo */}
            <Image
              src={Two}
              alt="FDIC"
              width={80}
              height={50}
              className="w-40 h-20"
            />
          </div>

          {/* Right Side - FDIC Text */}
          <div className="text-[10px] text-center lg:text-right max-w-md lg:max-w-xs">
            <p className="leading-relaxed">
              Your savings federally insured to at least $250,000 
              and backed by the full faith and credit of the 
              United States Government. National Credit Union 
              Administration, a U.S. Government Agency.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer