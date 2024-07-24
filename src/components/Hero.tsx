import React from 'react';
import Image from 'next/image';
import Frame1 from '@/components/image/Group 1.png';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="bg-[#F2F4F7] min-h-screen  overflow-hidden w-full"
    >
      <div className="flex flex-col lg:flex-row relative w-full h-full">
        {/* Left Column */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full lg:w-1/2 px-4 lg:ml-32 lg:pr-8 pt-8 mt-14 lg:mt-4 lg:pt-28 mb-8"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
            <span className="text-yellow-400">User-Centric Excellence:</span> Our App Development services Tackles Your Pain Points
          </h1>
          <p className="mb-6 text-base lg:text-lg text-gray-700 mt-2">
            Experience a Seamless Digital Journey with <span className="text-green-600">Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className="text-yellow-400">Elevates Your App Experience</span> to Unparalleled Heights.
          </p>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-4 lg:p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Leave your contacts and we will call you back within 30 minutes
            </h2>
            <form>
              <div className='flex flex-col'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
                    <input type="text" id="fullName" name="fullName" placeholder="My Name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md text-gray-500 text-sm">
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
                <div className='flex flex-row justify-end items-end'>
                  <Button 
                    type="submit" 
                    className="w-full sm:w-[200px] h-14 bg-[#8CC63F] text-white hover:bg-[#7AB32E] transition duration-300"
                  >
                    Get consultation
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
        
        {/* Right Column */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden lg:block lg:w-1/2 absolute right-0 top-0"
        >
          <Image src={Frame1} alt='App-screenshots' className="absolute right-0 top-0" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;