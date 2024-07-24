import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const containerVariants = {
  initial: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  in: {
    y: 0,
    opacity: 1
  }
};

export default function DiscussProject() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    businessName: '',
    businessEmail: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key="discuss-project"
        className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 flex items-center justify-center p-4 min-h-screen"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <motion.div className="max-w-6xl w-full flex flex-col md:flex-row items-center py-10" variants={containerVariants}>
          <motion.div className="md:w-1/2 text-white p-8" variants={containerVariants}>
            <motion.h1 className="text-5xl font-bold mb-4" variants={itemVariants}>Let's discuss<br />Your project</motion.h1>
            <motion.p className="text-xl" variants={itemVariants}>Let's figure out how to create an effective application,<br />its cost and terms of its development</motion.p>
          </motion.div>
          <motion.div className="md:w-1/2" variants={containerVariants}>
            <motion.div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md" variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="My Name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <FiPhone className="text-gray-500" />
                        +91
                      </span>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="000000000"
                        required
                        className="rounded-none rounded-r-lg border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      />
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business name</label>
                    <input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="ABC Technologies"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-1">Business mail</label>
                    <input
                      id="businessEmail"
                      name="businessEmail"
                      type="email"
                      value={formData.businessEmail}
                      onChange={handleChange}
                      placeholder="demoaccount@gmail.com"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    />
                  </motion.div>
                </motion.div>
                <motion.button 
                  type="submit" 
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss the project
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}