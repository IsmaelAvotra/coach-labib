import Image from 'next/image'
import './Reservation.css'

const Reservation = () => {
  return (
    <div className='reservation mt-24 mb-20 relative  ' id='reservation'>
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
            className='styled-input px-4 py-2 bg-white   rounded-[20px] placeholder:text-link w-[90%]'
          />
          <input
            type='text'
            placeholder='Email'
            className='px-4 py-2 bg-white   rounded-[20px] placeholder:text-link w-[90%]'
          />
          <input
            type='text'
            placeholder='Numero Telephone'
            className='px-4 py-2 bg-white  rounded-[20px] placeholder:text-link w-[90%]'
          />
          <input
            type='text'
            placeholder='Comment vous nous avez trouvez?'
            className='px-4 py-2 bg-white  rounded-[20px] placeholder:text-link w-[90%]'
          />
          <button className='bg-rose px-6 py-3 rounded-full text-link text-white font-semibold w-[180px] '>
            Envoyer
          </button>
        </div>
        <div
          className='coordonees flex flex-col gap-8 flex-1'
          data-aos='fade-left'
          data-aos-delay='500'
          id='contact'
        >
          <div className='flex gap-6 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='36'
              height='37'
              viewBox='0 0 36 37'
              fill='none'
            >
              <path
                d='M28.332 23.645L21.2627 25.0148C16.4876 22.6181 13.538 19.865 11.8214 15.5735L13.1431 8.48386L10.6448 1.84082H4.20596C2.27041 1.84082 0.746235 3.44031 1.03531 5.35413C1.75698 10.132 3.88483 18.7947 10.1048 25.0148C16.6368 31.5468 26.0446 34.3812 31.2224 35.5078C33.2218 35.943 34.9954 34.3831 34.9954 32.3369V26.1841L28.332 23.645Z'
                stroke='black'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <div className='phone'>
              <p className='text-textSize font-bold uppercase tracking-wide text-brown'>
                Telephone
              </p>
              <p className='text-textSize text-rose info'>07 01 11 11 01</p>
            </div>
          </div>
          <div className='flex gap-6 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='35'
              height='25'
              viewBox='0 0 35 25'
              fill='none'
            >
              <path
                d='M9.08362 7.68774L17.1672 13.3463L25.2508 7.68774'
                stroke='black'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M1 20.6214V4.45414C1 2.66836 2.44766 1.2207 4.23344 1.2207H30.101C31.8868 1.2207 33.3344 2.66836 33.3344 4.45414V20.6214C33.3344 22.4072 31.8868 23.8548 30.101 23.8548H4.23344C2.44766 23.8548 1 22.4072 1 20.6214Z'
                stroke='black'
                stroke-width='2'
              />
            </svg>
            <div className='email'>
              <p className='text-textSize font-bold uppercase tracking-wide text-brown'>
                Email
              </p>
              <p className='text-textSize text-rose info'>
                labibcoach@gmail.com
              </p>
            </div>
          </div>
          <div className='flex gap-6 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='33'
              height='34'
              viewBox='0 0 33 34'
              fill='none'
            >
              <path
                d='M16.4643 32.1234C25.0049 32.1234 31.9286 25.1997 31.9286 16.6591C31.9286 8.11842 25.0049 1.19482 16.4643 1.19482C7.92359 1.19482 1 8.11842 1 16.6591C1 25.1997 7.92359 32.1234 16.4643 32.1234Z'
                stroke='#443535'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M1.77319 17.4324L10.2786 20.5252L8.73212 25.9377L10.2786 30.577'
                stroke='#443535'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M24.1964 29.8038L23.4232 25.9377L19.5571 24.3913V18.9788L24.1964 17.4324L31.1553 18.2056'
                stroke='#443535'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M27.2892 6.60742L26.516 8.92706L21.1035 9.70028V14.3396L24.9696 12.7931H28.0624L31.1553 14.3396'
                stroke='#443535'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M1.77319 14.3397L5.63926 11.2468L9.50534 10.4736L12.5982 5.83431L11.0518 2.74146'
                stroke='#443535'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
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
          className='absolute top-[-400px] left-16 -z-10 w-[1560px]'
        />
      </div>
    </div>
  )
}

export default Reservation
