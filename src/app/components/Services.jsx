import Image from 'next/image'
import React from 'react'
import Checking from "../../../public/assets/home-icon-checking.png"
import Auto from "../../../public/assets/home-icon-auto.png.png"
import Credit from "../../../public/assets/home-icon-credit-card.png.png"
import House from "../../../public/assets/home-icon-house.png.png"

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            We aim to be your <span className="block sm:inline">long-term partner.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: Checking,
              title: 'Checking',
              link: 'Compare accounts',
              href: '#',
            },
            {
              img: Auto,
              title: 'Auto',
              link: 'Explore auto loans',
              href: '#',
            },
            {
              img: House,
              title: 'Home',
              link: 'Find a mortgage',
              href: '#',
            },
            {
              img: Credit,
              title: 'Credit Cards',
              link: 'Choose your perks',
              href: '#',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Image src={item.img} alt={item.title} width={60} height={60} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <a
                href={item.href}
                className="text-blue-600 hover:text-blue-700 font-semibold mt-2 text-sm"
              >
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
