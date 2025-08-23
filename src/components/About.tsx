'use client'

import React from 'react'
import { Target, Heart, Award, Users } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Every treatment plan is tailored to your unique needs, preferences, and health conditions.'
    },
    {
      icon: Heart,
      title: 'Comprehensive Care',
      description: 'We address not just weight loss, but overall health improvement including diabetes, hypertension, and sleep apnea.'
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description: 'All our interventions are scientifically backed and performed by experienced professionals.'
    },
    {
      icon: Users,
      title: 'Multidisciplinary Team',
      description: 'Our diverse team of specialists work together to ensure your success and safety.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Waste the Waist
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe that weight loss is more than a number on the scale — it&apos;s a journey 
            toward improved health, better energy, and a renewed quality of life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We specialize in medical interventions for weight management, tailored to your needs, 
                preferences, and health conditions. Whether you&apos;re looking for a minimally invasive option, 
                a surgical solution, or medically supervised pharmaceutical support, we provide the tools 
                and guidance for long-term success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our interventions are scientifically backed, performed by an experienced multidisciplinary 
                team, and designed to help you not only lose weight but also manage related conditions 
                such as diabetes, hypertension, and sleep apnea.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Safe Procedures</h4>
                <p className="text-sm text-gray-600">
                  All interventions follow strict safety protocols with comprehensive pre and post-care.
                </p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Long-term Support</h4>
                <p className="text-sm text-gray-600">
                  We provide ongoing guidance and monitoring to ensure sustainable results.
                </p>
              </div>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary-600" />
                  </div>
                  <div className="text-gray-700 font-medium">
                    Professional Medical Care
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
