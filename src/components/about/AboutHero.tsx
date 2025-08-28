'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function AboutHero() {
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
              🚀 About Our Company
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Business Through
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We&apos;re on a mission to empower businesses worldwide with cutting-edge solutions 
              that drive growth, efficiency, and success in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">2018</div>
              <div className="text-gray-700">Founded</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-700">Customers Worldwide</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Team Members</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <ArrowDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}