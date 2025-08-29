'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  ChevronLeft,
  ChevronRight,
  Check,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react'

interface Product {
  id: string
  name: string
  price: string
  category: string
  images: string[]
  description: string
  specifications: Record<string, string>
  features: string[]
  relatedProducts: {
    id: string
    name: string
    category: string
    image: string
    price: string
  }[]
}

interface ProductDetailPageProps {
  product: Product
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('description')
  const [isFavorite, setIsFavorite] = useState(false)

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-orange-600 transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden group">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              
              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedImageIndex ? 'bg-orange-500 w-6' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === selectedImageIndex ? 'border-orange-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 16vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-orange-600 font-medium mb-2">
                Category: {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.8) 124 reviews</span>
              </div>

              <div className="text-3xl font-bold text-orange-600 mb-6">
                {product.price}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-full font-semibold flex items-center justify-center space-x-2 transition-colors duration-300"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>GET A FREE QUOTE</span>
              </motion.button>

              <div className="flex space-x-3">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex-1 border-2 py-3 px-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isFavorite
                      ? 'border-red-500 text-red-500 bg-red-50'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                  <span>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
                </button>
                
                <button className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 py-3 px-4 rounded-full transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Key Features:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-xs text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-xs text-gray-600">2 Year Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-xs text-gray-600">30 Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Additional Information' },
                { id: 'reviews', label: 'Reviews' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="mb-6">{product.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Eco-friendly Materials and Recyclability</h4>
                    <p className="text-sm">
                      Sustainability is a key focus of our product line. Each water bottle is crafted using 100% recyclable materials, from the stainless steel body to the food-grade silicone seal used for its threading features.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Safe, Healthy, and Long-lasting</h4>
                    <p className="text-sm">
                      EcoFlow Water Bottle are specially tested to ensure safety for daily use. The interior does not react fiercely to acidics, so every refill is as pure as the first.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Product Specifications</h3>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div
                      key={key}
                      className={`flex py-3 px-4 ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <div className="w-1/3 font-medium text-gray-900">{key}:</div>
                      <div className="w-2/3 text-gray-700">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>
                <div className="space-y-6">
                  {[
                    {
                      name: 'Sarah Johnson',
                      rating: 5,
                      comment: 'Excellent quality and very comfortable. Highly recommend for outdoor activities.',
                      date: '2 weeks ago'
                    },
                    {
                      name: 'Mike Chen',
                      rating: 4,
                      comment: 'Great value for money. The design is both functional and stylish.',
                      date: '1 month ago'
                    }
                  ].map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 font-semibold">
                              {review.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{review.name}</p>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-orange-600 mb-1">{relatedProduct.category}</p>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {relatedProduct.name}
                  </h4>
                  <p className="text-lg font-bold text-orange-600">{relatedProduct.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}