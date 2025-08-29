import { ContactUsPage } from '@/components/contact/ContactUsPage'

export const metadata = {
  title: 'Contact Us | Get in Touch with Our Team',
  description: 'Contact our expert team for business solutions, support, or partnership opportunities. Multiple ways to reach us including phone, email, and office visits.',
  keywords: 'contact us, business support, customer service, partnership, office location, get in touch',
  openGraph: {
    title: 'Contact Us | Get in Touch with Our Team',
    description: 'Contact our expert team for business solutions, support, or partnership opportunities.',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactUsPage />
}