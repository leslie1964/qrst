import Image from 'next/image'
import React from 'react'
import Celebrate from "../../../public/assets/scene-celebrate-check.png.png"

const Foundation = () => {
  return (
    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg">
               <Image
                  src={Celebrate}
                  alt="Happy family - father and child"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative confetti */}
              <div className="absolute -top-2 -left-2 w-full h-full pointer-events-none">
                <div className="absolute top-4 left-8 w-2 h-2 bg-green-400 rounded transform rotate-45"></div>
                <div className="absolute top-12 right-12 w-1 h-4 bg-blue-400 rounded"></div>
                <div className="absolute bottom-16 left-16 w-3 h-1 bg-green-300 rounded"></div>
                <div className="absolute top-20 left-20 w-1 h-3 bg-blue-300 rounded"></div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-2">The BayPort Foundation</p>
              <h2 className="text-4xl font-bold text-[#13254B]mb-6">
                $100,000 in college and trade school scholarships.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                The BayPort Foundation offers 12 different scholarships to 36 high school seniors, college students, and full-time working adults planning to attend a university, college, trade, or vocational school. The application deadline is March 31st.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                More about the Foundation
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Foundation