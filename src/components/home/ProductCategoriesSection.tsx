"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const categories = [
  {
    title: 'Sport Drink',
    description: 'Refreshing beverages for active lifestyle',
    image: '🥤',
    bgColor: 'bg-yellow-400',
    href: '/products/sport-drinks',
  },
  {
    title: 'Sport Fitness',
    description: 'Professional fitness equipment and gear',
    image: '🏋️',
    bgColor: 'bg-gray-400',
    href: '/products/fitness',
  },
  {
    title: 'Sport Outdoor',
    description: 'Camping and outdoor adventure essentials',
    image: '⛺',
    bgColor: 'bg-orange-600',
    href: '/products/outdoor',
  },
  {
    title: 'Sport Wearables',
    description: 'Smart devices for fitness tracking',
    image: '⌚',
    bgColor: 'bg-gray-800',
    href: '/products/wearables',
  },
]

export function ProductCategoriesSection() {
  const { t } = useI18n()
  
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            PRODUCT CATEGORIES
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 mx-auto w-20 h-1 bg-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={category.href}>
                <div className={`relative ${category.bgColor} rounded-2xl aspect-square overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  {/* 背景渐变效果 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />
                  
                  {/* 产品图片/图标区域 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                      {category.image}
                    </div>
                  </div>
                  
                  {/* 标题文字覆盖在底部 */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-200 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* hover 效果光晕 */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            {t.ViewAllProducts || 'View All Products'}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}