import { links } from '@/app/data/links'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar px-10 py-5 flex items-center justify-between'>
      <div className='logo'>
        <Image src='/logo.png' alt='coach labib logo' width={250} height={50} />
      </div>
      <div className='links'>
        <nav>
          <ul className='flex items-center gap-8'>
            {links.map((item, index) => {
              return (
                <Link
                  href={item.to}
                  key={index}
                  className='text-link text-brown'
                >
                  {item.link}
                </Link>
              )
            })}
            <button className='bg-rose px-6 py-2 rounded-full text-link text-white font-semibold'>
              Réservation
            </button>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
