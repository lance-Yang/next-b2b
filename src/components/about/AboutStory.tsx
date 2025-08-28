'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Target, Lightbulb } from 'lucide-react'

export default function AboutStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, we began with a simple yet powerful vision: to transform how 
                businesses operate in the digital age. What started as a small team of passionate 
                engineers has grown into a global company serving over 10,000 customers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our journey has been driven by an unwavering commitment to innovation, quality, 
                and customer success. Every product we build, every feature we develop, is 
                designed with one goal in mind: empowering your business to achieve more.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Customer-First Approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Continuous Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Global Scale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Proven Results</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>
                
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime Reliability</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Customer Support</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">500M+</div>
                      <div className="text-sm text-gray-600">API Calls/Month</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses of all sizes with innovative, scalable, and reliable 
                solutions that drive growth, enhance productivity, and create lasting value 
                for customers and stakeholders alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8"
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the world&apos;s most trusted partner for digital transformation, 
                enabling millions of businesses to thrive in an increasingly connected 
                and automated future.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}