import React, { useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-red-500 mr-2" />
            <span className="text-2xl font-bold text-gray-900">Date Me</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-red-500 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-red-500 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-500 transition-colors">Success Stories</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-red-500 transition-colors">Sign In</button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
              Join Now
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-red-500 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-red-500 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-red-500 transition-colors">Success Stories</a>
              <button className="text-gray-700 hover:text-red-500 transition-colors text-left">Sign In</button>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors w-fit">
                Join Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
