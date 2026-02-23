import React from 'react'
import Header from './components/Header'
import { Button } from '@/components/ui/button'
import HeroSection from './components/HeroSection'

const HomePage = () => {
  return (
    <div>
   <Header/>
   <div>
    <HeroSection/>
   </div>
    </div>
  )
}

export default HomePage