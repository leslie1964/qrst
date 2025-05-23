import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Links Section */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-8 text-sm">
          <a href="/disclosures" className="text-blue-400 hover:text-blue-300 transition-colors">
            DISCLOSURES
          </a>
          <a href="/fee-schedule" className="text-blue-400 hover:text-blue-300 transition-colors">
            FEE SCHEDULE
          </a>
          <a href="/rates" className="text-blue-400 hover:text-blue-300 transition-colors">
            RATES
          </a>
          <a href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
            PRIVACY
          </a>
          <a href="/accessibility" className="text-blue-400 hover:text-blue-300 transition-colors">
            ACCESSIBILITY
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center  gap-6">
          {/* Left Side - Logos */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            {/* Equal Housing Logo */}
            <div className="bg-white p-2 rounded">
              <div className="w-12 h-12 bg-slate-700 rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
                </svg>
              </div>
            </div>

            {/* NCUA Logo */}
            <div className="bg-white p-3 rounded">
              <div className="text-slate-800 font-bold text-xs text-center">
                <div className="border-2 border-slate-800 px-2 py-1 rounded">
                  NCUA
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FDIC Text */}
          <div className="text-sm text-center lg:text-right max-w-md lg:max-w-xs">
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