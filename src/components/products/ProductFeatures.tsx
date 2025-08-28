'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Cloud, 
  Lock,
  Workflow,
  HeadphonesIcon,
  Database
} from 'lucide-react'

export default function ProductFeatures() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, compliance with SOC 2, GDPR, and ISO 27001 standards.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized infrastructure delivering sub-second response times globally.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Real-time collaboration tools with advanced permission management.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and insights with customizable dashboards.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud architecture with automatic backup and disaster recovery.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Granular user permissions with SSO integration and audit trails.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Intelligent workflow automation to streamline business processes.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support with dedicated account management.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with 500+ business applications and databases.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Modern Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage, scale, and optimize your business operations 
            in one comprehensive platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8">
            Trusted by over 10,000+ businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Company logos placeholder */}
            <div className="w-32 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company A</span>
            </div>
            <div className="w-32 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company B</span>
            </div>
            <div className="w-32 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company C</span>
            </div>
            <div className="w-32 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company D</span>
            </div>
            <div className="w-32 h-8 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">Company E</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}