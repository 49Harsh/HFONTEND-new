import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Logo from '@/components/image/Logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="My Company" width={100} height={100} />
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Services', 'Media', 'Cases', 'FAQ', 'Footer'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info (Desktop) */}
          <div className="hidden md:flex items-center">
            <a href="tel:+91000000000" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              +91 000000000
            </a>
            <a href="mailto:demo@gmail.com" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              demo@gmail.com
            </a>
          </div>

          {/* Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Services', 'Media', 'Cases', 'FAQ', 'Footer'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="block text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col px-5 space-y-2">
              <a href="tel:+91000000000" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
                +91 000000000
              </a>
              <a href="mailto:demo@gmail.com" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
                demo@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar