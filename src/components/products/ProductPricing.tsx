'use client'

import { motion } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'

export default function ProductPricing() {
  const plans = [
    {
      name: 'Starter',
      price: 49,
      period: 'per month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 10 team members',
        'Basic analytics dashboard',
        'Email support',
        '10GB storage',
        'Standard integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: 149,
      period: 'per month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 team members',
        'Advanced analytics & reporting',
        'Priority support',
        '100GB storage',
        'Premium integrations',
        'Custom workflows',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited team members',
        'Enterprise analytics suite',
        'Dedicated account manager',
        'Unlimited storage',
        'All integrations included',
        'Advanced security features',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core features 
            with 14-day free trial and no setup fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-gray-600">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-gray-300 rounded-full cursor-pointer"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform"></div>
            </div>
            <span className="text-gray-600">
              Annual 
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              99.9% Uptime SLA
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              GDPR Ready
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              24/7 Support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}