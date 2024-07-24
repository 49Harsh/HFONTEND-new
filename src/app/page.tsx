'use client'

import Hero from '@/components/Hero'


import { useSmoothScroll } from '@/hooks/useSmootScroll'

import Footer from '@/components/Footer'
import ServicesPage from '@/components/Services'

import Navbar from '@/components/Navbar'
import ContactPage from '@/components/ContactPage'
import DiscussProject from '@/components/DiscussProject'
import VisionPage from '@/components/VisionPage'
import OurTeam from '@/components/OurTeam'
import FAQPage from '@/components/FAQPage'

export default function Home() {
  useSmoothScroll()

  return (
    <main className='overflow-hidden bg-white' >
      <Navbar />
      <Hero />
      <ServicesPage />
      <ContactPage/>
      <DiscussProject/>
      <VisionPage/>
      <OurTeam />
      <FAQPage />
      <Footer />
    </main>
  )
}