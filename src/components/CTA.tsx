import { Check, MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface CTAProps {
  title: string
  subtitle: string
}

export const CTA = ({ title, subtitle }: CTAProps) => {
  const [showChat, setShowChat] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setShowChat(true)
  }

  const ChatBox = () => (
    <div className="fixed bottom-24 right-8 w-96 bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden">
      <div className="bg-blue-900 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircle className="text-white" size={20} />
          <h3 className="text-white font-bold">Customer Support</h3>
        </div>
        <button 
          onClick={() => setShowChat(false)}
          className="text-white hover:text-blue-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="p-4 h-96 overflow-y-auto">
        <div className="mb-4">
          <div className="bg-blue-50 p-3 rounded-lg max-w-[80%]">
            <p className="text-sm">Hello! How can we assist you today?</p>
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <input 
          type="text" 
          placeholder="Type your message..."
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  )

  return (
    <>
      <section className="bg-blue-900 text-white py-20 px-4" id="main-cta">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">{title}</h2>
          <p className="text-xl mb-8 text-center">{subtitle}</p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="grid gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+62 812 3456 7890"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 px-6 py-4 rounded-lg font-bold text-lg text-white transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Started Now
            </button>
            
            <p className="mt-4 text-sm text-gray-600 text-center">
              <Check className="inline mr-2 text-green-400" size={16} />
              We'll contact you within 1 business day
            </p>
          </form>
        </div>
      </section>

      <button 
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-8 right-8 bg-blue-900 text-white p-4 rounded-full shadow-2xl hover:bg-blue-800 transition-colors"
      >
        <MessageCircle size={24} />
      </button>

      {showChat && <ChatBox />}
    </>
  )
}
