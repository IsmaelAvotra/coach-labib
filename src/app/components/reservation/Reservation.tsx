import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { GiEarthAmerica } from 'react-icons/gi'
import Image from 'next/image'
import './Reservation.css'

const Reservation = () => {
  return (
    <div className='reservation mt-24 mb-20 relative  '>
      <div className='title mb-10'>
        <h2 className='text-brown text-titleBanner font-semibold mb-4 '>
          Réservez votre séance<span className='text-rose'>.</span>
        </h2>
        <p className='text-textSize mb-6 text-textColor'>
          Prêt à commencer cette aventure passionnante ? Contactez-moi dès{' '}
          <br />
          aujourd'hui et commençons à travailler ensemble pour réaliser vos
          aspirations et dépasser vos limites. Votre succès n'attend plus que
          vous.
        </p>
      </div>
      <div
        className=' formulair flex gap-16'
        data-aos='fade-right'
        data-aos-delay='500'
      >
        <div className=' flex flex-col gap-6 flex-1'>
          <input
            type='text'
            placeholder='Nom'
            className='px-4 py-2 bg-white border-[.5px] border-brown rounded-[20px] placeholder:text-link w-[90%]'
          />
          <input
            type='text'
            placeholder='Email'
            className='px-4 py-2 bg-white border-[.5px] border-brown rounded-[20px] placeholder:text-link w-[90%]'
          />
          <input
            type='text'
            placeholder='Numero Telephone'
            className='px-4 py-2 bg-white border-[.5px] border-brown rounded-[20px] placeholder:text-link w-[90%]'
          />
          <input
            type='text'
            placeholder='Comment vous nous avez trouvez?'
            className='px-4 py-2 bg-white border-[.5px] border-brown rounded-[20px] placeholder:text-link w-[90%]'
          />
          <button className='bg-rose px-6 py-3 rounded-full text-link text-white font-semibold w-[180px] '>
            Envoyer
          </button>
        </div>
        <div
          className='coordonees flex flex-col gap-8 flex-1'
          data-aos='fade-left'
          data-aos-delay='500'
        >
          <div className='flex gap-6 items-center'>
            <BsFillTelephoneFill className='text-textGras' />
            <div className='phone'>
              <p className='text-textSize font-bold uppercase tracking-wide text-brown'>
                Telephone
              </p>
              <p className='text-textSize text-rose info'>07 01 11 11 01</p>
            </div>
          </div>
          <div className='flex gap-6 items-center'>
            <AiOutlineMail className='text-textGras' />
            <div className='email'>
              <p className='text-textSize font-bold uppercase tracking-wide text-brown'>
                Email
              </p>
              <p className='text-textSize text-rose info'>
                ibtissamlabibcoaching@gmail.com
              </p>
            </div>
          </div>
          <div className='flex gap-6 items-center'>
            <GiEarthAmerica className='text-textGras' />
            <div className='adress'>
              <p className='text-textSize font-bold uppercase tracking-wide text-brown'>
                Adress
              </p>
              <p className='text-textSize text-rose info'>
                Lot n407 Bd général el kettani hay kellez, etg 2 Apt 6 Settat
              </p>
            </div>
          </div>
        </div>
        <Image
          src='/bgreserv.png'
          alt='background reservation'
          width={1500}
          height={1000}
          className='absolute top-[-250px] left-20 -z-10 w-[1560px]'
        />
      </div>
    </div>
  )
}

export default Reservation
