'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle
} from 'lucide-react'
import { useI18n } from '@/lib/i18n'

// 联系信息
const contactInfo = {
  email: 'kefu308@gmail.com',
  phone: '+86-17801460534',
  address: 'No. 2875 Beichen West Road, Shaoxing, Zhejiang, China'
}

// 社交媒体链接
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'text-blue-400' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'text-pink-600' },
  { name: 'Youtube', icon: Youtube, href: '#', color: 'text-red-600' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'text-blue-700' },
  { name: 'WhatsApp', icon: MessageCircle, href: '#', color: 'text-green-600' },
]

// 推荐产品
const recommendedProducts = [
  {
    id: 'outdoor-adventure-essentials',
    name: 'Outdoor Adventure Essentials',
    category: 'Outdoor Adventure',
    image: '/home/1750126326881.webp',
    bgColor: 'bg-gray-600'
  },
  {
    id: 'active-lifestyle-gear',
    name: 'Active Lifestyle Gear',
    category: 'Fitness Essentials',
    image: '/home/1750126330116.webp',
    bgColor: 'bg-gray-900'
  },
  {
    id: 'style-meets-comfort',
    name: 'Style Meets Comfort',
    category: 'Trendy Apparel',
    image: '/home/1750126333491.webp',
    bgColor: 'bg-gray-500'
  },
  {
    id: 'elite-walker',
    name: 'Elite Walker Elite Walker',
    category: 'Sport Gear',
    image: '/home/1750126326881.webp',
    bgColor: 'bg-pink-400'
  },
]

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export function ContactUsPage() {
  const { t } = useI18n()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // 重置表单
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setIsSubmitting(false)
    
    alert('Message sent successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域 */}
      <div className="relative bg-gradient-to-r from-orange-200/50 to-orange-100/50 py-20 overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-600/20" />
          <div className="w-full h-full bg-gradient-to-r from-orange-100/80 to-orange-50/60" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Contact Us
            </motion.h1>
            
            {/* 面包屑导航 */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 text-sm text-gray-600"
            >
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Contact Us</span>
            </motion.nav>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-mainColorLight py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Get In Touch 标题 */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-1 bg-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We&apos;re here to help and answer any question you might have
              </p>
            </motion.div>
          </div>

          {/* 联系表单和信息区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
              </div>

              <div className="space-y-6">
                {/* 邮箱 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">EMAIL</p>
                    <p className="text-gray-900 font-medium">{contactInfo.email}</p>
                  </div>
                </div>

                {/* 电话 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">PHONE NUMBER</p>
                    <p className="text-gray-900 font-medium">{contactInfo.phone}</p>
                  </div>
                </div>

                {/* 地址 */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">ADDRESS</p>
                    <p className="text-gray-900 font-medium">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* 社交媒体 */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us:</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 联系表单 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Send Us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 姓名 */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* 邮箱和电话 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  />
                </div>

                {/* 消息 */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>

                {/* 提交按钮 */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  {!isSubmitting && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
        {/* 推荐产品区域 */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-1 bg-orange-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Recommended For You
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover our most popular products that match your style and needs
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {recommendedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      {/* 产品图片 */}
                      <div className="relative aspect-square overflow-hidden">
                        <div className={`absolute inset-0 ${product.bgColor} flex items-center justify-center`}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      </div>
                      
                      {/* 产品信息 */}
                      <div className="p-6 text-center">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm">{product.category}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* 查看所有产品按钮 */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href="/products"
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 group"
                >
                  VIEW ALL PRODUCTS
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
    </div>
  )
}