'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Scissors, Circle, Pill, CheckCircle, ArrowRight } from 'lucide-react'
import type { Intervention } from '@/types'

const Services: React.FC = () => {
  const interventions: Intervention[] = [
    {
      id: 'gastric-sleeve',
      title: 'Sleeving the Past Behind',
      subtitle: 'Gastric Sleeve',
      description: 'A permanent surgical option where part of the stomach is removed, reducing capacity and promoting lasting weight loss. Ideal for patients struggling with obesity-related health issues.',
      features: [
        'Permanent weight loss solution',
        'Reduces stomach capacity by 80%',
        'Improves obesity-related conditions',
        'High success rate for long-term results',
        'Comprehensive pre and post-operative care'
      ]
    },
    {
      id: 'gastric-balloon',
      title: 'Inflate for Change',
      subtitle: 'Gastric Balloons',
      description: 'A non-surgical, minimally invasive option. A balloon is inserted into the stomach and inflated, creating a sense of fullness that helps regulate appetite and portion sizes.',
      features: [
        'Non-surgical procedure',
        'Minimally invasive insertion',
        'Temporary 6-12 month placement',
        'Helps control appetite and portions',
        'Reversible weight loss option'
      ]
    },
    {
      id: 'pharmaceutical',
      title: 'Meta Better',
      subtitle: 'Pharmaceutical Intervention',
      description: 'Prescription-based weight management using clinically approved medications. Tailored to individuals who may not be candidates for surgery but need medical support to accelerate weight loss.',
      features: [
        'Clinically approved medications',
        'Personalized treatment plans',
        'Regular monitoring and adjustments',
        'Support for lifestyle changes',
        'Suitable for various health conditions'
      ]
    }
  ]

  const getIcon = (id: string) => {
    switch (id) {
      case 'gastric-sleeve':
        return Scissors
      case 'gastric-balloon':
        return Circle
      case 'pharmaceutical':
        return Pill
      default:
        return CheckCircle
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Weight Loss Interventions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We offer a range of evidence-based medical interventions for weight loss, 
            tailored to your specific needs and health conditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {interventions.map((intervention, index) => {
            const IconComponent = getIcon(intervention.id)
            return (
              <Card 
                key={intervention.id} 
                className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary-200"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {intervention.title}
                  </CardTitle>
                  <CardDescription className="text-primary-600 font-semibold">
                    {intervention.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {intervention.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <ul className="space-y-2">
                      {intervention.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full" variant="outline" asChild>
                      <a href="#contact" className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Process Overview */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a comprehensive approach to ensure your safety, comfort, and success 
              throughout your weight loss journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full mx-auto flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
              <p className="text-sm text-gray-600">
                Comprehensive health assessment and treatment planning
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full mx-auto flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900">Pre-Treatment Prep</h4>
              <p className="text-sm text-gray-600">
                Medical clearance, education, and preparation for your chosen intervention
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full mx-auto flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900">Treatment</h4>
              <p className="text-sm text-gray-600">
                Safe, professional execution of your weight loss intervention
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full mx-auto flex items-center justify-center font-bold">
                4
              </div>
              <h4 className="font-semibold text-gray-900">Follow-up Care</h4>
              <p className="text-sm text-gray-600">
                Ongoing support, monitoring, and lifestyle guidance for lasting success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
