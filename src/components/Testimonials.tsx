interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  logo: string
}

interface TestimonialsProps {
  title: string
  testimonials: Testimonial[]
}

export const Testimonials = ({ title, testimonials }: TestimonialsProps) => {
  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.logo} 
                  alt={`${testimonial.company} logo`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.title} • {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
