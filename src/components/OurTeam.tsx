import Image from 'next/image'
import { Card } from "@/components/ui/card"
import people from '@/components/image/people.png'

export default function OurTeam() {
  return (
    <div id='media' className="  px-28 bg-[#F2F4F7] mx-auto  py-8">
      <h1 className="text-4xl text-black font-bold ">Our team</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-6  text-black">
            Thousand is a full-cycle digital production company with its own product analytics,
            design, web and mobile development.
          </p>
          
          <div className="grid grid-cols-3 mt-10 mb-16">
            <div className=''>
              <h2 className="text-3xl font-bold text-black">28</h2>
              <p className="text-sm text-gray-600 ">team members</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black">+100</h2>
              <p className="text-sm text-gray-600">projects</p>
            </div>
            <div>
              <h2 className="text-3xl text-black font-bold">7 years</h2>
              <p className="text-sm text-gray-600">in IT sphere</p>
            </div>
          </div>
          
          <p className='text-gray-600 '>
            All the necessary specialists - from a designer to a tester - are on our staff. We hire
            the best specialists in the market. It's expensive but worth it
          </p>
        </div>
        
        <Card className="overflow-hidden">
          <Image
            src={people}
            alt="Our team"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </Card>
      </div>
    </div>
  )
}