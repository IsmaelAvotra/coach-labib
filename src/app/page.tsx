import Banner from './components/banner/Banner'
import About from './components/about/About'
import Services from './components/services/Services'

export default function Home() {
  return (
    <div className='px-10 py-6 '>
      <Banner />
      <About />
      <Services />
    </div>
  )
}
