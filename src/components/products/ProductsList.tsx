'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedProductCard } from './ProductsAnimations'

interface ProductsListProps {
  products: Array<{
    id: string
    name: string
    category: string
    image: string
    bgColor: string
  }>
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {products.map((product, index) => (
        <AnimatedProductCard
          key={product.id}
          index={index}
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
        </AnimatedProductCard>
      ))}
    </div>
  )
}