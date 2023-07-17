'use client'

import React, { useEffect } from 'react'
import Reservation from '../components/reservation/Reservation'

import './Articles.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { articles } from '../data/articles'
import Link from 'next/link'

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 400,
    })
  }, [])

  return (
    <div className='articlesPage overflow-hidden'>
      <div className='mindfull relative'>
        <Image
          src='/mindfullness.png'
          alt='mindfullness image'
          width={1440}
          height={132}
          className='image-mindfull '
        />
        <div className='text absolute left-8 top-[50%] flex gap-4 text-[20px]  text-white'>
          <Link href='/'>Accueil</Link>
          <p>&gt;</p>
          <Link href='/articles'>Articles</Link>
        </div>
      </div>
      <div className='articlesContent px-20 '>
        <div className='title text-center mt-16 mb-12'>
          <h2 className='text-brown text-titleBanner font-semibold mb-2 '>
            Articles<span className='text-rose'>.</span>
          </h2>
          <p className='text-textSize mb-6 text-textColor'>
            Découvrez nos articles pour des contenus riches et captivants.
          </p>
        </div>
        <div className='main-content grid grid-cols-2 gap-12'>
          {articles.map((article) => {
            return (
              <Link href={`/articles/${article.id}`} key={article.id}>
                <div
                  className='article-card p-4  cursor-pointer rounded-lg'
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <div className='top mb-4'>
                    <Image
                      src={article.imageUrl}
                      alt={article.articleName}
                      width={580}
                      height={450}
                      className='rounded-[24px]'
                    />
                  </div>
                  <div className='bottom'>
                    <span className='text-[14px] text-[#2e3e5c]/80'>
                      {article.date}
                    </span>
                    <p className='mt-2 text-[24px] font-bold'>
                      {article.articleName}
                    </p>
                    <p className='para text-link  text-textColor '>
                      {article.introduction.slice(0, 200)} ...
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <Reservation />
      </div>
    </div>
  )
}

export default Services
