import { Check, ShieldCheck } from 'lucide-react'

interface Solution {
  title: string
  target: string
  benefits: string[]
  outcome: string
}

interface SolutionsProps {
  title: string
  solutions: Solution[]
}

export const Solutions = ({ title, solutions }: SolutionsProps) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-xl border border-blue-100 hover:border-blue-200 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{solution.title}</h3>
                <p className="text-blue-600 font-medium">Solving: {solution.target}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3">
                    <Check className="flex-shrink-0 text-green-500 mt-1" size={18} />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-blue-900">
                  <ShieldCheck className="inline mr-2" size={18} />
                  Proven Outcome: {solution.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
