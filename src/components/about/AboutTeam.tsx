'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Former VP at Microsoft with 15 years of enterprise software experience. Passionate about building products that make a real difference.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Full-stack architect who has built scalable systems for companies like Google and Amazon. Loves solving complex technical challenges.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Product',
    bio: 'Design-thinking expert with a track record of launching successful B2B products. Former product lead at Slack and Salesforce.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    bio: 'Infrastructure specialist who has scaled platforms serving millions of users. Previously led engineering teams at Uber and Airbnb.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Sales',
    bio: 'Revenue growth expert with 12 years of B2B sales experience. Specializes in enterprise accounts and strategic partnerships.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'James Wilson',
    role: 'Head of Customer Success',
    bio: 'Customer advocate with expertise in onboarding and retention. Previously built customer success programs at HubSpot and Zendesk.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
]

export default function AboutTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of industry veterans brings together decades of experience from leading technology companies to drive innovation and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Growing Team
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                View Open Positions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}