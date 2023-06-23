import Banner from './components/banner/Banner'
import About from './components/about/About'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Reservation from './components/reservation/Reservation'
import Articles from './components/articles/Articles'

export default function Home() {
  return (
    <div className='px-10 py-6 '>
      <Banner />
      <About />
      <Services />
      <Testimonials />
      <Reservation />
      <Articles />
    </div>
  )
}
