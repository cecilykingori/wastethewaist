'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { User, Stethoscope, Heart, Utensils, Users } from 'lucide-react'
import type { TeamMember } from '@/types'

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Micah Kibera',
      title: 'Clinical Nutritionist',
      description: 'Provides personalized nutrition counseling, meal planning, and long-term lifestyle support to ensure sustainable results.',
    },
    {
      name: 'Dr. Lance Mayabi',
      title: 'Bariatric & General Surgeon',
      description: 'Specializes in surgical interventions for weight loss, including gastric sleeve procedures. Ensures safe, high-quality surgical care.',
    },
    {
      name: 'Dr. Amal Satir',
      title: 'Cardiac Anesthesiologist',
      description: 'Expert in perioperative care, ensuring patient safety and comfort during procedures that require anesthesia.',
    },
  ]

  const getIcon = (title: string) => {
    if (title.includes('Nutritionist')) return Utensils
    if (title.includes('Surgeon')) return Stethoscope
    if (title.includes('Anesthesiologist')) return Heart
    return User
  }

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our strength lies in the collaboration of a diverse team of professionals 
            committed to your well-being and success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const IconComponent = getIcon(member.title)
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Profile Image Placeholder */}
                    <div className="relative mx-auto">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto flex items-center justify-center mb-4">
                        <IconComponent className="h-16 w-16 text-primary-600" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <p className="text-primary-600 font-medium">
                          {member.title}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Specialization badges */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.title.includes('Nutritionist') && (
                        <>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            Nutrition Planning
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            Lifestyle Support
                          </span>
                        </>
                      )}
                      {member.title.includes('Surgeon') && (
                        <>
                          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                            Gastric Sleeve
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            Bariatric Surgery
                          </span>
                        </>
                      )}
                      {member.title.includes('Anesthesiologist') && (
                        <>
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                            Patient Safety
                          </span>
                          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">
                            Perioperative Care
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Team Values */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Why Our Team Makes the Difference
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Medical Expertise</h4>
                <p className="text-sm text-gray-600">
                  Board-certified professionals with years of specialized experience in weight management.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                <p className="text-sm text-gray-600">
                  We understand the challenges of weight loss and provide empathetic, judgment-free support.
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary-100 rounded-lg mx-auto flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Collaborative Approach</h4>
                <p className="text-sm text-gray-600">
                  Our multidisciplinary team works together to create comprehensive treatment plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
