'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function ProductTestimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow Inc.',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      content: 'This platform has completely transformed our workflow. The analytics dashboard gives us insights we never had before, and the automation features have saved us countless hours.',
      metrics: {
        improvement: '40% increase in productivity',
        timeframe: 'within 3 months'
      }
    },
    {
      name: 'Michael Rodriguez',
      role: 'VP of Operations',
      company: 'Growth Dynamics',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      content: 'The customer support is exceptional, and the platform scales beautifully with our growing team. The integration capabilities are exactly what we needed.',
      metrics: {
        improvement: '60% faster deployment',
        timeframe: 'since implementation'
      }
    },
    {
      name: 'Emily Watson',
      role: 'Head of Product',
      company: 'Innovate Labs',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      content: 'We&apos;ve tried multiple solutions, but this is the first one that actually delivers on its promises. The real-time collaboration features are game-changing.',
      metrics: {
        improvement: '50% reduction in project delays',
        timeframe: 'in the first quarter'
      }
    },
    {
      name: 'David Kim',
      role: 'Engineering Manager',
      company: 'DataStream Co.',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      content: 'The security features and compliance tools give us peace of mind. The API is well-documented and the developer experience is outstanding.',
      metrics: {
        improvement: '99.9% uptime achieved',
        timeframe: 'over 12 months'
      }
    },
    {
      name: 'Lisa Zhang',
      role: 'CEO',
      company: 'FutureScale',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      content: 'This investment has paid for itself multiple times over. The ROI is clear, and our team productivity has never been higher.',
      metrics: {
        improvement: '300% ROI',
        timeframe: 'within first year'
      }
    },
    {
      name: 'James Thompson',
      role: 'Director of IT',
      company: 'Enterprise Solutions',
      avatar: '/api/placeholder/60/60',
      rating: 5,
      content: 'The enterprise features and dedicated support make this platform perfect for large organizations. Migration was seamless and downtime was minimal.',
      metrics: {
        improvement: 'Zero downtime migration',
        timeframe: 'for 10,000+ users'
      }
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '4.9/5', label: 'Customer Rating' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why thousands of businesses choose our platform to accelerate their growth 
            and streamline their operations.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Metrics */}
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="text-sm font-semibold text-blue-600 mb-1">
                  {testimonial.metrics.improvement}
                </div>
                <div className="text-xs text-gray-500">
                  {testimonial.metrics.timeframe}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join thousands of satisfied customers
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today and experience the difference our platform 
            can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}