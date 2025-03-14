import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQProps {
  title: string
  faqs: FAQ[]
}

export const FAQ = ({ title, faqs }: FAQProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{title}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button 
                className="w-full flex justify-between items-center p-6 hover:bg-blue-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-medium text-left">{faq.question}</span>
                {openFaq === index ? (
                  <Minus size={20} className="text-blue-600" />
                ) : (
                  <Plus size={20} className="text-blue-600" />
                )}
              </button>
              {openFaq === index && (
                <div className="p-6 pt-0 text-gray-600 prose max-w-none">
                  <div className="border-t border-blue-100 mt-4 pt-4">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
