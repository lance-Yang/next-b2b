'use client'

import { motion } from 'framer-motion'
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react'
import { useState } from 'react'

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    {
      id: 'dashboard',
      label: 'Analytics Dashboard',
      icon: Monitor,
      description: 'Comprehensive business intelligence and real-time metrics'
    },
    {
      id: 'mobile',
      label: 'Mobile App',
      icon: Smartphone,
      description: 'Native mobile experience for on-the-go productivity'
    },
    {
      id: 'collaboration',
      label: 'Team Collaboration',
      icon: Tablet,
      description: 'Seamless teamwork with advanced collaboration tools'
    }
  ]

  const showcaseContent = {
    dashboard: {
      title: 'Powerful Analytics Dashboard',
      features: [
        'Real-time performance metrics',
        'Customizable widgets and reports',
        'Advanced data visualization',
        'Automated insights and alerts'
      ],
      imageAlt: 'Analytics Dashboard Interface'
    },
    mobile: {
      title: 'Native Mobile Experience',
      features: [
        'iOS and Android applications',
        'Offline synchronization',
        'Push notifications',
        'Biometric authentication'
      ],
      imageAlt: 'Mobile Application Interface'
    },
    collaboration: {
      title: 'Enhanced Team Collaboration',
      features: [
        'Real-time document editing',
        'Video conferencing integration',
        'Project management tools',
        'Shared workspaces'
      ],
      imageAlt: 'Collaboration Tools Interface'
    }
  }

  const currentContent = showcaseContent[activeTab as keyof typeof showcaseContent]

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
            See Our Platform
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the full power of our enterprise solution through interactive demos 
            and real-world use cases.
          </p>
          
          {/* Demo Video Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Play className="w-5 h-5" />
            Watch Product Demo
          </motion.button>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-50 border-2 border-blue-200 shadow-md'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeTab === tab.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg mb-2 ${
                          activeTab === tab.id ? 'text-blue-900' : 'text-gray-900'
                        }`}>
                          {tab.label}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {currentContent.title}
              </h3>
              
              {/* Mock Interface */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Monitor className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-gray-600">{currentContent.imageAlt}</p>
                    <p className="text-sm text-gray-500 mt-2">Interactive demo coming soon</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}