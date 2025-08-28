'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  Linkedin, 
  Twitter, 
  Instagram,
  Calendar,
  MessageCircle,
  Video,
  Users
} from 'lucide-react'

const offices = [
  {
    id: 'headquarters',
    title: 'Headquarters',
    type: 'Main Office',
    address: {
      street: '123 Innovation Drive',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'United States'
    },
    phone: '+1 (555) 123-4567',
    email: 'hello@company.com',
    hours: {
      weekdays: '9:00 AM - 6:00 PM PST',
      weekends: 'Closed'
    },
    coordinates: { lat: 37.7749, lng: -122.4194 }
  },
  {
    id: 'newyork',
    title: 'New York Office',
    type: 'Regional Office',
    address: {
      street: '456 Business Boulevard',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    },
    phone: '+1 (555) 987-6543',
    email: 'ny@company.com',
    hours: {
      weekdays: '9:00 AM - 6:00 PM EST',
      weekends: 'Closed'
    },
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 'london',
    title: 'London Office',
    type: 'European Headquarters',
    address: {
      street: '789 Tech Square',
      city: 'London',
      state: 'England',
      zip: 'EC2A 4BX',
      country: 'United Kingdom'
    },
    phone: '+44 20 7946 0958',
    email: 'uk@company.com',
    hours: {
      weekdays: '9:00 AM - 5:30 PM GMT',
      weekends: 'Closed'
    },
    coordinates: { lat: 51.5074, lng: -0.1278 }
  }
]

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our team',
    action: 'Call us now',
    link: 'tel:+15551234567',
    availability: '24/7 Support Available'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    action: 'Send email',
    link: 'mailto:hello@company.com',
    availability: 'Response within 2 hours'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    action: 'Start chat',
    link: '#',
    availability: 'Mon-Fri, 9 AM - 6 PM PST'
  },
  {
    icon: Video,
    title: 'Video Call',
    description: 'Schedule a face-to-face meeting',
    action: 'Book meeting',
    link: '#',
    availability: 'Available by appointment'
  }
]

const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/your-company',
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    url: 'https://twitter.com/yourcompany',
    color: 'hover:text-sky-500'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: 'https://instagram.com/yourcompany',
    color: 'hover:text-pink-600'
  }
]

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Get in Touch with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re here to help you succeed. Choose the method that works best for you, 
              and our team will respond promptly to discuss your needs.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {method.availability}
                </p>
                <a
                  href={method.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  {method.action}
                </a>
              </div>
            ))}
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Global Offices
              </h3>
              <p className="text-lg text-gray-600">
                Visit us at any of our locations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={office.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {office.title}
                      </h4>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  </div>

                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-600">
                        <p>{office.address.street}</p>
                        <p>
                          {office.address.city}, {office.address.state} {office.address.zip}
                        </p>
                        <p>{office.address.country}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {office.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {office.email}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-600 text-sm">
                        <p><strong>Mon-Fri:</strong> {office.hours.weekdays}</p>
                        <p><strong>Weekends:</strong> {office.hours.weekends}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Business Information */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Information
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium text-gray-900">2015</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Employees</span>
                  <span className="font-medium text-gray-900">500+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Industries Served</span>
                  <span className="font-medium text-gray-900">25+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Global Presence</span>
                  <span className="font-medium text-gray-900">15 Countries</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-medium text-gray-900">Under 2 hours</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Satisfaction Rate</span>
                  <span className="font-medium text-gray-900">98.5%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Quick Actions
                </h3>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Demo
                </button>
                
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Download Brochure
                </button>
                
                <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center">
                  <Video className="w-5 h-5 mr-2" />
                  Request Video Call
                </button>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    Follow us on social media
                  </p>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-colors duration-200 ${social.color}`}
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-red-50 border border-red-200 rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-bold text-red-800 mb-2">
              Emergency Support
            </h3>
            <p className="text-red-700 mb-4">
              For urgent technical issues or critical system failures
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+15551234999"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency Hotline
              </a>
              <a
                href="mailto:emergency@company.com"
                className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                emergency@company.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}