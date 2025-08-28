import { HeroSection } from '@/components/home/HeroSection'
import { ProductCategoriesSection } from '@/components/home/ProductCategoriesSection'
import { PopularProductsSection } from '@/components/home/PopularProductsSection'
import { AboutUsSection } from '@/components/home/AboutUsSection'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductCategoriesSection />
      <PopularProductsSection />
      <AboutUsSection />
      <CTASection />
    </>
  )
}
