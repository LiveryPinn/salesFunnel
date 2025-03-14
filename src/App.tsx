import React from 'react'
import { Hero } from './components/Hero'
import { Challenges } from './components/Challenges'
import { Solutions } from './components/Solutions'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'

const App = () => {
  const heroData = {
    title: "Double Your Revenue\nin 90 Days",
    subtitle: "Join 2,500+ scaling companies using our data-backed growth framework",
    ctaText: "Claim Your Free Strategy Session",
    guaranteeText: "30-day performance guarantee",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    stats: {
      successRate: "97%",
      revenue: "$4.8B+",
      clients: "2.5K"
    }
  }

  const challengesData = {
    title: "Common Challenges We Solve",
    challenges: [
      { 
        icon: "AlertCircle", 
        title: "Growth Plateaus", 
        bullets: [
          "Revenue stuck despite increased efforts",
          "Customer acquisition costs rising",
          "Market saturation challenges"
        ]
      },
      { 
        icon: "ShieldCheck", 
        title: "Operational Friction", 
        bullets: [
          "Legacy systems slowing processes",
          "Manual workflows causing errors",
          "Departmental data silos"
        ]
      },
      { 
        icon: "Users", 
        title: "Team Alignment", 
        bullets: [
          "Conflicting department priorities",
          "Lack of unified metrics",
          "Slow decision-making cycles"
        ]
      }
    ]
  }

  const solutionsData = {
    title: "Targeted Solutions That Deliver Results",
    solutions: [
      {
        title: "Break Through Growth Barriers",
        target: "Growth Plateaus",
        benefits: [
          "AI-powered opportunity analysis identifies hidden revenue streams",
          "Customer lifetime value optimization strategies",
          "Dynamic pricing models based on real-time market data"
        ],
        outcome: "Average 42% revenue increase within first quarter"
      },
      {
        title: "Streamline Operations",
        target: "Operational Friction",
        benefits: [
          "Automated workflow integration reduces manual tasks by 70%",
          "Real-time data unification across departments",
          "Predictive maintenance for critical systems"
        ],
        outcome: "Cut operational costs by 35% while improving accuracy"
      },
      {
        title: "Align Teams, Accelerate Growth",
        target: "Team Alignment",
        benefits: [
          "Unified KPIs across all departments",
          "Automated progress reporting dashboards",
          "Cross-functional collaboration frameworks"
        ],
        outcome: "2x faster decision-making cycles"
      }
    ]
  }

  const testimonialsData = {
    title: "Trusted by Industry Leaders",
    testimonials: [
      {
        quote: "This solution transformed our operational efficiency beyond expectations. We achieved 200% ROI in just 90 days.",
        name: "Sarah Johnson",
        title: "CEO",
        company: "TechCorp",
        logo: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=96&h=96&q=80"
      },
      {
        quote: "The most impactful growth partnership we've ever experienced. Their framework is revolutionary.",
        name: "Michael Chen",
        title: "COO",
        company: "GlobalFin Inc",
        logo: "https://images.unsplash.com/photo-1566496875470-68ada46a38c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=96&h=96&q=80"
      },
      {
        quote: "From stagnant to skyrocketing - our revenue grew 150% faster than industry benchmarks.",
        name: "Emma Wilson",
        title: "VP Growth",
        company: "NextGen Retail",
        logo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=96&h=96&q=80"
      }
    ]
  }

  const faqData = {
    title: "Common Questions",
    faqs: [
      { 
        question: "How quickly can I expect results?", 
        answer: "Our data-driven approach typically delivers measurable improvements within 30 days. Most clients see a 20-40% increase in key metrics by day 45, with full program impact realized by day 90. We provide weekly performance dashboards to track progress in real-time."
      },
      { 
        question: "What's your success rate with similar companies?", 
        answer: "We maintain a 97% client success rate across 2,500+ engagements. In our latest cohort: 82% of clients doubled conversion rates within 60 days, 68% reduced customer acquisition costs by 40% or more, and 91% exceeded revenue targets within 90 days. Industry-specific case studies are available upon request."
      },
      { 
        question: "Are there long-term contracts required?", 
        answer: "No - we operate on flexible month-to-month agreements. Our performance-based model means we only succeed when you do. Clients can pause or cancel anytime with 30 days notice, though 95% of clients continue with us for 12+ months due to measurable ROI."
      },
      { 
        question: "What industries do you specialize in?", 
        answer: "Our framework is proven across SaaS, e-commerce, professional services, and enterprise software. We've successfully scaled companies from $2M to $200M+ ARR. Industry-specific experts on our team include former CROs from Fortune 500 companies and hypergrowth unicorns."
      },
      { 
        question: "How do you measure and report progress?", 
        answer: "You'll receive real-time access to our Growth Command Center dashboard with 35+ KPIs. Weekly executive briefings include: Funnel velocity analysis, CAC/LTV optimization strategies, Cohort performance tracking, and Predictive revenue modeling. Our team is available 24/7 for urgent strategy adjustments."
      }
    ]
  }

  const ctaData = {
    title: "Ready to Transform Your Business?",
    subtitle: "Let's get started - we'll reach out to you immediately"
  }

  return (
    <div className="bg-white">
      <Hero {...heroData} />
      <Challenges {...challengesData} />
      <Solutions {...solutionsData} />
      <Testimonials {...testimonialsData} />
      <FAQ {...faqData} />
      <CTA {...ctaData} />
    </div>
  )
}

export default App
