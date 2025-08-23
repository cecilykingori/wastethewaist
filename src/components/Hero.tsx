'use client'

import React from 'react'
import { ArrowRight, Heart, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 to-white section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Life with{' '}
                <span className="text-primary-600">Safe & Effective</span>{' '}
                Weight Loss
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Reclaim your health, confidence, and vitality with our professional team 
                of experts who walk with you every step of the way.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Care</h3>
                  <p className="text-sm text-gray-600">Professional medical team</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Safe Methods</h3>
                  <p className="text-sm text-gray-600">Evidence-based treatments</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personal Support</h3>
                  <p className="text-sm text-gray-600">Tailored to your needs</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact" className="flex items-center">
                  Book Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">Learn About Our Services</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Lives Transformed</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 aspect-square lg:aspect-[4/5]">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <Heart className="h-16 w-16 text-primary-600" />
                  </div>
                  <div className="text-primary-700 font-semibold">
                    Your Health Journey Starts Here
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-sm font-semibold text-gray-900">Professional Care</div>
                <div className="text-xs text-gray-600">Expert medical team</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-sm font-semibold text-gray-900">Proven Results</div>
                <div className="text-xs text-gray-600">Evidence-based methods</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
