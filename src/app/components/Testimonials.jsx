import React from 'react'

const Testimonials = () => {
  return (
<section className="py-16 bg-gradient-to-r from-green-400 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Well, isn't that nice to hear!</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Rooted in exceptional service.</h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-white text-xl">★</span>
                ))}
              </div>
              <p className="text-white/90 mb-6 text-lg leading-relaxed">
                I have been a customer of BayPort for over 55 years. Like many companies have done, the folks at BayPort have never forgotten their roots. They continue to offer exceptional customer service and well-designed modern banking apps making banking and borrowing easy. Highly recommend the professionals at BayPort.
              </p>
              <div className="text-white">
                <p className="font-bold">NICK D.</p>
                <p className="text-sm text-white/80">GOOGLE MY BUSINESS REVIEW</p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">Helping members achieve goals.</h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-white text-xl">★</span>
                ))}
              </div>
              <p className="text-white/90 mb-6 text-lg leading-relaxed">
                It's evident that they [your tellers] are not only skilled at their job but also genuinely passionate about helping customers achieve their financial goals. Their exemplary customer service has left a lasting impression on me.... They are a true asset to your team and a shining example of the high standards of service your bank provides.
              </p>
              <div className="text-white">
                <p className="font-bold">WILL H.</p>
                <p className="text-sm text-white/80">GOOGLE MY BUSINESS REVIEW</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials