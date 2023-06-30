import './About.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className='about flex items-center  mt-16 '>
      <div
        className='image flex-1 relative'
        data-aos='fade-right'
        data-aos-delay='500'
      >
        <Image
          src='/about.png'
          alt='about image'
          width={460}
          height={490}
          className='rounded-[32px] shadow-image'
        />
        <div className='question  bg-white rounded-[16px] px-4 py-4 grid items-center shadow-image w-[200px] h-[220px] absolute right-32 top-[30%]'>
          <p className='text-textSize font-semibold text-brownBlack'>
            Ready to bring more freedom, ease & intentional growth into your
            business ?
          </p>
        </div>
      </div>
      <div className='text flex-1' data-aos='fade-up' data-aos-delay='500'>
        <h2 className='text-brown text-titleBanner font-bold mb-6 '>
          Coach Labib<span className='text-rose'>.</span>
        </h2>
        <p className='text-textSize mb-6 text-textColor'>
          Salut! Je suis{' '}
          <span className='text-gras font-bold text-black'>Ibtissam Labib</span>{' '}
          et mon super pouvoir est de vous aider à vivre votre vie personnelle
          et professionnelle pleinement ! En travaillant avec moi en tant que
          coach personnel et professionnel, vous bénéficierez d'un espace de
          confiance où vous pourrez vous exprimer librement, explorer vos
          pensées et vos émotions, et découvrir de nouvelles perspectives. Je
          vous aiderai à clarifier vos objectifs, à élaborer des plans d'action
          concrets et à rester responsable de votre progression.
        </p>
        <button className='bg-rose px-6 py-3 rounded-full text-link text-white font-semibold'>
          En savoir plus sur mon histoire.
        </button>
      </div>
    </div>
  )
}

export default About
