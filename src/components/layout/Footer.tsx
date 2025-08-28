'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'


const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ],
  productCategories: [
    { name: 'Sport Gear', href: '/products/sport-gear' },
    { name: 'Outdoor Adventure', href: '/products/outdoor' },
    { name: 'Trendy Apparel', href: '/products/apparel' },
    { name: 'Fitness Essentials', href: '/products/fitness' },
    { name: 'Nature Gear', href: '/products/nature' },
  ],
  contact: {
    email: 'kefu308@gmail.com',
    phone: '+86-17801460534',
    address: 'No. 2875 Beichen West Road, Shaoxing, Zhejiang, China'
  }
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'WhatsApp', icon: MessageCircle, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-orange-100 text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Product Categories</h3>
              <ul className="space-y-3">
                {footerLinks.productCategories.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-orange-600 transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <a 
                    href={`mailto:${footerLinks.contact.email}`} 
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                  >
                    {footerLinks.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <a 
                    href={`tel:${footerLinks.contact.phone}`} 
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                  >
                    {footerLinks.contact.phone}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                  <span className="text-gray-600">
                    {footerLinks.contact.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-orange-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              <p>Copyright © 2025 Blueheart Technology of Zhejiang Ltd.</p>
              <p className="mt-1">Powered by FK</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-orange-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}