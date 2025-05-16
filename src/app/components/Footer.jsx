import React from 'react'
import FooterOne from "../../../public/assets/footerLg.jpg"
import FooterTwo from "../../../public/assets/footer_small.png"
import Image from 'next/image'

const Footer = () => {
  return (
    
      <div className="lg:absolute bottom-4 flex lg:items-center px-6 lg:justify-center space-x-4 w-full bg-white p-6">
        <div className="font-bold text-gray-800">
          <Image
                            src={FooterOne}
                            alt="Nature scene with young moose"
                           width={140}
                           height={140}
                          />
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <Image
                            src={FooterTwo}
                            alt="Nature scene with young moose"
                            width={40}
                           height={40}
                          />
        </div>
      </div>
  )
}

export default Footer