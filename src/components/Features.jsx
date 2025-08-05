import React from 'react'
import { Shield, MessageCircle, Search, Smartphone, Globe, Heart } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: "Safe & Secure",
      description: "Advanced verification and privacy controls to keep you safe while dating online."
    },
    {
      icon: <Search className="h-8 w-8 text-red-500" />,
      title: "Smart Matching",
      description: "Our algorithm finds compatible matches based on your preferences and interests."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-red-500" />,
      title: "Easy Communication",
      description: "Chat, video call, and connect with matches through our intuitive messaging system."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-red-500" />,
      title: "Mobile Ready",
      description: "Take your dating life on the go with our responsive mobile-friendly platform."
    },
    {
      icon: <Globe className="h-8 w-8 text-red-500" />,
      title: "Local & National",
      description: "Find matches in your city or explore connections across all of South Africa."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Success Stories",
      description: "Join thousands of couples who found love through Date Me's platform."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Date Me?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most trusted dating platform in South Africa with features 
            designed to help you find meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
