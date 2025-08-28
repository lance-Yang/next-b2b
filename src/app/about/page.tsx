import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutValues from '@/components/about/AboutValues'
import AboutTeam from '@/components/about/AboutTeam'
import AboutStats from '@/components/about/AboutStats'

export const metadata = {
  title: 'About Us | Our Story & Mission',
  description: 'Learn about our company story, mission, values, and the passionate team dedicated to transforming business operations through innovative solutions.',
  keywords: 'about us, company story, mission, values, team, leadership',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
    </>
  )
}