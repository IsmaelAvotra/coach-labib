'use client'

import React, { useEffect } from 'react'
import Reservation from '../components/reservation/Reservation'

import './Services.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { servicesPages } from '../data/services_pages'
import Image from 'next/image'
import Link from 'next/link'

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 400,
    })
  }, [])

  return (
    <div className='servicesPage overflow-hidden   '>
      <div className='mindfull relative'>
        <Image
          src='/mindfullness.png'
          alt='mindfullness image'
          width={1440}
          height={132}
          className='image-mindfull'
        />
        <div className='text absolute left-8 top-[50%] flex gap-4 text-[20px]  text-white'>
          <Link href='/'>Accueil</Link>
          <p>&gt;</p>
          <Link href='/services'>Services</Link>
        </div>
      </div>
      <div className='services-content px-20'>
        <div className='title text-center mt-16 mb-12'>
          <h2 className='text-brown text-titleBanner font-semibold mb-2 '>
            Services<span className='text-rose'>.</span>
          </h2>
          <p className='text-textSize mb-6 text-textColor'>
            Découvrez nos services avec coach labib.
          </p>
        </div>
        <div className='main-services flex flex-col gap-16'>
          {servicesPages.map((service, indx) => {
            return (
              <div
                id={service.idUrl}
                key={indx}
                className={` service-desc flex items-center gap-16 ${
                  indx % 2 == 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div
                  className='image-service flex-1 bg-white  py-12 px-8 rounded-[16px] '
                  data-aos='fade-right'
                  data-aos-delay='400'
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={250}
                    height={170}
                    className='w-[90%]'
                  />
                </div>
                <div
                  className='text-services flex-[2]'
                  data-aos='fade-left'
                  data-aos-delay='400'
                >
                  <h3
                    className={`text-textGras  font-semibold mb-2 ${
                      indx % 2 == 0 ? 'text-rose' : 'text-[#83584f]'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className='descr text-[18px] text-textColor '>
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <Reservation />
      </div>
    </div>
  )
}

export default Services
