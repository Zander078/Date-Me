import React from 'react'
import { MapPin, Users, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect Match in 
              <span className="text-red-500"> South Africa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with thousands of singles across South Africa. From Cape Town to Johannesburg, 
              your soulmate is waiting for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors">
                Start Dating Today
              </button>
              <button className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-50 transition-colors">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-red-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">50K+</span>
                </div>
                <p className="text-gray-600">Active Members</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-6 w-6 text-red-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">2K+</span>
                </div>
                <p className="text-gray-600">Success Stories</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-red-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">9</span>
                </div>
                <p className="text-gray-600">Provinces</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Date Me Today</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Select Province</option>
                    <option>Western Cape</option>
                    <option>Gauteng</option>
                    <option>KwaZulu-Natal</option>
                    <option>Eastern Cape</option>
                    <option>Limpopo</option>
                    <option>Mpumalanga</option>
                    <option>North West</option>
                    <option>Free State</option>
                    <option>Northern Cape</option>
                  </select>
                </div>
                <div>
                  <input 
                    type="password" 
                    placeholder="Create Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                  Create Free Account
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
