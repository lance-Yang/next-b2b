import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactMap from '@/components/contact/ContactMap'

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
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </main>
  )
}