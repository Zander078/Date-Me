import React from 'react'
import { Check, Star } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: "1 Month",
      price: "R299",
      period: "/month",
      description: "Perfect for trying out our premium features",
      features: [
        "Unlimited messaging",
        "Advanced search filters",
        "See who liked you",
        "Priority customer support",
        "Profile boost once per week"
      ],
      popular: false
    },
    {
      name: "3 Months",
      price: "R199",
      period: "/month",
      originalPrice: "R299",
      description: "Most popular choice for serious daters",
      features: [
        "Everything in 1 Month plan",
        "Super likes (5 per day)",
        "Rewind last swipe",
        "Profile boost twice per week",
        "Read receipts",
        "33% savings"
      ],
      popular: true
    },
    {
      name: "6 Months",
      price: "R149",
      period: "/month",
      originalPrice: "R299",
      description: "Best value for finding lasting love",
      features: [
        "Everything in 3 Month plan",
        "Unlimited super likes",
        "Profile boost daily",
        "Advanced matching algorithm",
        "Priority profile visibility",
        "50% savings"
      ],
      popular: false
    },
    {
      name: "1 Year",
      price: "R99",
      period: "/month",
      originalPrice: "R299",
      description: "Ultimate commitment to finding your soulmate",
      features: [
        "Everything in 6 Month plan",
        "Exclusive premium events",
        "Personal dating coach session",
        "Profile optimization tips",
        "VIP customer support",
        "67% savings"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Dating Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock premium features and increase your chances of finding love. 
            All plans include our core matching and messaging features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-red-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-2">
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                  )}
                  <span className="text-4xl font-bold text-red-500">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans come with a 7-day money-back guarantee
          </p>
          <p className="text-sm text-gray-500">
            Prices in South African Rand (ZAR). Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
