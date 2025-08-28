import ProductHero from '@/components/products/ProductHero'
import ProductFeatures from '@/components/products/ProductFeatures'
import ProductShowcase from '@/components/products/ProductShowcase'
import ProductPricing from '@/components/products/ProductPricing'
import ProductTestimonials from '@/components/products/ProductTestimonials'

export const metadata = {
  title: 'Products & Services | Professional B2B Solutions',
  description: 'Discover our comprehensive suite of business solutions designed to streamline operations, enhance productivity, and drive growth for enterprises.',
  keywords: 'business solutions, enterprise software, productivity tools, B2B services',
}

export default function ProductsPage() {
  return (
    <>
      <ProductHero />
      <ProductFeatures />
      <ProductShowcase />
      <ProductPricing />
      <ProductTestimonials />
    </>
  )
}