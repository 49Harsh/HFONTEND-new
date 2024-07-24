import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import double from '@/components/image/image 15.png';
import appstore from '@/components/image/app-store.png';
import playstore from '@/components/image/google-play.png';

const industries = [
  { icon: '📱', name: 'Social media' },
  { icon: '🎓', name: 'Education' },
  { icon: '🎯', name: 'AR technology' },
  { icon: '🏋️', name: 'Fitness and sport' },
  { icon: '🚗', name: 'Auto, transport' },
  { icon: '📺', name: 'TV series' },
  { icon: '🏦', name: 'Bank' },
  { icon: '💊', name: 'Medicine, health' },
  { icon: '🏗️', name: 'Startups' },
  { icon: '👷', name: 'Construction' },
  { icon: '🍔', name: 'Restaurants, food delivery' },
  { icon: '🙏', name: 'Religion' },
  { icon: '🎮', name: 'Game projects' },
  { icon: '🛒', name: 'Marketplaces' },
  { icon: '🎓', name: 'Online courses' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ContactPage = () => {
  return (
    <motion.div
      id='cases'
      className="max-w-6xl mx-auto px-4 py-16 bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className="text-4xl font-bold text-black mb-8 w-[50%]" variants={itemVariants}>
        Developed more than <span className="text-green-500">100</span> projects in <span className="text-green-500">15</span> industries
      </motion.h2>
      
      <motion.div className="grid grid-cols-3 gap-6 mb-16" variants={containerVariants}>
        {industries.map((industry, index) => (
          <motion.div key={index} className="flex items-center" variants={itemVariants}>
            <span className="text-2xl mr-2">{industry.icon}</span>
            <span className='text-slate-700'>{industry.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2 className="text-3xl font-bold text-black mb-4" variants={itemVariants}>Projects we are proud of</motion.h2>
      <motion.p className="mb-8 text-gray-600" variants={itemVariants}>
        Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership
      </motion.p>

      <motion.div className="flex mb-8" variants={containerVariants}>
        <motion.button className="mr-4 font-semibold border-b-2 text-gray-700 border-yellow-400" variants={itemVariants}>Project 1</motion.button>
        <motion.button className="mr-4 text-gray-700" variants={itemVariants}>Project 2</motion.button>
        <motion.button className="mr-4 text-gray-700" variants={itemVariants}>Project 3</motion.button>
        <motion.button className='text-gray-700' variants={itemVariants}>Project 4</motion.button>
      </motion.div>

      <motion.div className="flex" variants={containerVariants}>
        <motion.div className="w-1/2 pr-8" variants={containerVariants}>
          <motion.h3 className="text-2xl font-bold text-black mb-4" variants={itemVariants}>Project 1</motion.h3>
          <motion.p className="mb-4 text-gray-700" variants={itemVariants}>
            Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels
          </motion.p>
          <motion.div className="mb-4" variants={itemVariants}>
            <span className="text-blue-600">Business analysis</span> / <span className="text-blue-600">iOS</span> / <span className="text-blue-600">Android</span> / <span className="text-blue-600">QA</span> / <span className="text-blue-600">UI/UX Design</span>
          </motion.div>
          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <span className="mr-4 text-gray-700">🌍 India</span>
            <span className='text-gray-700'>🏠 Real Estate</span>
          </motion.div>
          <motion.div className="flex mb-4" variants={containerVariants}>
            <motion.div className="mr-8" variants={itemVariants}>
              <div className="text-2xl font-bold text-black">400%</div>
              <div className='text-gray-700'>User Growth</div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-2xl text-black font-bold">+ 200 000</div>
              <div className='text-gray-700'>Active Users</div>
            </motion.div>
          </motion.div>
          <motion.div className="flex" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Image src={appstore} alt="App Store" width={120} height={40} className="mr-4" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Image src={playstore} alt="Google Play" width={120} height={40} />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="w-1/2" variants={itemVariants}>
          <Image src={double} alt="Project Screenshot" width={500} height={600} objectFit="contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;