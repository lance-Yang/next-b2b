"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const statsData = [
  {
    number: '1000+',
    label: 'Global Customers',
    bgColor: 'bg-orange-100',
  },
  {
    number: '80+',
    label: 'Countries Served', 
    bgColor: 'bg-orange-200',
  },
  {
    number: '18+',
    label: 'Years Experience',
    bgColor: 'bg-orange-300',
  },
  {
    number: '75+',
    label: 'Products',
    bgColor: 'bg-orange-200',
  },
]

export function AboutUsSection() {
  const { t } = useI18n()
  
  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            ABOUT US
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 mx-auto w-20 h-1 bg-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 左侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/home/1750126326881.webp" // 使用现有图片
                alt="About Us - Company Team"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </motion.div>

          {/* 右侧内容 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Blueheart Technology of Zhejiang Ltd.
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
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
                to make shopping fast, easy, and secure for everyone. We utilize advanced 
                technology to ensure safe transactions, prompt delivery, and responsive 
                customer service.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center rounded-full px-6 py-3 bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors duration-300 group"
              >
                View More
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
          </motion.div>
        </div>

        {/* 统计数据区域 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-mainColorLight rounded-2xl p-6 text-center`}
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}