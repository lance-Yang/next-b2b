'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Zap, Heart, Award, Globe } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical standards that build trust and long-term relationships.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, both within our organization and in partnership with our clients.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously push boundaries, embrace new technologies, and challenge conventional thinking.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Every decision we make is guided by what&apos;s best for our customers and their success.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from product quality to customer service.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We aim to make a positive impact on businesses and communities worldwide through our solutions.',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function AboutValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every interaction we have with our customers, partners, and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} mb-6`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Living Our Values Daily
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our values aren&apos;t just words on a wall – they&apos;re the foundation of our culture 
                and the driving force behind everything we do.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Employee Satisfaction</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">4.9/5</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Community Projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}