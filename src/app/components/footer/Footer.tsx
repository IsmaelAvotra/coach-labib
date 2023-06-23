import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
    <div className='bg-[#FBDBCB] p-8 flex gap-8'>
      <div className='left flex-1'>
        <Image
          src='/logo.png'
          alt='coach labib logo'
          width={250}
          height={50}
          className='mb-4'
        />
        <p className='text-[18px] mb-8'>
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
          <Link href='/'>Coach Labib </Link>
          <Link href='/'>Services</Link>
          <Link href='/'>Réservation</Link>
          <Link href='/'>Contact</Link>
          <Link href='/'>Articles</Link>
        </div>
        <div className='service  flex flex-1 flex-col gap-2 text-link text-brown'>
          <p className='text-[18px] font-bold mb-4'>Service</p>
          <Link href='/'>Coaching Personnel</Link>
          <Link href='/'>Coaching Professionnel</Link>
          <Link href='/'>Coaching Scolaire</Link>
          <Link href='/'>Art Thérapie</Link>
        </div>
        <div className='contact  flex flex-1 flex-col gap-2 text-brown'>
          <p className='text-[18px] font-bold mb-4'>Contact</p>
          <div className='phone flex items-center gap-2'>
            <FaPhoneAlt className='text-[20px] text-brownBlack' />
            <p>07 01 11 11 01</p>
          </div>
          <div className='email flex items-center gap-2'>
            <AiOutlineMail className='text-[20px] text-brownBlack' />
            <p>ibtissamlabibcoaching@gmail.com</p>
          </div>
          <div className='location flex items-center gap-2'>
            <MdOutlineLocationOn className='text-[40px] text-brownBlack' />
            <p>Lot n407 Bd général et kettani hay kellez, etg 2 Apt 6 Settat</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
