import Image from 'next/image'
import { Card } from "@/components/ui/card"
import people from '@/components/image/people.png'

export default function OurTeam() {
  return (
    <div id='media' className="px-4 sm:px-6 md:px-8 lg:px-28 bg-[#F2F4F7] mx-auto py-8">
      <h1 className="text-3xl md:text-4xl text-black font-bold mb-6">Our team</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="mb-6 text-black text-sm md:text-base">
            Thousand is a full-cycle digital production company with its own product analytics,
            design, web and mobile development.
          </p>
          
          <div className="grid grid-cols-3 mt-6 mb-8 md:mb-16">
            <div className=''>
              <h2 className="text-2xl md:text-3xl font-bold text-black">28</h2>
              <p className="text-xs md:text-sm text-gray-600">team members</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black">+100</h2>
              <p className="text-xs md:text-sm text-gray-600">projects</p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl text-black font-bold">7 years</h2>
              <p className="text-xs md:text-sm text-gray-600">in IT sphere</p>
            </div>
          </div>
          
          <p className='text-gray-600 text-sm md:text-base'>
            All the necessary specialists - from a designer to a tester - are on our staff. We hire
            the best specialists in the market. It's expensive but worth it
          </p>
        </div>
        
        <Card className="overflow-hidden mt-6 md:mt-0">
          <Image
            src={people}
            alt="Our team"
            width={500}
            height={300}
            className="w-full h-auto"
            layout="responsive"
          />
        </Card>
      </div>
    </div>
  )
}