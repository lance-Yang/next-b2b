'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react'
import {
  AnimatedContent,
  AnimatedButton
} from '@/components/ui/animations'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

interface ContactFormProps {
  contactInfo: {
    email: string
    phone: string
    address: string
  }
  socialLinks: Array<{
    name: string
    iconName: string
    href: string
    color: string
  }>
}

// 动态导入图标
const getIconComponent = (iconName: string) => {
  switch(iconName) {
    case 'Facebook': return Facebook;
    case 'Twitter': return Twitter;
    case 'Instagram': return Instagram;
    case 'Youtube': return Youtube;
    case 'LinkedIn': return Linkedin;
    case 'WhatsApp': return MessageCircle;
    default: return null;
  }
}

export default function ContactForm({ contactInfo, socialLinks }: ContactFormProps) {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* 联系信息 */}
      <AnimatedContent
        direction="left"
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
            {socialLinks.map((social) => {
              const IconComponent = getIconComponent(social.iconName)
              if (!IconComponent) return null
              
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </AnimatedContent>

      {/* 联系表单 */}
      <AnimatedContent
        direction="right"
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
          <AnimatedButton
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
            {!isSubmitting && (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </AnimatedButton>
        </form>
      </AnimatedContent>
    </div>
  )
}