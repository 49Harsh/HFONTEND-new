import React from 'react';
import Image from 'next/image';
import Frame1 from '@/components/image/Group 1.png'

const Hero: React.FC = () => {
  return (
    <div className="bg-[#F2F4F7] min-h-screen overflow-hidden w-screen">
      <div className=" flex lg:flex-row  relative w-full h-full ">
        {/* Left Column */}
        <div className="lg:w-1/2 ml-32 pr-8 pt-28 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            <span className="text-yellow-400">User-Centric Excellence:</span> Our App Development services Tackles Your Pain Points
          </h1>
          <p className="mb-6 text-lg text-gray-700 mt-2">
            Experience a Seamless Digital Journey with <span className="text-green-600">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="text-yellow-400">Elevates Your App Experience</span> to Unparalleled Heights.
          </p>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Leave your contacts and we will call you back within 30 minutes
            </h2>
            <form>
              <div className='flex flex-row'>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
                  <input type="text" id="fullName" name="fullName" placeholder="My Name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md   text-gray-500 text-sm">
                      🇮🇳 +91
                    </span>
                    <input type="tel" id="phone" name="phone" placeholder="0000000000" className="mt-1 block w-full rounded-r-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                  </div>
                </div>
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business name</label>
                  <input type="text" id="businessName" name="businessName" placeholder="ABC Technologies PVT LTD" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Business mail</label>
                  <input type="email" id="email" name="email" placeholder="demoaccount@gmail.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                </div>
              </div>
              <div className='flex flex-row justify-end items-end '>
              <button type="submit" className="w-[200px] h-14  bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
                Get consultation
              </button>
              </div>
              </div>
              
            </form>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="lg:w-1/2  absolute right-0 top-0 ">
          <Image src={Frame1}  alt='App-screenshots' className=" absolute right-0 top-0 " />
        </div>
      </div>
    </div>
  );
};

export default Hero;