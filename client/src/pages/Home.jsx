import React from 'react'
import Hero from '../components/HeroSection'
import TechStacks from '../components/TechStacks'
import ServicesOverview from '../components/ServicesOverview'
import ProcessSection from '../components/ProcessSection'
import Industries from '../components/Industries'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'
import CtaBanner from '../components/CtaBanner'

const Home = () => {
  return (
    <div className='mt-[4%] flex flex-col gap-4'>
      <Hero />
      <ServicesOverview />
      <ProcessSection />
      <TechStacks />
      <Industries />
      <StatsSection />
      <Testimonials />
      <CtaBanner />
    </div>
  )
}

export default Home
