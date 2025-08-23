'use client'

import React from 'react'
import { Phone, Mail, MapPin, Heart, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    { label: 'Gastric Sleeve Surgery', href: '#services' },
    { label: 'Gastric Balloon', href: '#services' },
    { label: 'Pharmaceutical Intervention', href: '#services' },
    { label: 'Nutrition Counseling', href: '#services' },
    { label: 'Consultation', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Heart className="mr-2 h-6 w-6 text-primary-400" />
                  Waste the Waist
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A center dedicated to transforming lives through safe, effective, and 
                  evidence-based weight loss interventions. We help you reclaim your health, 
                  confidence, and vitality with professional expert care.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <div>
                    <p>+254 700 000 000</p>
                    <p>+254 711 111 111</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-primary-400" />
                  <div>
                    <p>info@wastethewaist.com</p>
                    <p>support@wastethewaist.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-primary-400" />
                  <p>Nairobi, Kenya</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="border-t border-gray-800 py-6">
          <div className="bg-primary-600 rounded-lg p-4 text-center">
            <h4 className="font-semibold text-white mb-2">Need Immediate Assistance?</h4>
            <p className="text-primary-100 text-sm mb-3">
              Our medical team is available for emergency consultations
            </p>
            <a
              href="tel:+254700000000"
              className="inline-flex items-center bg-white text-primary-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now: +254 700 000 000
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Waste the Waist. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
