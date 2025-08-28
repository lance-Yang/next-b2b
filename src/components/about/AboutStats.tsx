'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Award } from 'lucide-react'

const stats = [
  {
    icon: Users,
    number: '10,000+',
    label: 'Active Customers',
    description: 'Businesses worldwide trust our platform',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: TrendingUp,
    number: '500M+',
    label: 'API Calls Monthly',
    description: 'Processed with 99.9% uptime reliability',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Globe,
    number: '150+',
    label: 'Countries Served',
    description: 'Global reach with local support',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Award,
    number: '98%',
    label: 'Customer Satisfaction',
    description: 'Based on quarterly surveys',
    color: 'from-orange-500 to-orange-600'
  }
]

const achievements = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Started with a vision to transform B2B operations'
  },
  {
    year: '2019',
    title: 'First 1,000 Customers',
    description: 'Reached our first major milestone'
  },
  {
    year: '2020',
    title: 'Series A Funding',
    description: 'Raised $10M to accelerate growth'
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Launched in Europe and Asia-Pacific'
  },
  {
    year: '2022',
    title: 'Enterprise Solutions',
    description: 'Introduced advanced enterprise features'
  },
  {
    year: '2023',
    title: 'AI Integration',
    description: 'Launched AI-powered business insights'
  }
]

export default function AboutStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These metrics reflect our commitment to delivering exceptional value and building lasting relationships with our customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Journey
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From startup to industry leader - here are the key milestones that shaped our company.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-200 to-purple-200"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {achievement.year}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </div>
                      <div className="text-gray-600">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join Our Success Story?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Discover how thousands of businesses are transforming their operations with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}