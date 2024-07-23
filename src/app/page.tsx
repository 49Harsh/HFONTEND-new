'use client'

import Hero from '@/components/Hero'
import Features from '@/components/Features'

import { useSmoothScroll } from '@/hooks/useSmootScroll'
import GradientDivider from '@/components/GradientDivider'
import Footer from '@/components/Footer'
import ServicesPage from '@/components/Services'
import Slider from '@/components/Slider'
import Navbar from '@/components/Navbar'
import ContactPage from '@/components/ContactPage'
import DiscussProject from '@/components/DiscussProject'
import VisionPage from '@/components/VisionPage'

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
      {/* 
      
      <GradientDivider />
      <Slider />
      <GradientDivider />
      <Features />
      <GradientDivider />
      <AboutAndMission />
      <GradientDivider />
      <ContactForm />
      <GradientDivider />
      <Footer /> */}
    </main>
  )
}