import Image from 'next/image'
import React from 'react'
import News1 from "../../../public/assets/foundation-charity-golf-2025-check-1024x683.png.png"
import News2 from "../../../public/assets/harrell-promotion-featured-image-1024x683.png.png"
import News3 from "../../../public/assets/financial-capability-month-2025-1024x683.jpg.png"
import News4 from "../../../public/assets/asw25-website-graphic-1024x683.png.png"

const News = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's new at BayPort?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main featured article */}
          <div>
            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-6">
              <Image
                src={News1}
                alt="BayPort Foundation Golf Classic Check Presentation"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4 hover:text-blue-700 cursor-pointer">
              BayPort Foundation 4th Annual Charity Golf Classic Raises Over $140,000
            </h3>
            <p className="text-sm text-gray-500 mb-4">16 days ago</p>
            <p className="text-gray-600 leading-relaxed">
              NEWPORT NEWS, Va., May 6, 2025 – The BayPort Foundation is excited to announce that it has raised $144,704 at its fourth annual Charity Golf Classic event, hosted on May.....
            </p>
          </div>

          {/* Side articles */}
          <div className="space-y-8">
            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={News2}
                  alt="Jonathan Harrell - New CIO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-600 mb-2 hover:text-blue-700 cursor-pointer">
                  BayPort Credit Union Announces New Chief Information Officer
                </h4>
                <p className="text-sm text-gray-500 mb-2">37 days ago</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  NEWPORT NEWS, Va., April 15, 2025 – BayPort Credit Union is pleased to announce that Jonathan Harrell has been appointed Chief Information Officer. In this role, Harrell will oversee BayPort's......
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={News3}
                  alt="Financial Capability Month"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-600 mb-2 hover:text-blue-700 cursor-pointer">
                  BayPort Celebrates U.S. Financial Capability Month
                </h4>
                <p className="text-sm text-gray-500 mb-2">45 days ago</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  April is U.S. National Financial Capability Month, and BayPort is inviting our members and community to learn the importance of saving money and living happy, healthy, and financially wise for life......
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={News4}
                  alt="America Saves Week 2025"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-blue-600 mb-2 hover:text-blue-700 cursor-pointer">
                  America Saves Week 2025
                </h4>
                <p className="text-sm text-gray-500 mb-2">48 days ago</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Starting Monday, April 7th... Dedicate this week to pause and do a financial check-in. Each day on our socials, we'll share a new way you can increase your savings to become more......
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News