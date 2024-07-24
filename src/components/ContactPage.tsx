import React from 'react';
import Image from 'next/image';
import double from '@/components/image/image 15.png'
import appstore from '@/components/image/app-store.png'
import playstore from '@/components/image/google-play.png'

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

const ContactPage = () => {
  return (
    <div id='cases' className="max-w-6xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-4xl font-bold text-black mb-8 w-[50%]">
        Developed more than <span className="text-green-500">100</span> projects in <span className="text-green-500">15</span> industries
      </h2>
      
      <div className="grid grid-cols-3 gap-6 mb-16">
        {industries.map((industry, index) => (
          <div key={index} className="flex items-center">
            <span className="text-2xl mr-2">{industry.icon}</span>
            <span className='text-slate-700'>{industry.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-black mb-4">Projects we are proud of</h2>
      <p className="mb-8  text-gray-600">
        Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership
      </p>

      <div className="flex mb-8">
        <button className="mr-4 font-semibold border-b-2 text-gray-700 border-yellow-400">Project 1</button>
        <button className="mr-4 text-gray-700">Project 2</button>
        <button className="mr-4 text-gray-700">Project 3</button>
        <button className='text-gray-700'>Project 4</button>
      </div>

      <div className="flex">
        <div className="w-1/2 pr-8">
          <h3 className="text-2xl font-bold text-black mb-4">Project 1</h3>
          <p className="mb-4 text-gray-700">
            Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels
          </p>
          <div className="mb-4">
            <span className="text-blue-600">Business analysis</span> / <span className="text-blue-600">iOS</span> / <span className="text-blue-600">Android</span> / <span className="text-blue-600">QA</span> / <span className="text-blue-600">UI/UX Design</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="mr-4 text-gray-700">🌍 India</span>
            <span className='text-gray-700'>🏠 Real Estate</span>
          </div>
          <div className="flex mb-4">
            <div className="mr-8">
              <div className="text-2xl font-bold text-black">400%</div>
              <div className='text-gray-700'>User Growth</div>
            </div>
            <div>
              <div className="text-2xl text-black font-bold">+ 200 000</div>
              <div className='text-gray-700'>Active Users</div>
            </div>
          </div>
          <div className="flex">
            <Image src={appstore} alt="App Store" width={120} height={40} className="mr-4" />
            <Image src= {playstore} alt="Google Play" width={120} height={40} />
          </div>
        </div>
        <div className="w-1/2">
          <Image src={double} alt="Project Screenshot" width={500} height={600} objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;