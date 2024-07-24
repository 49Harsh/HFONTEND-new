import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logoBg from '@/components/image/logo-bg-3 2.png'

const Footer = () => {
  return (
    <div id='footer' className='flex justify-center items-center'>
      <motion.footer 
      className="bg-gray-900 text-gray-300 py-8 w-[85%] h-[95%] mb-10 rounded-md px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto ">

            <div className="mb-4 flex justify-center items-center md:mb-0">
              <Image
                src={logoBg}
                alt="Company Logo"
                width={250}
                height={75}
                className="mb-2 mb-20"
              />
            </div>
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* image logo company */}
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold mb-2">Contact nums</p>
              <p>+91 0000000000</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold mb-2">Gmail</p>
              <p>demo@gmail.com</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold mb-2">Adress</p>
              <p>Mumbai, India</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="font-semibold mb-2">Leave a request</p>
              <div className="flex">
                <Input className="mr-2" placeholder="Enter email" />
                <Button variant="outline">Send</Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-center mt-8">
          <p className="text-sm">We work throughout the world</p>
        </div> */}
      </div>
    </motion.footer>
    </div>
  );
};

export default Footer;