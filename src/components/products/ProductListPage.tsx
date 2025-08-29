'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

// 产品分类
const categories = [
  { id: 'all', label: 'All', active: true },
  { id: 'sport-gear', label: 'Sport Gear' },
  { id: 'outdoor-adventure', label: 'Outdoor Adventure' },
  { id: 'trendy-apparel', label: 'Trendy Apparel' },
  { id: 'fitness-essentials', label: 'Fitness Essentials' },
  { id: 'nature-gear', label: 'Nature Gear' },
]

// 产品数据
const products = [
  {
    id: 'outdoor-adventure-essentials',
    name: 'Outdoor Adventure Essentials',
    category: 'outdoor-adventure',
    image: '/home/1750126326881.webp',
    bgColor: 'bg-slate-600'
  },
  {
    id: 'hydration-nation',
    name: 'Hydration Nation',
    category: 'nature-gear',
    image: '/home/1750126330116.webp',
    bgColor: 'bg-green-500'
  },
  {
    id: 'active-lifestyle-gear',
    name: 'Active Lifestyle Gear',
    category: 'fitness-essentials',
    image: '/home/1750126333491.webp',
    bgColor: 'bg-gray-800'
  },
  {
    id: 'modern-pathway',
    name: 'Modern Pathway',
    category: 'trendy-apparel',
    image: '/home/1750126326881.webp',
    bgColor: 'bg-orange-400'
  },
  {
    id: 'ultimate-sports-gear',
    name: 'Ultimate Sports Gear',
    category: 'sport-gear',
    image: '/home/1750126330116.webp',
    bgColor: 'bg-blue-600'
  },
  {
    id: 'cool-outdoor-attire',
    name: 'Cool Outdoor Attire',
    category: 'outdoor-adventure',
    image: '/home/1750126333491.webp',
    bgColor: 'bg-purple-500'
  },
  {
    id: 'trendy-fashion-hub',
    name: 'Trendy Fashion Hub',
    category: 'trendy-apparel',
    image: '/home/1750126326881.webp',
    bgColor: 'bg-gray-700'
  },
  {
    id: 'style-meets-comfort',
    name: 'Style Meets Comfort',
    category: 'fitness-essentials',
    image: '/home/1750126330116.webp',
    bgColor: 'bg-gray-500'
  },
  {
    id: 'elite-walker',
    name: 'Elite Walker',
    category: 'sport-gear',
    image: '/home/1750126333491.webp',
    bgColor: 'bg-pink-400'
  },
  {
    id: 'dynamic-step',
    name: 'Dynamic Step',
    category: 'outdoor-adventure',
    image: '/home/1750126326881.webp',
    bgColor: 'bg-gray-900'
  },
  {
    id: 'pure-motion',
    name: 'Pure Motion',
    category: 'nature-gear',
    image: '/home/1750126330116.webp',
    bgColor: 'bg-green-600'
  },
  {
    id: 'street-spirit',
    name: 'Street Spirit',
    category: 'trendy-apparel',
    image: '/home/1750126333491.webp',
    bgColor: 'bg-gray-300'
  },
]

export function ProductListPage() {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // 根据分类过滤产品
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  // 分页计算
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域带面包屑 */}
      <div className="bg-orange-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Products
            </h1>
            
            {/* 面包屑导航 */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Products</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 分类标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setCurrentPage(1) // 重置页码
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
                  
                  {/* 产品名称 */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 text-center">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 分页 */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {/* 上一页 */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              ‹
            </button>

            {/* 页码 */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            {/* 下一页 */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  )
}