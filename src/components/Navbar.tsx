import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '@/components/image/Logo.png'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 overflow-hidden rounded-3xl z-50 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 static bg-opacity-0 ">
        <div className="flex justify-between items-center h-16 bg-white overflow-hidden rounded-md mt-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="My Company" width={130} height={130} />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              
              <Link href="#services" className="text-gray-400 hover:text-gray-100">Services</Link>
              <Link href="#media" className="text-gray-400 hover:text-gray-100">Media</Link>
              <Link href="#cases" className="text-gray-400 hover:text-gray-100">Cases</Link>
              <Link href="#faq" className="text-gray-400 hover:text-gray-100">FAQ</Link>
              <Link href="#footer" className="text-gray-400 hover:text-gray-100">Footer</Link>
              </div>
          </div>
          
          {/* Contact Info */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="tel:+91000000000" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                +91 000000000
              </a>
              <a href="mailto:demo@gmail.com" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                demo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar