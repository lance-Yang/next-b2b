"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Cloud, 
  Lock,
  type LucideIcon 
} from 'lucide-react'

interface Feature {
  name: string
  description: string
  icon: LucideIcon
  color: string
}

const features: Feature[] = [
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, compliance certifications, and advanced threat protection.',
    icon: Shield,
    color: 'text-blue-600',
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized performance with global CDN, intelligent caching, and sub-second response times.',
    icon: Zap,
    color: 'text-yellow-600',
  },
  {
    name: 'Team Collaboration',
    description: 'Real-time collaboration tools, role-based access control, and seamless workflow integration.',
    icon: Users,
    color: 'text-green-600',
  },
  {
    name: 'Advanced Analytics',
    description: 'Comprehensive insights with customizable dashboards, predictive analytics, and detailed reporting.',
    icon: BarChart3,
    color: 'text-purple-600',
  },
  {
    name: 'Cloud Native',
    description: 'Built for the cloud with auto-scaling, high availability, and multi-region deployment options.',
    icon: Cloud,
    color: 'text-cyan-600',
  },
  {
    name: 'Data Privacy',
    description: 'GDPR compliant with data residency options, automated backups, and granular privacy controls.',
    icon: Lock,
    color: 'text-red-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Powerful Features for Modern Business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive suite of features is designed to meet the demands of
              today&apos;s enterprises, providing the tools you need to succeed.
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 ring-1 ring-gray-200 ${feature.color}`}>
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}