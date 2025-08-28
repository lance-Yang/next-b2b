"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

// 轮播图数据
const slides = [
  {
    id: 1,
    title: 'Discover Smart\nSolutions to Boost Your\nProductivity.',
    subtitle: 'Transform your business with innovative technology solutions',
    primaryButton: 'Get A Free Quote',
    secondaryButton: 'Discover More',
    background: 'linear-gradient(135deg, #06B6D4 0%, #F59E0B 50%, #EC4899 100%)',
  },
  {
    id: 2,
    title: 'Innovative Products\nfor Modern\nBusinesses.',
    subtitle: 'Streamline your operations with cutting-edge tools and services',
    primaryButton: 'View Products',
    secondaryButton: 'Learn More',
    background: 'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%)',
  },
  {
    id: 3,
    title: 'Excellence in\nService and\nSupport.',
    subtitle: 'Experience world-class customer service and technical support',
    primaryButton: 'Contact Us',
    secondaryButton: 'Our Services',
    background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 50%, #EC4899 100%)',
  },
]

export function HeroSection() {
  const { t } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  
  // 自动轮播
  useEffect(() => {
    if (!isAutoPlay) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // 5秒切换一次
    
    return () => clearInterval(timer)
  }, [isAutoPlay])
  
  // 用户手动操作后重新启动自动轮播
  const resetAutoPlay = () => {
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000) // 10秒后重新启动自动轮播
  }
  
  // 上一张
  const prevSlide = () => {
    console.log('点击上一张，当前幻灯片:', currentSlide)
    resetAutoPlay()
    setCurrentSlide((prev) => {
      const newSlide = (prev - 1 + slides.length) % slides.length
      console.log('切换到幻灯片:', newSlide)
      return newSlide
    })
  }
  
  // 下一张
  const nextSlide = () => {
    console.log('点击下一张，当前幻灯片:', currentSlide)
    resetAutoPlay()
    setCurrentSlide((prev) => {
      const newSlide = (prev + 1) % slides.length
      console.log('切换到幻灯片:', newSlide)
      return newSlide
    })
  }
  
  // 跳转到指定幻灯片
  const goToSlide = (index: number) => {
    console.log('点击指示器，跳转到幻灯片:', index)
    resetAutoPlay()
    setCurrentSlide(index)
  }
  
  const currentSlideData = slides[currentSlide]
  
  return (
    <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
      {/* 背景图片 */}
      <motion.div 
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          background: currentSlideData.background
        }}
      />
      
      {/* 覆盖层 */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* 左右箭头导航 */}
      <button 
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          prevSlide()
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:scale-110 cursor-pointer border-none outline-none"
        aria-label="Previous slide"
        type="button"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          nextSlide()
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:scale-110 cursor-pointer border-none outline-none"
        aria-label="Next slide"
        type="button"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      {/* 中心内容 */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {currentSlideData.title.split('\n').map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {currentSlideData.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/products"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 text-lg cursor-pointer"
                >
                  {t.GetAFreeQuote || currentSlideData.primaryButton}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all text-lg cursor-pointer"
                >
                  {t.ViewMore || currentSlideData.secondaryButton}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* 底部指示器 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              goToSlide(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer border-none outline-none ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  )
}