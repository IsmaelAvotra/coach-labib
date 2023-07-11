import Image from 'next/image'
import Link from 'next/link'
import './Footer.css'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa'

import { AiOutlineMail } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-[#FBDBCB] p-8 flex gap-8 footer'>
      <div className='left flex-1'>
        <Image
          src='/logo.png'
          alt='coach labib logo'
          width={250}
          height={50}
          className='mb-4'
        />
        <p className='foot-text text-brownBlack text-[18px] mb-8'>
          Vous pouvez aussi me suivre sur Instagram pour être au courant de
          toutes les nouveautés !
        </p>
        <div className='socials flex gap-6 text-white'>
          <FaFacebookF className='text-[24px]' />
          <FaTwitter className='text-[24px]' />
          <FaLinkedin className='text-[24px]' />
          <FaInstagram className='text-[24px]' />
        </div>
      </div>
      <div className='right flex-1 flex justify-between '>
        <div className='pages flex flex-1 flex-col gap-2 text-link text-brown'>
          <p className='text-[18px] font-bold mb-4'>Pages</p>
          <Link href='/'>Accueil</Link>
          <Link href='/#about'>Coach Labib </Link>
          <Link href='/services'>Services</Link>
          <Link href='/#reservation'>Réservation</Link>
          <Link href='/#reservation'>Contact</Link>
          <Link href='/articles'>Articles</Link>
        </div>
        <div className='service  flex flex-1 flex-col gap-2 text-link text-brown'>
          <p className='text-[18px] font-bold mb-4'>Service</p>
          <Link href='/services/#service1'>Coaching Personnel</Link>
          <Link href='/services/#service2'>Coaching Professionnel</Link>
          <Link href='/services/#service3'>Coaching Scolaire</Link>
          <Link href='/services/#service4'>Art Thérapie</Link>
        </div>
        <div className='contact   flex flex-[1.5] flex-col  gap-2 text-brown'>
          <p className='text-[18px] font-bold mb-4 contct'>Contact</p>
          <div className='phone flex items-start  gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M3.24375 5.39531L5.73984 2.90156C5.91592 2.72471 6.1252 2.58439 6.35567 2.48867C6.58614 2.39294 6.83325 2.34369 7.08281 2.34375C7.5914 2.34375 8.06953 2.54297 8.42812 2.90156L11.1141 5.5875C11.2909 5.76358 11.4312 5.97286 11.527 6.20333C11.6227 6.4338 11.6719 6.68091 11.6719 6.93047C11.6719 7.43906 11.4727 7.91719 11.1141 8.27578L9.15 10.2398C9.60974 11.2532 10.2489 12.175 11.0367 12.9609C11.8225 13.7506 12.7443 14.3922 13.7578 14.8547L15.7219 12.8906C15.898 12.7138 16.1072 12.5735 16.3377 12.4777C16.5682 12.382 16.8153 12.3328 17.0648 12.3328C17.5734 12.3328 18.0516 12.532 18.4102 12.8906L21.0984 15.5742C21.2755 15.7506 21.4159 15.9603 21.5117 16.1912C21.6074 16.4221 21.6565 16.6696 21.6562 16.9195C21.6562 17.4281 21.457 17.9062 21.0984 18.2648L18.607 20.7562C18.0352 21.3305 17.2453 21.6562 16.4344 21.6562C16.2633 21.6562 16.0992 21.6422 15.9375 21.6141C12.7781 21.0938 9.64453 19.4133 7.11562 16.8867C4.58906 14.3625 2.91094 11.2312 2.38359 8.0625C2.22422 7.09453 2.54531 6.09844 3.24375 5.39531Z'
                fill='#83584F'
              />
            </svg>
            <p>07 01 11 11 01</p>
          </div>
          <div className='email flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M4.64418 4.80005H20.5442C22.0442 4.80005 22.8002 5.50805 22.8002 6.94805V17.052C22.8002 18.48 22.0442 19.2 20.5442 19.2H4.64418C3.14418 19.2 2.38818 18.48 2.38818 17.052V6.94805C2.38818 5.50805 3.14418 4.80005 4.64418 4.80005ZM12.5882 15.12L20.6762 8.48405C20.9642 8.24405 21.1922 7.69205 20.8322 7.20005C20.4842 6.70805 19.8482 6.69605 19.4282 6.99605L12.5882 11.628L5.76018 6.99605C5.34018 6.69605 4.70418 6.70805 4.35618 7.20005C3.99618 7.69205 4.22418 8.24405 4.51218 8.48405L12.5882 15.12Z'
                fill='#83584F'
              />
            </svg>
            <p>labibcoach@gmail.com</p>
          </div>
          <div className='location flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='19'
              viewBox='0 0 14 19'
              fill='none'
            >
              <g clip-path='url(#clip0_77_255)'>
                <path
                  d='M6.13594 18.525C4.23281 16.1426 0 10.3684 0 7.125C0 3.18992 3.13396 0 7 0C10.8646 0 14 3.18992 14 7.125C14 10.3684 9.73438 16.1426 7.86406 18.525C7.41562 19.0928 6.58437 19.0928 6.13594 18.525ZM7 9.5C8.28698 9.5 9.33333 8.43496 9.33333 7.125C9.33333 5.81504 8.28698 4.75 7 4.75C5.71302 4.75 4.66667 5.81504 4.66667 7.125C4.66667 8.43496 5.71302 9.5 7 9.5Z'
                  fill='#83584F'
                />
              </g>
              <defs>
                <clipPath id='clip0_77_255'>
                  <rect width='14' height='19' fill='white' />
                </clipPath>
              </defs>
            </svg>
            <p>Lot n407 Bd général et kettani hay kellez, etg 2 Apt 6 Settat</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
