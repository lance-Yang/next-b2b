"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules'

// 轮播图数据
const slides = [
  {
    id: 1,
    title: 'Professional\nBusiness Solutions\nfor Modern Enterprises',
    subtitle: 'Elevate your business with cutting-edge technology and innovative strategies that drive growth and success',
    primaryButton: 'Start Your Journey',
    secondaryButton: 'Learn More',
    background: '/home/1750126326881.webp',
  },
  {
    id: 2,
    title: 'Digital Transformation\nMade Simple\nand Effective',
    subtitle: 'Transform your operations with our comprehensive digital solutions designed for the future of business',
    primaryButton: 'Get Started Today',
    secondaryButton: 'View Solutions',
    background: '/home/1750126330116.webp',
  },
  {
    id: 3,
    title: 'Excellence in\nCustomer Experience\nand Service Quality',
    subtitle: 'Deliver exceptional customer experiences with our world-class support and innovative service solutions',
    primaryButton: 'Contact Our Team',
    secondaryButton: 'Explore Services',
    background: '/home/1750126333491.webp',
  },
]

export function HeroSection() {
  const { t } = useI18n()
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef(null)
  
  // 预加载所有图片
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image()
      img.src = slide.background
    })
  }, [])
  
  // 处理幻灯片变化
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex)
  }
  
  const currentSlideData = slides[currentSlide]
  
  return (
    <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
      <Swiper
        ref={swiperRef}
        className="w-full h-full hero-swiper"
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".hero-swiper-next",
          prevEl: ".hero-swiper-prev",
        }}
        pagination={{
          el: ".hero-swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !bg-white/50 !w-3 !h-3 hover:!bg-white/75 transition-all duration-300"></span>`;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={slides.length > 1}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* 背景图片 */}
              <Image
                src={slide.background}
                alt={slide.title.replace(/\n/g, ' ')}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              
              {/* 覆盖层 */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* 中心内容 */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-shadow-lg drop-shadow-lg">
                      {slide.title.split('\n').map((line, lineIndex) => (
                        <span key={lineIndex} className="block">
                          {line}
                        </span>
                      ))}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Link
                          href="/products"
                          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 text-lg cursor-pointer"
                        >
                          {t.GetAFreeQuote || slide.primaryButton}
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Link
                          href="/about"
                          className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all text-lg cursor-pointer"
                        >
                          {t.ViewMore || slide.secondaryButton}
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* 自定义导航按钮 */}
      {slides.length > 1 && (
        <>
          <motion.button 
            className="hero-swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-200 cursor-pointer border-none outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </motion.button>
          <motion.button 
            className="hero-swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-200 cursor-pointer border-none outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </motion.button>
        </>
      )}
      
      {/* 自定义分页指示器 */}
      <div className="hero-swiper-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3"></div>
    </section>
  )
}