import Image from 'next/image'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner flex items-center gap-8 '>
      <div className='text flex-1'>
        <h2 className='title1 text-brown text-titleBanner font-bold relative'>
          Vers une vie
        </h2>
        <h2 className='text-brown text-titleBanner font-bold mb-6'>
          épanouissante<span className='text-rose'>.</span>
        </h2>
        <p className='text-textSize mb-6 text-textColor'>
          Préparez-vous à vous engager dans un voyage passionnant de croissance
          personnelle et professionnelle. Ensemble, nous construirons les bases
          d'une vie épanouissante, en mettant l'accent sur votre bien-être,
          votre succès et votre bonheur global.
        </p>
        <button className='bg-rose px-6 py-2 rounded-full text-link text-white font-semibold'>
          Réserver
        </button>
      </div>
      <div className='image flex-1'>
        <Image src='/banner.png' alt='image banner' width={680} height={620} />
      </div>
    </div>
  )
}

export default Banner
