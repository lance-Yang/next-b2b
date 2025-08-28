"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const popularProducts = [
  {
    id: 1,
    title: 'Outdoor Adventure Essentials',
    image: '/home/1750127210265.jpeg', // 使用现有图片
    bgColor: 'bg-gray-700',
    href: '/products/outdoor-adventure',
  },
  {
    id: 2,
    title: 'Hydration Nation',
    image: '/home/1750126326881.webp', // 使用现有图片
    bgColor: 'bg-green-500',
    href: '/products/hydration',
  },
  {
    id: 3,
    title: 'Active Lifestyle Gear',
    image: '/home/1750126330116.webp', // 使用现有图片
    bgColor: 'bg-black',
    href: '/products/lifestyle',
  },
  {
    id: 4,
    title: 'Modern Pathway',
    image: '/home/1750126333491.webp', // 使用现有图片
    bgColor: 'bg-orange-400',
    href: '/products/modern',
  },
  {
    id: 5,
    title: 'Style Meets Comfort',
    image: '/home/1750127210265.jpeg',
    bgColor: 'bg-gray-400',
    href: '/products/style-comfort',
  },
  {
    id: 6,
    title: 'Elite Walker Elite Walker',
    image: '/home/1750126326881.webp',
    bgColor: 'bg-pink-300',
    href: '/products/elite-walker',
  },
  {
    id: 7,
    title: 'Pure Motion',
    image: '/home/1750126330116.webp',
    bgColor: 'bg-green-600',
    href: '/products/pure-motion',
  },
  {
    id: 8,
    title: 'Street Spirit',
    image: '/home/1750126333491.webp',
    bgColor: 'bg-gray-200',
    href: '/products/street-spirit',
  },
]

export function PopularProductsSection() {
  const { t } = useI18n()
  
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
          >
            POPULAR PRODUCTS
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
          {popularProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={product.href}>
                <div className="relative rounded-2xl aspect-square overflow-hidden">
                  {/* 简化的图片容器 */}
                  <div className="absolute w-full h-full top-0 left-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                  
                  {/* 标题文字覆盖在底部 */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-lg font-semibold text-center">
                      {product.title}
                    </h3>
                  </div>
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
            {t.Products || 'All Products'}
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