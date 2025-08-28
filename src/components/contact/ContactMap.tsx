'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Mail, 
  Clock, 
  Car,
  Train,
  Plane,
  ExternalLink,
  Copy,
  CheckCircle
} from 'lucide-react'

const offices = [
  {
    id: 'headquarters',
    title: 'San Francisco Headquarters',
    address: '123 Innovation Drive, San Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'hello@company.com',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    directions: {
      car: '15 min from SFO Airport via US-101 N',
      transit: 'Muni Metro: Montgomery St Station (2 blocks)',
      parking: 'Valet parking available in building'
    },
    mapUrl: 'https://maps.google.com/?q=37.7749,-122.4194',
    isMain: true
  },
  {
    id: 'newyork',
    title: 'New York Office',
    address: '456 Business Boulevard, New York, NY 10001',
    phone: '+1 (555) 987-6543',
    email: 'ny@company.com',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    directions: {
      car: '45 min from JFK Airport via I-495 W',
      transit: 'Subway: 34th St-Herald Sq (1 block)',
      parking: 'Underground garage available'
    },
    mapUrl: 'https://maps.google.com/?q=40.7128,-74.0060',
    isMain: false
  },
  {
    id: 'london',
    title: 'London Office',
    address: '789 Tech Square, London EC2A 4BX, UK',
    phone: '+44 20 7946 0958',
    email: 'uk@company.com',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    directions: {
      car: '1 hour from Heathrow via M4',
      transit: 'Tube: Liverpool Street Station (5 min walk)',
      parking: 'Limited street parking, public car parks nearby'
    },
    mapUrl: 'https://maps.google.com/?q=51.5074,-0.1278',
    isMain: false
  }
]

export default function ContactMap() {
  const [selectedOffice, setSelectedOffice] = useState(offices[0])
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedAddress(id)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy address:', err)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Find Us Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our offices around the globe. We&apos;re always happy to meet in person 
              and discuss how we can help your business grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Office Selector */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Locations
              </h3>
              
              <div className="space-y-4">
                {offices.map((office) => (
                  <motion.button
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedOffice.id === office.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`w-3 h-3 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        office.isMain ? 'bg-blue-600' : 'bg-gray-400'
                      }`} />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {office.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {office.address}
                        </p>
                        {office.isMain && (
                          <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            Headquarters
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Map and Office Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Interactive Map Placeholder */}
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-6 relative">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                  {/* Map Placeholder */}
                  <div className="absolute inset-0 bg-gray-200 opacity-20"></div>
                  <div className="text-center z-10">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {selectedOffice.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Interactive Map Coming Soon
                    </p>
                    <a
                      href={selectedOffice.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </a>
                  </div>
                  
                  {/* Coordinates Display */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-700">
                    {selectedOffice.coordinates.lat.toFixed(4)}, {selectedOffice.coordinates.lng.toFixed(4)}
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedOffice.title}
                    </h4>
                    {selectedOffice.isMain && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        Main Office
                      </span>
                    )}
                  </div>
                  <Navigation className="w-6 h-6 text-gray-400" />
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-700 mb-2">{selectedOffice.address}</p>
                        <button
                          onClick={() => copyToClipboard(selectedOffice.address, selectedOffice.id)}
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        >
                          {copiedAddress === selectedOffice.id ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-1" />
                              Copy Address
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <a
                        href={`tel:${selectedOffice.phone.replace(/\s/g, '')}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >
                        {selectedOffice.phone}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                      <a
                        href={`mailto:${selectedOffice.email}`}
                        className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >
                        {selectedOffice.email}
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium mb-1">Business Hours</p>
                        <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-gray-600">Weekends: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Directions */}
                <div className="border-t border-gray-200 pt-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">
                    How to Get Here
                  </h5>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Car className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-900">By Car</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {selectedOffice.directions.car}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Train className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-900">Public Transit</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {selectedOffice.directions.transit}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <MapPin className="w-5 h-5 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-900">Parking</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {selectedOffice.directions.parking}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={selectedOffice.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                    
                    <a
                      href={`tel:${selectedOffice.phone.replace(/\s/g, '')}`}
                      className="flex-1 border border-gray-300 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Office
                    </a>
                    
                    <a
                      href={`mailto:${selectedOffice.email}`}
                      className="flex-1 border border-gray-300 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-blue-50 rounded-2xl p-8 text-center"
          >
            <Plane className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Visiting From Abroad?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We welcome international visitors! Our team can help coordinate your visit, 
              including accommodation recommendations and local transportation guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:visits@company.com"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Plan Your Visit
              </a>
              <a
                href="/visitor-guide"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visitor Guide
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}