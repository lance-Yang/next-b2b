'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Users, 
  Globe, 
  Shield, 
  Award, 
  Truck, 
  Star,
  ArrowRight
} from 'lucide-react'

// 统计数据
const stats = [
  { number: '1000+', label: 'Happy Customers' },
  { number: '80+', label: 'Countries Served' },
  { number: '18+', label: 'Years Experience' }
]

// 优势数据
const advantages = [
  {
    icon: Users,
    title: 'Rich Experience',
    description: 'Founded over 18 years, we&apos;ve accumulated professional experience and formed a reliable supply management team with diverse expertise and high quality service.'
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Products reach more than 80 countries and regions worldwide. Each client is managed by our experienced sales personnel and logistics experts.'
  },
  {
    icon: Shield,
    title: 'Cooperation Partners',
    description: 'Authorized dealer cooperation with many renowned brands. We ensure top quality products by maintaining healthy and strong brand partnerships.'
  },
  {
    icon: Award,
    title: 'Quality Certification',
    description: 'Owner of multiple authorizations and certifications. Each of our products undergoes stringent quality audit and standardized product testing during production.'
  },
  {
    icon: Truck,
    title: 'Competitive Pricing',
    description: 'We leverage our infrastructure and efficient logistics to provide competitive pricing and fast deliveries to meet various customer demands throughout the world.'
  },
  {
    icon: Star,
    title: 'One-Stop Service',
    description: 'Providing a perfect combination of advanced purchasing, professional sales teams and comprehensive professional support to satisfy your every business need.'
  }
]

// 工厂图片
const factoryImages = [
  '/home/1750126326881.webp',
  '/home/1750126330116.webp',
  '/home/1750126333491.webp',
  '/home/1750126326881.webp',
  '/home/1750126330116.webp',
  '/home/1750126333491.webp',
  '/home/1750126326881.webp',
  '/home/1750126330116.webp'
]

export function AboutUsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域 - 深蓝色背景，简洁设计 */}
      <div className="relative bg-blue-900 py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About Us
            </motion.h1>
            
            {/* 面包屑导航 */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-2 text-sm text-blue-200"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white font-medium">About Us</span>
            </motion.nav>
          </div>
        </div>
      </div>

      {/* Who We Are 区域 */}
      <section className="py-16 bg-mainColorLight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 文字内容 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Who We Are
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
                <p>
                  Founded in 2018, Blueheart is a leading e-commerce platform dedicated to 
                  delivering a seamless and enjoyable shopping experience to customers 
                  worldwide. Our mission is to connect people with the products they love, 
                  offering a curated selection of top-quality items across a variety of categories, 
                  including electronics, fashion, home goods, and more.
                </p>
                <p>
                  With a focus on innovation, reliability, and customer satisfaction, we have 
                  rapidly grown our user base and built strong relationships with trusted 
                  suppliers and brands. Our user-friendly website and mobile app are designed 
                  to make shopping fast, easy, and secure for everyone.
                </p>
                <p>
                  We utilize advanced technology to ensure safe transactions, prompt delivery, 
                  and responsive customer service. We utilize advanced technology to ensure 
                  safe transactions, prompt delivery, and responsive customer service.
                </p>
              </div>
            </motion.div>

            {/* 图片 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg max-w-lg mx-auto lg:mx-0">
                <Image
                  src="/home/1750126326881.webp"
                  alt="Team meeting and collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission 区域 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* 图片和统计 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-4 max-w-md mx-auto lg:mx-0">
                <Image
                  src="/home/1750126330116.webp"
                  alt="Our mission and global reach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              
              {/* 统计数据 */}
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-mainColorLight rounded-lg p-3 text-center"
                  >
                    <div className="text-xl md:text-2xl font-bold text-orange-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 文字内容 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
                <p>
                  Our mission is to revolutionize the e-commerce landscape by creating 
                  meaningful connections between customers and the products they desire. 
                  We strive to make online shopping accessible, enjoyable, and secure for 
                  everyone, regardless of their location or background.
                </p>
                <p>
                  We are committed to fostering innovation in retail technology while 
                  maintaining the highest standards of quality and customer service. 
                  Our platform serves as a bridge between global suppliers and local 
                  consumers, creating value for all stakeholders in the process.
                </p>
                <p>
                  Through continuous improvement and customer-centric approach, we aim to 
                  build lasting relationships with our users and partners, contributing 
                  to the growth of digital commerce worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Advantages 区域 */}
      <section className="py-16 bg-mainColorLight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Advantages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                Discover how clients choose us as their trusted business partner
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <advantage.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Factory 区域 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Factory
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {factoryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full bg-gray-200 relative">
                  <Image
                    src={image}
                    alt={`Factory facility ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us 区域 */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/home/1750126333491.webp"
            alt="Contact background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
                Send us a message to discuss your needs.
              </p>
              <p className="text-gray-400 mb-8 text-sm">
                I will reply to you within 24 hours.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 group text-sm"
              >
                Get A Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}