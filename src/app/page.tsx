'use client'

import Banner from './components/banner/Banner'
import About from './components/about/About'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Reservation from './components/reservation/Reservation'
import Articles from './components/articles/Articles'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 400,
    })
  }, [])
  return (
    <div className='home px-10 py-6  overflow-hidden  '>
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Reservation />
      <Articles />
    </div>
  )
}
