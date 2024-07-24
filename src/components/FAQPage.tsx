"use client"

import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    question: "What is the cost of a mobile application?",
    answer: ""
  },
  {
    question: "Do you provide a guarantee for the mobile application?",
    answer: ""
  },
  {
    question: "How long will development take?",
    answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.\n\nAverage development time from start to finished application:\nMedium projects up to 3 months.\nLarge projects about 4-6 months.\nTo get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality."
  },
  {
    question: "I will not tell my idea, do you guarantee confidentiality?",
    answer: ""
  }
]

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <div id='faq' className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-black">FAQ</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-t border-gray-200 pt-4">
            <button 
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span className="text-gray-800 text-lg">{faq.question}</span>
              {openItem === index ? (
                <X className="h-5 w-5 text-gray-400" />
              ) : (
                <Plus className="h-5 w-5 text-green-500" />
              )}
            </button>
            {openItem === index && (
              <div className="mt-2 pr-8 text-gray-600">
                {faq.answer.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-2">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}