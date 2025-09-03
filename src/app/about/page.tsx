import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Users,
  Globe,
  Shield,
  Award,
  Truck,
  Star,
  ArrowRight
} from 'lucide-react'
import {
  AnimatedTitle,
  AnimatedNav,
  AnimatedContent,
  AnimatedStatCard,
  AnimatedAdvantageCard,
  AnimatedFactoryImage,
  AnimatedContactSection
} from '@/components/about/AboutAnimations'

export const metadata = {
  title: 'About Us | Our Story & Mission',
  description: 'Learn about our company story, mission, values, and the passionate team dedicated to transforming business operations through innovative solutions.',
  keywords: 'about us, company story, mission, values, team, leadership',
}


// 统计数据
const stats = [
  { number: '1000+', label: 'Happy Customers' },
  { number: '80+', label: 'Countries Served' },
  { number: '18+', label: 'Years Experience' }
]

// 优势数据
const advantages = [
  {
    icon: Users,
    title: 'Rich Experience',
    description: 'Founded over 18 years, we&apos;ve accumulated professional experience and formed a reliable supply management team with diverse expertise and high quality service.'
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Products reach more than 80 countries and regions worldwide. Each client is managed by our experienced sales personnel and logistics experts.'
  },
  {
    icon: Shield,
    title: 'Cooperation Partners',
    description: 'Authorized dealer cooperation with many renowned brands. We ensure top quality products by maintaining healthy and strong brand partnerships.'
  },
  {
    icon: Award,
    title: 'Quality Certification',
    description: 'Owner of multiple authorizations and certifications. Each of our products undergoes stringent quality audit and standardized product testing during production.'
  },
  {
    icon: Truck,
    title: 'Competitive Pricing',
    description: 'We leverage our infrastructure and efficient logistics to provide competitive pricing and fast deliveries to meet various customer demands throughout the world.'
  },
  {
    icon: Star,
    title: 'One-Stop Service',
    description: 'Providing a perfect combination of advanced purchasing, professional sales teams and comprehensive professional support to satisfy your every business need.'
  }
]

// 工厂图片
const factoryImages = [
  '/home/1750126326881.webp',
  '/home/1750126330116.webp',
  '/home/1750126333491.webp',
  '/home/1750126326881.webp',
  '/home/1750126330116.webp',
  '/home/1750126333491.webp',
  '/home/1750126326881.webp',
  '/home/1750126330116.webp'
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域 - 深蓝色背景，简洁设计 */}
      <div className="relative bg-blue-900 py-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <AnimatedTitle className="text-4xl md:text-5xl font-bold mb-4">
              About Us
            </AnimatedTitle>
            
            {/* 面包屑导航 */}
            <AnimatedNav className="flex items-center justify-center space-x-2 text-sm text-blue-200">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white font-medium">About Us</span>
            </AnimatedNav>
          </div>
        </div>
      </div>

      {/* Who We Are 区域 */}
      <section className="bg-mainColorLight py-8 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-8">
          {/* 文字内容 */}
          <AnimatedContent
            direction="left"
            className="flex flex-col p-0"
          >
            {/* 装饰线 */}
            <div className="h-1 w-28 bg-gradient-to-r from-orange-500 to-orange-200 mb-6"></div>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            
            <p className="flex-1 text-gray-700 mb-4 overflow-hidden relative">
              Founded in 2018, Blueheart is a leading e-commerce platform
              dedicated to delivering a seamless and enjoyable shopping
              experience to customers worldwide. Our mission is to connect
              people with the products they love, offering a curated
              selection of top-quality items across a variety of
              categories, including electronics, fashion, home goods, and
              more. <br /><br />
              With a focus on innovation, reliability, and customer
              satisfaction, we have rapidly grown our user base and built
              strong relationships with trusted suppliers and brands. Our
              user-friendly website and mobile app are designed to make
              shopping fast, easy, and secure for everyone. We utilize
              advanced technology to ensure safe transactions, prompt
              delivery, and responsive customer service. We utilize
              advanced technology to ensure safe transactions, prompt
              delivery, and responsive customer service.
            </p>
          </AnimatedContent>

          {/* 图片 */}
          <AnimatedContent
            direction="right"
          >
            <div className="relative h-60 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/home/1750126326881.webp"
                alt="About Us"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Our Mission 区域 */}
      <section className="bg-white py-10 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-8">
          {/* 图片和统计 - 左侧在大屏幕上，移动端显示在下方 */}
          <AnimatedContent
            direction="left"
            className="flex flex-col order-2 lg:order-1"
          >
            <div className="relative h-60 lg:h-96 bg-gray-100 rounded-lg overflow-hidden mb-8">
              <Image
                src="/home/1750126330116.webp"
                alt="Our Global Mission"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* 统计数据 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-auto">
              {stats.map((stat, index) => (
                <AnimatedStatCard
                  key={index}
                  index={index}
                  className="bg-mainColorLight p-6 rounded-lg"
                >
                  <dd className="text-4xl font-semibold tracking-tight text-mainColorNormal mb-2">
                    {stat.number}
                  </dd>
                  <dt className="text-sm text-gray-600">{stat.label}</dt>
                </AnimatedStatCard>
              ))}
            </div>
          </AnimatedContent>

          {/* 文字内容 - 右侧在大屏幕上，移动端显示在上方 */}
          <AnimatedContent
            direction="right"
            className="flex flex-col p-0 order-1 lg:order-2"
          >
            {/* 装饰线 */}
            <div className="h-1 w-28 bg-gradient-to-r from-orange-500 to-orange-200 mb-6"></div>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            
            <p className="text-gray-700">
              Our mission is to revolutionize the way people shop by
              creating an accessible, trustworthy, and enjoyable online
              marketplace. We are dedicated to empowering customers with a
              wide variety of high-quality products at competitive prices,
              while ensuring unparalleled convenience and service every
              step of the way. <br /><br />
              We believe shopping should be effortless and rewarding,
              which is why we continually invest in technology, logistics,
              and customer support to provide a seamless experience. Our
              platform is designed with the customer in mind, making it
              easy to explore, compare, and purchase products from the
              comfort of home or on-the-go. purchase products from the
              comfort of home or on-the-go. Our platform is designed with
              the customer.
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* Our Advantages 区域 */}
      <section className="py-16 bg-mainColorLight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedContent
              direction="left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Advantages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                Discover how clients choose us as their trusted business partner for innovation and growth
              </p>
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <AnimatedAdvantageCard
                key={index}
                index={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <advantage.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </AnimatedAdvantageCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Factory 区域 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedContent
              direction="left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Factory
              </h2>
            </AnimatedContent>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {factoryImages.map((image, index) => (
              <AnimatedFactoryImage
                key={index}
                index={index}
                className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full bg-gray-200 relative">
                  <Image
                    src={image}
                    alt={`Factory facility ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </AnimatedFactoryImage>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us 区域 */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/home/1750126333491.webp"
            alt="Contact background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <AnimatedContactSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
                Send us a message to discuss your needs.
              </p>
              <p className="text-gray-400 mb-8 text-sm">
                I will reply to you within 24 hours.
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300 group text-sm"
              >
                Get A Quote
              </Link>
            </AnimatedContactSection>
          </div>
        </div>
      </section>
    </div>
  )
}