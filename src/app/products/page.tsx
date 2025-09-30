import React from 'react'
import Link from 'next/link'
import ProductsStateHandler from '@/components/products/ProductsStateHandler'
import {
  AnimatedTitle,
  AnimatedNav,
} from '@/components/ui/animations'

// 类型定义
type Category = {
  id: string;
  label: string;
  active?: boolean;
}

type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  bgColor: string;
}

// 页面元数据
export const metadata = {
  title: 'Products | B2B Solutions',
  description: 'Explore our comprehensive range of high-quality products designed for various industries and applications.',
  keywords: 'products, b2b, business solutions, enterprise products',
}

// 产品分类
const categories: Category[] = [
  { id: 'all', label: 'All', active: true },
  { id: 'sport-gear', label: 'Sport Gear' },
  { id: 'outdoor-adventure', label: 'Outdoor Adventure' },
  { id: 'trendy-apparel', label: 'Trendy Apparel' },
  { id: 'fitness-essentials', label: 'Fitness Essentials' },
  { id: 'nature-gear', label: 'Nature Gear' },
]

// 产品数据
const products: Product[] = [
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

// 页面样式配置
const containerStyles = "container mx-auto px-4 sm:px-6 lg:px-8"

export default function ProductsPage() {
  // 助手组件
  const Hero = () => (
    <div className="bg-orange-100 py-16">
      <div className={containerStyles}>
        <div className="text-center">
          <AnimatedTitle className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Products
          </AnimatedTitle>

          {/* 面包屑导航 */}
          <AnimatedNav className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Products</span>
          </AnimatedNav>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域带面包屑 */}
      <Hero />

      <div className={`${containerStyles} py-12`}>
        <ProductsStateHandler
          categories={categories}
          products={products}
          itemsPerPage={8}
        />
      </div>
    </div>
  )
}