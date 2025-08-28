'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ProductHero() {
  const benefits = [
    'Enterprise-grade scalability',
    '99.9% uptime guarantee',
    '24/7 technical support',
    'Advanced security features'
  ]

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              🚀 Professional Business Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Enterprise Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive suite of business tools designed to streamline operations, 
              enhance productivity, and accelerate growth for modern enterprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}