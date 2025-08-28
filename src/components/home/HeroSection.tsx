"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const features = [
  'Enterprise-grade solutions',
  'Scalable infrastructure',
  '24/7 Expert support',
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-1/2 -mr-96 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Transform Your Business with{' '}
                <span className="text-primary">Smart Solutions</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Empower your enterprise with cutting-edge B2B solutions designed to 
                streamline operations, boost productivity, and drive sustainable growth 
                in the digital age.
              </p>

              {/* Features list */}
              <ul className="mt-8 space-y-3">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-x-3"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex items-center gap-x-6"
              >
                <Link
                  href="/get-started"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/demo"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
                >
                  Schedule a demo <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Placeholder for hero image */}
              <div className="aspect-[3/2] w-full rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 lg:aspect-[4/3] lg:w-[130%]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-primary/30" />
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">Business Dashboard Illustration</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}