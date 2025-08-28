"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Cpu, Users, BarChart3, Globe } from 'lucide-react'

const categories = [
  {
    icon: Zap,
    title: 'Automation Tools',
    description: 'Streamline your workflows with intelligent automation solutions.',
    href: '/products/automation',
    color: 'bg-yellow-500',
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Protect your business with enterprise-grade security.',
    href: '/products/security',
    color: 'bg-red-500',
  },
  {
    icon: Cpu,
    title: 'AI & Analytics',
    description: 'Harness the power of AI for data-driven insights.',
    href: '/products/analytics',
    color: 'bg-blue-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enhance teamwork with unified communication platforms.',
    href: '/products/collaboration',
    color: 'bg-green-500',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Transform data into actionable business insights.',
    href: '/products/business-intelligence',
    color: 'bg-purple-500',
  },
  {
    icon: Globe,
    title: 'Cloud Infrastructure',
    description: 'Scale your operations with robust cloud solutions.',
    href: '/products/cloud',
    color: 'bg-indigo-500',
  },
]

export function ProductCategoriesSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Explore Our Product Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover comprehensive solutions designed to transform every aspect of your business operations
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center">
                  <div className={`inline-flex items-center justify-center rounded-lg p-3 ${category.color} bg-opacity-10`}>
                    <Icon className={`h-6 w-6 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={category.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}