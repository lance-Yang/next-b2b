"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/90">
            Join thousands of companies that trust our platform to power their growth. 
            Start your journey today with a free trial.
          </p>

          {/* Benefits list */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/get-started"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="text-base font-semibold leading-6 text-white hover:text-primary-foreground/80 transition-colors"
            >
              Talk to Sales <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <p className="text-sm text-primary-foreground/70">
              Trusted by over 10,000+ businesses worldwide
            </p>
            <div className="mt-6 flex justify-center space-x-8 opacity-70">
              {/* Placeholder for company logos */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-white/20 rounded"
                  aria-label={`Company logo ${i}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}