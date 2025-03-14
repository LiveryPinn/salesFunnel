import { AlertCircle, ShieldCheck, Users, Check } from 'lucide-react'

interface Challenge {
  icon: React.ElementType
  title: string
  bullets: string[]
}

interface ChallengesProps {
  title: string
  challenges: Challenge[]
}

export const Challenges = ({ title, challenges }: ChallengesProps) => {
  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <item.icon className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2 text-gray-600">
                    <Check className="text-green-400 flex-shrink-0 mt-1" size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
