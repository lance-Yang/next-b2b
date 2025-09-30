'use client'

import { useState } from 'react'
import {
  AnimatedCategoryButton,
  AnimatedPaginationButton,
} from '@/components/ui/animations'
import ProductsList from './ProductsList'

interface ProductsStateHandlerProps {
  categories: Array<{ id: string; label: string; active?: boolean }>
  products: Array<{
    id: string
    name: string
    category: string
    image: string
    bgColor: string
  }>
  itemsPerPage?: number
}

export default function ProductsStateHandler({
  categories,
  products,
  itemsPerPage = 8,
}: ProductsStateHandlerProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  // 根据分类过滤产品
  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory)

  // 分页计算
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setCurrentPage(1) // 重置页码
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      {/* 分类标签 */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <AnimatedCategoryButton
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            active={activeCategory === category.id}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category.label}
          </AnimatedCategoryButton>
        ))}
      </div>

      {/* 产品列表 */}
      <ProductsList products={currentProducts} />

      {/* 分页 */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          {/* 上一页 */}
          <AnimatedPaginationButton
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            ‹
          </AnimatedPaginationButton>

          {/* 页码 */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <AnimatedPaginationButton
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                currentPage === page
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {page}
            </AnimatedPaginationButton>
          ))}

          {/* 下一页 */}
          <AnimatedPaginationButton
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            ›
          </AnimatedPaginationButton>
        </div>
      )}
    </>
  )
}