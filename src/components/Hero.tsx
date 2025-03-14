import { ChevronRight, Check, ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  guaranteeText: string
  imageUrl: string
  stats: {
    successRate: string
    revenue: string
    clients: string
  }
}

export const Hero = ({ title, subtitle, ctaText, guaranteeText, imageUrl, stats }: HeroProps) => {
  const scrollToMainCTA = () => {
    document.getElementById('main-cta')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl">
              {subtitle}
            </p>
            <div className="flex flex-col gap-6 items-start">
              <button 
                onClick={scrollToMainCTA}
                className="group relative bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-full px-10 py-6 font-bold transition-all flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg w-full sm:w-auto justify-center"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  {ctaText}
                </span>
                <ArrowRight className="transition-transform group-hover:translate-x-2 group-hover:scale-125 animate-bounce-x" size={24} />
              </button>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Check className="text-green-400 animate-pulse" size={20} />
                <span className="font-semibold">{guaranteeText}</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden transform lg:-translate-y-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-700/20 z-10"></div>
            <img 
              src={imageUrl}
              alt="Business analytics dashboard"
              className="w-full h-[500px] object-cover object-left"
              loading="eager"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg p-6 rounded-xl flex justify-between">
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.successRate}</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.revenue}</div>
                <div className="text-sm opacity-90">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.clients}</div>
                <div className="text-sm opacity-90">Active Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
