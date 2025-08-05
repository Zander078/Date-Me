import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      location: "Cape Town",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      story: "We matched on Date Me in February and got engaged in December! The platform made it so easy to connect with someone who truly understood me.",
      rating: 5
    },
    {
      name: "Thabo & Nomsa",
      location: "Johannesburg",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      story: "After years of unsuccessful dating, Date Me helped me find my soulmate. The matching algorithm really works - we have so much in common!",
      rating: 5
    },
    {
      name: "James & Priya",
      location: "Durban",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      story: "Date Me brought together two people from different cultures who found love. We're planning our wedding for next year!",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Love Stories from Across South Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real couples who found their perfect match through Date Me. 
            Your love story could be next!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <Quote className="h-8 w-8 text-red-200 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.story}"</p>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors">
            Start Your Love Story Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
