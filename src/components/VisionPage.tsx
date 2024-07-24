import React from 'react';
import Image from 'next/image';
import iconss from '@/components/image/planing.svg'
import phone from '@/components/image/hope-gif1.png'

const VisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl text-black font-bold mb-8 sm:mb-12 text-center sm:text-left sm:ml-10">Application Development Stages</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 mx-4 sm:ml-10 text-gray-700 space-y-6 sm:space-y-8">
          <StageCard
            icon={iconss}
            title="Analysis"
            description="We craft precise technical specs, aligning with your business, technology, and user requirements."
            number="1"
          />
          <StageCard
            icon={iconss}
            title="Design"
            description="We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces."
            number="2"
          />
          <StageCard
            icon={iconss}
            title="Development"
            description="We create an extensible architecture, write clean and stable code. We integrate with customer technologies."
            number="3"
          />
        </div>
        
        <div className="lg:col-span-1 flex justify-center items-center my-8 lg:my-0">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px]">
            <Image src={phone} alt="App Screenshot" layout="responsive" width={400} height={800} className="rounded-[40px]" />
          </div>
        </div>
        
        <div className="lg:col-span-1 mx-4 sm:mr-10 text-black space-y-6 sm:space-y-8">
          <StageCard
            icon={iconss}
            title="Testing"
            description="We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions"
            number="4"
          />
          <StageCard
            icon={iconss}
            title="Launching"
            description="We design the application page and publish it in the App Store and Google Play stores."
            number="5"
          />
          <StageCard
            icon={iconss}
            title="Support"
            description="We monitor the stability of the application, update it for new devices and versions of iOS and Android."
            number="6"
          />
        </div>
      </div>
    </div>
  );
};

interface StageCardProps {
  icon: string;
  title: string;
  description: string;
  number: string;
}

const StageCard: React.FC<StageCardProps> = ({ icon, title, description, number }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md relative overflow-hidden">
      <div className="flex items-start mb-3 sm:mb-4">
        <div className="bg-green-100 p-2 rounded-full mr-3 sm:mr-4">
          <Image src={icon} alt={title} width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      <div className="absolute -bottom-6 -right-6 text-[80px] sm:text-[120px] font-bold text-gray-100 z-0">
        {number}
      </div>
    </div>
  );
};

export default VisionPage;