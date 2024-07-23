import React from 'react';
import Image from 'next/image';
import planet from '@/components/image/Logo Bar.png'

const services = [
  { name: 'iOS development', link: '#' },
  { name: 'Android development', link: '#' },
  { name: 'Web development', link: '#' },
  { name: 'UI/UX design', link: '#' },
  { name: 'Testing', link: '#' },
  { name: 'Launch', link: '#' },
  { name: 'IT consulting', link: '#' },
];

const webTechnologies = [
  'PHP', 'Javascript', 'Node.js', 'Web Socket', 'Socket.io', 'Vue.js',
  'Next', 'MySQL', 'Laravel', 'GO lang', 'Django', 'Python'
];

const mobileTechnologies = [
  'Swift', 'Kotlin', 'Alamofire', 'Firebase', 'CoreData', 'Room', 'Realm',
  'Corodova', 'RxJava', 'RxSwift', 'Unit Test', 'Navigation'
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white w-full mx-auto px-4 py-8">
      <div className="flex justify-between mb-8">
        <Image src={planet} alt='pl' loading='lazy'/>
      </div>


      
      <div className='mx-20 '>
      <div>
      <h1 className="text-4xl text-black font-bold w-[85%] mb-8">Full development cycle</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
        <div>
          <h2 className="text-xl text-slate-800 font-semibold mb-4">We use proven technologies</h2>
          
          <div className="mb-6">
            <h3 className="font-semibold text-black mb-2">Web</h3>
            <p className="text-sm text-slate-700">{webTechnologies.join(' / ')}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 text-black">Mobile</h3>
            <p className="text-sm text-slate-700">{mobileTechnologies.join(' / ')}</p>
          </div>
        </div>
        
        <div className='ml-20'>
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <a href={service.link} className="text-black hover:underline flex items-center">
                {service.name}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ServicesPage;