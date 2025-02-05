// app/page.tsx
import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import TechStack from '@/components/home/TechStack'
import WorkExperience from '@/components/home/WorkExperience'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WorkExperience />
      <TechStack />
      <FeaturedProjects />
    </main>
  )
}