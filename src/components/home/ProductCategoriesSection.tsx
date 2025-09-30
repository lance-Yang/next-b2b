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
    <section className="py-16 sm:py-20 bg-brand-light">
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
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <Link href={category.href}>
                <div className={`product-category-card relative ${category.bgColor} rounded-3xl aspect-square overflow-hidden transform transition-all duration-500 ease-out group-hover:scale-105 will-change-transform`}>
                  {/* 图片背景层 - 添加缩放效果 */}
                  <div className="absolute w-full h-full top-0 left-0 inset-0 rounded-3xl overflow-hidden">
                    {/* 这里可以替换为真实图片，目前使用渐变背景 */}
                    <div 
                      className={`absolute inset-0 ${category.bgColor} transform transition-all duration-700 ease-out group-hover:scale-125 will-change-transform`}
                    />
                    
                    {/* 圆形扩散动画层 */}
                    <div className="absolute inset-0">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-black/20 transition-all duration-700 ease-out group-hover:w-[200%] group-hover:h-[200%] will-change-transform" />
                    </div>
                    
                    {/* 渐变遮罩层 */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/40 transition-opacity duration-500 ease-out" />
                  </div>
                  
                  {/* 产品图标/表情区域 */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-8xl opacity-80 transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-12 will-change-transform">
                      {category.image}
                    </div>
                  </div>
                  
                  {/* 标题文字覆盖在底部 */}
                  <div className="bg-gradient-to-b from-transparent via-black/10 to-black/50 text-white w-full text-[16px] text-center flex justify-center items-center font-semibold min-h-[60px] absolute left-1/2 bottom-0 -translate-x-1/2 z-10 flex-col px-4 transition-all duration-300 ease-out">
                    <h3 className="text-xl font-bold mb-1 transform transition-all duration-300 ease-out group-hover:text-orange-200 group-hover:translate-y-[-2px]">
                      {category.title}
                    </h3>
                    <p className="text-sm opacity-90 transform transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-[-1px]">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* hover 效果光晕 */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:bg-white/10 rounded-3xl backdrop-blur-[1px]" />
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
            className="inline-flex items-center rounded-full px-6 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors duration-300 group"
          >
            {t.ViewAllProducts || 'All Categories'}
            <svg
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}