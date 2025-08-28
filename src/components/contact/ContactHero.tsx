'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Clock, MapPin } from 'lucide-react'

export default function ContactHero() {
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
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              📞 Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let&apos;s Start a
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Our team of experts is here to help you 
              find the perfect solution. Reach out today and let&apos;s discuss your goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">contact@company.com</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">San Francisco, CA</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
              Download Brochure
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}