'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import type { Testimonial } from '@/types'

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      content: 'I never thought I\'d feel this confident again. The team at Waste the Waist gave me more than just weight loss — they gave me my life back!',
      author: 'A.M.',
      rating: 5
    },
    {
      id: '2',
      content: 'The nutrition support made all the difference. I finally feel like I have a plan I can follow long-term.',
      author: 'S.K.',
      rating: 5
    },
    {
      id: '3',
      content: 'Professional, caring, and effective. The surgical team made me feel safe throughout the entire process.',
      author: 'M.O.',
      rating: 5
    },
    {
      id: '4',
      content: 'Amazing results! I\'ve lost 45kg and my diabetes is now under control. Thank you for changing my life.',
      author: 'J.W.',
      rating: 5
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hear from those who have taken the journey with us and transformed their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-primary-200" />
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating || 5)}
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        Verified Patient
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These numbers represent real lives transformed and health goals achieved.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600">Successful Treatments</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary-600">95%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary-600">85%</div>
              <div className="text-sm text-gray-600">Long-term Success Rate</div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary-600">5+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary-600 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of patients who have successfully transformed their lives with our 
              professional weight loss interventions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Your Consultation
              </a>
              <a
                href="tel:+254700000000"
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Call Now: +254 700 000 000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
